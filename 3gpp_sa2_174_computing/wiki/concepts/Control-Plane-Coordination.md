---
title: "Control-Plane-Coordination"
type: concept
tags: [6G, 通算协同, 控制面]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md]
last_updated: 2026-04-19
---

## 定义
控制面通算协同（Control Plane Coordination）是指在 6G 核心网控制平面对通信 QoS 与算力资源进行联合授权、调度和动态调整的机制。

## 关键机制
- **联合决策**: 
    - CMF、SMF 与 PCF 协作，评估 **[[E2E-Delay-Optimization]]**。
    - 如果识别到网络时延（Communication Delay）增加，CMF 会请求算力站点分配更多资源以缩短处理时延（Processing Delay），从而保证总体 KPI。
- **配置同步**: CMF 派生算力配置，SMF 派生通信策略，两者在会话建立阶段同步部署到 [[Virtual-Computing-Node]]。
- **反馈闭环**: 监控到的网络拥塞或时延波动会触发控制面重新选择算力站点或调整算力配额。

## 关联连接
- [[摘要-s2-2601968-nas-requested-computing-coordination]] — 来源
- [[User-Plane-Coordination]] — 并列机制
- [[E2E-Delay-Optimization]] — 最终目标
- [[Communication-Computing-Coordination]] — 逻辑分类
