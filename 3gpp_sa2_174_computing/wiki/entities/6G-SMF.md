---
title: "6G-SMF"
type: entity
tags: [6G, 网元, 会话管理, 通算协同]
sources: [raw/01-articles/S2-2602301_[KI#22, Solution#22.2 Variant #b update] Computing and communication coordination with CCCE.md, raw/01-articles/S2-2602430_was_0479-[KI22, Solution 22.3, update] Coordination of communication and computing.md]
last_updated: 2026-04-20
---

## 定义
6G 会话管理功能（6G Session Management Function, 6G-SMF）是在 5G SMF 基础上演进的、具备通算意识的会话管理实体。

## 6G 增强职能
- **算力会话处理**: 
    - 识别 UE 发出的“算力会话 (Computing Session)”标识。
    - 在会话建立阶段执行 **CCCE (通算协调实体) 选择**，而非传统的 PCF 选择。
- **时延测量与感知 (Sol#22.3)**: 
    - 管理并触发 UPF 对 N3、N9 甚至 **N6 接口**（向算力站点）的端到端 QoS 监控。
    - 在没有活跃会话时，主动查询候选 UPF 获取 N6 接口的时延信息。
- **自适应 QoS 映射**: 
    - 将 AF 要求的 [[Aggregated-Latency]] 或 **[[N6-QoS-Class]]** 映射为用户平面的 **DSCP (ToS)** 优先级。
    - 根据当前的 N3/N9 实测时延，动态调整 N6 段的 QoS 等级，以保证总时延预算。
- **DNAI 选路决策**: 基于 AF 提供的“算力站点 IP - 算力延迟”元组，选择最优的 DNAI 和锚点 UPF。

## 关联连接
- [[摘要-s2-2602430-af-coordination-update]] — 来源 (Nokia 方案)
- [[摘要-s2-2602301-ccce-variant-b-update]] — 来源 (NTT DOCOMO 方案)
- [[CCCE]] — 策略决策方
- [[Aggregated-Latency]] — 决策依据指标
- [[N6-QoS-Class]] — 映射输入
