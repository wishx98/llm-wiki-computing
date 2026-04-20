---
title: "摘要-s2-2601968-nas-requested-computing-coordination"
type: source
tags: [来源, 原始文件, 6G, 联想, NAS, 通算协同]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md]
last_updated: 2026-04-19
---

## 核心摘要
联想（Lenovo）针对方案 Variant C 提供了详尽的流程描述。核心特征是终端（UE）通过 **Computing NAS** 信令直接向核心网 **CMF** 请求计算服务。该方案强调了 **通算协同 (Comm-Comp Coordination)** 的双重实现：在控制面，CMF/SMF/PCF 联合决策，通过调整算力资源（如增加处理能力）来补偿网络时延，保证 E2E 时延目标；在用户面，算力站点直接将处理指标（如处理时延、结果生成率）通过 GTP-U 等协议反馈给 RAN。此外，引入了 **虚拟计算节点 (Virtual Computing Node)** 的概念来统合 UPF 与算力资源。

## 关联连接
- [[Lenovo]] — 贡献者
- [[CMF]] — 中央管理网元
- [[Computing-NAS]] — 专属信令机制
- [[Control-Plane-Coordination]] — 协同方式
- [[User-Plane-Coordination]] — 协同方式
- [[E2E-Delay-Optimization]] — 核心目标
- [[Virtual-Computing-Node]] — 逻辑实体
- [[6G-SMF]] / [[6G-UPF]] — 协同实体
