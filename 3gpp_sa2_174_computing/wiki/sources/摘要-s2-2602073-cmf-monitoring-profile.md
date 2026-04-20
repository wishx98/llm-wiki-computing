---
title: "摘要-s2-2602073-cmf-monitoring-profile"
type: source
tags: [来源, 原始文件, 6G, LGE, CMF, 资源概况]
sources: [raw/01-articles/S2-2602073 (revision of 0174)_KI#22 (Computing).md]
last_updated: 2026-04-20
---

## 核心摘要
本文件由 LG Electronics (LGE) 提交，更新了方案 #22.11：控制面功能监控算力节点状态。核心贡献是引入了 **[[Computing-Resource-Profile]]**（算力资源概况）概念，计算节点通过向 **[[CMF]]** 注册该 profile（涵盖资源类型如 CPU/GPU/NPU、能力类别如 AI 推理、位置信息及实时/可用负载）来实现网络对异构算力的感知与调度。

## 关联连接
- [[LGE]] — 贡献者
- [[CMF]] — 监控网元
- [[Computing-Resource-Profile]] — 核心数据模型
- [[Computing-Node]] — 注册主体
