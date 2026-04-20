---
title: "Computing-Node"
type: entity
tags: [6G, 算力实体, 物理节点]
sources: [raw/01-articles/S2-2601934_Solution_22.11_Update_for_6G_KI#22_bullet_3a.md, raw/01-articles/S2-2601897_Discussion and coments on general issues and and solutions.md]
last_updated: 2026-04-19
---

## 定义
算力节点（Computing Node）是 6G 核心网中提供具体算力资源、运行工作负载的物理或逻辑实例，是受 **[[CMF]]** 监控的基本单元。

## 关键形态
- **增强型 UPF**: 集成了计算能力的 UPF。
- **关联算力站点**: 由核心网内部或数据网络（DN）中算力站点支持的 UPF 实例。

## 关键信息
- **接口交互**: 通过 **[[6G4c-Reference-Point]]** 接口向 CMF 上报其资源状态。
- **与算力站点的区别**: 
    - 算力站点（Site）通常被视为一个地理或管理上的集合（如数据中心）。
    - 算力节点（Node）则是站点内的具体计算单元或通过 Kubernetes 等方式抽象出来的实例。

## 关联连接
- [[CMF]] — 管理者
- [[Computing-Site]] — 管理集合
- [[6G4c-Reference-Point]] — 通信接口
- [[Computing-Resource-Monitoring]] — 被执行活动
