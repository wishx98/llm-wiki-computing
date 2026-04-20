---
title: "摘要-s2-2602102-distributed-computing-cn-dn"
type: source
tags: [来源, 原始文件, 6G, CATT, 分布式计算]
sources: [raw/01-articles/S2-2602102 pCR vs. 23801-01 KI#22_Support distributed computing_v1.md]
last_updated: 2026-04-19
---

## 核心摘要
大唐（CATT）在本方案中提出了支持 6G 核心网（CN）与数据网络（DN）之间分布式计算的方案。
- **分布式处理顺序**: 方案支持任务的串行处理，例如先在靠近终端的 CN 侧站点（CS-CN）进行数据预处理/清洗，再流转至远端的 DN 侧站点（CS-DN）进行大规模分析。
- **路由模型**: 提出了两种连接模型：(a) 算力站点直接相连；(b) 通过 UL CL UPF 实现分流转发。
- **控制逻辑**: CCF 负责确定站点的处理顺序，并向 SMF 下发包含处理顺序、各站点 IP 地址的路由规则。

## 关联连接
- [[CATT]] — 贡献者
- [[Distributed-Computing]] — 核心概念
- [[Prior-Post-Processing]] — 业务逻辑
- [[CCF]] — 指挥中心
- [[UL-CL-UPF]] — 用户面组件
