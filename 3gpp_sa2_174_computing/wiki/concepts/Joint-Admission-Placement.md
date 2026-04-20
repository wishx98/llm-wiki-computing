---
title: "Joint-Admission-Placement"
type: concept
tags: [6G, 调度算法, 资源协同]
sources: [raw/01-articles/S2-2602029 Solution-for-KI#22-6G Computing Support.md]
last_updated: 2026-04-19
---

## 定义
联合准入与安置（Joint Admission and Placement）是 6G 算网大脑（如 CMCF）的一种核心决策机制，即在接收到业务请求时，同时对"算力资源可用性"和"网络路径可行性"进行关联评估。

## 关键流程
1. **可行性扫描**: **[[CMCF]]** 同时查询算力站点的剩余能力以及 **[[6G-SMF]]** 提供的各路径 KPI（如 RTT、拥塞程度）。
2. **多维代价计算**: 评估算法不仅仅寻找最强的算力，而是寻找"能满足 SLA 的最不拥塞路径 + 对应站点"的最优组合。
3. **选站锁定**: 一旦选定，同时发起算力容器实例化（Placement）和 PDU 会话路径更新（Admission）。

## 关联连接
- [[CMCF]] — 决策主体
- [[6G-SMF]] — 路径信息源
- [[Predictive-Analytics-Selection]] — 决策依据
- [[Overall-Task-Latency]] — 优化目标
