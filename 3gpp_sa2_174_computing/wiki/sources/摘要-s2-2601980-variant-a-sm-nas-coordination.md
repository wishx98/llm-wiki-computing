---
title: "摘要-s2-2601980-variant-a-sm-nas-coordination"
type: source
tags: [来源, 原始文件, 6G, OPPO, Variant-A, SM-NAS, K8s]
sources: [raw/01-articles/S2-2601980 [KI#22, Solution#22.2, Update] Variant A of Solution 22.2 v2.md]
last_updated: 2026-04-19
---

## 核心摘要
OPPO 在本方案中对 Variant A（基于会话管理信令的通算协同）进行了深入描述。方案的核心公式为：**总任务时延 = 通信延时 + 计算延时**。在这种架构下，CP 网元（如 SMF）根据 UE 的需求拆分时延配额，并向用户面下发 **[[Computing-Enforcement-Rule]]**（计算执行规则）。一大亮点是提出在算力节点与算力站点之间引入 **[[K8s-API-Integration]]**（如 Kubernetes 接口），使 6G UPF 能以插件化、按需调用 API 的方式分配资源并获取负载报告。

## 关联连接
- [[OPPO]] — 贡献者
- [[Overall-Task-Latency]] — 核心公式
- [[Computing-Enforcement-Rule]] — 指令机制
- [[K8s-API-Integration]] — 接口实现
- [[SM-NAS-Computing-Request]] — 接入方式
- [[6G-SMF]] — 协同大脑
- [[6G-UPF]] — 执行实体
- [[Virtual-Computing-Node]] — 逻辑统合
