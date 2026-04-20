---
title: "Computing-Resource-Monitoring"
type: concept
tags: [6G, 算力运维, 监控]
sources: [raw/01-articles/S2-2601934_Solution_22.11_Update_for_6G_KI#22_bullet_3a.md]
last_updated: 2026-04-19
---

## 定义
算力资源监控（Computing Resource Monitoring）是指核心网实时或准实时地获取算力节点内各项指标，以支持调度决策的过程。

## 关键内容
- **监控指标**:
    - **资源类型**: 标记节点提供的是 CPU、GPU 还是新型处理单元。
    - **算力容量**: 使用 **[[FLOPS-TOPS]]** 衡量绝对算力水平。
    - **负载状况**: 统计当前可用比例（Available Ratio）。
- **上报模式**:
    - **周期性上报**: 固定时间间隔。
    - **阈值触发**: 当负载达到预设百分比（如 80%、90%）时上报。
    - **事件触发**: 资源类型变更或系统初始化时上报。

## 关联连接
- [[摘要-s2-2601934-cmf-resource-management]] — 来源
- [[CMF]] — 监控主体
- [[6G4c-Reference-Point]] — 传输媒介
- [[FLOPS-TOPS]] — 衡量标准
