---
title: "Correlation-ID"
type: concept
tags: [6G, 标识, 关联, 隐私, Apple]
sources: [raw/01-articles/S2-2602286-rev-S2-2600477_v2.md]
last_updated: 2026-04-20
---

## 定义
关联 ID (Correlation ID) 是由 Apple 提出并被引入 6G 架构的概念。它是一个**算子内部的 (Operator-internal)**、**会话范围的 (Session-scoped)** 且 **非持久性的 (Non-persistent)** 标识符。

## 作用
- **请求关联**: 用于帮助 6G 核心网网元正确关联来自同一个 AF 的不同服务请求（例如：流量路由请求、QoS 保证请求、时延监控请求）。
- **绑定网络资源**: 该 ID 将与特定会话相关的网络资源（PDU Session, QoS Flows, DNAI 映射）绑定在一起。
- **隐私保护**: 通过使用临时且仅对网元可见的 Correlation ID，避免在向算力资源侧公开时泄露用户的永久身份（如 SUPI/GUTI）。

## 生命周期
- 该 ID 在 AF 向 NEF 请求服务时分配。
- 每个 AF 的每个应用会话具有唯一的 Correlation ID。
- 会话结束或标识失效后即被释放，不具有跨会话的持久性。

## 关联连接
- [[Apple]] — 提出方
- [[6G-NEF]] — 分配网元
- [[6G-SMF]] — 使用网元
