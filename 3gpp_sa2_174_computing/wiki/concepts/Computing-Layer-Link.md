---
title: "Computing-Layer-Link"
type: concept
tags: [6G, 计算层, 链路, 华为, 任务级调度, 通算协同]
sources: [raw/09-archive/S2-2602129  Sol update for computing.md]
last_updated: 2026-04-21
---

## 定义

**Computing Layer Link（计算层链路）** 是 6G 算力架构中 UE 与 CSPF（Computing Service Plane Function）之间的逻辑链路，用于在**用户面**交换计算任务级别的动态调度信息（in-band），实现计算与通信的实时协同。

## 核心特征

- **任务级粒度**: 不同于传统 IP 流级别的 QoS，Computing Layer Link 以单个**计算任务（computing task）**为基本单位传递调度信息。
- **带内信令**: 调度信息封装在 Computing Layer 头部，随数据包一起传输，无需额外的控制面交互。
- **双向协同**: 上行方向传递任务标识与时延监测信息；下行方向传递动态 QoS 需求。

## 建立流程

1. **CCF 触发**: 消费者请求或 CCF 内部逻辑触发链路建立。
2. **CSPF 配置**: CCF 向 CSPF 发送 UE 地址、RTT 要求等规则。
3. **UE 通知**: CCF 向 UE 下发所选 CSPF 的地址。
4. **链路建立**: UE 与 CSPF 建立 Computing Layer Link。
5. **结果上报**: CSPF 向 CCF 报告链路建立结果。

## Computing Layer 头部字段

| 字段 | 说明 |
|------|------|
| Computing task ID | 任务唯一标识 |
| Computing task type | 任务类型 |
| Sequence / Total number | 任务内包序号与总数 |
| Priority | 任务优先级 |
| Delay monitoring info | 发送时间戳（时延监测） |
| Scheduling Requirement | 吞吐量、TTFT、TPOT 等资源需求 |

## 关联连接

- [[CSPF]] — Computing Layer Link 的对端网元
- [[CCF]] — 负责触发和管理链路建立
- [[Computing-Task]] — Computing Layer 承载的调度对象
- [[摘要-s2-2602129-cspf-computing-layer]] — 华为方案来源
