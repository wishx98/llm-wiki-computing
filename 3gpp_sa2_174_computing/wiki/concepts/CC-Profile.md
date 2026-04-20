---
title: "CC-Profile"
type: concept
tags: [6G, 策略, 通算协同, 资源模型]
sources: [raw/01-articles/S2-2602301_[KI#22, Solution#22.2 Variant #b update] Computing and communication coordination with CCCE.md]
last_updated: 2026-04-20
---

## 定义
通算配置文件 (Communication and Computing Profile, CC-Profile) 是描述 6G 算力业务对网络（通信）和算力环境（计算）联合需求的标准模板。

## 核心组成
一个 CC-Profile 通常包含多个备选选项（Variant），每个选项定义如下：
- **User Plane QoS Requirements**: 通信面的指标，包括 QoS Reference 或具体的带宽、时延参数，以及备选服务要求（Alternative Service Requirements）。
- **SHE Resource Requirements**: 计算面的指标，包括算力规模（FLOPS）、加速卡类型（Acceleration Profile）、内存（RAM）和存储要求。
- **Service Constraints (可选)**: 业务约束，例如 **[[Aggregated-Latency]]** (最大允许聚合时延预算)。

## 策略映射
**CC-Profile** 由 AF 触发或预配置，[[6G-PCF]] 根据其内容生成 **CC Policy**。[[CCCE]] 则根据该 Policy 选择最匹配的 SM Policy（下发给 SMF）和 SHE Policy（下发给 SHE Controller）。

## 关联连接
- [[CCCE]] — 策略执行方
- [[6G-PCF]] — 策略生成方
- [[Aggregated-Latency]] — 关键约束
- [[Computing-Session]] — 操作对象
