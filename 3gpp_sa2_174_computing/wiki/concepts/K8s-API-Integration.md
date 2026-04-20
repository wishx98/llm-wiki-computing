---
title: "K8s-API-Integration"
type: concept
tags: [6G, 接口实现, 云原生]
sources: [raw/01-articles/S2-2601980 [KI#22, Solution#22.2, Update] Variant A of Solution 22.2 v2.md]
last_updated: 2026-04-19
---

## 定义
K8s API 集成是指 6G 架构中的用户面实体（如 UPF 或算力节点）通过 Kubernetes 标准接口与底层的算力基础设施进行交互。

## 关键作用
- **资源动态卸载**: 6G 网络可以像管理网络流一样，通过调用 API（如 Pod 调度、扩展）在算力站点上动态分配资源。
- **状态可见性**: 通过插件化方式获取算力的使用报告、节点健康状况及负载阈值。
- **标准化适配**: 使得 3GPP 核心网能够兼容主流的云原生计算框架，无需为不同的硬件平台定义私有接口。

## 关联连接
- [[Virtual-Computing-Node]] — 运行载体
- [[6G-UPF]] — 调用主体
- [[Computing-Resource-Monitoring]] — 映射业务
- [[摘要-s2-2601980-variant-a-sm-nas-coordination]] — 来源
