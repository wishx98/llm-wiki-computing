---
title: "Virtual-Computing-Node"
type: concept
tags: [6G, 逻辑实体, 融合架构]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md]
last_updated: 2026-04-19
---

## 定义
虚拟计算节点（Virtual Computing Node）是 6G 通算融合架构中的一个逻辑概念，将 **6G-UPF** 与其后接或同址部署的 **算力站点 (Computing Site)** 视为一个统一控制的整体。

## 关键特征
- **双重控制**: 该逻辑节点同时受 **[[6G-SMF]]**（负责通信连接与路由）和 **[[CMF]]**（负责算力调度与管理）的控制。
- **协同纽带**: 它打破了传统网络与基础设施的界限，允许核心网对数据传输路径和数据处理过程进行联合配置。
- **部署形态**:
    - **同址部署 (Collocated)**: UPF 直接运行在算力设施上。
    - **紧耦合部署**: 算力站点作为 UPF 后方的一个逻辑 NF 或实体。

## 关联连接
- [[摘要-s2-2601968-nas-requested-computing-coordination]] — 来源
- [[6G-UPF]] — 通信组件
- [[Computing-Site]] — 算力组件
- [[6G-SMF]] / [[CMF]] — 控制主体
