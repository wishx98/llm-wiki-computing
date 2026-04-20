---
title: "aNB"
type: entity
tags: [6G, 基站, 算力节点]
sources: [raw/01-articles/S2-2601965_Solution#X aNB and UPF computing capability collection and exposure for 6G Computing Supporting.md]
last_updated: 2026-04-19
---

## 定义
aNB 是 6G 系统中的高级基站（6G Base Station），在算力网络方案中不仅负责无线接入，还作为重要的算力提供节点。

## 关键信息
- **算力上报机制**: 
    - aNB 自行计算并预测其算力可用性。
    - 通过 NaNB 接口（如 NaNB_Computing_Capability_RetrialNotify）向 AMF 上报其详细的硬件和动态算力状态。
- **算力指标**:
    - **静态硬件**: 时钟频率、核心数/线程数、IPC（每时钟指令数）、缓存、FLOPS。
    - **动态负载**: 剩余缓存百分比、剩余内存/存储百分比、剩余浮点算力百分比。
    - **存储性能**: IOPS、读写吞吐量。

## 关联连接
- [[摘要-s2-2601965-anb-capability-collection]] — 来源
- [[CCIF]] — 顶层监控方
- [[aNB-Computing-Capability]] — 关联概念
- [[Computing-Node]] — 逻辑分类
