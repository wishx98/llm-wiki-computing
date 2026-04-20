---
title: "6G-Computing-Architecture"
type: concept
tags: [6G, 架构, 综述, 牵头人]
sources: [raw/01-articles/S2-2603513_was3401_Solution_for_6G_KI#22_pen holder paper_v1.md]
last_updated: 2026-04-20
---

## 综述
6G 算力架构在 3GPP SA2 #174 会议通过牵头人报告 (S2-2603513) 进行了全面整合。架构方案被划分为五个主要组别，旨在满足 KI#22 定义的各原子性能需求。

## 方案分类 (Solution Groups)
### 1. 基础要求与定义 (Solution #22.1)
确立了算力业务的基础术语。
- **牵头厂商**: Nokia, LGE, Apple 等 12 家直联厂商。
- **核心逻辑**: 3GPP 专注于通算连接与策略协调，具体的算力生命周期管理 (LCM) 遵循行业云原生标准。

### 2. 通算协同架构 (Solution #22.2 - #22.4)
定义了通信与计算资源如何联合调度。
- **Variant A/C/D/E/F/H**: 核心网控制型（由 SMF, CMF, CCF 或 CCCE 决策）。
- **Variant B**: 外部环境受控型（由 SHE Controller 协作）。
- **Variant G**: AF 主导型（利用 5G 边缘计算演进机制）。
- **Variant I**: CCF 受控型。

### 3. 授权机制 (Solution #22.5 - #22.8)
- **Policy-based**: 基于 URSP 或增强型算力策略。
- **Non-policy-based**: 基于 NEF 或 AMF 授权。
- **Subscription-based**: 基于用户订阅数据。
- **Framework-based**: 认为算力资源应由算力框架自行授权。

### 4. 能力开放 (Solution #22.9 - #22.10)
涉及算力能力指标（算力延迟、DNAI、IP 地址）向 AF 的暴露。

### 5. 监控与管理 (Solution #22.11 - #22.15)
定义了 CMF、CCCE、EASDF 或 SHE Controller 如何监控算力节点状态。

## 开放性问题 (FFS)
目前仍存在 29 项 Editor's Notes (EN)，涉及：
- **站点位置争议**: 算力站点究竟位于核心网内部 (CN) 还是受控数据网络 (SHE/DN)。
- **跨代移动性**: 6G 算力会话在移动到 5G 时的处理。
- **终端感知识别**: 调制解调器 (Modem) 如何识别并解析应用层的算力请求。

## 关联连接
- [[摘要-s2-2603513-penholder-summary]] — 来源
- [[6G-Computing-Service]] — 相关业务
- [[Computing-Site]] — 物理载体
- [[CCCE]] — 核心网元
