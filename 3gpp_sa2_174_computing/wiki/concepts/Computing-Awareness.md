---
title: "Computing-Awareness"
type: concept
tags: [6G, 架构要求, 算力感知]
sources: [raw/01-articles/S2-2601981 [KI#22] Architectural requirement of 6G computing.md]
last_updated: 2026-04-19
---

## 定义
算力感知（Computing Awareness）是指 6G 系统中各主体（UE、应用、网络）能够获知当前算力资源的可用性、位置及性能指标，并据此进行业务决策的能力。

## 三个维度
- **终端感知**: 终端能够根据网络暴露的参数决定是否触发任务卸载以及选择何种精度的模型。
- **应用感知**: 位于第三方 DN 的应用能够实时获知网络侧能提供的计算/通信联合保障水平。
- **网元感知**: 核心网网元（如 CMF、SMF）能够感知下层硬件负载，进行自适应的负载均衡。

## 关键技术使能
- **[[CCIF]] / [[CMF]]**: 实现信息聚合。
- **[[Computing-Capability-Exposure]]**: 实现向外暴露。
- **[[6G-Computing-Requirements]]**: 架构演进的驱动力。

## 关联连接
- [[摘要-s2-2601981-computing-architecture-requirements]] — 来源
- [[6G-Computing-Requirements]] — 逻辑分类
- [[aNB-Computing-Capability]] — 数据基础
