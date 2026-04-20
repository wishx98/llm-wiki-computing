---
title: "CMF"
type: entity
tags: [6G, 网元, 算力管理]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md, raw/01-articles/S2-2602106 pCR vs. 23801-01 KI#22_computing resource information collection.md, raw/01-articles/S2-2602073 (revision of 0174)_KI#22 (Computing).md]
last_updated: 2026-04-20
---

## 定义
计算管理功能（Computing Management Function, CMF）是 6G 核心网中负责收集和管理算力节点（Computing Node/Site）资源状态的功能网元。

## 关键信息
- **功能职责**:
    - **请求处理**: 支持处理来自 **[[Computing-NAS]]** (Lenovo)、**[[SM-NAS-Computing-Request]]** (OPPO) 以及 **[[Variant-E]]** 用户面信令 (Xiaomi) 的算力任务请求。
    - **联合准入与安置 (Joint Admission & Placement)**: 同时评估网络路径 KPI (RTT, Congestion) 与算力资源可用性，计算最显著的端到端成本。
    - **业务连续性管理**: 在终端移动引起 UPF 变更或算力站点负载波动时，负责触发站点重选及 **[[Computing-Context-Retrieval]]**。
    - **资源监控与预测**: 整合来自 **[[NWDAF]]** 的预测数据和来自算力节点的实时负载上报。
    - **算力概览管理**: 维护并匹配 **[[Computing-Resource-Profile]]**，确保算力节点能力（如 AI/XR 特化能力）与业务需求精确匹配。
    - **策略下发**: 向用户面网元下发 **[[Computing-Enforcement-Rule]]** (OPPO) 或向算力站点下发资源预留指令 (Rakuten)。
- **算网协同增强**: 负责 6G 架构下通信与计算资源的联合编排与优化（根据 OPPO 和中兴等厂商的方案）。
- **资源状态全量监测**: 与 [[CCF]] 协同，从 [[Computing-Node]] 获取实时算力负载（如 GPU 利用率）并同步至核心网（根据大唐 S2-2602106 方案）。
- **命名变体**: 在 Rakuten 的方案中，该功能被称为 **CMCF** (Compute Service Management & Coordination Function)。
- **部署方式**: 
    - 独立部署、与 **[[6G-SMF]]** 合设，或在某些方案中与 NRF 合设。
- **层级关系**: 一个 CMF 可收集多个算力节点的信息，一个算力节点也可向多个 CMF 上报。

## 关联连接
- [[摘要-s2-2601934-cmf-resource-management]] — 来源
- [[6G4c-Reference-Point]] — 交互接口
- [[Computing-Node]] — 管理对象
- [[6G-SMF]] — 潜在合设网元
- [[Computing-Resource-Monitoring]] — 核心活动
