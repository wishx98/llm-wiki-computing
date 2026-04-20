---
title: "CSEF"
type: entity
tags: [6G, 网元, 算力开放]
sources: [raw/01-articles/S2-2602029 Solution-for-KI#22-6G Computing Support.md]
last_updated: 2026-04-19
---

## 定义
计算服务开放功能（Compute Service Exposure Function, CSEF）是 6G 核心网中负责将算力相关发现和业务 API 暴露给外部应用功能（AF）的网元。

## 关键信息
- **部署方式**: 通常作为 **[[6G-NEF]]** 的逻辑扩展或合设功能部署。
- **功能职责**:
    - **API 开放**: 为授权的第三方 AF 提供受限的算力站点发现接口。
    - **业务隔离**: 确保外部应用只能访问业务策略允许范围内的算力资源。
    - **凭据颁发**: 为 AF/UE 颁发 **[[Compute-Token]]**，用于后续对算力资源的鉴权访问。
    - **订阅映射**: 将 AF 的 SLA 需求转换为核心网内部可识别的计算服务参数。

## 关联连接
- [[6G-NEF]] — 宿主网元
- [[AF]] — 外部调用方
- [[Compute-Token]] — 产出物
- [[CMCF]] — 内部协同方
