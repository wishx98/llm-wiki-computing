---
title: "EASDF"
type: entity
tags: [6G, 网元, 发现, 监控]
sources: [raw/01-articles/S2-2602122-[KI22, resubmitted] Enabling computing service access and offload.md, raw/01-articles/S2-2602130 FS_6G_ARC_KI#22_Sol13_Computing resource monitoring.md]
last_updated: 2026-04-20
---

## 定义
边缘应用服务器发现功能（Edge Application Server Discovery Function, EASDF）是 5G 架构中引入并在 6G 中得到增强的网元，主要负责算力服务器的发现与监控。

## 6G 增强职能
- **算力资源监控 (Sol#22.13)**: 
    - 从 NRF 发现 AF 的可用数据，并订阅 AF 以监控算力资源状态（如故障、过载、计算时延）。
    - 接收来自 AF 的通知（通过 NEF），并由 EASDF 评估是否需要进行算力站点重定位。
- **算力重发现**: 当监控到当前站点状态恶化时，通知 **[[6G-SMF]]**。SMF 随后更新 DNS 处理规则，引导 UE 通过新的 DNS 查询流程重新发现合适的算力服务器。
- **地址下发协作**: 与外部的 **[[Compute-Orchestrator]]** (CO) 协同，获取并向 SMF 提供最新的算力节点 IP 地址信息。

## 关联连接
- [[摘要-s2-2602130-cmf-monitoring-profile]] — 来源 (LGE 方案)
- [[摘要-s2-2602122-compute-orchestrator-offload]] — 来源 (MediaTek 方案)
- [[6G-SMF]] — 指令下发方
- [[Compute-Orchestrator]] — 协作外部实体
