---
title: "Model-Management"
type: entity
tags: [6G, 网元, 模型管理]
sources: [raw/01-articles/S2-2601857Solution for KI#22 of 6G architecture enhancement to support 6G computing service - r04.md]
last_updated: 2026-04-19
---

## 定义
模型管理（Model Management, MM）是 6G 核心网中引入的新网元，专门负责在算力站点上进行资源的安装和模型的生命周期管理。

## 关键信息
- **功能职责**:
    - 负责镜像拉取（Pulling of mirror）。
    - 在算力站点上部署应用实例或 AI 模型（Instantiation deployment）。
    - 响应 CCF 的触发，在选定的站点上快速安装计算任务所需的环境或资源。
- **背景**: 
    - 如果选定的算力站点尚未部署特定任务所需的 AI 模型或运行环境，CCF 会指示 MM 进行即时安装。

## 关联连接
- [[摘要-s2-2601857-6g-computing-service]] — 来源
- [[CCF]] — 指令来源
- [[Computing-Site]] — 部署目标
