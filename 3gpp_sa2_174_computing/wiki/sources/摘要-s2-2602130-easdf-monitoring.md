---
title: "摘要-s2-2602130-easdf-monitoring"
type: source
tags: [来源, 原始文件, 6G, LGE, EASDF, 监控]
sources: [raw/01-articles/S2-2602130 FS_6G_ARC_KI#22_Sol13_Computing resource monitoring.md]
last_updated: 2026-04-20
---

## 核心摘要
本文件由 LG Electronics (LGE) 提交，提出了方案 #22.13：通过 **[[EASDF]]** 监控算力资源。在该方案中，EASDF 从 NRF 获取 AF 的可用数据，并订阅算力资源的实时状态（故障、负载、时延）。当状态不满足要求时，EASDF 触发 SMF 更新 DNS 规则，引导终端进行 **[[Computing-Site]]** 的重新发现。

## 关联连接
- [[LGE]] — 贡献者
- [[EASDF]] — 监控网元
- [[6G-SMF]] — 流程触发方
- [[Computing-Resource-Monitoring]] — 概念背景
