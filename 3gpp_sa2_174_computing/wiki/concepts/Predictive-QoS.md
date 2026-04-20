---
title: "Predictive-QoS"
type: concept
tags: [6G, QoS, 预测性调度]
sources: [raw/01-articles/S2-2602003-wasS2-2600605-23.800-01-KI#5-QoS-v1.md]
last_updated: 2026-04-19
---

## 定义
预测性 QoS（Predictive QoS）是一种超越传统"触发响应"模式的资源管理机制，通过感知当前的业务请求特征，提前预判并配置后续所需的网络资源。

## 典型场景
- **上行预测下行 (UL-to-DL Prediction)**: 
    - 终端在发送 AI 提示词（Prompt）的上行报文中携带 **[[Workload-Tag]]**。
    - 基站识别到"图像生成"请求，预判服务器即将在 200ms 后下发数 MB 的爆发流量。
    - 基站提前预留无线资源块，当流量到达时无需再次经过调度授权（SR/BSR）流程，极大降低抖动和时延。
- **自适应功耗管理**: 预测业务的交互频率，提前进入或退出低功耗模式（C-DRX）。

## 关联连接
- [[CAH]] — 技术载体
- [[Workload-Tag]] — 核心因子
- [[gNB]] — 执行主体
- [[Overall-Task-Latency]] — 优化指标
