---
title: "Apple"
type: entity
tags: [6G, 贡献者, 终端侧, 隐私]
sources: [raw/01-articles/S2-2602286-rev-S2-2600477_v2.md, raw/01-articles/S2-2602288-pCR-Compute.md]
last_updated: 2026-04-20
---

## 定义
Apple 是 6G 标准化的重要贡献者，其在 6G 算力架构中主张**应用协议无关性 (Application Agnostic)**、**严格的隐私保护**以及**领域隔离**。

## 关键观点与贡献
- **应用协议无关性**: 6G 系统应支持算力任务卸载，但必须对具体的应用层协议（如 CUDA, Juice, Serverless 架构）保持透明。
- **隐私保护 (Domain Separation)**: 
    - 主张网络域信息（如 GUTI）不应暴露给算力资源。
    - 算力任务特定信息（如 AI Prompt 内容）不应暴露给网元。
- **Correlation ID**: 提出引入会话范围内的、非持久性的关联 ID，用于在 6G 核心网内关联来自 AF 的不同请求（流量引导、QoS、监控）。
- **技术质疑**: 对 CMF 识别和解析应用层语义（如解析 UE 发出的 GPU 请求）的可行性表示怀疑，认为 3GPP 不应介入应用层框架的内部细节。

## 关联连接
- [[摘要-s2-2602286-apple-agnostic-requirements]] — 来源
- [[Correlation-ID]] — 相关概念
- [[6G-Computing-Service]] — 背景
