---
title: "AMF"
type: entity
tags: [6G, 网元, 接入控制]
sources: [raw/01-articles/S2-2601959_KI22_PduSesstionForComputingService.md, raw/01-articles/S2-2601965_Solution#X aNB and UPF computing capability collection and exposure for 6G Computing Supporting.md]
last_updated: 2026-04-19
---

## 定义
接入与移动性管理功能（Access and Mobility Management Function, AMF）是 6G 核心网中负责终端接入、授权和移动性管理的控制面网元。

## 6G 计算场景的增强
- **信令转发**: 转发由终端（UE）发起的计算服务请求信令（如 Computing NAS）。
- **配置下发**: 在 PDU 会话建立过程中，配合 SMF 将计算配置下发给终端。
- **算力收集代理**: 接收 **[[aNB]]** 上报的基础硬件和动态算力指标，并将其转发给 **[[CCIF]]** 或其他管理实体。

## 关联连接
- [[UE]] — 控制者
- [[aNB]] — 下级节点
- [[CCIF]] — 上级监控方
