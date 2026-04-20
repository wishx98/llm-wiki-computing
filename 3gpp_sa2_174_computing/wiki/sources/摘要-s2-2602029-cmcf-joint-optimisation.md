---
title: "摘要-s2-2602029-cmcf-joint-optimisation"
type: source
tags: [来源, 原始文件, 6G, 乐天, CMCF, 联合优化]
sources: [raw/01-articles/S2-2602029 Solution-for-KI#22-6G Computing Support.md]
last_updated: 2026-04-19
---

## 核心摘要
乐天移动（Rakuten Mobile）在本方案中提出了一套完整的 6G 计算服务管理架构。核心网通过引入 **[[CSEF]]** (由 NEF 扩展) 和 **[[CMCF]]** (计算服务管理与协同功能) 实现对算力资源的闭环管控。
- **联合优化**: 方案强调 **[[Joint-Admission-Placement]]**，即同时评估算力可用性与网络路径可行性。
- **分析辅助**: 引入 **[[NWDAF]]** 提供移动性风险和路径时延预测，辅助选站。
- **安全访问**: 通过 **[[Compute-Token]]** 机制实现端到端的业务授权。
方案提倡计算站点部署在核心网内部且邻近 UPF，以最大程度降低端到端时延。

## 关联连接
- [[Rakuten]] — 贡献者
- [[CSEF]] — 开放网元
- [[CMCF]] — 协同大脑
- [[NWDAF]] — 分析组件
- [[Joint-Admission-Placement]] — 核心机制
- [[Compute-Token]] — 安全凭据
- [[Predictive-Analytics-Selection]] — 选站策略
