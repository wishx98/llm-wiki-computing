---
title: "Overall-Task-Latency"
type: concept
tags: [6G, KPI, 时延模型]
sources: [raw/01-articles/S2-2601980 [KI#22, Solution#22.2, Update] Variant A of Solution 22.2 v2.md]
last_updated: 2026-04-19
---

## 定义
总任务时延（Overall Task Latency）是衡量 6G 计算服务端到端性能的核心指标，公式定义为：
$$T_{total} = T_{comm} + T_{comp}$$

## 详细组成
- **通信时延 ($T_{comm}$)**: 
    - 涵盖传统无线接入网、承载网及核心网的往返时延。
    - 对应传统 QoS 参数，如 PDB（包延迟预算）。
- **计算时延 ($T_{comp}$)**:
    - 任务在算力站点（Computing Site）内被处理的时延。
    - 包含资源等待、任务实例化和实际运算执行的时间。
    - 该指标通常被传统 QoS 忽略，但在 6G 中被纳入统一调度。

## 关联连接
- [[E2E-Delay-Optimization]] — 优化目标
- [[Computing-QoS]] — 整体标准
- [[Control-Plane-Coordination]] — 分配机制
- [[摘要-s2-2601980-variant-a-sm-nas-coordination]] — 来源
