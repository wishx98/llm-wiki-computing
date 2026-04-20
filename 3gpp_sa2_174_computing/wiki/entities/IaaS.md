---
title: "IaaS"
type: entity
tags: [6G, 算力服务, 基础设施]
sources: [raw/01-articles/S2-2601897_Discussion and coments on general issues and and solutions.md]
last_updated: 2026-04-19
---

## 定义
基础设施即服务（Infrastructure as a Service, IaaS）在 6G 算力语境下，是指为 UE 提供计算资源（如虚拟机 VMs、容器、存储卷和网络接口）的模式。

## 关键信息
- **资源构成**: vGPU、vCPU、内存、存储和操作系统镜像。
- **用户请求**: UE 需指定硬件需求、地理位置贴近度、严苛时延阈值和所需的网络切片。
- **反馈信息**: 系统需向 UE 提供资源 ID、开通状态及身份验证凭据（如 SSH 密钥）。若在核心网内部部署，还需提供专用网络连接指令（如内部 IP、UPF 流量引导规则）。

## 关联连接
- [[摘要-s2-2601897-compute-management-issues]] — 来源
- [[PaaS]] — 并列服务模式
- [[Computing-Resource]] — 所属类别
- [[Compute-Lifecycle-Management]] — 管理流程
