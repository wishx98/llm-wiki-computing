---
title: "Edge-Enabling-Layer"
type: entity
tags: [6G, 边缘计算, 架构层]
sources: [raw/01-articles/S2-2601896_new solution based on SA6 and AF based solutions_r1.md]
last_updated: 2026-04-19
---

## 定义
边缘使能层（Edge Enabling Layer, EEL）是基于 3GPP TS 23.558 定义的架构层，旨在支持边缘应用的发现、授权和协同。

## 关键信息
- **内部组成**:
    - **EES (Edge Enabling Server)**: 作为 AF 与核心网交互，利用 API 实现流量分流和 QoS 获取。
    - **EEC (Edge Enabling Client)**: 部署在 UE 侧，负责发现符合功能和算力要求的边缘应用服务器（EAS）。
    - **EAS (Edge Application Server)**: 提供具体的应用服务，可向 EES 注册其服务特征。
- **6G 演进**:
    - 在 6G 方案 22.4 中，EEL 被提议作为通算协同的主要承载层，利用其已有的边缘应用管理能力来满足 6G 的算力需求。

## 关联连接
- [[摘要-s2-2601896-af-edge-coordination]] — 来源
- [[AF]] — 角色重叠
- [[Computing-Site]] — 物理载体
