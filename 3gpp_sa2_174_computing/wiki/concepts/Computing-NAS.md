---
title: "Computing-NAS"
type: concept
tags: [6G, 信令, 算力请求]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md]
last_updated: 2026-04-19
---

## 定义
计算非接入层信令（Computing NAS）是 6G 终端与核心网通信管理功能（[[CMF]]）之间新增的专用信令机制，用于发起算力业务请求。

## 关键信息
- **请求内容**:
    - **业务标识**: APP 标识符、FQDN、DNN 或 S-NSSAI。
    - **算力需求**: 请求的资源类型（如 AI 模型信息、纯算力需求指标）。
    - **性能指标**: 往返时延（RTT）要求、吞吐量要求。
    - **结果处理**: 指示计算结果如何处理以及安全上下文信息。
- **流程特点**:
    - 独立于传统的 PDU 会话建立信令，允许在会话建立前进行算力授权、资源选路和站点锁定。
    - 核心网在确认算力站点就绪后，通过 NAS 响应告知终端。

## 关联连接
- [[摘要-s2-2601968-nas-requested-computing-coordination]] — 来源
- [[CMF]] — 处理主体
- [[UE]] — 发起主体
- [[Computing-Session]] — 业务承载
