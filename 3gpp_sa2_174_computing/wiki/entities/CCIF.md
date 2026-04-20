---
title: "CCIF"
type: entity
tags: [6G, 网元, 算力开放]
sources: [raw/01-articles/S2-2601965_Solution#X aNB and UPF computing capability collection and exposure for 6G Computing Supporting.md]
last_updated: 2026-04-19
---

## 定义
计算能力信息功能（Computing Capability Information Function, CCIF）是 6G 架构中负责收集并开放网络功能（NF）和基站（aNB）算力指标的专门网元。

## 关键信息
- **功能职责**:
    - **资源发现**: 通过 NRF 发现 AMF 实例，进而发现连接的 aNB。
    - **订阅与聚合**: 向 AMF 订阅特定 aNB 或 aNB 组的计算能力更新。
    - **能力开放**: 将聚合后的硬件级（如核心数、FLOPS）和状态级（如剩余内存占比）算力信息开放给外部应用功能（AF）。
- **监控维度**: 涵盖时钟频率、核数、缓存、IOPS、吞吐量以及浮点运算性能等。

## 关联连接
- [[摘要-s2-2601965-anb-capability-collection]] — 来源
- [[aNB]] — 核心监控对象
- [[AMF]] — 订阅中转方
- [[aNB-Computing-Capability]] — 关联概念
