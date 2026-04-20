---
title: "摘要-s2-2601897-compute-management-issues"
type: source
tags: [来源, 原始文件, 6G, 爱立信, 架构讨论]
sources: [raw/01-articles/S2-2601897_Discussion and coments on general issues and and solutions.md]
last_updated: 2026-04-19
---

## 核心摘要
爱立信在本文件中对核心网（CN）参与算力资源管理提出了深度质疑和建议。主要关注点包括：
1. **服务模型明确化**: 必须区分 UE 请求的是 IaaS（虚拟机、容器等硬件资源）还是 PaaS（运行环境、数据库等平台资源），这直接影响请求消息的设计和生命周期管理。
2. **管理权限与解耦**: 传统核心网网元与底层基础设施是解耦的，需明确网元如何获得管理算力资源的权限。
3. **术语统一**: 建议理清"算力节点（Compute Node）"与"算力站点（Compute Site）"的区别。
4. **生命周期闭环**: 提炼了算力生命周期的四个阶段：规划（Planning）、实例化（Instantiation）、管理/监控（Management）和释放（Releasing）。

## 关联连接
- [[Ericsson]] — 贡献者
- [[IaaS]] — 讨论对象
- [[PaaS]] — 讨论对象
- [[Compute-Lifecycle-Management]] — 核心概念
- [[Computing-Site]] — 术语讨论
- [[Computing-Resource]] — 资源定义分层
