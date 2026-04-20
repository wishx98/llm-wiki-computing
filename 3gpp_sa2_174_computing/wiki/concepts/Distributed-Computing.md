---
title: "Distributed-Computing"
type: concept
tags: [6G, 计算架构, 分布式]
sources: [raw/01-articles/S2-2602102 pCR vs. 23801-01 KI#22_Support distributed computing_v1.md]
last_updated: 2026-04-19
---

## 定义
分布式计算（Distributed Computing）在 6G 架构中指跨越多个计算站点（如 CS-CN 和 CS-DN）分阶段处理同一计算任务的能力。

## 关键特性
- **处理顺序 (Processing Order)**: 定义了任务在不同站点间的流转逻辑（例如：预处理 -> 主模型计算）。
- **跨域协同**: 支持数据在核心网内部算力站点与外部数据网络算力站点之间的智能路由。
- **动态路径引导**: 由 [[CCF]] 根据当前站点的地理位置、负载和任务需求，动态生成路由规则，并由 SMF 应用于 UPF。

## 关联连接
- [[摘要-s2-2602102-distributed-computing-cn-dn]] — 来源
- [[CCF]] — 编排管理者
- [[Computing-Site]] — 物理载体
