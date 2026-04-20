---
title: "6G-NEF"
type: entity
tags: [6G, 网元, 能力开放]
sources: [raw/01-articles/S2-2601968-[KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF-Lenovo.md, raw/01-articles/S2-2601969-[KI#22 bullet#3 new] Solution for Awareness of computing site information in DN at the 6G CN-Lenovo.md]
last_updated: 2026-04-19
---

## 定义
6G 网络能力开放功能（Network Exposure Function, NEF）是 6G 核心网与外部第三方应用（AF）之间的安全交互网关。

## 6G 计算场景的应用
- **算力站点报送**: 接收外部 AF 提供的位于数据网络（DN）中的算力站点信息（IP、DNAI、资源类型等）。
- **鉴权与核验**: 配合 UDM/UDR 校验该 AF 是否有权发布算力资源信息。
- **信息分发**: 将校验通过的算力信息路由至 **[[CMF]]** 或 **[[Proxy-NF]]**。
- **配置反馈**: 将核心网分配的 PSA-UPF 等关键接入参数反馈给第三方，以打通用户面路径。

## 关联连接
- [[AF]] — 信息的发送者
- [[CMF]] — 内部接收者
- [[DN-Based-Computing-Site]] — 关联对象
