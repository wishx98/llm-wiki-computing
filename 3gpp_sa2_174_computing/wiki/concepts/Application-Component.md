---
title: "Application-Component"
type: concept
tags: [6G, 应用架构, 算力卸载, 任务划分]
sources: [raw/01-articles/S2-2602429_was_0480-[KI22, Solution 22.1, update] Architectural requirements on 6G Computing support.md]
last_updated: 2026-04-20
---

## 定义
应用组件 (Application Component) 是指实现特定应用功能的软件单元。在 6G 算力框架中，一个完整的应用由多个相互协作的应用组件构成。

## 分类
1. **Frontend Application Component (前端组件)**: 
    - 必须运行在 UE 上。
    - 原因：直接与终端硬件交互（如摄像头、显示器、传感器）。
2. **Backend Application Component (后端组件)**: 
    - 必须运行在中心化服务器或云端。
    - 原因：涉及无法移动的数据库、高安全性要求的存储或全局共享数据。
3. **Distributable Application Component (可分发组件)**:
    - **核心特性**: 可以在 UE、算力站点 (Computing Site) 或中心应用服务器之间灵活部署。
    - **卸载逻辑**: 当 6G 系统能提供满足时延要求的连接且算力站点有空闲资源时，该组件可从 UE 迁移至算力站点运行，从而降低终端功耗或提升处理性能。

## 意义
通过划分应用组件，6G 系统可以更精准地识别哪些任务是可以被“卸载”的，并针对 **Distributable Component** 进行通算联合调度。

## 关联连接
- [[Computing-Service]] — 背景
- [[Computing-Site]] — 部署目标
- [[Aggregated-Latency]] — 部署决策指标
