---
title: "CSF"
type: entity
tags: [6G, 网元, 计算业务]
sources: [raw/01-articles/S2-2601959_KI22_PduSesstionForComputingService.md]
last_updated: 2026-04-19
---

## 定义
计算服务功能（Computing Service Function, CSF）是 6G 核心网中负责托管应用工作负载并管理底层算力资源生命周期的功能网元。

## 关键信息
- **功能职责**:
    - **业务托管**: 运行 AI 推理、XR 渲染等计算密集型应用工作负载。
    - **环境驻留**: 工作负载运行在服务托管环境（[[SHE]]）内的算力站点上。
    - **生命周期管理**: 管理算力、内存、存储等资源的绑定，监控资源利用率，并确保工作负载的最优编排（Placement）。
- **协同关系**:
    - 向上与 **[[RMF]]** 对接，实现与用户面功能的集成。
    - 向下通过用户面路径向终端（UE）暴露应用能力。

## 关联连接
- [[摘要-s2-2601959-pdu-session-computing-attachment]] — 来源
- [[RMF]] — 资源管理方
- [[SHE]] — 驻留环境
- [[Computing-Site]] — 物理基础设施
