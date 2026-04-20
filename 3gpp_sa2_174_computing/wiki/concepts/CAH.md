---
title: "CAH"
type: concept
tags: [6G, 包头结构, 业务感知]
sources: [raw/01-articles/S2-2602003-wasS2-2600605-23.800-01-KI#5-QoS-v1.md]
last_updated: 2026-04-19
---

## 定义
上下文感知包头（Context-Aware Header, CAH）是一个 16 位的轻量级协议垫层，插入在用户 IP 层与 3GPP SDAP 层之间，用于在加密隧道内提供业务意图信令。

## 结构组成
- **Service Category (3-bit)**: 标识应用大类（如 GenAI, XR, V2X）。
- **[[Workload-Tag]] (5-bit)**: 预测下行流量模式的"指示器"。
- **Context Quantifier (8-bit)**: 量化参数（如具体的时延预算或预估的数据量级）。

## 技术优势
- **摆脱加密盲区**: 位于 PDCP/SDAP 载荷起始位置，解密后可见，无需深度包检测（DPI）。
- **硬件友好**: 固定偏移设计，支持 gNB ASIC/FPGA 进行 $O(1)$ 复杂度的线速解析。
- **中间盒安全**: 由 UPF 在 N6 接口前剥离，对外表现为标准 IP 包，避免被传统互联网设备丢弃。

## 关联连接
- [[Predictive-QoS]] — 应用目标
- [[Encryption-Blindness]] — 解决难点
- [[Dual-Visibility]] — 交互模式
- [[6G-UPF]] / [[gNB]] — 处理网元
