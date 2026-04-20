---
title: "Service-Hosting-Environment"
type: concept
tags: [6G, 环境, 基础设施]
sources: [raw/01-articles/S2-2602089 [KI#22, bullet#1] Architecture Requirements, Definitions and Computing Resources.md]
last_updated: 2026-04-20
---

## 定义
服务托管环境（Service Hosting Environment, SHE）是 6G 架构中用于执行算力服务实例的运行环境。

## 部署特征
- **位置**: 可以部署在 6G 核心网内部（如内生算力站点）或作为核心网管辖下的数据网络（DN）的一部分。
- **控制权**: 必须受运营商（MNO）完全控制。
- **功能**: 提供计算、存储及网络资源，支持容器、虚拟机或更细粒度的软件模块执行。

## 关联连接
- [[摘要-s2-2602089-6g-computing-definitions-requirements]] — 来源
- [[Logical-Computing-Site]] — 逻辑映射
- [[6G-Computing-Service]] — 所承载的服务
- [[SHE-Controller]] — 控制平面接口
