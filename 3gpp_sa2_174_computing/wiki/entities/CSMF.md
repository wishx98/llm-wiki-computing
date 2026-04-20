---
title: "CSMF"
type: entity
tags: [6G, 网元, 算力管理]
sources: [raw/01-articles/S2-2602037 [KI#22, solution#22.12, update] Computing service resource information exposure to AF.md]
last_updated: 2026-04-19
---

## 定义
计算服务管理功能（Compute Service Management Function, CSMF）是小米（Xiaomi）方案中提出的核心控制面网元，负责端到端的算力服务生命周期管理、监测与能力开放。

## 关键信息
- **功能职责**:
    - **多维监测**: 实时汇总来自算力站点的硬件指标（GPU/CPU/Memory）和来自 SMF 的网络指标（Latency/Throughput）。
    - **联合 QoS 确定**: 根据业务 ID 确定总 KPI，并拆分为传输 QoS 与计算 QoS。
    - **事件订阅**: 为外部 AF 提供 **[[Computing-Service-Resource-Change-Event]]** 订阅，实现资源变化的闭环驱动。
- **与 CMF 的关系**: 功能上与 **[[CMF]]** 高度重合，侧重于"服务（Service）"层面的管理与开放接口。

## 关联连接
- [[CMF]] — 关联功能
- [[Xiaomi]] — 提案方
- [[Computing-Resource-Exposure]] — 核心应用场景
- [[GPU-Computing-Metrics]] — 监控数据对象
