---
title: "NWDAF"
type: entity
tags: [6G, 网元, 智能分析]
sources: [raw/01-articles/S2-2602029 Solution-for-KI#22-6G Computing Support.md, raw/01-articles/S2-2602036 [KI#22, Solution#22.2 variant E] Computing service support for UE request and service continuity.md]
last_updated: 2026-04-19
---

## 定义
网络数据分析功能（Network Data Analytics Function, NWDAF）是 5G/6G 架构中负责收集网络数据并提供预测性分析报告的网元。

## 6G 计算场景的应用
- **预测性选站**:
    - 提供 **路径时延预测**: 评估 UE 到各候选算力站点的往返时延（RTT）波动。
    - 提供 **负荷分析**: 预测算力站点在未来一段时间内的资源利用率，避免向过载节点分配任务。
    - 提供 **移动性风险预测**: 识别 UE 是否即将发生越区切换，辅助 **[[CMF]]** 决策是否预先进行 **[[Computing-Context-Retrieval]]**。
- **QoS 联动**: 协助 CMF 确定当前网络状态是否能支撑特定的传输 QoS 需求（Transportation QoS）。

## 关联连接
- [[CMF]] — 信息的消费方
- [[Predictive-Analytics-Selection]] — 关联概念
- [[Computing-Service-Continuity]] — 应用方案
