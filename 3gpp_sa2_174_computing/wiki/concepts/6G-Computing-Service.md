---
title: "6G-Computing-Service"
type: concept
tags: [6G, 定义, 算力服务]
sources: [raw/01-articles/S2-2602089 [KI#22, bullet#1] Architecture Requirements, Definitions and Computing Resources.md]
last_updated: 2026-04-20
---

## 定义
6G 算力服务（6G Computing Service）是指通过 6G 核心网控制，使得运营商能够利用部署在 **[[Service-Hosting-Environment]]** (SHE) 中的计算资源来满足业务需求的一种服务。

## 核心目的
1. **时延降低**: 通过在靠近终端接入点的 SHE 中托管业务实例，减少端到端时延并降低传输网负载。
2. **能力开放**: 允许 6G 核心网向第三方应用（终端 APP 或外部服务器）暴露算力相关信息，使其能够高效使用运营商控制下的算力资源。

## 架构要求
- **可移植性 (Portability)**: 应用逻辑应与云环境保持一致，避免因适配 3GPP 架构而进行大规模修改。
- **差异化授权**: 运营商可针对不同终端或业务实施等级化隔离和授权。
- **动态伸缩**: 支持根据实时服务负载动态实例化算力资源，体现可持续性与能效要求。

## 关联连接
- [[摘要-s2-2602089-6g-computing-definitions-requirements]] — 来源
- [[Service-Hosting-Environment]] — 托管载体
- [[Logical-Computing-Site]] — 拓扑抽象
- [[Samsung]] — 方案定义方
