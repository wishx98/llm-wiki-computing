---
title: "摘要-s2-2602122-compute-orchestrator-offload"
type: source
tags: [来源, 原始文件, 6G, MediaTek, 算力卸载, Compute-Orchestrator]
sources: [raw/01-articles/S2-2602122-[KI22, resubmitted] Enabling computing service access and offload.md]
last_updated: 2026-04-20
---

## 核心摘要
联发科 (MediaTek) 在本文件中提出了一种将算力服务卸载至 **MNO 托管算力数据网络 (Compute DN)** 的架构。该架构假设 5GS 框架为基础，引入了 3GPP 外部实体 **[[Compute-Orchestrator]] (CO)**。SMF 通过 **Nx** 接口与 CO 交互获取辅助信息（如预计处理完成时间），而 UPF 通过 **Ny** 接口（N6 的增强）与 Compute DN 连接。终端通过 URSP 配置中标记为 "compute" 的连接能力来发起相关 PDU 会话。

## 关联连接
- [[MediaTek]] — 贡献者
- [[Compute-Orchestrator]] — 外部编排层
- [[Nx-Reference-Point]] — 新参考点
- [[Ny-Reference-Point]] — 新参考点
- [[EASDF]] — 地址发现
