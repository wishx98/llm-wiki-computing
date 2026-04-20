---
title: "摘要-s2-2602037-csmf-resource-exposure"
type: source
tags: [来源, 原始文件, 6G, 小米, CSMF, 资源监测]
sources: [raw/01-articles/S2-2602037 [KI#22, solution#22.12, update] Computing service resource information exposure to AF.md]
last_updated: 2026-04-19
---

## 核心摘要
小米（Xiaomi）在本方案中详细描述了 **CSMF** 如何监测并向 AF 开放通算指标。该方案涵盖了硬件级的实时监测：
- **算力指标**: 包括 GPU 显存占用、GPU 计算利用率、CPU 核利用率、系统内存占比等。
- **通信指标**: 包含上/下行分组时延及 RTT，复用了 3GPP 23.501 的 QoS 监测机制。
核心交互在于 **[[Computing-Service-Resource-Change-Event]]** 订阅机制，允许 AF 实时感知端到端时延（通+算）的波动，从而动态调整业务逻辑。

## 关联连接
- [[Xiaomi]] — 贡献者
- [[CSMF]] — 监测网元
- [[GPU-Computing-Metrics]] — 核心指标集
- [[Computing-Resource-Exposure]] — 目标功能
- [[6G-SMF]] — 传输时延提供方
- [[Computing-Site]] — 算力指标源
