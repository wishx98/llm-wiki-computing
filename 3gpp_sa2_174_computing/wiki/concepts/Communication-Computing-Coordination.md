---
title: "Communication-Computing-Coordination"
type: concept
tags: [6G, 通算协同, 架构增强]
sources: [raw/01-articles/S2-2601857Solution for KI#22 of 6G architecture enhancement to support 6G computing service - r04.md]
last_updated: 2026-04-19
---

## 定义
通信与计算协同（Coordination between Communication and Computing）是指在 6G 系统中，通过核心网的功能增强，实现对网络连接资源与计算资源的统一调度、优化和保障的过程。

## 核心信息
- **控制主体**: 方案中存在两种主要控制思路：
    1. **核心网（CN）控制**: 由引入的新网元（如 [[CCF]]）直接在核心网内部进行算力与通信的统一调度。
    2. **应用功能（AF）/ 边缘使能层（EEL）控制**: 核心网仅开放 QoS 监控和路径选择能力，由 AF/EEL 根据应用需求进行综合决策。
- **协同逻辑**:

    - **算力意识**: 核心网能够感知 UE 的算力请求及其对计算时延的需求。
    - **联合决策**: CCF 在选择算力站点时，不仅考虑站点的计算能力，还与 6G SM 配合测量通信时延，以确保满足端到端（E2E）的总时延要求。
    - **动态配置**: 根据计算任务的需求，动态配置网络路由及算力站点环境。
- **技术路径**:
    - 引入计算 QoS 参数，将通信 QoS 与计算 QoS 在核心网层面进行对齐与折中（Trade-off）。

## 关联连接
- [[摘要-s2-2601857-6g-computing-service]] — 来源
- [[CCF]] — 核心协调者
- [[6G-SM]] — 通信侧配合者
- [[Computing-QoS]] — 衡量标准
