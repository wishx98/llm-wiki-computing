---
title: "Computing-Node-Registration"
type: concept
tags: [6G, 流程, 注册]
sources: [raw/01-articles/S2-2602106 pCR vs. 23801-01 KI#22_computing resource information collection.md]
last_updated: 2026-04-19
---

## 定义
计算节点注册（Computing Node Registration）是 6G 核心网中计算节点（CN-based Computing Node）将其身份及所管理的算力资源信息上报给 CCF 的过程。

## 流程步骤
1. **注册请求**: 计算节点向 CCF 发送 `Computing Node Registration Request`，携带 [[Computing-Resource-Parameters]]。
2. **认证鉴权**: CCF 对节点身份及权限进行校验。
3. **注册响应**: CCF 返回成功或失败状态。
4. **状态订阅**: 注册完成后，CCF 可向节点订阅实时的算力状态报告（基于周期或事件阈值）。

## 关联连接
- [[摘要-s2-2602106-computing-resource-collection]] — 来源
- [[Computing-Node]] — 执行主体
- [[CCF]] — 注册中心
- [[6G-UDR]] — 相关存储 (DN 侧)
