---
title: "SM-NAS-Computing-Request"
type: concept
tags: [6G, 信令, 接入方式]
sources: [raw/01-articles/S2-2601980 [KI#22, Solution#22.2, Update] Variant A of Solution 22.2 v2.md]
last_updated: 2026-04-19
---

## 定义
会话管理 NAS 计算请求（SM-NAS Computing Request）是 6G 算力接入的一种 Variant A 方案，即复用现有的会话管理（SM）信令流程来承载计算服务需求。

## 关键流程
- **流程复用**: 终端在发起 PDU Session Establishment 或 Modification 流程时，在 NAS 消息中携带计算扩展参数（任务类型、吞吐量、总时延要求等）。
- **大脑枢纽**: **[[6G-SMF]]** 作为此类请求的处理中心，负责与 UDM 校验订阅并联合 PCF 生成策略。
- **与 Computing NAS 的区别**:
    - **SM-NAS**: 复用现有流程，架构改动小，但算力处理与会话建立高度耦合。
    - **[[Computing-NAS]]**: 引入新的信令平面，处理更灵活但信令流程更复杂。

## 关联连接
- [[6G-SMF]] — 处理主体
- [[Computing-NAS]] — 替代方案
- [[Computing-Enforcement-Rule]] — 后续指令
