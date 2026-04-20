---
title: "Computing-QoS"
type: concept
tags: [6G, QoS, 计算服务质量]
sources: [raw/01-articles/S2-2601857Solution for KI#22 of 6G architecture enhancement to support 6G computing service - r04.md]
last_updated: 2026-04-19
---

## 定义
计算 QoS（Computing QoS）是指 6G 系统为执行计算任务或计算任务结果提供的可量化保障水平。

## 关键信息
- **包含参数**:
    - **时延相关**: 包括处理时延（Processing Delay）和通信时延（Communication Delay）。处理时延取决于消耗的计算资源量和类型。
    - **性能指标**: 取决于特定任务。例如 AI 模型训练的参数数量、推理精度、感知精度、定位分辨率等。
- **协同逻辑**:
    - CCF 负责将计算 QoS 翻译/转换为所需的计算资源量（CPU/GPU 周期等）。
    - 6G SM 配合进行通信时延（如 N6 时延）的测量和保障。

## 关联连接
- [[摘要-s2-2601857-6g-computing-service]] — 来源
- [[CCF]] — 转换与决策主体
- [[6G-SM]] — 通信保障方
- [[Computing-Task]] — 约束对象
