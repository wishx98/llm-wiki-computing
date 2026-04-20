---
title: "摘要-s2-2602003-cah-predictive-qos"
type: source
tags: [来源, 原始文件, 6G, Google, CAH, Predictive-QoS]
sources: [raw/01-articles/S2-2602003-wasS2-2600605-23.800-01-KI#5-QoS-v1.md]
last_updated: 2026-04-19
---

## 核心摘要
Google 在本方案中针对 6G 业务（如生成式 AI、混合媒体）在加密环境下的调度瓶颈，提出了 **上下文感知包头 (CAH)**。CAH 是一个 16 位的轻量级垫层，位于 IP 与 SDAP 层之间。
1. **解决加密盲区**: 允许 RAN 和 Core 在不解密应用负载的前提下识别业务意图（如 AI 提示词）。
2. **预测性 QoS**: 通过上行报文中的 **[[Workload-Tag]]** 预测即将到来的下行流量模式（如文本流与图像爆发现象），实现主动资源预留。
3. **双重可见性**: 基站执行 $O(1)$ 硬件级解析用于实时调度；UPF 提取元数据用于智能路由，并在报文离开 6G 系统前将其剥离以确保兼容性。

## 关联连接
- [[Google]] — 贡献者
- [[CAH]] — 核心技术
- [[Predictive-QoS]] — 关键使能能力
- [[Encryption-Blindness]] — 解决的问题
- [[Dual-Visibility]] — 架构原则
- [[Workload-Tag]] — 预测因子
- [[6G-UPF]] — 报送与剥离实体
- [[gNB]] — 硬件解析实体
