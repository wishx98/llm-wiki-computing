---
title: "摘要-s2-2602036-variant-e-user-plane-signaling"
type: source
tags: [来源, 原始文件, 6G, 小米, Variant-E, 业务连续性]
sources: [raw/01-articles/S2-2602036 [KI#22, Solution#22.2 variant E] Computing service support for UE request and service continuity.md]
last_updated: 2026-04-19
---

## 核心摘要
小米（Xiaomi）在本方案中详细描述了 **Variant E**：终端通过用户面信令直接向 CMF 发送计算请求。
- **流程精简**: 终端在建立基础 PDU 会话后，获取 CMF 地址并直接进行任务申请。
- **业务连续性**: 方案重点分析了两种迁移场景：
    1. **终端移动**: 由 UPF 变更触发，CMF 根据新路径联合 NWDAF 评估是否需要重选算力站点。
    2. **负载波动**: 由算力侧资源变化触发。
- **上下文检索**: 在站点迁移过程中，支持新站点向旧站点发起 **[[Computing-Context-Retrieval]]**，确保计算任务不中断（Make-before-break）。

## 关联连接
- [[Xiaomi]] — 贡献者
- [[Variant-E]] — 接入方式
- [[Computing-Service-Continuity]] — 核心场景
- [[Computing-Context-Retrieval]] — 数据迁移技术
- [[CMF]] — 调度中心
