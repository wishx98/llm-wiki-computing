---
title: "DN-Based-Computing-Site"
type: concept
tags: [6G, 算力站点, DN]
sources: [raw/01-articles/S2-2601969-[KI#22 bullet#3 new] Solution for Awareness of computing site information in DN at the 6G CN-Lenovo.md]
last_updated: 2026-04-19
---

## 定义
数据网络算力站点（DN Based Computing Site）是指位于运营商 6G 核心网之外，驻留在外部数据网络（如互联网、第三方云、企业私有网）中的计算资源集合。

## 关键特征
- **归属多样性**: 可能由移动运营商管理，也可能由第三方服务商拥有。
- **感知挑战**: 核心网无法直接通过内部信令获取其状态，需依赖 **[[6G-NEF]]** 或 **[[User-Plane-Awareness-Path]]**。
- **锚定方式**: 必须通过特定的 **[[DNAI]]** 进行标识，并通过 PSA-UPF 实现通信对接。

## 关联连接
- [[DNAI]] — 地址标识
- [[6G-NEF]] — 控制面注册通道
- [[User-Plane-Awareness-Path]] — 用户面更新通道
- [[Proxy-NF]] — 潜在代理层
