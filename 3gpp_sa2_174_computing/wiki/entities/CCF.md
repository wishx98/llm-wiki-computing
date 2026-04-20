---
title: "CCF"
type: entity
tags: [6G, 网元, 计算控制]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md, raw/01-articles/S2-2602040.md, raw/01-articles/S2-2602102 pCR vs. 23801-01 KI#22_Support distributed computing_v1.md, raw/01-articles/S2-2602106 pCR vs. 23801-01 KI#22_computing resource information collection.md, raw/01-articles/S2-2602044.md, raw/01-articles/S2-2602103 pCR vs. 23801-01 KI#22_service continuity.md]
last_updated: 2026-04-20
---

## 定义
计算控制功能（Computing Control Function, CCF）是 6G 核心网中引入的新网元，负责管理部署在运营商网络内部的算力站点。

## 关键信息
- **功能职责**:
    - **算力抽象管理**: 维护 [[CCC]] (Computing Capability Class) 水平，将复杂的底层算力指标抽象后向 AF 或终端开放。
    - **分布式计算编排**: 确定分布式任务的处理顺序（Processing Order），并为 SMF 产生路径引导规则。
    - **资源监控与收集**: 主动订阅并收集 [[Computing-Node]] 报告的算力资源状态及 [[6G-NEF]] 转发的 DN 算力信息。
    - **剖面管理**: 维护并向 AF 暴露 **[[CCCP]]** (算力等级剖面)，用于支持"意图驱动"的算力发现。
    - **会话协同**: 在 **[[Variant-H]]** 方案中担任中央决策网元，负责接收来自 AF 的计算会话请求，并通过 PCF 实现与 PDU 会话的 **[[Policy-Based-Binding]]**。
    - **资源监控与选择**: 监控算力站点负载，确定分布式任务处理顺序，并根据 E2E 时延要求推导允许的 **[[Relocation-Delay]]**。
    - **中央授权与认证**: 担任 6G 算力业务的中央控制点，验证 UE 和 AF 的身份、订阅项、可用 [[CCC]] 等级及地理/时间策略。
    - **业务连续性决策**: 在站点切换时，若无法满足时延要求，负责计算所需最小延迟并通知 UE 进行最终决策。
    - 触发 Model Management (MM) 在选定的算力站点上安装环境或部署模型。
- **交互对象**:
    - **6G SM**: 协调通信时延测量和路由配置。
    - **Model Management**: 触发资源/模型安装。
    - **System AI Agent**: 进行意图解析（当请求包含意图信息时）。
    - **UE**: 接收计算任务请求并返回算力站点地址。

## 关联连接
- [[摘要-s2-2602040-variant-h-af-trigger]] — 来源
- [[摘要-s2-2602102-distributed-computing-cn-dn]] — 来源
- [[摘要-s2-2602106-computing-resource-collection]] — 来源
- [[CCC]] — 资源抽象模型
- [[Distributed-Computing]] — 编排领域
- [[Model-Management]] — 相关网元
- [[6G-SM]] — 协同网元
- [[Computing-Site]] — 管理对象
