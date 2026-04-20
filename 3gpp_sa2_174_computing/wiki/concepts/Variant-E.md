---
title: "Variant-E"
type: concept
tags: [6G, 接入方式, 用户面]
sources: [raw/01-articles/S2-2602036 [KI#22, Solution#22.2 variant E] Computing service support for UE request and service continuity.md]
last_updated: 2026-04-19
---

## 定义
Variant E 是 6G 计算服务的一种接入方案，即终端（UE）通过用户面消息（User Plane Messages）直接向计算管理功能（[[CMF]]）发起请求。

## 方案特点
- **流程解耦**: 计算业务的授权与建立独立于 NAS/PDU Session 处理，降低控制面（AMF/SMF）的并发压力。
- **直连 CMF**: 终端在建立基础信令通道后，获取 CMF 地址并直接与其交互。
- **与用户面协同**: 天然支持将计算量化指标直接封装在数据包中上报。

## 关联连接
- [[CMF]] — 接收方
- [[SM-NAS-Computing-Request]] — 接入方式A
- [[Computing-NAS]] — 接入方式C
- [[摘要-s2-2602036-variant-e-user-plane-signaling]] — 来源
