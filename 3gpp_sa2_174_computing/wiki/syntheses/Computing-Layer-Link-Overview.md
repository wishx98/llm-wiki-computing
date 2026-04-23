---
title: "华为提出的 Computing Layer Link 详细介绍"
type: synthesis
tags: [6G, Computing-Layer-Link, 华为, 算网协同, 任务级调度]
sources: [raw/09-archive/S2-2602129  Sol update for computing.md]
last_updated: 2026-04-21
---

# 华为提出的 Computing Layer Link 详细介绍

## 核心定义

**Computing Layer Link（计算层链路）** 是华为在 S2-2602129 方案中提出的核心机制，用于在 **UE 与 CSPF（Computing Service Plane Function）** 之间建立一条专用逻辑链路，以交换**任务级（task-level）**的动态计算服务信息，实现通信与计算的深度协同。

## 设计背景与核心思想

华为方案的核心原则是：**控制面负责请求与选择，用户面负责实时协同**。UE/AF 通过控制面向 CCF 请求计算服务，CCF 选择合适的 CSPF 后，在 UE 与 CSPF 之间建立 Computing Layer Link。这条链路承载着计算任务的实时调度信息，使得 CSPF 能够基于任务特征进行负载均衡，同时反向影响底层通信 QoS，实现"算网联动"。

> "A computing layer link between UE and the (front end of) computing site will be established to transfer the computing task related on-path information."
> "The coordination between the computing scheduling and communication QoS on computing task level is via user plane."

## 建立流程

Computing Layer Link 的建立由 CCF 主导，流程如下：

1. **触发**：CCF 收到消费者请求或基于内部逻辑（如 UE 移动性）决定建立链路。
2. **CSPF 配置**：CCF 通过 computing control request 向 CSPF 发送所需信息（如 UE 地址、RTT 要求等规则）。
3. **UE 通知**：CCF 向 UE 发送所选 CSPF 的地址信息。
4. **链路建立**：UE 与 CSPF 直接建立计算层链路。
5. **结果上报**：CSPF 向 CCF 报告链路建立结果。

> **例外情况**：如果计算资源仅用于下行流量（DL traffic），则不需要建立 Computing Layer Link，此时 UPF 直接将 DL 流量转发给 CSPF 处理后再回传 UE 即可。

## 协议栈设计

华为在方案中定义了 UE → 6G RAN → 6G UP → CSPF 之间的完整协议栈，其中与 Computing Layer Link 相关的有两层：

| 层级 | 作用 | 说明 |
|------|------|------|
| **Session Layer** | 提供 UE 到 CSPF 的承载通道 | UE↔6G UP 基于 PDU Session；6G UP↔CSPF 基于 GTP-U Tunnel（与 PDU Session 1:1 映射）。GTP-U 被增强以支持动态 QoS 调整数据。 |
| **Computing Layer** | 任务级计算调度与协同 | 位于 Session Layer 之上，在 UE 和 CSPF 之间传递任务标识、时延监测、调度需求等带内信息（in-band）。 |

## Computing Layer 头部信息

Computing Layer 的核心价值在于将**计算任务特征**封装为带内信令，头部包含以下字段：

- **Computing task ID**：任务唯一标识
- **Computing task type**：任务类型
- **Sequence number / Total number**：任务内数据包序号/总数
- **Priority of the computing task**：任务优先级
- **Delay monitoring information**：每个计算任务的发送时间（用于时延监测）
- **Scheduling Requirement**：任务级调度需求，包括：
  - 任务吞吐量（Throughput）
  - 特定资源类型的专项需求，例如 MaaS（Model as a Service）场景下的 **TTFT（Time To First Token）** 和 **TPOT（Time Per Output Token）**

## 动态协调机制

Computing Layer Link 建立后，支持两种动态调整：

### 上行（UL）动态计算服务调整
UE 在 Computing Layer 头部标记 computing task ID 和首包发送时间。CSPF 根据 CCF 配置的规则（如 RTT 要求），利用这些信息将任务路由到合适的计算站点实例，或影响计算站点内部的调度决策。

### 下行（DL）动态时延调整
CSPF 基于计算时延、任务发送时间以及 RTT 要求（也可能考虑 6G UP 与 CSPF 之间的时延），为每个计算任务生成动态 QoS 需求。该需求被标记在 DL 数据包的 GTP-U 头部中，6G UP 将其转换为动态 QoS 参数并转发给 6G RAN，RAN 据此进行下行包调度。

## 架构意义

Computing Layer Link 的本质是**在 3GPP 用户面之上叠加了一层"计算感知"的语义通道**。它使得：
- 网络侧（CSPF）能够"看见"计算任务的粒度，而非仅看到 IP 流；
- 计算调度信息可以实时反馈到通信 QoS 调整，实现真正的通算协同；
- 为 IaaS、PaaS、SaaS、MaaS 等多种计算资源类型提供了统一的任务级协同框架。
