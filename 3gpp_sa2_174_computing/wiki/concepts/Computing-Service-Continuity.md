---
title: "Computing-Service-Continuity"
type: concept
tags: [6G, 业务连续性, 算力切换]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md, raw/01-articles/S2-2602036 [KI#22, Solution#22.2 variant E] Computing service support for UE request and service continuity.md]
last_updated: 2026-04-19
---

## 定义
计算业务连续性（Computing Service Continuity）是指在 6G 终端移动或算力节点状态发生剧烈波动时，保证正在进行的计算任务（如分布式推理、渲染）不中断、不丢失进度的能力。

## 触发场景
- **通信侧触发**: 终端发生物理位移，导致连接的 UPF 发生重选，原有站点路径变得不再最优，触发重选算力站点。
- **计算侧触发**: 原算力站点由于新任务涌入导致过载（Overloading），CMF 决定将任务迁移至邻近节点。

## 实现关键
- **Make-before-break**: 在切断与旧站点的连接前，先在新站点建立环境。
- **[[Computing-Context-Retrieval]]**: 新旧站点间同步任务状态快照、中间张量数据或运行上下文。
- **[[NWDAF]] 预测**: 提前感知切换风险，降低迁移过程对时延的影响。

## 关联连接
- [[CMF]] — 调度中心
- [[Computing-Context-Retrieval]] — 数据面支撑
- [[NWDAF]] — 控制面支撑
- [[摘要-s2-2602036-variant-e-user-plane-signaling]] — 来源
