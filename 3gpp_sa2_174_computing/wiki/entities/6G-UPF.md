---
title: "6G-UPF"
type: entity
tags: [6G, 用户面, 算力集成]
sources: [raw/01-articles/S2-2602003-wasS2-2600605-23.800-01-KI#5-QoS-v1.md, raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md, raw/01-articles/S2-2602122-[KI22, resubmitted] Enabling computing service access and offload.md]
last_updated: 2026-04-20
---

## 定义
6G 用户面功能（User Plane Function, UPF）在算力系统架构中，不仅承载流量路由，还作为算力接入的锚点和用户面协同的核心中转。

## 6G 计算场景的增强
- **路径编程**: 接收 SMF 指令，配置 PDR/FAR 规则，通过 N6 接口将业务流导向特定的 **[[CSF]]** 或算力站点。
- **数据转发与锚定**: 将来自终端的算力数据流量转发至算力站点，支持通过 **Ny** 接口（N6 的增强版）连接到外部管理的 **Compute DN**。
- **通算协同参与**:
    - **用户面反馈**: 接收来自算力站点的实时运行指标（处理延时等），并透传给 **[[aNB]]/RAN**。
    - **资源管理**: 支持通过 **[[K8s-API-Integration]]** (如 Kubernetes) 主动分配算力站点资源并获取负载报告。
    - **逻辑统合**: 作为 **[[Virtual-Computing-Node]]** 的核心组成部分。在某些方案中，UPF 被视为算力节点的接入侧，负责根据 **[[Computing-Enforcement-Rule]]** 执行流量检测（PDR）与算力锚定。
- **CAH 处理**: 
    - **元数据提取**: 从用户面报文中解析 **[[CAH]]** (上下文感知包头)，提取 **[[Workload-Tag]]** 用于智能路由决策（如 Edge/MEC 分流）。
    - **包头剥离**: 在报文由 N6 接口离开 6G 系统前，必须剥离 16 位的 CAH 垫层，以确保对外部数据网络的兼容性（Middlebox Safety）。
- **QoS 映射**: 负责对计算流进行流量识别和精细化的 QoS 映射处理。

## 关联连接
- [[Virtual-Computing-Node]] — 归属实体
- [[6G-SMF]] — 命令来源
- [[User-Plane-Coordination]] — 功能体现
