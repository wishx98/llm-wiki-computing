**3GPP SA WG2#174 S2-2603401**

**Apr. 13th – 17th, 2026 (Revision of S2-2603249)**

**Source: OPPO, MediaTek, Intel (Pen-holders)**

**Title:** **[KI#22] Pen-holder Paper on Computing Support in 6G**

**Spec: 3GPP TR 23.801-01-040**

**Agenda item: 20.6.22**

**Work Item / Release: FS\_6G\_ARC / Rel-20**

**Document for: Approval**

*Abstract of the contribution: This is the paper for KI#22 (Computing support in 6G) from pen-holders.*

# 1. Discussion

This is a solution paper for KI#22 considering all input papers to SA2#174.

This paper is structured per bullet under each sub-KI, if a solution has to cover multiple bullets altogether in order to give a whole picture of the solution, then those bullets (i.e., KI bullet group #1(bullet#1b, 3a, 3c, 3d, 3e, 4a)) are normally addressed together by an individual solution paper. Other KI bullets (i.e., 1a, 2a, 2b, 3b) are not grouped and addressed separately since the solution can be independent from solutions for other KI bullets.

## 1.1 Structuring Proposal approved at SA2#173

**1.1.1 Architecture Requirements, Definitions, Location of Computing Node/Site (Solution #22.1)**

There are several architecture requirements proposed for bullet#1a in S2-2600267/CATT, S2-2600421/OPPO, S2-2600477/Apple, S2-2600480/Nokia.

It’s proposed to use one solution (i.e., 6.22.1) to document the general Architecture Requirements, if an Architecture Requirement is specific to a solution itself, it should be documented as part of the specific solution.

For the general definitions (i.e., Computing Service, Computing Resources, Computing Node/Site, Computing Service Hosting Environment) should also be documented in one solution (i.e., 6.22.1). If a definition is specific to an individual solution, it can be documented as part of the solution itself.

For the location of Computing Node/Site, it should also be discussed in a general solution (i.e., 6.22.1) if common understand can be reached, which would help other individual solutions to refer to.

**1.1.2 Architecture and Coordination of Communication and Computing**

There are following solution categories for bullet group #1 (bullet#1b, 3a, 3c, 3d, 3e, 4a):

Coordination between Communication and Computing is controlled by 6G CN (e.g., 6G SMF, CMF, CCF, CCCE, etc.) (Solution #22.2):

UE Requested Computing Support in 6G by using SM NAS (S2-2600098/CMCC, S2-2600183/JIO (collocating CMF with NRF), S2-2600192/Samsung, S2-2600358/NEC, S2-2600374/CTC (Over CP), S2-2600411/S2-2600417/OPPO, S2-2600502/ETRI (UE Requested), S2-2600548/interdigital, S2-2600430/MTK)

UE Triggered Computing Service Support in 6G by using SM NAS and UP connectivity to a Computing Site in the SHE, an Operator controlled domain other than 6G CN (DOCOMO/S2-2600190(UE triggered)

UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G UPF (S2-2600156/vivo, S2-2600181/HW, S2-2600262/Lenovo, S2-2600267/CATT, S2-2600374/CTCC, S2-2600453/ZTE, S2-2600584/586/587/588/LG Uplus)

UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G Data Plane Function (S2-2600267/CATT, S2-2600374/CTC )

UE Requested Computing Support with Computing messages over User Plane (S2-2600426/Xiaomi, S2-2600359/NEC, S2-2600374/CTC )

UE Requested Computing Support in 6G over new Plane (e.g., service plane) (S2-2600453/ZTE, S2-2600383/IIT Bombay)

UE Initiated Computing Service Support and SMF Controlled Coordinated selection of UPFs and compute sites (S2-2600575/QC)

AF Requested Computing Support via CP Function(S2-2600181/Huawei, S2-2600262/Lenovo, S2-2600383/IIT Bombay, S2-2600402/Rakuten, S2-2600502/ETRI)

Coordination between Communication and Computing is performed by AF (S2-2600477/Apple, S2-2600479/Nokia, S2-2600486/LGE) (Solution #22.3)

Use SA6 defined Edge Enabler Layer to support computing in 6G(S2-2600247/Ericsson) (Solution #22.4)

Four solution categories are proposed for the Architecture and Coordination.

**1.1.3 Computing Service Authorization to UE/AF**

There are following solution categories for bullet#2a.

UE Policy (i.e., URSP, new Computing Policy) based authorization to UE by PCF/CCF (S2-2600409/OPPO, S2-2600430/MTK, S2-2600268/CATT). (Solution #22.5)

Non-policy based authorization (Solution #22.6):

Computing Service Authorization to UE/AF by NEF (S2-2600586/LG Uplus).

Computing Service Authorization to UE by AMF (S2-2600548/interdigital).

Subscription based authorization without explicit authorization to UE/AF (S2-2600190/NTT DOCOMO, S2-2600502/ETRI). (Solution #22.7)

Computing resource authorization by computing framework (no need for computing resource authorization by 6G CN) (S2-2600575/QC, S2-2600477/Apple, S2-2600479/Nokia, S2-2600486/LGE) (Solution 22.8).

Four solution categories are proposed for the Computing Service Authorization aspects.

**1.1.4 Computing Exposure to AF**

There are following solution categories for bullet#2b.

Computing Related Information exposure (S2-2600125/Transsion, S2-2600427/Xiaomi, S2-2600487/LGE, S2-2600585/LG Uplus). (Solution #22.9)

Communication Delay exposure (S2-2600427/Xiaomi, S2-2600479/Nokia). (Solution #22.10)

Two solution categories are proposed for this aspect.

**1.1.5 Computing Resource Monitoring and Management by 6G CN**

There are following solution categories for bullet# 3b.

CP Function (e.g., 6G SMF, CMF, CCF, etc.) monitors the Computing Resources status in Computing Node/Site (e.g., Computing Node/Site, etc.). (S2-2600181/Huawei, S2-2600410/OPPO). (Solution #22.11)

CP Function (e.g., CSMF, etc.) monitors the QoS for Computing Service from other NFs (e.g., from SMF, PCF, NWDAF, etc.) in 6G CN (S2-2600548/InterDigital). (Solution #22.12)

CP Function (i.e., EASDF) monitors the Computing Resources in DN via AF (S2-2600488/LGE). (Solution #22.13)

Three solution categories are proposed for this aspect.

## 1.2 Structure update based on papers at SA2#174

In S2-2602374, one new solution category is proposed to be added for Solution Group #4 and 5 respectively.

On the new category for Solution Group #4, it should fall into solution category (1) (Computing Related Information exposure) as a new variant D (SMF exposes DNAI and CS IP), thus no new solution category is needed for Group #4. Different solution variants are illustrated for Group #4.

On the new category for Solution Group #5, it’s proposing no monitoring in 6G CN and different from the current 3 solution categories, thus a new solution category is added.

## 1.3 Principle for referring to a new Solution # (beyond #40) from papers contributed to SA2#174 and onwards

A Solution # (beyond #40) is added only if a new Solution Category or a new Solution variant for an existing Solution Category is introduced based on the input paper proposing the new solution in the solution overview table in clause 6.22.0 and in the second bullet of Solution #22.X in clause 6.22.X.0 (e.g., “This solution is extracted from Solution #X, Y, Z under Annex X.22” ).

## 1.4 Procedures for all Solutions

For SA2#174, we should focus on solution description. If the procedures are included for all solutions, the total number of pages will go up to 80, it’s unfeasible to get it approved. Once the solution description is agreed, the procedures and impacts can be added in following meetings. How to move forward with the procedures will be discussed at SA2#174 F2F meeting.

## 1.5 Architecture Requirements

There are at least 7 papers proposing different architecture requirements, if we go through them one by one, there will be no time to go through the solution description at F2F session. Thus we only document 1 essential bullet from the 12-company paper.

Companies are encouraged to propose the architecture requirements as part of their preferred solution category and variant at SA2#175.

## 1.6 Definitions

There are at least 7 papers proposing definitions, the most controverial part is where to locate the Computing Site.

For the definitions of Computing Service, Computing Resource, SHE, it’s proposed to use the 12-company proposal as starting point.

For the definition of Computing Site, it’s proposed to use the description in NOTE 5 of KI#22 desciption as starting point.

On the Location the Computing Site, the 12-company contribution proposes to be in SHE (domain other than CN/DN) or DN, while the NOTE 5 of KI#22 says it’s in CN or DN, the description in the 12-company paper contradicts with NOTE 5 of KI#22 desciption. This aspect needs further discussion. An according EN is added.

## 1.7 Multiple Options for a solution group addressing the same KI bullets from same company

Per endorsed SA2 Chair’s gudiance on way of working in S2-2504416, it says:” *Documentation of more than one solution from the same company for the same KI is allowed but it shouldn’t be expected that all of them will be documented in the TR.*”

At SA2#173 and 174, there are serveral papers not following the guiance from SA2 Chair by proposing multiple options at the same meeting, which gives confusion to other companies and heavy burden to pen-holders’ work, as such pen-holders have the right to decide not to document extra options from the same company.

From SA2#175 and onwards, it’s expected that companies will follow the guidance.

## 1.8 Service Continuity aspects

The service continuity aspects can be addressed as part of computing node re-selection procedure and can be documented at SA2#175.

## 1.9 Architectural Assumption

The architectural assumption is imported from the 12-compay contribution, we can use it as a starting point.

## 1.10 On the proposed ENs

### Proposed In S2-2602374 (Qualcomm)

For Solution # 22.2 (variant A/C/D/E/F/H):

Editor's note #1: The feasibility of these solution variants depends on what Computing Node refers to and is FFS.

Editor's note #2: It is FFS how to enable UE applications to request compute resources using an HLOS SDK (as proposed by Solution# 1), which organization is assumed to define the SDK and how to install the SDK in a secure way considering restrictions in commercial HLOS.

Editor’s note #3: How to handle the computing session if the UE is moving to 5G is FFS.

Editor's note #4: How the UE/UE application receives the credentials (e.g., username, password, certificate) to access the Computing Node is FFS.

Editor’s note #5: If the UE requests “infrastructure as a service” compute resources by indicating characteristics like number and architecture of CPUs, GPUs, available memory and storage, it is FFS which Computing Node type the network provides for the UE (e.g., a Virtual Machine). It is also FFS how the UE/UE application can then manage the Computing Node (e.g., how to install the computing application, control firewall rules, manage assigned storage space, modify number of virtual CPUs/GPUs, configure scaling rules, configure redundancy sets, etc.).

Editor’s note #6: If the UE requests “function as a service” where the network also provides “standardized functions for various computing task” (see Solution 3), it is FFS which SDO is assumed to define APIs and protocols for UE applications to access these standardized functions.

Editor’s note#7: If the UE requests application “service as a service” where the network also provides “application algorithm for various computing service” (see Solution 3), it is FFS which SDO is assumed to define APIs and protocols for UE applications to access these standardized functions.

Editor’s note #8: Since on-demand compute tasks like split rendering are typically application specific, it is FFS how the UE application can determine whether the specific split rendering server application that the UE application needs is available is FFS.

Editor’s note #9: Which protocols are used between UE application and the computing node, e.g. for split rendering is FFS.

Editor’s note #10: If the UE provides computing task information in a computing layer (i.e., in-band information) to the network (see Solution 5), it is FFS how the modem can receive this per compute request application layer information from UE applications.

Editor’s note #11: Whether and how solutions to this key issue can support existing frameworks like Kubernetes [X] to influence selection of a specific compute cite (e.g., as proposed by solution 21) is FFS.

NOTE #1: Compute service requests for AI inferencing/AI training and related information are not in scope of this key issue but in in scope of key issue 19.

Editor’s note #12: The meaning of computing site located in 6G CN and the difference compared to being located in a DN is FFS.

Editor’s note #13: Whether and how selection of a computing site by a CMF is compatible with how compute resources are assigned and selected by existing compute framework like Kubernetes [X] is FFS.

Editor’s note #14: What Data Plane Function refers to is FFS.

For solution #22.2 (variant B):

Editor’s note #15: If an additional indication is needed or if a specific DNN/S-NSSAI is sufficient is FFS.

For solution #22.5 (variant A):

Editor’s note #16: What Computing Capability (as proposed by solution 18) refers to and how the modem can be aware of any computing capability of an application and/or the HLOS is FFS.

### Proposed In S2-2601897 (Ericsson)

Editor’s note #17: Each solution where the CN is involved in managing compute resources need to clarify what is meant by compute resources in context of the solution e.g. is it IaaS, PaaS or other concepts.

Editor’s note #18: Each solution where the CN is involved in managing compute resources need to clarify how the CN is able to access the management of those resources.

Editor’s note #19: Each solution where the CN is involved in managing compute resources need to clarify the lifecycle management procedure in terms of compute resource planning, instantiation, management and releasing in the context of the specified solution e.g., IaaS, PaaS or other concepts.

Editor’s note #20: Each solution where the CN is involved in managing compute resources need to clarify what is included in the UE request in the context of the specified solution e.g., IaaS, PaaS or other concepts.

Editor’s note #21: Each solution where the CN is involved in managing compute resources need to clarify what is included in the response to the UE in the context of the specified solution e.g., IaaS, PaaS or other concepts.

Editor’s note #22: As hosts of compute resources, the differences between a compute site and a compute node shall be clarified.

### Proposed In S2-2602288 (Apple)

For solution #22.2 (variant A/C/D/E/F/H):

Editor's Note #23: How the 6G CN identifies and interprets a computing request from the UE is FFS. The content of a computing request is FFS.

Editor's Note #24: What criteria is used by CMF to assess the suitability of a computing resource for a computing request from the UE is FFS.

Editor’s Note #25: Whether the computing site has to be associated with a UE PDU Session (and an anchor UPF) for CMF to collect computing resource related information is FFS.

For solution #22.2 (variant B):

Editor's Note #26: It is FFS whether there has to be a dedicated PDU session per computing service triggered by different applications.

Editor's Note #27: Information required from the UE to perform the appropriate CC policy association is FFS. The content of the CC policy is FFS.

For solution #22.5:

Editor’s Note #28: It is FFS whether computing service in this case is provided only to a specific application in the UE (i.e., Computing Application) as described in Solution #18 and implied by the use of connection capability in Solution #25.

Editor’s Note #29: Whether a computing service policy can be generated without knowledge about applications installed in the UE is FFS.

**Pen-holder’s suggestion on 29 ENs:**

Companies proposing the ENs and the companies proposing the solution category/variant should talk to each other offline to check which of ENs should stay based on the solution update at SA2#174.

Pen-holder version can document them for easy discussion at SA2#174, but it doesn’t mean all the ENs are necessary or correct.

ENs in Ericsson’s paper doesn’t touch specific clauses, we can discuss as general issue in the discussion part of the pen-holder paper. Companies proposing the solution category/variant should evaluate whether the speicific aspects applicable to your favored solution and try to address them if applicable.

## 1.11 KI#22 Description in TR 23.801-01

Study aspects on support of computing for UE, core network and application server in 6G (e.g. coordination among UE, core network and application server, exposure of computing service in the core network, etc.).

In order to support computing, the following aspects need to be studied:

1. Identification of the architectural requirements and computing resource(s):

a) Derive architectural requirements for scenario(s) and service requirements defined by SA WG1 to be enabled by the Computing Service.

b) Whether and how to define the computing resource (e.g. computing resource type and/or status, location of the computing resource, etc.).

NOTE 1: The use cases and the terms of Computing Service and the Service Hosting Environment defined in TR 22.870 [11] can be used as starting point for further refinement during solution development phase. The detailed computing resource type (e.g. software component, hardware component, etc.) can be identified during study phase.

2. Enablement/authorization of computing service to UE or AF.

a) Whether and how to enable Computing Service.

b) Whether and how the operator network may expose the computing resource related information (e.g. its hosting capability (e.g. using compute resources at Service Hosting Environment)) and/or network metrics to AF.

3. Coordination of communication and computing, service continuity and QoS aspects:

a) Whether and how to coordinate (e.g. within or outside the core network) communication (for the traffic transferred over user plane) and computing resource(s) in the Computing Site.

b) Whether and how to identify, collect/monitor, provision the computing resource related information.

c) Whether and how to improve the service experience.

d) Whether there is a need to improve QoS to satisfy Computing Service requirements.

e) Whether and how to support service continuity for computing service upon change of computing site and/or user plane function (e.g. due to UE mobility, computing load balancing, AF influence etc.).

4. Discovery and (re-)selection of compute site(s) for the Computing Service:

a) Whether and how to discover and (re-)select Computing Site(s) for the Computing Service.

NOTE 2: Whether and how to utilise and/or enhance Edge Computing mechanisms specified in 5G to address the aspects in the scope of this KI will be discussed in the study phase.

NOTE 3: Which of above aspects should fall into SA WG5 and/or SA WG6 scope will be further identified in study phase, coordination with SA WG5 and SA WG6 may be needed.

NOTE 4: Potential coordination with other KIs (e.g. KI#1 on service enablement and UE-CN interaction, key issues on QoS, exposure framework and UP aspects, etc.) is needed.

NOTE 5: Computing Site represents the computing resources in a specific location of network topology. The computing site can offer computing services by allocating its computing resources to run application workloads upon demand of a Computing Service consumer. From networking perspective, the Computing Site is located within 6G CN (via e.g. user plane function in 6G) or Data Network (either owned and controlled by the operator or 3rd party).

**\* \* \* \* 1st Change \* \* \* \***

## 6.0 Mapping of Solutions to Key Issues

Table 6.0-1: Mapping of Solutions to Key Issues

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Key Issues | | | | | | | | | | | | | | | | | | |
| Solutions | #22 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| #X | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

**\* \* \* \* 2nd Change \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.0 Solution Category Overview

**The solutions for KI#22 are structured as following in Table 6.22.0-1:**

**Table 6.22.0-1: Solution Category overview**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Solution Groups | Addressed bullet # | Solution category for the group | Variants for each category | Referred input paper in Annex X.22 | Solution # in TR |
| **1. Architecture Requirements, Definitions, Location of Computing Node/Site** | 1a, 1b | (1) Architectural requirements | FFS | Solution #11, 22, 27, 29 | 22.1 |
| (2) Computing related definitions | FFS | Solution #96 |
| (3) Architectural representation of Computing Site location | FFS | Solution #96 |
| (4) Architectural Assumption | FFS | Solution #96 |
| **2. Architecture and Coordination of Communication and Computing** | 1b, 3a, 3c, 3d, 3e, 4a | (1) Coordination between Communication and Computing is controlled by 6G CN (e.g., 6G SMF, CMF, CCF, CCCE, etc.): | UE Requested Computing Support in 6G by using SM NAS | Solution #1, 6 , 8, 13, 15, 20, 21, 25, 26, 33 , 34 | 22.2 |
| UE Triggered Computing Service Support in 6G by using SM NAS and UP connectivity to a Computing Site in the SHE, an Operator controlled domain other than 6G CN | Solution #7 |
| UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G UPF | Solution #3, 5, 10, 11, 15, 26, 36, 38, 39, 40 |
| UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G Data Plane Function | Solution #11, 15 |
| UE Requested Computing Support with Computing messages over User Plane | Solution #14, 15, 23 |
| UE Requested Computing Support in 6G over new Plane (e.g., service plane) | Solution #16, 26 |
| UE Initiated Computing Service Support and SMF Controlled Coordinated selection of UPFs and compute sites | Solution #35 |
| AF Requested Computing Support via CP Function | Solution #5, 10, 16, 17, 33 |
| I. UE Requested Computing Service Support and CCF Controlled Coordinated selection of UPF and computing site in DN | Solution #82 |
| (2) Coordination between Communication and Computing is performed by AF |  | Solution #27, 28, 30 | 22.3 |
| (3) Coordination between Communication and Computing is performed by AF or Edge Enabler Layer |  | Solution #9 | 22.4 |
| **3. Computing Service Authorization to UE/AF** | 2a | (1) UE Policy (i.e., URSP, new Computing Policy) based authorization to UE by PCF/CCF | A. URSP based Computing Service Authorization to UE from PCF | Solution #12, 18, 25 | 22.5 |
| B. CCF based Computing Service Authorization to UE | Solution #12 |
| (2) Non-UE policy based authorization | A. Computing Service Authorization to UE/AF by NEF | Solution #38 | 22.6 |
| B. Computing Service Authorization to UE by AMF | Solution #34 |
| (3) Subscription based authorization without explicit authorization to UE/AF | A. Computing Service Authorization by CCCE | Solution #7 | 22.7 |
| B. Computing Service Authorization by 6G CCF | Solution #33 |
| (4) Computing resource authorization by computing framework (no need for computing resource authorization by 6G  CN) |  | Solution #27, 28, 30, 35 | 22.8 |
| **4. Computing Exposure from 6G CN to AF** | 2b | (1) Computing Related Information exposure | A. CMF exposes Computing Capability to AF | Solution #2, 17, 37 | 22.9 |
| B. CMF exposes Computing metrics to AF | Solution #24 |
| C. NEF exposes CS Deployment Information stored in UDR to AF | Solution #31 |
| D. SMF exposes DNAI and Computing Site IP to AF | Solution #35 |
| (2) Communication Delay exposure |  | Solution #24, 28 | 22.10 |
| **5. Computing Resource Monitoring and Management by 6G CN** | 3b | (1) CP Function (e.g., 6G SMF, CMF, CCF, etc.) monitors the Computing Resources status in Computing Node/Site (e.g., Computing Node/Site, etc.) |  | Solution #5, 11, 19 | 22.11 |
| (2) CP Function monitors the QoS for Computing Service from other NFs (e.g., from SMF, PCF, NWDAF, etc.) in 6G CN |  | Solution #34 | 22.12 |
| (3) 6G CN Network Function monitors the Computing Resources in DN | A. The CP NF (e.g., EASDF, UDR, CMF, a Proxy NF, NRF, etc.) collects/monitors the computing resource related information (e.g., Status/Load information) from AF. | Solution #11, 32, 50 | 22.13 |
| B. The CMF collects/monitors computing resource related information of Computing Site in CN via PSA UPF | Solution #50 |
| (4) No monitoring in 6G CN: CP function (i.e., SMF) receives computing delay information from AF for each DNAI relevant for the UE |  | Solution #35 | 22.14 |
| (5) A SHE controller in SHE monitoring the computing resources based on implementation |  | Solution #7 | 22.15 |

Editor’s note: For Solution group #4 , additional category (i.e., no exposure from 6G CN to AF) will be added.

**\* \* \* \* 3rd Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.1 Solution #22.1 Computing Architecture Requirements, Definitions and Computing Resources

#### 6.22.1.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution is assumed to address bullet#1a, 1b on architecture requirements, definitions, location of Computing Site, Computing resources.

This solution addresses bullet #1a, 1b under KI#22.

This solution is extracted from Solution #, 11, 22, 27, 29 under Annex C.22.

#### 6.22.1.1 Description

##### 6.22.1.1.1 Definitions

**Computing Service:** A service provided by 6G network/3rd party utilizing computing resources in computing site, which can be used by a UE and/or AF for executing application layer workloads.

**Service Hosting Environment**: Environment in the operator domain and fully controlled by the operator, where operator hosted services (e.g., Computing, etc.) are offered from.

NOTE: The SHE definition may be cited by other operator hosted services.

**Computing Resource:** TBD.

Editor’s note: Other Computing related definitions (e.g., Computing Resource, etc.) are FFS based on the progress of specific solutions.

##### 6.22.1.1.2 Architecture Requirements

6G System supports application layer workloads to be run on operator controlled/managed computing sites.

Editor’s note: Other architecture requirements are FFS based on the progress of specific solutions.

##### 6.22.1.1.3 Architectural representation of Computing Site

Editor’s note: Architectural representation of Computing Site is FFS.

#### 6.22.1.1.4 Architecture Assumption

Packaging, storage, installation and instantiation of an application component to a Computing Site is assumed to follow procedures defined by other SDOs.

#### 6.22.1.4 Open Issues

(1) Architectural representation of Computing Site.

(2) Other Computing related definitions.

(3) Other architecture requirements.

**\* \* \* \* 4th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.2 Solution #22.2: Coordination between Communication and Computing is controlled by 6G CN

#### 6.22.2.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to address bullet#1b, 3a, 3c, 3d, 3e, 4a, the missing aspect can be added later.

This solution addresses bullet #1b, 3a, 3c, 3d, 3e, 4a under KI#22.

This solution is extracted from Solutions #1, 3, 5, 6, 7, 8, 10, 11, 13, 15, 16, 21, 25, 26, 33, 34, 36, 38, 39, 40 of Annex C.22.

There are following variants:

UE Requested Computing Support in 6G by using SM NAS (Solutions #1, 6, 8, 13, 15, 20, 21, 25, 26, 33, 34 of Annex C.22.)

UE Triggered Computing Service Support in 6G by using SM NAS and UP connectivity to a Computing Site in the SHE, an Operator controlled domain other than 6G CN (Solution #7 of Annex C.22)

UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G UPF (Solution #3, 5, 10, 11, 15, 26, 36/38/39/40 in Annex C.22.)

UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G Data Plane Function (Solution 11 and 15 in Annex C.22)

UE Requested Computing Support with Computing messages over User Plane (Solution #14, 15, 23 in Annex C.22.)

UE Requested Computing Support in 6G over new Plane (e.g., service plane) (Solution # 16 and 26 in Annex C.22)

UE Initiated Computing Service Support and SMF Controlled Coordinated selection of UPFs and computing sites (Solution #35 in Annex C.22)

AF Requested Computing Support via CCF (Solution #5, 10, 16, 17, 33 in Annex C.22)

UE Requested Computing Service Support and CCF Controlled Coordinated selection of UPF and computing site in DN (Solution #82 in Annex C.22)

Editor’s note: high-level solution principles are FFS.

#### 6.22.2.1 Description

##### **6.22.2.1.1 Architecture and General Description**

6.22.2.1.1.1 Description for variants A/C/D/E/F/H

TBD.

6.22.2.1.1.2 Description for variant B

TBD.

6.22.2.1.1.3 Description for variant G

TBD.

6.22.2.1.1.4 Description for variant I

TBD.

##### 6.22.2.1.2 Coordination between Communication and Computing

6.22.2.1.2.1 Description for variants A/C/D/E/F/H

TBD.

6.22.2.1.2.2 Description for variant B

TBD.

6.22.2.1.2.3 Description for variant G

TBD

Description for variant I

TBD.

6.22.2.1.3 Computing Node/Site Discovery and (Re-)Selection

###### 6.22.2.1.3.1 Variant A

TBD.

###### 6.22.2.1.3.2 Variant B

TBD.

###### 6.22.2.1.3.3 Variant C/D/E/F

TBD.

###### 6.22.2.1.3.4 Variant G

TBD.

###### 6.22.2.1.3.5 Variant H

TBD.

6.22.2.1.3.6 Variant I

TBD.

#### 6.22.2.2 Procedure

TBD.

##### 6.22.2.2.1 Procedures for Variant A

TBD.

##### 6.22.2.2.2 Procedures for Variant B

TBD.

##### 6.22.2.2.3 Procedures for Variant C/D/E/F

TBD.

##### 6.22.2.2.4 Procedures for Variant G

TBD.

##### 6.22.2.2.5 Procedures for Variant H

TBD.

##### 6.22.2.2.6 Procedures for Variant I

TBD.

#### **6.22.2.3 Services, Entities and Interfaces**

TBD.

#### 6.22.2.4 Open Issues

TBD.

**\* \* \* \* 5th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.3 Solution #22.3: Coordination between Communication and Computing is performed by AF

#### 6.22.3.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to address bullet#1b, 3a, 3c, 3d, 3e, 4a, the missing aspect can be added later.

This solution addresses KI#22 (bullet #1a, 3a, 3c, 3d, 3e, 4a).

This solution is extracted from Solution # 27, 28, 30 in Annex C.22.

Editor’s note: high-level solution principles are FFS.

#### 6.22.3.1 Description

#### TBD.

#### 6.22.3.2 Procedures

TBD.

#### 6.22.3.3 Services, Entities and Interfaces

TBD.

#### 6.22.3.4 Open Issues

TBD.

**\* \* \* \* 6th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.4 Solution #22.4: Coordination between Communication and Computing is performed by AF or Edge Enabler Layer

#### 6.22.4.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to address bullet#1b, 3a, 3c, 3d, 3e, 4a, the missing aspect can be added later.

This solution addresses KI#22 (bullet#1b, 3a, 3c, 3d, 3e, 4a).

This solution is extracted from Solution #9 in Annex C.22.

Editor’s note: high-level solution principles are FFS.

#### 6.22.4.1 Description

*TBD.*

#### 6.22.4.2 Procedures

TBD.

#### 6.22.4.3 Services, Entities and Interfaces

TBD.

#### 6.22.4.4 Open Issues

TBD.

**\* \* \* \* 7th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.5 Solution #22.5: Computing Service Authorization to UE by PCF/CCF based on UE Policy

#### 6.22.5.0 High-level solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2a.

This solution addresses the bullet #2a under KI#22.

This solution is extracted from Solution #12, 18, 25 in Annex C.22.

There are two variants:

Variant A: Provisioning URSP (From Solution #12, 18, 25) from PCF;

Variant B: Provisioning Computing Policy from CCF (from Solution #12).

Editor’s note: high-level solution principles are FFS.

#### 6.22.5.1 Description

##### 6.22.5.1.1 Variant A: URSP based Computing Service Authorization to UE from PCF

TBD.

6.22.5.1.2 Variant B: CCF based Computing Service Authorization to UE

TBD.

#### **6.22.5.2 Procedures**

##### 6.22.5.2.1 Procedures for Variant A

TBD

##### 6.22.5.2.2 Procedures for Variant B

TBD.

#### 6.22.5.3 Impacts on Services, Entities and Interfaces

TBD.

#### 6.22.5.4 Open Issues

TBD.

**\* \* \* \* 8th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.6 Solution #22.6: **Non-Policy based Authorization to UE/AF**

#### 6.22.6.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2a.

This solution addresses bullet #2a under KI#22.

The solution is extracted from Solution #34, 38 in Annex C.22.

There are two variants:

Variant A: NEF Authorizes UE/AF (from Solution #38 in Annex);

Variant B: AMF Authorizes UE (from Solution #34 in Annex).

Editor’s note: high-level solution principles are FFS.

#### 6.22.6.1 Description

##### 6.22.6.1.1 Variant A: Computing Service Authorization to UE/AF by NEF

##### TBD.

##### 6.22.6.1.2 Variant B: Computing Service Authorization to UE by 6G AMF

TBD.

#### 6.22.6.2 Procedures

TBD.

##### 6.22.6.2.1 Procedures for Variant A

TBD.

##### 6.22.6.2.2 Procedures for Variant B

TBD.

#### 6.22.6.3 Services, Entities and Interfaces

TBD.

#### 6.22.6.4 Open Issues

TBD.

**\* \* \* \* 9th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.7 Solution #22.7: Computing Service Authorization to UE/AF without Explicit Authorization Indication to UE/AF

#### 6.22.7.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2a.

The solution addresses bullet #2a of KI#22.

The solution is extracted from Solution #7, 33 in Annex C.22.

There are two variants:

Variant A (Solution #7, for variant B in clause 6.22.2);

Variant B (Solution #33, for variant H in clause 6.22.2).

Editor’s note: high-level solution principles are FFS.

#### 6.22.7.1 Description

TBD.

##### 6.22.7.1.1 Variant A: Computing Service Authorization by CCCE

TBD.

##### 6.22.7.1.2 Variant B: Computing Service Authorization by CCF

TBD.

#### 6.22.7.2 Procedures

##### 6.22.7.2.1 Procedures for Variant A

TBD.

##### 6.22.7.2.2 Procedures for Variant B

TBD.

#### 6.22.7.3 Services, Entities and Interfaces

TBD.

#### 6.22.7.4 Open Issues

TBD.

**\* \* \* \* 10th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.8 Solution #22.8: Computing resource authorization by computing framework (no need for computing resource authorization by 6G CN)

#### 6.22.8.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2a.

The solution addresses bullet #2a of KI#22.

The solution is extracted from Solution # 27, 28, 30, 35 in Annex C.22.

Editor’s note: high-level solution principles are FFS.

#### 6.22.8.1 Description

TBD.

#### 6.22.8.2 Procedures

TBD.

#### 6.22.8.3 Services, Entities and Interfaces

TBD.

#### 6.22.8.4 Open Issues

TBD.

**\* \* \* \* 11th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.9 Solution #22.9: Computing Related Information exposure to AF

#### 6.22.9.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2b.

This solution address bullet#2b of KI#22.

The solution is extracted from Solution #2, 17, 24, 28, 31, 37 in Annex C.22.

There are four variants:

Variant A (Solution #2, 37): CMF exposes Computing Capability to AF;

Variant B (Solution #24): CMF exposes Computing metrics to AF;

Variant C (Solution #31): NEF exposes CS Deployment Information stored in UDR to AF;

Variant D (Solution #35): SMF exposes DNAI and Computing Site IP to AF

Editor’s note: high-level solution principles are FFS.

#### 6.22.9.1 Description

Editor’s note: The solution description is FFS.

##### 6.22.9.1.1 Variant A: CMF Exposes Computing Capability to AF

TBD.

##### 6.22.9.1.2 Variant B: CMF Exposes Computing Metrics to AF

TBD.

##### 6.22.9.1.3 Variant C: NEF exposes Computing Deployment Information stored in UDR to AF

TBD.

6.22.9.1.4 Variant D: SMF Exposes DNAI and Computing Site IP to AF

TBD.

#### 6.22.9.2 Procedures

##### 6.22.9.2.1 Procedures for Variant A

TBD.

##### 6.22.9.2.2 Procedures for Variant B

TBD.

##### 6.22.9.2.3 Procedures for Variant C

TBD.

##### 6.22.9.2.4 Procedures for Variant D

TBD.

#### 6.22.9.3 Services, Entities and Interfaces

TBD.

#### 6.22.9.4 Open Issues

TBD.

**\* \* \* \* 12th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.10 Solution #22.10: Communication Delay exposure to AF

#### 6.22.10.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2b.

This solution addresses bullet#2b of KI#22 and is extracted from Solution # 24, 28 in Annex C.22.

Editor's note: high-level solution principles are FFS.

#### 6.22.10.1 Description

TBD.

#### 6.22.10.2 Procedures

TBD.

#### 6.22.10.3 Services, Entities and Interfaces

TBD.

#### 6.22.10.4 Open Issues

TBD.

**\* \* \* \* 13th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.11 Solution #22.11: CP Function monitors the Computing Resources status in Computing Node/Site

#### 6.22.11.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.3b.

This solution addresses bullet#3b of KI#22 and is extracted from Solution # 5, 11, 19 in Annex C.22.

Editor's note: high-level solution principles are FFS.

#### 6.22.11.1 Description

##### 6.22.11.1.1 Variant A: A CP NF in 6G CN Monitoring the Computing Resources under Operator’s Control

TBD.

##### 6.22.11.1.2 Variant B: A SHE controller in SHE Monitoring the Computing Resources based on Implementation

TBD.

#### 6.22.11.2 Procedures

TBD.

##### 6.22.11.2.1 Procedures for Variant A

TBD.

##### 6.22. 11.2.2 Procedures for Variant B

TBD.

#### 6.22.11.3 Services, Entities and Interfaces

TBD.

#### 6.22.11.4 Open Issues

TBD.

**\* \* \* \* 14th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.12 Solution #22.12: CP Function monitors the QoS for Computing Service from other NFs

#### 6.22.12.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.3b.

This solution addresses bullet#3b of KI#22.

The solution is extracted from Solution # 34 in Annex C.22.

Editor's note: high-level solution principles are FFS.

#### 6.22.12.1 Description

TBD.

#### 6.22.12.2 Procedures

TBD.

#### 6.22.12.3 Services, Entities and Interfaces

TBD.

#### 6.22.12.4 Open Issues

TBD.

**\* \* \* \* 15th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.13 Solution #22.13: 6G CN Network Function monitors the Computing Resources in DN

#### 6.22.13.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.3b.

This solution addresses bullet#3b of KI#22.

The solution is extracted from Solution # 11, 32, 50 in Annex C.22.

There are two variants:

Variant A (Solution #32, 50): The CP NF (e.g., EASDF, UDR, CMF, a Proxy NF, NRF, etc.) collects/monitors the computing resource related information (e.g., Status/Load information) from AF;

Variant B (Solution #50): The CMF collects/monitors computing resource related information of Computing Site in CN via PSA UPF.

Editor’s note: high-level solution principles are FFS.

#### 6.22.13.1 Description

Editor’s note: The solution description is FFS.

6.22.13.1.1 Variant A: The CP NF Monitoring the Computing Resource related Information from AF

TBD.

6.22.13.1.2 Variant B: The CMF Monitoring the Computing Resource related Information of Computing Site in CN via PSA UPF

TBD.

#### 6.22.13.2 Procedures

TBD.

##### 6.22.13.2.1 Procedures for Variant A

TBD.

##### 6.22.13.2.2 Procedures for Variant b

TBD.

#### 6.22.13.3 Services, Entities and Interfaces

Editor’s note: Impacts are FFS.

#### 6.22.13.4 Open Issues

TBD.

**\* \* \* \* 16th Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.14 Solution #22.14: No Monitoring in 6G CN: CP function (i.e., SMF, CCF) receives computing delay information from AF for each DNAI relevant for the UE

#### 6.22.14.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.3b.

This solution addresses bullet#3b of KI#22.

The solution is extracted from Solution # 35 in Annex C.22.

Editor's note: high-level solution principles are FFS.

#### 6.22.14.1 Description

TBD.

#### 6.22.14.2 Procedures

TBD.

#### 6.22.14.3 Services, Entities and Interfaces

TBD.

#### 6.22.14.4 Open Issues

TBD.

**\* \* \* \* 17th Change \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.15 Solution #22.15: A SHE controller in SHE monitoring the computing resources based on implementation

#### 6.22.15.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.3b.

This solution addresses bullet#3b of KI#22 and is extracted from Solution # 7 in Annex C.22.

Editor's note: high-level solution principles are FFS.

#### 6.22.15.1 Description

TBD.

#### 6.22.15.2 Procedures

TBD.

##### 6.22.15.2.1 Procedures for Variant A

TBD.

##### 6.22.15.2.2 Procedures for Variant B

TBD.

#### 6.22.15.3 Services, Entities and Interfaces

TBD.

#### 6.22.15.4 Open Issues

TBD.

**\* \* \* \* 18th Change \* \* \* \***

# C.22 List of submitted solutions for KI#22

Table C.22-1: Input papers at SA2#173

| Meeting | Solution# | Tdoc | Subject/Comment |
| --- | --- | --- | --- |
| SA2#173 | 1 | S2-2600098 | [KI#22, bullet #1&2&4] Solution for KI#22 of 6G architecture enhancement to support 6G computing service |
| SA2#173 | 2 | S2-2600125 | NF computing capability collection and exposure for 6G Computing Supporting |
| SA2#173 | 3 | S2-2600156 | [KI#22] 6G computing service to UE |
| SA2#173 | 4 | S2-2600174 | [KI#22, bullet#1(b)] New Sol#X: “Computing Resource Profile” |
| SA2#173 | 5 | S2-2600181 | [KI#22] New Sol: Solution to support 6G Computing |
| SA2#173 | 6 | S2-2600183 | Capability Aware Discovery and selection of compute sites |
| SA2#173 | 7 | S2-2600190 | [KI#22] New Sol: Solution to support computing service |
| SA2#173 | 8 | S2-2600192 | [KI#22, bullet#1,#2,#4] 6G computing service |
| SA2#173 | 9 | S2-2600247 | [KI#22, bullet 1] Use of Edge Enabler Layer to support 6G computing support |
| SA2#173 | 10 | S2-2600262 | [KI#22] Solution to support computing task offloading to the 6G network |
| SA2#173 | 11 | S2-2600267 | [KI#22, bullet #1, #3] Identification of architecture requirements and computing resource |
| SA2#173 | 12 | S2-2600268 | [KI#22, bullet #2, #4] Support computing service for UE |
| SA2#173 | 13 | S2-2600358 | [KI#22] PDU session establishment for Computing Service |
| SA2#173 | 14 | S2-2600359 | [KI#22] Exposed services for Computing Service |
| SA2#173 | 15 | S2-2600374 | [KI#22, bullet #1,3,4] Solution on 6G Computing Architecture |
| SA2#173 | 16 | S2-2600383 | [KI#22, bullet #2.a, KI#1.2 bullet #a)] A service-plane-based architectural solution to support computing services in 6G systems |
| SA2#173 | 17 | S2-2600402 | [KI#22, bullet #1,2,3,4] Solution for 6G Computing Support |
| SA2#173 | 18 | S2-2600409 | [KI#22, bullet#2a] New Solution on Enabling Computing Service to UE |
| SA2#173 | 19 | S2-2600410 | [KI#22, bullet#3b] New Solution on Computing Resource Collection and Management in 6G CN |
| SA2#173 | 20 | S2-2600411 | [KI#22, bullet#4a] New Solution on Computing Node and Site Discovery and Selection |
| SA2#173 | 21 | S2-2600417 | [KI#22] New solution for 6G computing resource allocation and coordination |
| SA2#173 | 22 | S2-2600421 | [KI#22] Architectural requirement of 6G computing |
| SA2#173 | 23 | S2-2600426 | [KI#22, bullet #1, bullet#2, bullet#3] New solution: Computing service support for UE request |
| SA2#173 | 24 | S2-2600427 | [KI#22, bullet #2] New solution: Computing service resource information exposure to AF |
| SA2#173 | 25 | S2-2600430 | Enabling computing service access and offload |
| SA2#173 | 26 | S2-2600453 | [KI#22] Computing Framework and Computing Service Enablement Mechanism |
| SA2#173 | 27 | S2-2600477 | [KI#22, bullet#1] Scenarios and architectural requirements for 6G compute |
| SA2#173 | 28 | S2-2600479 | [KI#22 bullets 2-4] Coordination of communication and computing |
| SA2#173 | 29 | S2-2600480 | [KI#22 bullet 1] Architectural requirements on 6G Computing support |
| SA2#173 | 30 | S2-2600486 | [KI#22, bullet#4] Discovery and (re)selection |
| SA2#173 | 31 | S2-2600487 | [KI#22, bullet 2-b and 3-b] Management and exposure |
| SA2#173 | 32 | S2-2600488 | [KI#22, bullet#3] CS re-discovery with monitoring |
| SA2#173 | 33 | S2-2600502 | [KI#22] Solution proposals on 6G Computing Support |
| SA2#173 | 34 | S2-2600548 | [KI#22, Bullets #1, #2a, #3a, b, c, & d, and #4] 6G Computing Service provisioning, configuration and monitoring |
| SA2#173 | 35 | S2-2600575 | [KI#22] Coordinated selection of UPFs and compute sites without HLOS and UE application dependencies |
| SA2#173 | 36 | S2-2600584 | [KI#22, bullet 1] Solution for Architecture of Computing resource and definition of computing resource |
| SA2#173 | 37 | S2-2600585 | [KI#22, bullet 2] Solution for Exposure of computing service |
| SA2#173 | 38 | S2-2600586 | [KI#22, bullet 2] Solution for Enablement of computing service |
| SA2#173 | 39 | S2-2600587 | [KI#22, bullet 3] Solution for application aware computing orchestration |
| SA2#173 | 40 | S2-2600588 | [KI#22, bullet 3] Solution for dynamic computing configuration based on QoS and UE mobility |

Table C.22-2: Input papers at SA2#174

| Meeting | Solution# | Tdoc | Subject/Comment |
| --- | --- | --- | --- |
| SA2#174 | 41 | [S2-2601857](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601857.zip) | [KI#22, Solution #22.2, resubmission] 6G architecture enhancement to support 6G computing service |
| SA2#174 | 42 | [S2-2601896](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601896.zip) | [KI#22] New/Solution variant #4 update: solution based on Edge Enabling Layer and AF based solutions |
| SA2#174 | 43 | [S2-2601897](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601897.zip) | [KI#22] Comments on general issues and solutions to be captured in TR 23.801-01 |
| SA2#174 | 44 | [S2-2601933](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601933.zip) | [KI#22, Solution#22.5 Variant #a update] URSP based Computing Service Authorization to UE |
| SA2#174 | 45 | [S2-2601934](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601934.zip) | [KI#22, Solution#22.11 update] Computing Resource Collection and Management in 6G CN |
| SA2#174 | 46 | [S2-2601959](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601959.zip) | [KI#22, Solution Variant #13 update] PDU session establishment for Computing Service |
| SA2#174 | 47 | [S2-2601960](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601960.zip) | [KI#22, Solution Variant #14 update] Exposed services for Computing Service |
| SA2#174 | 48 | [S2-2601965](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601965.zip) | Solution#X aNB computing capability collection for 6G |
| SA2#174 | 49 | [S2-2601968](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601968.zip) | [KI#22, 22.2-7-11-12, update] Support UE requesting computing service via NAS for computing site connecting to 6G UPF |
| SA2#174 | 50 | [S2-2601969](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601969.zip) | [KI#22 bullet#3 new] Solution for Awareness of computing site information in DN at the 6G CN |
| SA2#174 | 51 | [S2-2601980](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601980.zip) | [KI#22, Solution#22.2, Update] Variant A of Solution #22.2 |
| SA2#174 | 52 | [S2-2601981](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2601981.zip) | [KI#22, Solution#22.1, Update] Architecture requirements for 6G Computing |
| SA2#174 | 53 | [S2-2602029](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602029.zip) | [KI#22, bullet #1,2,3,4 update] Solution for 6G Computing Support. |
| SA2#174 | 54 | [S2-2602036](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602036.zip) | [KI#22, Solution#22.2 variant E] Computing service support for UE request and service continuity |
| SA2#174 | 55 | [S2-2602037](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602037.zip) | [KI#22, solution#22.12, update] Computing service resource information exposure to AF |
| SA2#174 | 56 | [S2-2602040](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602040.zip) | [KI#22, bullet 2] Variant H update of 6.22.2 |
| SA2#174 | 57 | [S2-2602043](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602043.zip) | [KI#22, bullet #2.b] Computing related information exposure to AF of variant H of 6.22.9 |
| SA2#174 | 58 | [S2-2602044](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602044.zip) | [KI#22, bullet #2.a] Authorization aspect of variant H of 6.22.7 |
| SA2#174 | 59 | [S2-2602073](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602073.zip) | [KI#22, Solution#22.11 update] CP Function monitors the Computing Resources status in Computing Node/Site |
| SA2#174 | 60 | [S2-2602089](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602089.zip) | [KI#22, bullet 1, update] Updates on Architecture Requirements and definitions |
| SA2#174 | 61 | [S2-2602102](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602102.zip) | [KI#22, bullet #2, #4, new] Support distributed computing in CN and DN |
| SA2#174 | 62 | [S2-2602103](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602103.zip) | [KI#22, bullet #3, #4, new] Support service continuity for computing service |
| SA2#174 | 63 | [S2-2602104](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602104.zip) | [KI#22, Candidate Solution Variant #22.2 update] Coordination between Communication and Computing is controlled by 6G CN |
| SA2#174 | 64 | [S2-2602105](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602105.zip) | [KI#22, Candidate Solution Variant #22.5 update] Computing Service Authorization to UE based on UE Policy |
| SA2#174 | 65 | [S2-2602106](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602106.zip) | [KI#22, Candidate Solution Variant #22.11 update] Computing Resource Collection in 6G CN |
| SA2#174 | 66 | [S2-2602122](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602122.zip) | [KI22, resubmitted] Enabling computing service access and offload |
| SA2#174 | 67 | [S2-2602123](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602123.zip) | [KI#22, bullet 2b, update] Management and exposure |
| SA2#174 | 68 | [S2-2602128](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602128.zip) | [KI#22, Candidate Solution Variant #22.2, update] Coordination between Communication and Computing is controlled by 6G CN |
| SA2#174 | 69 | [S2-2602129](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602129.zip) | [KI#22, all bullets, update] Original Solution update to support 6G Computing |
| SA2#174 | 70 | [S2-2602130](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602130.zip) | [KI#22, bullet#3b, update] CS re-discovery with monitoring |
| SA2#174 | 71 | [S2-2602131](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602131.zip) | [KI#22, new] Update and simplify descriptions based on endorsed version (S2-2601619) for 6.22.1 to 6.22.13 |
| SA2#174 | 72 | [S2-2602132](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602132.zip) | [KI#22, bullet 3b, update] Computing Nodes/Sites information collection |
| SA2#174 | 73 | [S2-2602141](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602141.zip) | [KI#22, new] New Solution Computing site(s) or node(s) proactively request processing of the computing service |
| SA2#174 | 74 | [S2-2602145](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602145.zip) | [KI#22, Candidate Solution Variant #22.1 update] Computing Architecture Requirements, Definitions and Computing Resources |
| SA2#174 | 75 | [S2-2602146](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602146.zip) | [KI#22, Candidate Solution Variant #22.2 update] Architecture and Coordination of Communication and Computing |
| SA2#174 | 76 | [S2-2602147](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602147.zip) | [KI#22, Candidate Solution Variant #22.11 update] CP Function monitors the Computing Resources status in Computing Node/Site |
| SA2#174 | 77 | [S2-2602148](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602148.zip) | [KI#22, Original Solution Update] Computing Service Enablement Mechanism |
| SA2#174 | 78 | [S2-2602163](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602163.zip) | [KI#22, bullet 1, solution update] Architecture Requirements and Definitions of 6G Computing Support |
| SA2#174 | 79 | [S2-2602164](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602164.zip) | [KI#22, bullet 2, solution update] Solution update proposal for 6G Computing Support |
| SA2#174 | 80 | [S2-2602198](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602198.zip) | KI#22,Solution Variant 22.2-1 UPDATE Discovery and selection for UE Requested Compue site in 6G |
| SA2#174 | 81 | [S2-2602218](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602218.zip) | [KI#22, bullet #1,3,4, Update] Solution on 6G Computing Architecture |
| SA2#174 | 82 | [S2-2602219](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602219.zip) | [KI#22, bullet3,4, New] Solution on support of computing service for computing resource located in DN |
| SA2#174 | 83 | [S2-2602220](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602220.zip) | [KI#22, bullet#2, New] Computing metrics exposure for 6G computing service |
| SA2#174 | 84 | [S2-2602286](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602286.zip) | [KI#22, bullets #1, #2b, #3a, update] Solution for 6G compute |
| SA2#174 | 85 | [S2-2602288](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602288.zip) | KI#22, solution variants #22.2 and #22.5 update]: Proposed changes to solution principles |
| SA2#174 | 86 | [S2-2602301](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602301.zip) | [KI#22, Solution#22.2 Variant #b update] Computing and communication coordination with CCCE |
| SA2#174 | 87 | [S2-2602302](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602302.zip) | [KI#22, Solution#22.7 new Variant] Authorization of a UE Request for Computing PDU Session Establishment |
| SA2#174 | 88 | [S2-2602303](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602303.zip) | [KI#22, Solution#22.11 new Variant] Computing resource management through SHE controller |
| SA2#174 | 89 | [S2-2602305](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602305.zip) | [KI#22, bullet#2, #3] Var F. UE Requested Computing Service over new plane |
| SA2#174 | 90 | [S2-2602365](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602365.zip) | [KI#22, Solution Category Overview update] Add missing categories |
| SA2#174 | 91 | [S2-2602374](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602374.zip) | [KI#22, Candidate Solution Variants #22.2/22.2.5/22.2.8 update] Adding open issues and clarify solution variants |
| SA2#174 | 92 | [S2-2602412](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602412.zip) | [KI#22, Candidate Solution Variant #22.2] Updates to variant A for UE Requested Computing Support in 6G by using SM NAS |
| SA2#174 | 93 | [S2-2602414](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602414.zip) | [KI#22, Candidate Solution Variant #22.6] Updates to variant B for Non-Policy based Authorization to UE |
| SA2#174 | 94 | [S2-2602415](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602415.zip) | [KI#22, Solution #22.12] Updates to CP Function (e.g., CSMF, etc.) monitors the QoS for Computing Service from other NFs |
| SA2#174 | 95 | [S2-2602416](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602416.zip) | [KI#22, New Solution #22.Y] New solution for Computing Service Continuity |
| SA2#174 | 96 | [S2-2602429](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602429.zip) | [KI#22, Solution #22.1, update] Architectural requirements on 6G Computing support |
| SA2#174 | 97 | [S2-2602430](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602430.zip) | [KI#22, Solution #22.3, update] |
| SA2#174 | 98 | [S2-2602434](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602434.zip) | [KI#22, Solution#22.2] Service Continuity aspects |
| SA2#174 | 99 | [S2-2602435](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_174_Malta_2026-04%5C%5CDocs%5C%5CS2-2602435.zip) | [KI#22, Bullets 1,2,3a,3b,4a, Update] Architectural solution for enablement of computing service in 6G network |

**\* \* \* \* End of Changes \* \* \* \***