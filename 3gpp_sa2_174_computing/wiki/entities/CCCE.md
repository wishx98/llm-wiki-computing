---
title: "CCCE"
type: entity
tags: [6G, 网元, 协同控制]
sources: [raw/01-articles/S2-2602104 pCR vs. 23801-01 KI#22_coordination of computing and communication.md]
last_updated: 2026-04-20
---

## 定义
通算协调实体（Communication and Computing Coordination Entity, CCCE）是 6G 核心网控制面引入的功能模块，旨在统一管理通信 QoS 策略与计算资源策略的联合执行。

## 关键职能
- **联合策略生成**: 协调通信（QoS）与计算（SHE 资源）策略。
- **Variant B 核心角色**: 
    - eSMF 在收到带有“算力会话”标识的请求时，优先选择 CCCE 而非 PCF。
    - 负责建立 **CC Policy Association**（与 ePCF 协作）以获取包含算力与通信要求的 [[CC-Profile]]。
    - **授权与订阅**: 从 eUDM/eUDR 获取用户订阅数据，并在会话建立阶段完成授权。
- **外部环境协作**: 通过 `6G-CCCE-SHE` 参考点与 **[[SHE-Controller]]** 交互，监控算力状态并触发站点重定位。
- **时延预算管理**: 接收 SMF 测量的网络延迟（N3/N9），计算并向 SHE 建议剩余的可用算力延迟（[[Aggregated-Latency]] 减去 网络延迟）。

## 关联连接
- [[摘要-s2-2602301-ccce-variant-b-update]] — 来源 (NTT DOCOMO 方案)
- [[CC-Profile]] — 关联概念
- [[SHE-Controller]] — 关联实体
- [[6G-SMF]] — 指令下发方
- [[CCF]] / [[CMF]] — 协同网元
- [[6G-SMF]] — 潜在合设对象
