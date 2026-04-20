---
title: "Computing-Service-Attachment"
type: concept
tags: [6G, 算力接入, 流程集成]
sources: [raw/01-articles/S2-2601959_KI22_PduSesstionForComputingService.md]
last_updated: 2026-04-19
---

## 定义
计算服务挂载（Computing Service Attachment）是指在建立 PDU 会话（网络连接）的过程中，同步完成计算服务使能与配置配置的机制。

## 关键流程
1. **意图宣告**: UE 通过 **[[PCO]]** 告知网络其支持计算配给。
2. **网元发现**: SMF 在建立会话时，不仅选择 UPF，还发现可达的 **[[RMF]]** 节点。
3. **路由预置**: SMF 配置 UPF 的探测（PDR）与转发（FAR）规则，预先打通 UE 与算力服务各实体的路径。
4. **即时配给**: 核心网将资源接入凭据随会话建立响应一同下发给 UE，确保"上线即可用"。

## 关联连接
- [[摘要-s2-2601959-pdu-session-computing-attachment]] — 来源
- [[RMF]] — 挂载的目标资源
- [[PCO]] — 承载介质
- [[UE]] — 挂载的发起者
