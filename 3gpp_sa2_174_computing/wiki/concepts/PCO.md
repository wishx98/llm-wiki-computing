---
title: "PCO"
type: concept
tags: [6G, 信令, 协议配置]
sources: [raw/01-articles/S2-2601959_KI22_PduSesstionForComputingService.md]
last_updated: 2026-04-19
---

## 定义
协议配置选项（Protocol Configuration Options, PCO）是终端（UE）与核心网间的一种信令参数容器，通常在 PDU 会话建立或修改流程中使用。

## 6G 计算场景的应用
- **能力宣告**: UE 在 PDU Session Establishment Request 中通过 PCO 告知网络其支持"计算配置提供能力"。
- **配置下发**: SMF 在响应消息中，将 **[[RMF]]** 终结点细节（如 FQDN、IP、认证 Token 等）封装在 PCO 中同步给 UE。
- **即时接入**: PCO 机制确保了终端在网络连接建立成功的瞬间，即已拥有访问算力服务的凭据。

## 关联连接
- [[摘要-s2-2601959-pdu-session-computing-attachment]] — 来源
- [[RMF]] — 信息来源
- [[UE]] — 执行反馈
- [[Computing-Service-Attachment]] — 使用场景
