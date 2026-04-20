---
title: "Computing-Resource-Profile"
type: concept
tags: [6G, 注册, 描述符]
sources: [raw/01-articles/S2-2602073 (revision of 0174)_KI#22 (Computing).md]
last_updated: 2026-04-20
---

## 定义
算力资源概况（Computing Resource Profile）是计算节点在向 6G 核网络（CMF/CCF）注册时提供的标准化数据结构，描述了该站点可用的各种能力。

## 包含信息
- **资源类型**: CPU, NPU, GPU 等。
- **任务特化能力**: AI 训练、AI 推理、XR 渲染、AR/VR 数据预处理等针对特定 work task 的能力描述。
- **位置标识**: 节点的 FQDN 或 IP 地址。
- **负载指标**: 
    - **当前处理负载**: 针对特定任务的实时处理时间或吞吐量。
    - **可用负载**: 剩余处理能力空间。

## 关联连接
- [[摘要-s2-2602073-cmf-monitoring-profile]] — 来源
- [[CMF]] — 注册目标
- [[Computing-Node]] — 上报主体
- [[Computing-Resource-Parameters]] — 构成指标
