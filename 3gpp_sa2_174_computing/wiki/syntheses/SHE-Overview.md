---
title: "SHE 定义与相关实体解析"
type: synthesis
tags: [6G, SHE, 算力环境, 实体辨析]
sources: [wiki/entities/SHE.md, wiki/entities/SHE-C.md, wiki/entities/SHE-Controller.md, wiki/concepts/Service-Hosting-Environment.md]
last_updated: 2026-04-20
---

# SHE 定义与相关实体解析

## 核心定义

**SHE（Service Hosting Environment，服务托管环境）** 是 3GPP SA1 在 TR 22.870 中定义的术语，指**运营商拥有并用于托管算力服务的环境**。在 6G 架构中，它是执行算力服务实例的运行环境，本质上可以看作驻留在数据网络（DN）中的算力站点集合 [[SHE]]。

## 部署特征

SHE 具有较大的部署灵活性：
- **位置**: 可与核心网 UPF 同址部署（Co-located）以极大降低接入时延；也可部署在核心网内部作为内生算力站点，或作为核心网管辖下的数据网络的一部分 [[Service-Hosting-Environment]]。
- **控制权**: 必须归属于运营商（MNO）。但方案演进中提议将定义扩展至运营商管理、但由第三方（如超大规模云厂商）拥有的数据网络。

## 相关控制实体辨析

与 SHE 紧密相关的有两个控制实体，但所处层级和职能不同：

### SHE-C（Service Hosting Environment Controller）
- **定位**: 算力基础设施管理面的**逻辑单元**。
- **职能**: 接收 [[CCF]] 请求进行资源实例化（创建容器/虚拟机）；向 CCF 反馈可用算力配置；确保多租户环境隔离 [[SHE-C]]。

### SHE-Controller
- **定位**: 部署在运营商管理的非 3GPP 计算环境（如 Kubernetes、OpenStack）中的**实际管理器**。
- **职能**: 向核心网（通过 [[CCCE]]）暴露资源可用性与负载时延指标；接收控制面指令为算力会话预留硬件资源；通过 **6G-CCCE-SHE** 参考点与核心网交互 [[SHE-Controller]]。

## 总结

简言之，SHE 是"场地"，SHE-C 更偏向基础设施管理面的逻辑控制，SHE-Controller 则是运营商云侧的实际编排代理。三者共同完成算力资源从核心网意图到硬件执行的闭环。
