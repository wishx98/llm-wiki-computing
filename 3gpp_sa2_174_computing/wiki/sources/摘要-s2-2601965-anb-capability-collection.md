---
title: "摘要-s2-2601965-anb-capability-collection"
type: source
tags: [来源, 原始文件, 6G, 传音, aNB, 算力开放]
sources: [raw/01-articles/S2-2601965_Solution#X aNB and UPF computing capability collection and exposure for 6G Computing Supporting.md]
last_updated: 2026-04-19
---

## 核心摘要
传音控股（Transsion）在本方案中聚焦于 **6G 基站 (aNB)** 的计算能力收集。引入了新网元 **CCIF (计算能力信息功能)**，通过分层订阅机制实现资源监控：CCIF 向 AMF 订阅，AMF 再向其连接的 aNB 订阅。上报的指标非常详尽，涵盖了硬件层面的主频、核心数、线程、IPC、缓存、浮点性能 (FLOPS) 以及内存/存储的 IOPS 和吞吐量。这些信息的收集旨在通过 CCIF 开放给 AF，实现算力感知的网络优化。

## 关联连接
- [[Transsion]] — 贡献者
- [[CCIF]] — 能力汇聚中心
- [[aNB]] — 算力提供节点
- [[AMF]] — 信令中转实体
- [[aNB-Computing-Capability]] — 详尽指标集
- [[Computing-Capability-Exposure]] — 业务目标
