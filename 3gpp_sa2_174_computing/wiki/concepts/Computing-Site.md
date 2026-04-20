---
title: "Computing-Site"
type: concept
tags: [6G, 架构, 算力站点, SHE]
sources: [raw/01-articles/S2-2603513_was3401_Solution_for_6G_KI#22_pen holder paper_v1.md, raw/01-articles/S2-2602429_was_0480-[KI22, Solution 22.1, update] Architectural requirements on 6G Computing support.md]
last_updated: 2026-04-20
---

## 定义
**算力站点 (Computing Site)** 是 6G 网络中由算力资源（如 CPU/GPU 硬件、固件等）组成的物理或逻辑实体，用于部署和运行应用组件（Application Components）。

## 部署模型 & 争议点
根据网络拓扑，算力站点的部署位置是目前 3GPP SA2 的主要争议点 (S2-2603513)：
- **观点 A (12厂商联合)**: 算力站点应位于 **[[Service-Hosting-Environment]]** (SHE) 或 **DN**，强调其非核心网属性。
- **观点 B (TR 基准)**: 算力站点可位于 **6G CN** 或 **DN**，允许与 UPF 深度融合。
- **现状**: 暂以 Editor's Note 形式挂起分歧，后续将明确“核心网内部署”的具体架构语义。

## 关键特性
- **生命周期管理 (LCM)**: 算力站点的资源管理与工作负载实例化遵循 **CNCF/Kubernetes** 等行业标准，3GPP 核心网主要负责与其进行 QoS 协调和资源预留，而非重新定义其内部管理细节。
- **与 UPF 的关系**: 
    - 算力站点通过 N6（或其 6G 演进接口）连接到 UPF。
    - 在某些部署中，算力站点可以与 [[6G-UPF]] 物理合设 (Co-located)，以实现极低时延。
- **监控指标**: 包括算力状态（就绪/繁忙）、硬件能力、能效指标以及算力延迟。

## 关联连接
- [[6G-Computing-Architecture]] — 综述
- [[Computing-Service]] — 相关业务
- [[SHE-Controller]] — 管理实体
- [[6G-UPF]] — 网络锚点
- [[Application-Component]] — 承载对象
