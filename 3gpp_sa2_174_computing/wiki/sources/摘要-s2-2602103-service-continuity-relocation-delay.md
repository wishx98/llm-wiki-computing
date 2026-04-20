---
title: "摘要-s2-2602103-service-continuity-relocation-delay"
type: source
tags: [来源, 原始文件, 6G, CATT, 业务连续性, 重定位时延]
sources: [raw/01-articles/S2-2602103 pCR vs. 23801-01 KI#22_service continuity.md]
last_updated: 2026-04-20
---

## 核心摘要
本文件由大唐 (CATT) 提交，提出了保障算力业务连续性的方案。重点引入了 **[[Relocation-Delay]]**（重定位时延）概念，涵盖虚拟机/容器实例化及上下文迁移（如大型 AI 模型数据）所需的时间。方案建议由 **[[CCF]]** 评估由于 UE 移动或负载均衡触发的站点切换是否能满足时延要求，并允许终端在环境恶化时自主决定是继续使用网络算力还是切回本地处理。

## 关联连接
- [[CATT]] — 贡献者
- [[Computing-Service-Continuity]] — 核心领域
- [[Relocation-Delay]] — 技术指标
- [[CCF]] — 决策主体
- [[Computing-Context-Retrieval]] — 相关流程
