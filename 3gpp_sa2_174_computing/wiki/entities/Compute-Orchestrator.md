---
title: "Compute-Orchestrator"
type: entity
tags: [6G, 外部实体, 编排]
sources: [raw/01-articles/S2-2602122-[KI22, resubmitted] Enabling computing service access and offload.md]
last_updated: 2026-04-20
---

## 定义
算力编排器（Compute Orchestrator, CO）是 MediaTek 方案中提出的外部功能实体，负责编排 MNO 托管算力数据网络（Compute DN）中的资源。

## 关键职能
- **支持决策**: 告知 SMF 特定算力请求是否可被支持。
- **性能预测**: 向 SMF 提供辅助信息，如任务预计完成时间。
- **地址下发**: 作为 AF 运行，向 **[[EASDF]]** 提供算力节点的地址信息。
- **Nx 接口**: 与 **[[6G-SMF]]** 交互的标准参考点。

## 关联连接
- [[MediaTek]] — 方案提出者
- [[Nx-Reference-Point]] — 交互接口
- [[6G-SMF]] — 协作网元
- [[SHE-Controller]] — 相关外部实体
