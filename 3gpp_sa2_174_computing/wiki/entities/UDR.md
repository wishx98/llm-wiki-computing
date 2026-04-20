---
title: "UDR"
type: entity
tags: [6G, 数据库, 订阅管理]
sources: [raw/01-articles/S2-2601960_KI22_ServicesForComputingService.md, raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md, raw/01-articles/S2-2602106 pCR vs. 23801-01 KI#22_computing resource information collection.md]
last_updated: 2026-04-20
---

## 定义
统一数据仓储（Unified Data Repository, UDR）是 6G 核心网中的主数据库，存储用户的订阅数据、策略数据和应用数据。

## 6G 计算场景的应用
- **算力订阅项**: 记录用户是否有权使用计算服务、可访问的业务标识（App ID）、可使用的算力峰值配额（Quota）等。
- **地域/时间策略**: 存储用户在特定区域或时间段利用算力的许可状态。
- **交互对象**: 被 **[[RMF]]** 或 **[[CMF]]** 查询，以完成业务请求的最终授权。
- **资源信息存储**: 存储经由 [[6G-NEF]] 收集的 DN 侧算力站点属性及 [[Computing-Resource-Parameters]]。

## 关联连接
- [[RMF]] / [[CMF]] — 访问主体
- [[PCF]] — 协同数据库
- [[摘要-s2-2601960-computing-registration-discovery]] — 来源
