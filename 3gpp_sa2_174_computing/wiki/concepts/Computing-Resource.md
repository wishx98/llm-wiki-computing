---
title: "Computing-Resource"
type: concept
tags: [6G, 计算资源, 算力分类]
sources: [raw/01-articles/S2-2601857Solution for KI#22 of 6G architecture enhancement to support 6G computing service - r04.md, raw/01-articles/S2-2601897_Discussion and coments on general issues and and solutions.md]
last_updated: 2026-04-19
---

## 定义
计算资源（Computing Resource）是指提供执行计算任务所需的处理、存储能力及运行环境的硬件和/或软件集合。

## 关键信息
- **关键指标**:
    - **算力容量**: 使用 **[[FLOPS-TOPS]]** 衡量。
    - **网络要求**: 时延（Latency）、吞吐量（Throughput）。
    - **资源要求**: 计算资源类型（CPU/GPU）、存储需求（Storage）。
- **服务层级**: 算力资源的提供可分为不同的层级：
    - **[[IaaS]] (基础设施级)**: 提供 vCPU、vGPU、虚拟机、容器、存储等。
    - **[[PaaS]] (平台级)**: 提供运行时环境、数据库、AI 框架、中间件等。
- **具体形态**: 包括 CPU 周期、GPU 处理压力、物理内存及持久化存储等。
- **核心网角色**: 核心网需要感知这些资源的可用性状态，并根据任务需求进行分配或生命周期管理协同。

## 关联连接
- [[摘要-s2-2601857-6g-computing-service]] — 来源
- [[摘要-s2-2601897-compute-management-issues]] — 来源
- [[IaaS]] — 基础设施层
- [[PaaS]] — 平台层
- [[Computing-Task]] — 资源消费者
