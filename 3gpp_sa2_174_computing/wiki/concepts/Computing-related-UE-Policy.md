---
title: "Computing-related-UE-Policy"
type: concept
tags: [6G, UE策略, URSP]
sources: [raw/01-articles/S2-2602105 pCR vs. 23801-01 KI#22_UE policy.md]
last_updated: 2026-04-19
---

## 定义
算力相关终端策略（Computing-related UE Policy）是指 6G 网络通过 PCF 或 CCF 下发给终端的，用于指导终端进行算力服务请求和任务卸载决策的规则集。

## 关键信息
- **包含内容**:
    - **算力站点信息**: 地理位置、DNAI、服务类型。
    - **可用性规则**: 特定时间段或区域的算力可用性。
    - **性能保障指标**: 如 Guaranteed Computing Performance。
- **实现方式**:
    - **增强型 [[URSP]]**: 在现有的引导规则中增加算力描述段（Route Selection Descriptor with Computing Parameters）。
    - **专用算力容器**: CCF 生成算力策略，封装在 NAS 或透明容器中下发。

## 关联连接
- [[摘要-s2-2602105-computing-service-authorization-ue-policy]] — 来源
- [[6G-PCF]] — 生成实体
- [[UE]] — 执行主体
- [[URSP]] — 技术基础
