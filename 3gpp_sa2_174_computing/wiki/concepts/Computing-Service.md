---
title: "Computing-Service"
type: concept
tags: [6G, 定义, 算力, 谢绝]
sources: [raw/01-articles/S2-2602429_was_0480-[KI22, Solution 22.1, update] Architectural requirements on 6G Computing support.md, raw/01-articles/S2-2602286-rev-S2-2600477_v2.md]
last_updated: 2026-04-20
---

## 定义
**6G 算力业务 (6G Computing Service)** 是一种由 6G 网络提供的服务，其本质是利用驻留在 **[[Computing-Site]]** 的算力资源，并通过 UE 与用户平面功能（UPF）之间的用户面连接，为用户（UE）或第三方（AF）执行应用负载（Workloads）的行为。

## 架构要求
- **卸载特质**: 主要用于支持 UE 将计算密集型任务（如 XR 渲染、AI 训练）卸载到运营商托管的计算环境。
- **组成要素**: 必须包含 **算力资源** (Computing Resource) 和 **通信连接** (Communication Connectivity) 两部分。
- **协议无关性 (Apple 主张)**: 6G 系统应支持多样化的算力框架（如 IaaS, PaaS, GPU-over-IP），且不应感知具体的应用层协议细节。

## 关键分类 (Nokia 建议)
算力业务通过将应用分解为不同的 **[[Application-Component]]** (应用组件) 来实现：
1. **Frontend**: 必须在终端运行（如 UI、传感器交互）。
2. **Backend**: 必须在服务器侧运行（如核心数据库、安全中心）。
3. **Distributable (可分发组件)**: 可以根据资源与时延配比，在终端或 6G 算力站点间灵活切换运行的组件。

## 关联连接
- [[摘要-s2-2602429-architectural-requirements-definitions]] — 来源
- [[Computing-Site]] — 物理载体
- [[Application-Component]] — 逻辑单元
- [[Aggregated-Latency]] — 核心服务指标
