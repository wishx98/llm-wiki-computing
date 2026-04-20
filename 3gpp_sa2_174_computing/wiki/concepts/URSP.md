---
title: "URSP"
type: concept
tags: [6G, 终端策略, 算力授权]
sources: [raw/01-articles/S2-2601933_Solution_22.5_Update_for_6G_KI#22_bullet_2a.md]
last_updated: 2026-04-19
---

## 定义
终端路由选择策略（UE Route Selection Policy, URSP）是 3GPP 定义的一套规则，用于指导终端如何将特定应用流量映射到对应的 PDU 会话中。

## 6G 增强
- **计算支持指示**: 在 URSP 规则中新增"支持计算的指示"（Indication for Supporting Computing）。
- **业务描述符增强**: 在 Traffic Descriptor 的连接能力中增加"计算"选项，允许应用显式请求算力支持。
- **选路组件增强**: 在 Route Selection Components 中引入计算相关参数，包括资源类型、时延要求、吞吐量要求和存储需求。
- **决策逻辑**: UE 通过评估这些规则，自主判断是建立新的计算专用会话还是复用现有会话。

## 关联连接
- [[摘要-s2-2601933-ursp-computing-authorization]] — 来源
- [[Computing-Service-Authorization]] — 业务场景
- [[UE]] — 执行主体
- [[Computing-Resource]] — 参数内容
