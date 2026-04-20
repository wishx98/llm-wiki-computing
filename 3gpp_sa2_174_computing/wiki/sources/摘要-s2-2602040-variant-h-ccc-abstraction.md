---
title: "摘要-s2-2602040-variant-h-ccc-abstraction"
type: source
tags: [来源, 原始文件, 6G, LGUplus, ETRI, Variant-H, CCC]
sources: [raw/01-articles/S2-2602040.md]
last_updated: 2026-04-19
---

## 核心摘要
LG Uplus 与 ETRI 联合提出了 **Variant H**：AF 触发的计算会话方案。
1. **抽象化解耦**: 引入 **[[CCC]] (计算能力等级)** 概念，将底层的 CPU/GPU/加速器等异构算力抽象为标准等级（如 "AI 推理级"、"XR 渲染级"），避免向 AF 暴露敏感的基础设施细节。
2. **策略驱动协同**: 通过 **[[CCF]]** 进行中心化决策，并由 **PCF** 将计算会话与 PDU 会话进行**策略绑定 (Policy-based Binding)**，实现通算资源的统一生命周期管理。
3. **低复杂度接入**: AF 仅需通过 API 表达意图（意图驱动），由网络自动完成算力站点的选路与安置。

## 关联连接
- [[LGUplus]] / [[ETRI]] — 贡献者
- [[Variant-H]] — 方案分类
- [[CCC]] — 核心抽象模型
- [[CCF]] — 算力控制功能
- [[SHE-C]] — 基础设施控制器
- [[Policy-Based-Binding]] — 协同关键
