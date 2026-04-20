---
title: "SHE-Controller"
type: entity
tags: [6G, 外部实体, 接口控制]
sources: [raw/01-articles/S2-2602104 pCR vs. 23801-01 KI#22_coordination of computing and communication.md]
last_updated: 2026-04-20
---

## 定义
服务托管环境控制器（SHE Controller）是部署在运营商管理但非 3GPP 定义的计算环境（如 Kubernetes 集群、OpenStack 等）中的管理器。

## 关键职能
- **资源暴露**: 向 3GPP 核心网（通过 [[CCCE]]）报告 SHE 内部的算力可用性、负载及时延指标。
- **资源预留**: 接收来自 6G 控制面的指令，为特定的算力会话预留硬件资源（CPU, GPU, Memory）。
- **标准接口**: 与 6G 核心网通过 **6G-CCCE-SHE** 参考点交互。

## 关联连接
- [[CCCE]] — 通信对端
- [[Service-Hosting-Environment]] — 管理对象
- [[Compute-Orchestrator]] — 类似概念
