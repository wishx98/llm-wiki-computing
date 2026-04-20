---
title: "FLOPS-TOPS"
type: concept
tags: [6G, 性能指标, 算力单位]
sources: [raw/01-articles/S2-2601934_Solution_22.11_Update_for_6G_KI#22_bullet_3a.md]
last_updated: 2026-04-19
---

## 定义
FLOPS 和 TOPS 是 6G 架构中用于衡量和报告算力资源性能的标准单位。

## 关键单位
- **FLOPS (Floating-Point Operations Per Second)**: 每秒浮点运算次数。通常用于衡量科学计算和某些 AI 训练任务的性能。
- **TOPS (Tera Operations Per Second)**: 每秒万亿次操作。通常用于衡量 AI 推理芯片（如 NPU、GPU 在低精度下）的峰值性能。

## 在 6G 中的应用
- **状态报告**: 算力节点通过 **[[6G4c-Reference-Point]]** 向上报送其当前可用的总算力（如 500 TOPS）及空闲比例。
- **资源分配**: 核心网根据任务所需的绝对算力数值（如任务需要 10 TOPS 的推理能力）来选择合适的算力节点。

## 关联连接
- [[Computing-Resource-Monitoring]] — 应用场景
- [[Computing-Resource]] — 对应指标
- [[CMF]] — 接收方
- [[Computing-Node]] — 上报方
