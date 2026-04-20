---
title: "User-Plane-Coordination"
type: concept
tags: [6G, 通算协同, 用户面]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md]
last_updated: 2026-04-19
---

## 定义
用户面通算协同（User Plane Coordination）是指算力站点与用户面网元（UPF、RAN）之间直接交换运行时指标反馈，实现极低时延感知的动态优化机制。

## 关键机制
- **指标直通**: 
    - 算力站点直接将处理进度、处理时延、结果生成率等信息发送给 **6G-UPF**。
    - 指标可通过 GTP-U 信令（如 N3 接口）透传给 **6G-RAN**。
- **动态优先级**: 
    - aNB/RAN 根据收到的算力运行指标，动态调整对应 QoS 流的优先级（如优先传输即将过期的计算结果数据包）。
- **双向反馈**: 算力站点也会接收来自 UPF 的用户面质量监测结果，主动调整任务的处理进度。

## 关联连接
- [[摘要-s2-2601968-nas-requested-computing-coordination]] — 来源
- [[Control-Plane-Coordination]] — 并列机制
- [[6G-UPF]] — 关键中转实体
- [[aNB]] — 执行优化实体
