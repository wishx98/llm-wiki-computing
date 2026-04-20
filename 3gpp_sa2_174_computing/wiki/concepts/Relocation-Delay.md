---
title: "Relocation-Delay"
type: concept
tags: [6G, 业务连续性, 时延]
sources: [raw/01-articles/S2-2602103 pCR vs. 23801-01 KI#22_service continuity.md]
last_updated: 2026-04-20
---

## 定义
重定位时延（Relocation Delay）指在 6G 算力站点切换过程中，完成新站点资源实例化及任务上下文从源站点迁移至目标站点所花费的总时间。

## 构成部分
- **实例化时间**: VM 启动（数秒至数分钟）或 K8s 容器启动（约 10 秒以上）。对于 GPU 实例，冷启动通常需 80-120 秒。
- **上下文迁移时间**: 模型训练数据、用户状态快照等大规模数据的传输时延（数据量可能达数百万 Token）。

## 应用场景
在 [[Computing-Service-Continuity]] 流程中，[[CCF]] 需要将计算出的最大允许重定位时延发送给站点和 UE，以确保 E2E 时延要求（T_comm + T_comp + T_relocation）不被破坏。

## 关联连接
- [[摘要-s2-2602103-service-continuity-relocation-delay]] — 来源
- [[Computing-Service-Continuity]] — 应用领域
- [[CCF]] — 计算/控制主体
