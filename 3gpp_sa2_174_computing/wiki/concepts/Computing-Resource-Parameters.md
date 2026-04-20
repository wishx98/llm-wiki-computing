---
title: "Computing-Resource-Parameters"
type: concept
tags: [6G, 算力建模, 指标]
sources: [raw/01-articles/S2-2602106 pCR vs. 23801-01 KI#22_computing resource information collection.md]
last_updated: 2026-04-19
---

## 定义
算力资源参数（Computing Resource Parameters）是 6G 网络对异构算力进行刻画的一系列标准元数据，用于资源收集、监测和调度。

## 参数明细
- **资源类型 (Type)**: CPU, GPU, NPU, Storage, Memory, Engine, Model 等。
- **能力容量 (Capacity)**: 核心数、显存大小、存储容量等定量数值。
- **服务类别 (Service Type)**: AI 训练、XR 渲染、边缘计算任务等。
- **模型特征 (Model Info)**: 类型、复杂度、尺寸。
- **位置属性**: IP 地址、FQDN、TAI 覆盖范围。
- **可用性**: 运行时段、状态（正常/维护/故障）。
- **实时状态 (Utilization)**: 利用率百分比（如 GPU Utilization %）。

## 关联连接
- [[摘要-s2-2602106-computing-resource-collection]] — 来源
- [[CCF]] / [[CMF]] — 收集方
- [[GPU-Computing-Metrics]] — 相关指标
- [[CCC]] — 抽象等级模型
