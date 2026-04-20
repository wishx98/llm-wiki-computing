---
title: "AF"
type: entity
tags: [6G, 网元, 算力协同]
sources: [raw/01-articles/S2-2601896_new solution based on SA6 and AF based solutions_r1.md]
last_updated: 2026-04-19
---

## 定义
应用功能（Application Function, AF）在 6G 通算协同方案 22.4 中承担计算协调功能（Compute Coordination Functionality），作为连接 6G 核心网与外部算力环境的桥梁。

## 关键信息
- **功能职责**:
    - 获取核心网开放的端到端 QoS 监控数据（含内部时延及 N6 时延）。
    - 从算力提供商获取算力指标（可用性、负载、能源指标等）。
    - 执行"决策制定"：根据网络和算力指标选择最优的应用服务器（AS）或算力站点。
    - 影响 6G 核心网进行路径选择和流量监控（通过 DNAI）。
- **技术路线**: 
    - 区别于 CCF 方案，AF 方案倾向于将复杂的算力生命周期管理留在 3GPP 外部（如利用 Kubernetes），核心网仅负责网络能力的开放和配合。

## 关联连接
- [[摘要-s2-2601896-af-edge-coordination]] — 来源
- [[Edge-Enabling-Layer]] — 协作架构
- [[Communication-Computing-Coordination]] — 实现目标
- [[Computing-Site]] — 决策目标
