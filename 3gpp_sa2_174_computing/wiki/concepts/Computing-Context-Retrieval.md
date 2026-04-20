---
title: "Computing-Context-Retrieval"
type: concept
tags: [6G, 数据迁移, 业务连续性]
sources: [raw/01-articles/S2-2602036 [KI#22, Solution#22.2 variant E] Computing service support for UE request and service continuity.md]
last_updated: 2026-04-19
---

## 定义
算力上下文检索（Computing Context Retrieval）是在算力站点发生重选或迁移（Relocation）时，新站点从原有站点提取任务运行状态、缓存数据或动态参数的过程。

## 关键作用
- **消除冷启动**: 防止迁移后的任务从零开始，降低对用户体验的破坏。
- **状态同步**: 确保 AI 推理的中间层输出、XR 渲染的模型状态等能无缝传递。
- **接口要求**: 算力站点之间或算力站点与 **[[CMF]]** 之间需具备标准化的上下文传输接口。

## 关联连接
- [[Computing-Service-Continuity]] — 应用场景
- [[CMF]] — 协调者
