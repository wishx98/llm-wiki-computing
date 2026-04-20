---
title: "摘要-s2-2602043-ccc-data-format"
type: source
tags: [来源, 原始文件, 6G, LGUplus, ETRI, CCC, 数据格式]
sources: [raw/01-articles/S2-2602043.md]
last_updated: 2026-04-19
---

## 核心摘要
本文件详细定义了 Variant H 方案中用于算力能力开放的元数据格式：
1. **[[CCC]] (Computing Capability Class)**: 定义了 ID、名称、资源类型、计算能力（TFLOPS/TOPS）及执行模式（如推理、渲染）。
2. **[[CCCP]] (Computing Capability Class Profile)**: 将 CCC 与具体的地理位置时延和节点名称关联。
这种分层设计支持**标准 CCC**（用于跨运营商互操作）和**自定义 CCC**（用于特定优化），使得 AF 可以通过简单的等级选择实现"基于意图"的算力调度。

## 关联连接
- [[CCC]] — 指标定义
- [[CCCP]] — 剖面定义
- [[Intent-Based-Compute-Request]] — 交互模式
- [[LGUplus]] / [[ETRI]] — 贡献者
