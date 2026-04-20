---
title: "UE"
type: entity
tags: [6G, 终端, 计算服务]
sources: [raw/01-articles/S2-2601857Solution for KI#22 of 6G architecture enhancement to support 6G computing service - r04.md, raw/01-articles/S2-2601933_Solution_22.5_Update_for_6G_KI#22_bullet_2a.md, raw/01-articles/S2-2601959_KI22_PduSesstionForComputingService.md]
last_updated: 2026-04-19
---

## 定义
终端（User Equipment, UE）是 6G 计算服务的消费者，通过增强的协议栈或 SDK 与网络侧协同，实现算力任务的卸载与执行。

## 关键信息
- **计算请求能力**:
    - **SDK/OS 增强**: 部署专门的 SDK 或通过操作系统内核增强，支持应用（APP）发起的计算任务请求（如 AI 推理）。
    - **信令机制**: 通过 NAS 消息（PDU 会话建立/修改流程）向核心网发送计算资源、环境及 QoS 要求。
- **策略与授权**:
    - **[[URSP]] 执行**: 接收并评估增强的 URSP 规则，根据规则决定何时何地建立 **[[Computing-Session]]**。
    - **支持指示**: 在 PDU 会话建立请求中通过 PCO 宣告其"计算配置提供能力"。
- **算力接入**:
    - 在接收到核心网返回的算力站点地址或 **[[RMF]]** 终结点信息后，触发套接字连接进行业务数据传输。

## 关联连接
- [[CCF]] — 策略/站点分配方
- [[URSP]] — 行为准则
- [[Computing-Session]] — 业务承载
- [[RMF]] — 资源管理接入点
- [[PCO]] — 信息交互载体
