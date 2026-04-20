---
title: "摘要-s2-2601959-pdu-session-computing-attachment"
type: source
tags: [来源, 原始文件, 6G, NEC, PDU会话, RMF, CSF]
sources: [raw/01-articles/S2-2601959_KI22_PduSesstionForComputingService.md]
last_updated: 2026-04-19
---

## 核心摘要
NEC 在本提案中探讨了计算服务与 PDU 会话建立过程的集成机制。引入了两个关键网元：**RMF（资源管理功能）** 负责算力资源的供给与发现，**CSF（计算服务功能）** 负责托管 AI/XR 等计算密集型工作负载。通过在 PDU 会话请求中使用 **PCO（协议配置选项）**，终端可以宣告其算力支持能力并接收算力服务配置信息（如 RMF 终结点细节）。该方案确保了算力服务在会话建立阶段即可完成锚定与配置，实现业务的即时可用。

## 关联连接
- [[NEC]] — 贡献者
- [[RMF]] — 资源管理实体
- [[CSF]] — 业务托管实体
- [[PCO]] — 信令载体
- [[Computing-Service-Attachment]] — 核心机制
- [[AMF]] — 转发与下发实体
- [[Computing-Site]] — 物理载体
