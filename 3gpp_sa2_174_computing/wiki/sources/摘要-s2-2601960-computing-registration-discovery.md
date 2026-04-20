---
title: "摘要-s2-2601960-computing-registration-discovery"
type: source
tags: [来源, 原始文件, 6G, NEC, 注册发现, RMF]
sources: [raw/01-articles/S2-2601960_KI22_ServicesForComputingService.md]
last_updated: 2026-04-19
---

## 核心摘要
NEC 在本提案中详细定义了 6G 计算服务的 **注册 (Registration)** 与 **发现 (Discovery)** 流程。基于其提出的 RMF 和 CSF 网元架构，终端在 PDU 会话建立后通过用户面访问 RMF 终结点进行注册。注册通过基于会话的短期 Token 保证安全。发现流程允许 UE 根据具体的业务 ID、位置约束和资源约束（如 CPU 频率、内存、时延目标）请求合适的计算服务功能（CSF）实例。RMF 负责与 PCF/UDR 交互校验策略与订阅，并指挥方案中的 SMF/UPF 预配置用户面路径。

## 关联连接
- [[NEC]] — 贡献者
- [[RMF]] — 注册发现中心
- [[CSF]] — 业务托管中心
- [[Computing-Service-Registration]] — 关键流程
- [[Computing-Service-Discovery]] — 关键流程
- [[Path-Programming]] — 路径预配置机制
- [[PCF]] — 策略校验方
- [[UDR]] — 订阅信息库
