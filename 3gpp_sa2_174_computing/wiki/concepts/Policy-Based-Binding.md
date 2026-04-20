---
title: "Policy-Based-Binding"
type: concept
tags: [6G, 协作机制, 业务绑定]
sources: [raw/01-articles/S2-2602040.md]
last_updated: 2026-04-19
---

## 定义
基于策略的绑定（Policy-based Binding）是指在 6G 核心网中，通过策略控制平面（如 **[[PCF]]**）将独立的"计算会话 (Computing Session)"与终端已建立的"PDU 会话 (PDU Session)"进行逻辑关联的过程。

## 关键机制
- **生命周期一致性**: 确保当 PDU 会话发生切换或释放时，关联的计算资源也能同步进行迁移或回收。
- **流量定向 (Traffic Steering)**: 通过绑定，PCF 可以指示 UPF 将特定的 PDU 会话流量定向至选定的计算站点地址。
- **QoS 同步**: 实现通信 QoS 规则与计算执行规则的联合部署，确保端到端性能匹配。

## 关联连接
- [[PCF]] — 绑定执行者
- [[Computing-Session]] — 绑定对象 A
- [[Variant-H]] — 核心应用方案
- [[摘要-s2-2602040-variant-h-ccc-abstraction]] — 来源
