---
title: "CC-Policy"
type: concept
tags: [6G, 策略, 通算协同]
sources: [raw/01-articles/S2-2602104 pCR vs. 23801-01 KI#22_coordination of computing and communication.md]
last_updated: 2026-04-20
---

## 定义
通信与计算联合策略（Communication and Compute Policy, CC Policy）是 6G 架构中为了实现一致的通算协同而制定的多维度规则集。

## 关键特征
- **协同性**: 由 **[[CCCE]]** 制定并拆解，同时包含用于 SMF 的通信策略和用于 SHE Controller 的算力策略。
- **动态性**: 根据应用需求（CC Profile）、用户订阅和实时资源状态动态调整。
- **原子化**: 将复杂的端到端要求（如时延和可靠性）拆解为网络链路带宽/时延和算力节点 CPU/GPU 预留配额。

## 关联连接
- [[摘要-s2-2602104-cn-controlled-coordination]] — 来源
- [[CCCE]] — 执行网元
- [[SHE-Controller]] — 外部对口
- [[Control-Plane-Coordination]] — 管理模式
