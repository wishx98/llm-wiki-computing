---
title: "CCF 与 CMF 定义及职能辨析"
type: synthesis
tags: [6G, CCF, CMF, 网元, 算力控制]
sources: [wiki/entities/CCF.md, wiki/entities/CMF.md]
last_updated: 2026-04-20
---

# CCF 与 CMF 定义及职能辨析

## 核心定义

**CCF（Computing Control Function，计算控制功能）** 和 **CMF（Computing Management Function，计算管理功能）** 是 6G 核心网中引入的两个新网元，分别承担"控制决策"与"资源管理"的职能，但在不同厂商方案中存在功能重叠与命名变体 [[CCF]] [[CMF]]。

## CCF：算力控制面的中央决策网元

CCF 的核心职责包括：
- **算力抽象管理**: 维护 [[CCC]]（算力能力等级）与 [[CCCP]]（算力等级剖面），将底层异构算力抽象后向 AF 或终端开放。
- **中央授权与认证**: 担任 6G 算力业务的中央控制点，验证 UE/AF 的身份、订阅项及地理/时间策略。
- **分布式计算编排**: 确定分布式任务的处理顺序并生成路径引导规则。
- **会话协同**: 在 [[Variant-H]] 方案中作为中央决策网元，通过 PCF 实现计算会话与 PDU 会话的策略绑定。
- **业务连续性决策**: 在站点切换时计算所需最小延迟并通知 UE 决策。
- **环境部署触发**: 触发 [[Model-Management]] 在选定站点上安装环境或部署模型。

## CMF：算力资源状态的管理与监控网元

CMF 的核心职责包括：
- **请求处理**: 处理来自多种接入变体的算力任务请求（如 Lenovo 的 [[Computing-NAS]]、OPPO 的 [[SM-NAS-Computing-Request]]、小米的 [[Variant-E]] 用户面信令）。
- **联合准入与安置**: 同时评估网络路径 KPI（RTT、拥塞）与算力资源可用性，计算端到端成本。
- **算力概览管理**: 维护并匹配 [[Computing-Resource-Profile]]，确保节点能力与业务需求精确匹配。
- **资源监控与预测**: 整合 [[NWDAF]] 的预测数据与算力节点的实时负载上报。
- **业务连续性管理**: 在终端移动或负载波动时触发站点重选及 [[Computing-Context-Retrieval]]。
- **策略下发**: 向用户面网元下发 [[Computing-Enforcement-Rule]] 或向算力站点下发资源预留指令。

> **命名变体**: 在 Rakuten 的方案中，CMF 被称为 **CMCF**（Compute Service Management & Coordination Function）。

> **部署方式**: CMF 可独立部署、与 [[6G-SMF]] 合设，或与 NRF 合设。一个 CMF 可收集多个算力节点信息，一个算力节点也可向多个 CMF 上报。

## 关键差异与协同关系

| 维度 | CCF | CMF |
|------|-----|-----|
| 核心定位 | 策略与编排控制 | 资源监控与实时管理 |
| 抽象层级 | 算力等级/剖面抽象 | 节点级资源状态/Profile |
| 关键决策 | 授权认证、会话绑定、分布式编排 | 联合准入、站点重选、上下文迁移 |
| 主要交互 | PCF、AF、UE、6G-SM | Computing-Node、NWDAF、6G-SMF |

在实际架构中，二者形成"监控-控制"闭环：**CMF** 负责从 [[Computing-Node]] 获取实时算力负载并同步至核心网，**CCF** 则基于这些信息进行上层决策。值得注意的是，不同厂商对二者的职责划分存在分歧，部分方案中 CMF 也承担了算网协同增强的功能，边界并不绝对清晰。
