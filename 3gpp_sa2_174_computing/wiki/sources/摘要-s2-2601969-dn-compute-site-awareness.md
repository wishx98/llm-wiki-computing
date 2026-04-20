---
title: "摘要-s2-2601969-dn-compute-site-awareness"
type: source
tags: [来源, 原始文件, 6G, 联想, DN, 算力感知]
sources: [raw/01-articles/S2-2601969-[KI#22 bullet#3 new] Solution for Awareness of computing site information in DN at the 6G CN-Lenovo.md]
last_updated: 2026-04-19
---

## 核心摘要
联想（Lenovo）在本方案中解决了 6G 核心网如何获取数据网络（DN）中（尤其是第三方拥有的）算力站点信息的问题。提出了两种主要的感知机制：
1. **控制面报送**: 应用功能（AF）通过 NEF 向核心网提供站点配置（Site ID、DNAI、资源类型、容量及负载）。信息可存储于 CMF、UDM/UDR 或 Proxy NF。
2. **用户面直报**: 算力站点通过 PSA-UPF 的用户面路径，直接向 CMF 上报其状态。
该方案确保了分布式算力资源（无论归属权）都能被 CMF 实时监控并纳入调度。

## 关联连接
- [[Lenovo]] — 贡献者
- [[DN-Based-Computing-Site]] — 目标对象
- [[DNAI]] — 位置标识
- [[User-Plane-Awareness-Path]] — 报送路径
- [[6G-NEF]] — 控制面接口
- [[Proxy-NF]] — 潜在存储实体
- [[CMF]] — 信息消费方
