---
title: "Intent-Information"
type: concept
tags: [6G, 意图网络, 计算请求]
sources: [raw/01-articles/S2-2601857Solution for KI#22 of 6G architecture enhancement to support 6G computing service - r04.md]
last_updated: 2026-04-19
---

## 定义
意图信息（Intent Information）是一种结构化的语义信息，用于描述计算任务并承载用户的原始意图。

## 关键信息
- **作用**: 用户无需指定具体的硬件需求，只需描述想要实现的目标（例如："根据我的意图生成一段视频"）。
- **处理流程**:
    - CCF 接收到包含意图的请求后，通过 System AI Agent 将其解析为真实的算力需求（如 GPU 规格等）。
- **标准参考**: TR 22.870 第 6.33 节中定义的 AI 文本转视频（text-to-video）生成即是一个典型应用场景。

## 关联连接
- [[摘要-s2-2601857-6g-computing-service]] — 来源
- [[System-AI-Agent]] — 解析主体
- [[Computing-Task]] — 映射对象
