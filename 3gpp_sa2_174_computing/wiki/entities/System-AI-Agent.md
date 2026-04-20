---
title: "System-AI-Agent"
type: entity
tags: [6G, AI, 意图解析]
sources: [raw/01-articles/S2-2601857Solution for KI#22 of 6G architecture enhancement to support 6G computing service - r04.md]
last_updated: 2026-04-19
---

## 定义
系统 AI 代理（System AI Agent）是 6G 架构中负责处理智能任务和意图解析的功能实体。

## 关键信息
- **功能职责**:
    - **意图解析 (Intent Resolution)**: 当计算任务请求以"意图"（Intent Information）形式给出时，System AI Agent 负责将其解析并转换为具体的计算资源需求（如硬件规格、执行环境等）。
- **协同逻辑**:
    - CCF 在收到包含意图的请求后，会请求 System AI Agent 进行解析，以确定真实的算力需求。

## 关联连接
- [[摘要-s2-2601857-6g-computing-service]] — 来源
- [[CCF]] — 协作网元
- [[Intent-Information]] — 处理对象
