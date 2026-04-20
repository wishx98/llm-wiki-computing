---
title: "Proxy-NF"
type: entity
tags: [6G, 网元, 代理功能]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md, raw/01-articles/S2-2601969-[KI#22 bullet#3 new] Solution for Awareness of computing site information in DN at the 6G CN-Lenovo.md]
last_updated: 2026-04-19
---

## 定义
代理网络功能（Proxy NF）是 6G 架构中可能引入的一个中间层实体，用于汇聚、存储和分发算力站点（Computing Site）的注册信息。

## 关键信息
- **功能职责**:
    - **信息汇聚**: 接收算力站点的主动注册请求，维护全网或区域性的算力资源地图。
    - **解耦中转**: 允许 **[[CMF]]** 或其他控制面网元通过该代理间接获取站点状态，而无需每个算力实体都与核心网建立直连。
    - **DN 接入点**: 作为 3rd party AF 向核心网报送 DN 侧算力信息的接收端之一。
- **关联场景**: 适用于大规模、碎片化分布的边缘算力场景。

## 关联连接
- [[CMF]] — 信息的消费方
- [[DN-Based-Computing-Site]] — 信息来源
- [[Computing-Site]] — 被代理的对象
