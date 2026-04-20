---
title: "Distributable-Application-Component"
type: concept
tags: [6G, 应用架构, 可分发组件]
sources: [raw/01-articles/S2-2601896_new solution based on SA6 and AF based solutions_r1.md]
last_updated: 2026-04-19
---

## 定义
可分发应用组件（Distributable Application Component）是指可以根据算力资源可用性和时延要求，选择在终端（UE）或服务器/算力站点（Server/Computing Site）上运行的软件部分。

## 关键信息
- **应用构成**: 一个完整的应用由多类组件构成：
    - **前端组件 (Frontend)**: 必须在 UE 运行（如 UI、硬件交互）。
    - **后端组件 (Backend)**: 必须在中心服务器运行（如数据库、安全要求极高部分）。
    - **可分发组件 (Distributable)**: 灵活性最高，例如渲染逻辑、AI 推理逻辑，当 6G 计算服务能提供足够算力和低时延连接时，可从 UE "卸载"（Offload）到算力站点。
- **协同目标**: 确保可分发组件在云端运行时，能满足与前端组件交互的时延约束（例如 < 20ms）。

## 关联连接
- [[摘要-s2-2601896-af-edge-coordination]] — 来源
- [[Compute-Offloading]] — 实现过程
- [[Computing-Task]] — 业务体现
