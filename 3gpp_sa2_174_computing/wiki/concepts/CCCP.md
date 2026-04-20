---
title: "CCCP"
type: concept
tags: [6G, 算力开放, 资源剖面]
sources: [raw/01-articles/S2-2602043.md]
last_updated: 2026-04-19
---

## 定义
计算能力等级剖面（Computing Capability Class Profiling, CCCP）是 **[[CCC]]** 的地理化和实例化的映射，用于描述特定位置算力节点的性能与时延特性。

## 数据结构示例
| CCCP ID | 关联 CCC ID | 预估时延 (Latency) | 节点名称 (Node Name) |
| --- | --- | --- | --- |
| CCCP#1 | CCC#1 (AI推理) | 20 ms | Local-Edge-01 |
| CCCP#2 | CCC#2 (XR渲染) | 50 ms | Regional-Cloud-02 |

## 暴露机制
- **请求/响应**: AF 主动查询可用的 CCCP 列表。
- **订阅/通知**: 当算力站点状态（如时延增加、负载过高）发生变化时，**[[CCF]]** 自动向 AF 发送 CCCP 更新通知。

## 关联连接
- [[CCC]] — 能力基础定义
- [[CCF]] — 信息分发网元
- [[Intent-Based-Compute-Request]] — 消费模式
