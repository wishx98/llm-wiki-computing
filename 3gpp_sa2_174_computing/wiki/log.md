# Operation Log

## [2026-04-19] ingest | 摄入 6G 计算架构相关技术文档 (S2-2601857, 1896, 1897, 1933, 1934, 1959, 1960, 1965, 1968, 1969, 1980, 1981, 2003, 2029, 2036, 2037, 2040, 2043)
- **变更**: 大规模更新，新增大量来源、实体（如 CCF, CMF, RMF, CSF, 6G-UPF 等）及概念（如 Computing-Task, CCC, CCCP 等）。
- **冲突**: 无

## [2026-04-20] ingest | 摄入大唐 (CATT) 分布式计算与资源收集方案 (S2-2602102, 2602105, 2602106)
- **变更**: 新增 [[CATT]], [[6G-UDR]], [[6G-NEF]]; 新增 [[Distributed-Computing]], [[Computing-related-UE-Policy]], [[Computing-Resource-Parameters]], [[Computing-Node-Registration]]; 更新 [[CCF]], [[CMF]], [[index]]
- **冲突**: 无

## [2026-04-20] ingest | 引入三星、LGE、联发科及大唐深度方案 (S2-2602044, 073, 089, 103, 104, 122)
- **变更**: 新增 [[LGE]], [[Samsung]], [[MediaTek]], [[CCCE]], [[SHE-Controller]], [[Compute-Orchestrator]]; 新增基础定义 [[6G-Computing-Service]], [[Service-Hosting-Environment]], [[Logical-Computing-Site]]; 新增技术指标 [[Relocation-Delay]], [[Aggregated-Latency]], [[CC-Policy]], [[Computing-Resource-Profile]]; 更新 [[CCF]], [[CMF]], [[6G-UPF]], [[index]]
- **冲突**: 无
- **变更**: 进一步整合了华为、LGE、联发科的通算协调、算力层（Computing Layer）及 EASDF 监控方案 (S2-2602123, 128, 129, 130, 131)；新增实体 [[CCCE]], [[EASDF]]；新增概念 [[Computing-Session]], [[Computing-Layer]], [[Aggregated-Latency]].
- **[2026-04-20] ingest | 6G 算力架构深度整合与定义统一**
- **变更**: 摄入 9 份关键文件 (S2-2602286 至 S2-2602430)；新增实体 [[Apple]], [[Nokia]], [[NTT-DOCOMO]]；更新 [[CCCE]], [[6G-SMF]]；新增概念 [[Application-Component]] (应用组件分类), [[CC-Profile]] (通算配置文件), [[Correlation-ID]] (关联标识), [[N6-QoS-Class]]。
- **冲突**: 无。完成了对 SA1 与 SA2 定义分歧的对齐（基于 S2-2602429）。
- **[2026-04-20] ingest | 6G 算力中心化方案整合 (Penholder Batch)**
- **变更**: 处理 5 份牵头人总结文档 (S2-2603513 等)；新增实体 [[OPPO]], [[Intel]]；新增全景架构概念 [[6G-Computing-Architecture]]；更新 [[Computing-Site]] 争议记录。
- **冲突**: 记录了关于算力站点位置 (CN vs SHE/DN) 的重大架构分歧。

## [2026-04-20] query | SHE 定义与相关实体解析
- **输出**: [[SHE]], [[SHE-C]], [[SHE-Controller]], [[Service-Hosting-Environment]]

## [2026-04-20] query | CCF 与 CMF 定义及职能辨析
- **输出**: [[CCF]], [[CMF]]

## [2026-04-21] query | CCF 与 CSPF 各自的职责和功能
- **输出**: [[CCF]], raw/09-archive/S2-2602129 (CSPF 来源)

## [2026-04-21] query | 华为提出的 Computing Layer Link 详细介绍
- **输出**: [[Computing-Layer-Link]], [[Computing-Layer-Link-Overview]]

## [2026-04-21] query | Google 方案 CAH（Context-Aware Header）详细介绍
- **输出**: [[CAH]], [[摘要-s2-2602003-cah-predictive-qos]], raw/09-archive/S2-2602003

## [2026-04-21] lint | 修复了 17 个索引问题
- **新增注册**: 5 个未同步页面（SHE-C, Communication-Computing-Coordination, Computing-Resource-Profile, Logical-Computing-Site, 摘要-s2-2602122）
- **移除无效注册**: 12 个缺失页面（6G-PCF, Nokia, NTT-DOCOMO, Compute-Offloading, Path-Programming, aNB-Computing-Capability, Computing-Capability-Exposure, Computing-Service-Registration, Computing-Service-Discovery, 6G-Computing-Requirements, Computing-Session, 摘要-s2-2602128）
