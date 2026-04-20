---
title: "PaaS"
type: entity
tags: [6G, 算力服务, 平台服务]
sources: [raw/01-articles/S2-2601897_Discussion and coments on general issues and and solutions.md]
last_updated: 2026-04-19
---

## 定义
平台即服务（Platform as a Service, PaaS）在 6G 算力语境下，是指为 UE 提供运行环境、数据库、中间件和 API 网关等平台化资源的模式。

## 关键信息
- **资源构成**: 运行时框架（Runtime Frameworks）、托管数据库、应用负载及自动扩缩容规则。
- **典型场景**: UE 请求构建、训练并部署特定的 AI 模型。
- **用户请求**: 除基本的网络参数外，需指定具体的软件环境需求。
- **反馈信息**: 系统需向 UE 提供应用终端节点（如 API URLs）、部署状态及身份凭证（如 Access Tokens）。

## 关联连接
- [[摘要-s2-2601897-compute-management-issues]] — 来源
- [[IaaS]] — 并列服务模式
- [[Computing-Resource]] — 所属类别
- [[Compute-Lifecycle-Management]] — 管理流程
