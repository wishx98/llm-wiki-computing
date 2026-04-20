---
title: "CCC"
type: concept
tags: [6G, 算力抽象, 资源分类]
sources: [raw/01-articles/S2-2602040.md, raw/01-articles/S2-2602043.md]
last_updated: 2026-04-19
---

## 定义
计算能力等级（Computing Capability Class, CCC）是 6G 通算融合架构中提出的一种资源抽象机制，将异构的底层算力（CPU、GPU、加速器）封装为标准化的能力等级。

## 关键指标
| 属性 | 说明 | 示例 |
| --- | --- | --- |
| **CCC ID** | 唯一标识符 | CCC#1, CCC#2 |
| **Resource Type** | 硬件资源类型 | GPU+Accelerator, CPU Cluster |
| **Compute Capa** | 计算吞吐量 | 40 TFLOPS / 120 TOPS |
| **Memory Capa** | 内存/显存容量 | 100 GB, 1 TB |
| **Execution Mode** | 核心用途 | AI Inference, XR Rendering |

## 分类
- **标准 CCC (Standard)**: 由 3GPP 标准定义，确保跨运营商的互操作性。
- **自定义 CCC (Custom)**: 由运营商根据自身基础设施特点定义，用于特定业务优化。

## 关联连接
- [[CCCP]] — 进一步的地理化剖面
- [[CCF]] — 抽象执行网元
- [[Intent-Based-Compute-Request]] — 应用交互模式
- [[Variant-H]] — 应用场景方案
