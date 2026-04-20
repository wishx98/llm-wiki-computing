---
title: "E2E-Delay-Optimization"
type: concept
tags: [6G, KPI, 端到端时延]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md]
last_updated: 2026-04-19
---

## 定义
端到端时延优化（E2E Delay Optimization）是 6G 计算服务的核心性能指标（KPI），即"通信时延 + 计算处理时延"的总和。

## 关键算法逻辑
- **时延拆解**: 核心网将总时延目标拆分为通信侧和计算侧的具体配额。
- **动态补偿**: 
    - 如果 $T_{link} \uparrow$，则通过扩展资源使 $T_{comp} \downarrow$。
    - 如果 $T_{comp} \uparrow$（如负载突然波动），则由 SMF 请求网络提速使 $T_{link} \downarrow$。
- **联合保障**: 这种"拆东墙补西墙"的动态平衡能力是 6G 通算协同优于传统边缘计算（两者通常解耦且互盲）的核心差异点。

## 关联连接
- [[Computing-QoS]] — 评估标准
- [[Communication-Computing-Coordination]] — 实现手段
- [[Control-Plane-Coordination]] — 管理路径
