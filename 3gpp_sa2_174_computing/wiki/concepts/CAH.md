---
title: "CAH"
type: concept
tags: [6G, 包头结构, 业务感知, Google, Predictive-QoS, 加密感知]
sources: [raw/09-archive/S2-2602003-wasS2-2600605-23.800-01-KI#5-QoS-v1.md]
last_updated: 2026-04-21
---

## 定义

**上下文感知包头（Context-Aware Header, CAH）** 是一个 16 位（2 字节）的轻量级协议垫层（shim layer），插入在用户 IP 层与 3GPP SDAP 层之间，用于在加密隧道内提供业务意图信令，实现**预测性 QoS（Predictive QoS）**。

## 设计目标

- **解决加密盲区（Encryption Blindness）**：TLS/QUIC 加密隐藏了应用意图，RAN 无法区分低优先级后台包与延迟敏感的 AI 提示词或游戏输入。
- **填补预测性缺口（Predictive Gap）**：网络只能在流量到达后被动反应。CAH 通过上行请求中的 **Workload Tag** 在服务器开始传输前预测下行响应模式（如文本细流 vs 图像爆发）。

## 结构组成（16-bit 映射）

| 字段 | 位宽 | 说明 | 示例 |
|------|------|------|------|
| **Service Category** | Bits 15-13 (3-bit) | 标识应用大类 | `001`=GenAI, `010`=XR/Gaming, `011`=V2X |
| **Workload Tag / Downlink Predictor** | Bits 12-8 (5-bit) | 预测下行响应的流量模式 | `00001`=Text Stream, `00010`=Image Gen |
| **Context Quantifier** | Bits 7-0 (8-bit) | 上下文相关的量化参数 | 游戏=时延预算(10ms)；图像生成=预估量级 |

## 关键设计原则

- **头行确定性（Head-of-Line Determinism）**：位于 SDAP SDU 最前端（紧接 SDAP 头），PDCP 解密后即明文可见，支持 gNB ASIC/FPGA 进行 **O(1) 零搜索硬件解析**，满足 0.5ms TTI 时序要求。
- **双重节点可见性（Dual-Node Visibility）**：
  - **RAN (gNB)**：非破坏性读取，优化实时调度（延长 C-DRX、预分配 grant）。
  - **Core (UPF)**：提取元数据用于智能路由（Edge/MEC 卸载），并在 N6 接口前**剥离** CAH，确保 Middlebox Safe。
- **上行到下行预测（Uplink-to-Downlink Prediction）**：Workload Tag 作为"下行预测器"，在服务器传输前信号化预期响应模式。

## 端到端传输流程

1. **UE 插入 CAH**：在 IP 与 SDAP 层之间插入 16 位 CAH（OS API 或 Modem 启发式）。
2. **RAN 检查**：gNB PDCP 解密后，在固定偏移处非破坏性读取，主动调整调度。
3. **UPF 路由**：解析 CAH，执行智能路由决策（如 Edge/MEC 路径）。
4. **UPF 剥离**：移除 2 字节 CAH，恢复标准 IP 包，通过 N6 转发。

## 使能机制

- **能力协商**：PDU Session Establishment 期间通过 **ePCO** 协商。
- **RRC 激活**：gNB 通过 **RRCReconfiguration** 配置 UE 在特定 DRB 上启用。
- **移动性回退（Mobility Fallback）**：切换至 legacy gNB 时进入 **Legacy State**，自动抑制 CAH 插入。

## 技术优势

- **摆脱加密盲区**：位于 PDCP/SDAP 载荷起始位置，解密后可见，无需 DPI。
- **硬件友好**：固定偏移设计，支持 gNB ASIC/FPGA 进行 O(1) 复杂度的线速解析。
- **中间盒安全**：由 UPF 在 N6 接口前剥离，对外表现为标准 IP 包，避免被传统互联网设备丢弃。

## 对网元的影响

| 网元 | 影响 |
|------|------|
| **UE** | 需具备在 IP 与 SDAP 层之间插入 shim header 的能力 |
| **gNB/RAN** | 需硬件/固件升级，以在固定 2 字节偏移处非破坏性解析 CAH |
| **UPF** | 需具备从用户面载荷中提取并剥离 CAH 的能力 |
| **SMF/PCF** | 增强以基于用户订阅档案授权 CAH 使用 |

## 关联连接

- [[Predictive-QoS]] — 核心应用目标
- [[Encryption-Blindness]] — 解决的核心问题
- [[Dual-Visibility]] — 架构交互模式
- [[Workload-Tag]] — CAH 中的预测因子
- [[6G-UPF]] — 负责剥离与路由的网元
- [[gNB]] — 负责硬件级解析的网元
- [[摘要-s2-2602003-cah-predictive-qos]] — 原始方案来源
- [[CAH-Deep-Dive]] — 深度解析综合页面
