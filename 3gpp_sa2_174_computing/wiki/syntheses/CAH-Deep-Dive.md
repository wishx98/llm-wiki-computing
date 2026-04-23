---
title: "Google CAH（Context-Aware Header）深度解析"
type: synthesis
tags: [6G, CAH, Google, Predictive-QoS, 加密感知, 任务级调度]
sources: [raw/09-archive/S2-2602003-wasS2-2600605-23.800-01-KI#5-QoS-v1.md, wiki/concepts/CAH.md, wiki/sources/摘要-s2-2602003-cah-predictive-qos.md]
last_updated: 2026-04-21
---

# Google CAH（Context-Aware Header）深度解析

## 核心定义

**CAH（Context-Aware Header，上下文感知包头）** 是 Google 在 S2-2602003 方案（KI#5 Solution: E2E Context-Aware System for Predictive QoS）中提出的核心技术，旨在解决 6G 业务在**端到端加密环境下的"调度盲区"与"预测性缺口"**问题。

## 背景问题

当前 5G QoS 框架依赖静态 QFI（QoS Flow Identifier），难以应对生成式 AI、XR 等高度不对称的新型流量模式：

- **加密盲区（Encryption Blindness）**：TLS/QUIC 加密隐藏了应用意图，RAN 无法区分同一个加密隧道内是低优先级的后台包还是延迟敏感的 AI 提示词或游戏输入。
- **预测性缺口（Predictive Gap）**：网络只能在流量到达缓冲区后被动反应。对于生成式 AI，当上行提示词提交后，网络对即将到来的下行响应（文本细流 vs 图像爆发）完全"失明"，而服务器仍在处理中。

## CAH 定义与定位

CAH 是一个**16 位（2 字节）的轻量级协议垫层（shim layer）**，严格插入在**用户 IP 层与 3GPP SDAP 层之间**。

> "A lightweight 16-bit adaptation layer inserted between the User IP layer and the 3GPP SDAP layer. It provides a standardized signaling mechanism that remains visible to the network after PDCP decryption without compromising end-to-end payload privacy."

其关键设计原则是：

- **头行确定性（Head-of-Line Determinism）**：位于 SDAP SDU 的最前端（紧接 SDAP 头之后），PDCP 解密后即明文可见，支持 gNB ASIC/FPGA 进行 **O(1) 零搜索硬件解析**，满足 0.5ms TTI 的严格时序要求。
- **上行到下行预测（Uplink-to-Downlink Prediction）**：上行请求中的 **Workload Tag** 作为"下行预测器"，在服务器开始传输前就信号化预期的响应模式。
- **双重节点可见性（Dual-Node Visibility）**：
  - **RAN (gNB)**：非破坏性读取 CAH，优化实时调度（如延长 C-DRX 等待 AI 文本流，或预分配大 grant 应对图像爆发）。
  - **Core (UPF)**：提取元数据用于智能路由（如 Edge/MEC 卸载），并在报文离开 6G 系统前**剥离**这 2 字节，确保对外表现为标准 IP 包，避免被传统互联网中间盒丢弃。

## CAH 结构详解（16 位映射）

| 字段 | 位宽 | 说明 | 示例 |
|------|------|------|------|
| **Service Category** | Bits 15-13 (3-bit) | 标识应用大类 | `001`=GenAI, `010`=XR/Gaming, `011`=V2X |
| **Workload Tag / Downlink Predictor** | Bits 12-8 (5-bit) | 预测下行响应的流量模式 | `00001`=Text Stream（细流）, `00010`=Image Gen（单包大爆发） |
| **Context Quantifier** | Bits 7-0 (8-bit) | 上下文相关的量化参数 | 游戏场景=时延预算（如 10ms）；图像生成=预估量级（帮助 gNB 确定 grant 大小） |

## 端到端传输流程

CAH 的完整生命周期如下：

1. **UE 生成数据**：UE 应用生成加密数据包（如 GenAI 提示词）。
2. **UE 插入 CAH**：UE（通过 OS API 或 Modem 启发式）在 IP 与 SDAP 层之间插入 16 位 CAH，包含 Service Category 和 Workload Tag。
3. **UE 上行传输**：UE 发送加密的无线 PDU，CAH 垫层以明文形式包含其中。
4. **RAN 检查 CAH**：gNB PDCP 解密后，在固定偏移处非破坏性读取 CAH。识别 Workload Tag（如"Image Generation"预示大爆发），主动调整调度（预分配大下行 grant 或延长 C-DRX）。
5. **gNB 通过 GTP-U 转发至 UPF**：保持 CAH 完整，供核心网侧使用。
6. **UPF 读取 CAH 并选择路径**：UPF 解析 CAH，基于 Service Category 执行智能路由决策（如选择低时延 Edge/MEC 路径或特定网络切片）。
7. **UPF 剥离 CAH**：移除 2 字节 CAH，恢复为标准 IP 包。
8. **UPF 转发标准 IP 包**：通过 N6 接口发送至应用服务器，确保信令严格内部于 6G 系统，实现"Middlebox Safe"。

## 使能机制与安全性

- **能力协商**：在 PDU Session Establishment 期间通过 **ePCO** 协商 CAH 支持，确保仅授权 UE 和支持网络使用。
- **RRC 激活**：gNB 通过 **RRCReconfiguration** 配置 UE 在特定 DRB 上启用 CAH，并配置解析偏移量。
- **移动性回退（Mobility Fallback）**：若 UE 切换至不支持 CAH 的 legacy gNB，立即进入 **Legacy State**，抑制 CAH 插入，防止在不支持节点处造成包损坏。

## 对网元的影响

| 网元 | 影响 |
|------|------|
| **UE** | 需具备在 IP 与 SDAP 层之间基于应用提示或 Modem 启发式插入 shim header 的能力 |
| **gNB/RAN** | 需硬件/固件升级，以在 SDAP SDU 的固定 2 字节偏移处非破坏性解析 CAH |
| **UPF** | 需具备从用户面载荷中提取并剥离 CAH 的能力 |
| **SMF/PCF** | 增强以基于用户订阅档案和应用需求授权 CAH 使用 |

## 架构意义

CAH 的本质是**在加密隧道内部建立一条"业务意图信令通道"**。它在不破坏端到端隐私（不解析应用载荷）的前提下，让网络"看见"足够的上下文信息来做出预测性调度决策。这使得 6G 网络能够从"被动响应"进化为"主动预测"，为生成式 AI、XR 等新兴业务提供真正的差异化 QoS 保障。
