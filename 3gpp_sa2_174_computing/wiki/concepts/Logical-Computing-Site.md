---
title: "Logical-Computing-Site"
type: concept
tags: [6G, 拓扑, 抽象]
sources: [raw/01-articles/S2-2602089 [KI#22, bullet#1] Architecture Requirements, Definitions and Computing Resources.md]
last_updated: 2026-04-20
---

## 定义
逻辑算力站点（Logical Computing Site）是 6G 网络拓扑中特定地理位置或网络位置的算力资源抽象。

## 关键特征
- **解耦**: 客户端感知的站点 ID 与物理硬件解耦。一个逻辑站点可以承载多个 **[[Service-Hosting-Environment]]** (SHE)。
- **映射**: 分别对应于网络拓扑中的具体接入点或锚定点（如本地/中心站点）。
- **调度**: 核心网 NFs（如 CCF/CMF）通过逻辑站点标识进行资源的全局调度与重选。

## 关联连接
- [[摘要-s2-2602089-6g-computing-definitions-requirements]] — 来源
- [[Service-Hosting-Environment]] — 物理基础
- [[Computing-Site]] — 相关术语
