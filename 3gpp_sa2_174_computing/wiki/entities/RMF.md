---
title: "RMF"
type: entity
tags: [6G, 网元, 资源管理]
sources: [raw/01-articles/S2-2601959_KI22_PduSesstionForComputingService.md]
last_updated: 2026-04-19
---

## 定义
资源管理功能（Resource Management Function, RMF）是 6G 核心网中引入的新网元，用于使能由分布式算力资源提供的计算服务。

## 关键信息
- **功能职责**:
    - **集成与路由**: 与核心网控制面协同，建立连接并配置路由。
    - **编排与治理**: 与 **[[CSF]]** 协作进行资源编排。
    - **服务基础**: 负责计算服务的注册、发现、发放（Provisioning），并实施策略与订阅控制。
    - **域名解析**: 可能包含 DNS 功能，用于计算服务终结点（Endpoint）的解析。
- **业务流程**:
    - 在 PDU 会话建立过程中，由 SMF 发现并配置 RMF。
    - 将 RMF 访问信息（如 FQDN、IP、Token）通过 PCO 下发给 UE。

## 关联连接
- [[摘要-s2-2601959-pdu-session-computing-attachment]] — 来源
- [[CSF]] — 协作网元
- [[PCO]] — 配置下发通道
- [[Computing-Service-Attachment]] — 关键流程
