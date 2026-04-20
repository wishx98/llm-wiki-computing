---
title: "6G4c-Reference-Point"
type: concept
tags: [6G, 接口, 算力监控]
sources: [raw/01-articles/S2-2601934_Solution_22.11_Update_for_6G_KI#22_bullet_3a.md]
last_updated: 2026-04-19
---

## 定义
6G4c 是 6G 核心网中定义的参考点（接口），用于计算管理功能（[[CMF]]）与算力节点（[[Computing-Node]]）之间的信令交互。

## 关键功能
- **关联管理**: 支持 6G4c Association 的建立、更新和释放，用于初始化 CMF 与节点间的监控关系。
- **资源上报**: 通过 6G4c Report 消息，节点向 CMF 上报其当前的算力资源状态。
- **触发控制**: CMF 可通过该接口向节点配置上报触发事件（如周期、阈值控制等）。

## 关联连接
- [[摘要-s2-2601934-cmf-resource-management]] — 来源
- [[CMF]] — 接口请求方
- [[Computing-Node]] — 接口响应方
- [[Computing-Resource-Monitoring]] — 实现的业务
