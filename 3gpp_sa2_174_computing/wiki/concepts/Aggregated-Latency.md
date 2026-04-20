---
title: "Aggregated-Latency"
type: concept
tags: [6G, 指标, 通算协同]
sources: [raw/01-articles/S2-2602104 pCR vs. 23801-01 KI#22_coordination of computing and communication.md]
last_updated: 2026-04-20
---

## 定义
聚合时延（Aggregated Latency）或称端到端任务总时延，是 6G 算网协同中的核心度量指标。

## 计算模型
$$T_{total} = T_{comm} + T_{comp}$$
其中：
- $T_{comm}$: 通信时延。在 Variant G 中进一步细分为 N3 接口时延与 N6/Ny 接口时延之和。
- $T_{comp}$: 计算时延。指算力站点处理任务所需的时间。

## 业务应用
在由 AF 引导的选择逻辑中（如 Variant G），网络通过比较各备选 DNAI 的聚合时延与应用要求的“最大可接受聚合时延（Maximum Acceptable Aggregated Latency）”来决策最优站点的选择与切换。

## 关联连接
- [[摘要-s2-2602104-cn-controlled-coordination]] — 来源
- [[Overall-Task-Latency]] — 相似公式
- [[Variant-G]] — 主要应用场景
- [[6G-SMF]] — 决策 NFs
