---
title: "Variant-H"
type: concept
tags: [6G, 接入方式, AF触发]
sources: [raw/01-articles/S2-2602040.md]
last_updated: 2026-04-19
---

## 定义
Variant H 是 6G 计算服务的一种接入方案，即由应用功能（AF）触发计算会话（Computing Session）建立的业务模型。

## 方案特征
- **AF 主导决策**: 处理逻辑起始于由于业务层识别到算力需求（如用户开启 XR 功能），由 AF 向核心网发起请求。
- **意图驱动**: AF 使用抽象的 **[[CCC]]** 等级来表达需求，而非底层的硬件参数。
- **网络自治**: 核心网负责根据 AF 的意图自动寻找、实例化站点，并通过 PCF 完成与 PDU 会话的绑定。
- **零中断迁移**: 支持基于策略驱动的站点重选，对应用透明。

## 关联连接
- [[CCF]] / [[SHE-C]] — 支撑网元
- [[Intent-Based-Compute-Request]] — 交互逻辑
- [[Policy-Based-Binding]] — 核心机制
- [[Variant-E]] / [[Variant-A]] — 并列方案
