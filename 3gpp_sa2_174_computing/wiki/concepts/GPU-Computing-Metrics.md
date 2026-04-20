---
title: "GPU-Computing-Metrics"
type: concept
tags: [6G, 资源监测, GPU]
sources: [raw/01-articles/S2-2602037 [KI#22, solution#22.12, update] Computing service resource information exposure to AF.md]
last_updated: 2026-04-19
---

## 定义
GPU 计算指标是 6G 核心网在监测算力站点状态时，针对图形处理单元（GPU）和AI加速器的专用性能评价集。

## 核心指标
- **GPU Memory Usage (显存占用)**: 反映了 AI 模型或渲染缓冲区对显存的占用情况。
- **GPU Compute Utilization (计算利用率)**: 当前 GPU 核心的繁忙程度。
- **GPU Performance (性能表现)**: 通常以 TFLOPS 或独占百分比衡量。
- **VRAM Capacity (显存容量)**: 该站点能提供的总显存上线。

## 采集场景
由算力站点实时上报给 **[[CSMF]]**，并在满足阈值条件时通过事件通知发送给外部 AF，辅助其进行任务切片或模型切换决策。

## 关联连接
- [[CSMF]] — 采集网元
- [[Computing-Resource-Monitoring]] — 关联活动
- [[FLOPS-TOPS]] — 通用衡量单位
- [[摘要-s2-2602037-csmf-resource-exposure]] — 来源
