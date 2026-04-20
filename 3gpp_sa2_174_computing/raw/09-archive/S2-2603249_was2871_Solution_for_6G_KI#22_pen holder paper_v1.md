**3GPP SA WG2#174 S2-2603249**

**Apr. 13th – 17th, 2026 (Revision of S2-2602871)**

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
| (3) Computing Site location | FFS | Solution #96 |
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
| (3) Subscription based authorization without explicit authorization to UE/AF | A. Computing Service Authorization by CCCF | Solution #7 | 22.7 |
| B. Computing Service Authorization by 6G CCF | Solution #33 |
| (4) Computing resource authorization by computing framework (no need for computing resource authorization by 6G  CN) |  | Solution #27, 28, 30, 35 | 22.8 |
| **4. Computing Exposure from 6G CN to AF** | 2b | (1) Computing Related Information exposure | A. CMF exposes Computing Capability to AF | Solution #2, 17, 37 | 22.9 |
| B. CMF exposes Computing metrics to AF | Solution #24 |
| C. NEF exposes CS Deployment Information stored in UDR to AF | Solution #31 |
| D. SMF exposes DNAI and Computing Site IP to AF | Solution #35 |
| (2) Communication Delay exposure |  | Solution #24, 28 | 22.10 |
| **5. Computing Resource Monitoring and Management by 6G CN** | 3b | (1) CP Function (e.g., 6G SMF, CMF, CCF, etc.) monitors the Computing Resources status in Computing Node/Site (e.g., Computing Node/Site, etc.) | A. A CP NF in 6G CN monitoring the computing resources under operator’s control | Solution #5, 11, 19 | 22.11 |
| B. A SHE controller in SHE monitoring the computing resources based on implementation | Solution #7 |
| (2) CP Function monitors the QoS for Computing Service from other NFs (e.g., from SMF, PCF, NWDAF, etc.) in 6G CN |  | Solution #34 | 22.12 |
| (3) 6G CN Network Function monitors the Computing Resources in DN | A. The CP NF (e.g., EASDF, UDR, CMF, a Proxy NF, NRF, etc.) collects/monitors the computing resource related information (e.g., Status/Load information) from AF. | Solution #11, 32, 50 | 22.13 |
| B. The CMF collects/monitors computing resource related information of Computing Site in CN via PSA UPF | Solution #50 |
| (4) No monitoring in 6G CN: CP function (i.e., SMF) receives computing delay information from AF for each DNAI relevant for the UE |  | Solution #35 | 22.X |

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

**Computing Service:** A service provided by 6G network utilizing computing resources in computing site and a user plane connection between the UE and a user plane function, which can be used by a UE and/or AF for executing application workloads.

**Computing Site:** Computing Site represents the computing resources in a specific location of network topology. The computing site can offer computing services by allocating its computing resources to run application workloads upon demand of a Computing Service consumer.

**Computing Resource:** The computing resource at a particular Computing Site that can be used to run application workloads. It can be physical or virtual.

Editor’s note: Other Computing related definitions (e.g., SHE, Computing Node, etc.) are FFS based on the progress of specific solutions.

##### 6.22.1.1.2 Architecture Requirements

6G System supports UE and/or Application Server workloads to be run on operator controlled/managed computing sites.

Editor’s note: Other architecture requirements are FFS based on the progress of specific solutions.

NOTE: The representation of workload (e.g., computing metrics) in 6GS will be studied in the specific solutions.

##### 6.22.1.1.3 Computing Site Location

Editor’s note: Computing Site location is FFS.

#### 6.22.1.1.4 Architecture Assumption

Packaging, storage and instantiation of a distributable application component and placement logic of a given application in Computing Site shall follow procedures defined by other SDOs (outside of 3GPP)/open-source projects and shall not be redefined as 6G System procedures.

#### 6.22.1.4 Open Issues

(1) Computing Site location.

(2) Computing related definitions.

(3) Architecture requirements.

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

AF Requested Computing Support via CCF (Solution #**5, 10,** 16, 17, 33 in Annex C.22)

UE Requested Computing Service Support and CCF Controlled Coordinated selection of UPF and computing site in DN (Solution #82 in Annex C.22)

The solution illustrates how the UE or AF requests the computing support from 6G CN and how the 6G CN coordinates the communication and computing requirements and select the proper Computing Site(s) for the UE’s PDU Session.

The solution for variants A/C/D/E/F/H is based on the following principles:

In control plane there is an NF (e.g., 6G PCF, 6G SMF, CMF, etc.) which is used to discover the suitable Computing Node (which is an entity that can represent Computing Site) for the computing request from UE.

The CMF (Computing Management Function) is aware of the status and capabilities of the internal/external computing resources via the Computing Node/Site. The 6G SMF and CMF need to consider the coordination between the computing and communication to do the selection of Computing Node/Site.

The communication between the UE and Computing Node/Site for Computing Service is via user plane.

The coordination between the Computing metrics and Communication QoS parameters on computing session is determined by a CP NF (e.g., 6G PCF, 6G SMF, CMF, etc.). The CP NF determines Computing metrics and QoS related information (e.g., PDB, Computing latency) based on the UE request, subscription and Computing resources status.

NOTE: The enhancement of Communication QoS parameters on computing session may need to coordinate with KI#5 (e.g., on adaptive QoS, QoS monitoring).

The solution for variant B is based on the following principles:

At PDU session establishment, the UE indicates the PDU session is for a computing service.

The eSMF selects a CCCE that performs CC policy association with the ePCF. The CC profile per application can be pre-configured or optionally provisioned by AF request.

The eSMF discovers a set of eUPFs capable of supporting computing service sessions. It then provides the NF IDs of these eUPFs, along with their corresponding SHE controller IDs, to the CCCE. The SHE controller ID enables the CCCE to identify the appropriate SHE controller to contact and additionally to determine the supported SHE type(s). The NF ID of each eUPF can be used by the corresponding SHE Controller to identify the resources that implement the eUPF within the network deployment platform.

The CCCE queries the SHE controller(s) (which is logical control entity outside the 6G CN) responsible for abstracting, exposing computing resources available within the Service Hosting Environment. It provides interfaces toward consumers and translates resource requests into operations) to check whether a CS physically co-located with the eUPF identified by the NF ID can be instantiated in accordance with the SHE policy options for the computing service session.

The SHE controller(s) provide a CS ID identifying the computing site that is suitable to fulfil at least one SHE policy option and is physically co-located with the eUPF (NF ID). If the CCCE receives multiple CS IDs from different SHE controllers, it selects the one that meets secondary targets (e.g., minimize energy consumption).

If the SHE Controller cannot identify suitable CS physically co-located with the eUPFs (NF IDs), the SHE Controller may provide a list of Computing Sites not co-located with the NF IDs but reachable via DNAIs.

The CCCE indicates to the eSMF the selected NF ID associated with the selected CS ID and enforces the SM policy towards the eSMF. It also enforces the SHE policy towards the SHE controller responsible for the selected CS ID by requesting reservation of the required SHE resources at the computing site.

When the Computing Site being used is no longer able to support the required SHE policy, the SHE Controller notifies the CCCE of the CS status. The CCCE then adjusts the SHE policy if possible or performs the procedures to select another Computing Site that can support the required SHE policy.

The solution for variant G is based on following principles:

Avoid any additional requirements on HLOS in the UE and UE applications and ensure that any 3GPP enhancements for compute can work with different computing/virtualization frameworks.

The UE application interacts with a computing framework or a network-side application component that uses a computing framework layer in the user-plane.

An AF (representing a computing framework or a network-side application component that uses a computing framework) that is deployed in the service hosting environment may provide the maximum acceptable aggregated latency (the sum of the communication latency (N3 latency and N6 latency) and the computing latency) and information about the computing latency of available computing sites for a particular UE (i.e., UE-related compute task) to the network.

Based on AF influence, the 6G SMF:

selects a DNAI and computing site for which the communication latency (N3 latency and N6 latency) and the computing latency for the computing site as provided by the AF is lower than the maximum acceptable aggregated latency.

adds a ULCL / BP and L-PSA for the selected DNAI;

adjusts the QoS parameters of the flows between the UE and the computing site;

informs the AF about the selected DNAI and computing site.

The solution for variant I is based on following priciples:

Computing node and computing site are deployed within the DN domain, with computing node acting as a control node for heterogeneous underlying computing platforms.

The computing node registers as an AF in the 3GPP SBA and sends its computing capabilities via the NEF.

A new Computing Control Function (CCF) is introduced in the 6G CN to perform joint Communication-and-Computing scheduling decisions based on network status and computing information from AF (i.e., computing node).

The computing information provided from AF (i.e., computing node) includes IP address of computing site, estimated service latency and supported types of AI models, etc.

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

The proposed solution is based on the below high-level principles:

the Edge Computing mechanisms specified in 5G (e.g., AF Traffic Influence, EAS Re-discovery mechanisms, AF Session with QoS, etc.) can be utilized and enhanced to address the aspects on support of computing for UE, core network and application server in 6G.

Compute resource is an application layer framework consisting of hardware and software components, that receives and processes a client’s request for offload of a computing task

6G Core network exposes E2E QoS monitoring information towards service hosting environment/Compute Site to trusted AF or to untrusted AF via NEF.

E2E QoS monitoring information includes 6G Core network internal delay metrics as well as N6 delay metrics. 6G Core network may learn these e.g. as specified in TS 23.502 and TS 23.548. When combined, the network internal and the N6 delay metrics cover the whole end-to-end network path between a UE and the Application Sever (AS) or the Compute Site (CS).

The AF can request to monitor delay metrics not only between a UE and a particular AS instance, but between UE and a group of candidate AS’s or CS’s providing the same service. The AF can also request from/subscribe to 6G CN regarding the Compute Site deployment information These allow the AF to make informed selections across multiple AS or CS candidates based on the monitoring provided by the 6G Core.

In case the Compute Site and/or the Application Servers are deployed in a Service Hosting Environment fully controlled by the Network Operator, the 6G Core network is able to guarantee the E2E QoS between the UE and the AS or the CS including the N6 segment of the network path.

Coordination of compute and communication can be handled by an AF based on the QoS monitoring information and compute site deployment information provided by the 6G Core Network about different AS/CS candidates, ability to request E2E QoS between UE and the selected AS, and the AF can separately retrieve by methods outside of 3GPP scope about the candidate AS’s or CS’s compute metrics such as hardware availability, load status, energy-related metrics, etc.

AF decides most suitable DNAI corresponding to selected/suitable Compute Server IP address, and influences 6G Core to select most suitable user path considering target DNAI.

AF keeps track of the network metrics and computing site status to decide re-selection and/or update of E2E QoS requirement.

NOTE 1: N6 represents the interface between a (candidate) UP anchor and Compute Site/Edge Application Server residing in SHE and/or DN. The exact interface name can be determined based on the discussions in this KI and other KIs.

NOTE 2: This solution assumes that UE or AF request for the computing service is handled in application layer.

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

The following architectural principles are proposed:

Computing Site resides in a Service Hosting Environment/Data Network (either owned and controlled by an operator or 3rd party) that both are accessible via user plane function in 6G.

6G System supports operator control/modification of traffic classification/prioritization on the interface between user plane function in 6G and Computing Site residing in Data Network or Service Hosting Environment.

6G System provides compute offloading service from a Computing Site that has an instantiated distributable application component of a given application.

Packaging, storage and instantiation of a distributable application component and placement logic of a given application shall follow procedures already defined by other WGs/SDOs/open-source projects and shall not be redefined by SA2 as 6G System procedures.

The proposed solution on communication and computing coordination is based on the below high-level principles:

6G Core network exposes E2E QoS monitoring information towards to AF/Edge Enabler Layer.

E2E QoS monitoring information includes 6G Core network internal delay metrics as well as N6 delay metrics. 6G Core network may learn these e.g. as specified in TS 23.502 [3] and TS 23.548 [xy]. When combined, the network internal and the N6 delay metrics cover the whole end-to-end network path between a UE and the Application Sever (AS) or the Compute Site (CS).

The AF/Edge Enabler Layer can request to monitor delay metrics not only between a UE and a particular AS/CS instance, but between UE and a group of candidate AS’s or CS’s providing the same service. This allows the AF/Edge Enabler Layer to make informed selections across multiple AS or CS candidates based on the monitoring provided by the 6G Core.

Coordination of compute and communication can be handled by an AF/Edge Enabler Layer based on the QoS monitoring information provided by the 6G Core Network about different AS/CS candidates, ability to request E2E QoS between UE and the selected AS, and the AF/Edge Enabler Layer can separately retrieve by methods outside of 3GPP SA2 scope about the candidate AS’s or CS’s compute metrics such as compute resource availability, load status, energy-related metrics, etc.

AF/Edge Enabler Layer decides most suitable DNAI corresponding to selected/suitable Compute Site/AS endpoint, and influences 6G Core to select most suitable user path considering target DNAI.

AF/Edge Enabler Layer may keep track of the network metrics and AS/CS Status to select AS/CS.

NOTE 1: N6 represents the interface between a (candidate) UP anchor and Compute Site/Edge Application Server residing in SHE/DN. The exact interface name can be determined based on the discussions in this KI and other KIs.

NOTE 2: This solution assumes that UE or AF request for the computing service is handled in application layer.

Editor’s note: It’s FFS on how to reduce the overlapping description with solution #22.3.

When adopting Architecture for enabling Edge Applications defined in 3GPP TS 23.558[xx] more or less all sub-issues under KI can already today be supported. An EAS (Edge Application Server) can register itself to the EES (Edge Enabling Server) with its EAS profile. An EAS Profile includes information about an EAS used to describe services and service characteristics offered.

EEC (Edge Enabling Client) within the UE can discover EAS based on the required functionality of the EAS.

The EAS can for example provide a server component of the application or libraries for external execution of processing heavy operations needed by the UE.

The EES as AF towards the core network can use APIs for breaking out traffic and getting QoS.

Discovery of the ECS (Edge Configuration Server) is currently enabled via PCO within 5GC.

The architecture supports Authentication and Authorization.

Figure 6.22.4.0-1below shows a high-level architecture:

![](data:image/x-emf;base64...)

Figure 6.22.4.0-1: High level architecture for enabling edge applications

This variant is further detailed in 3GPP TS 23.558 [xx].

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

Provisioning URSP (From Solution #12, 18, 25) from PCF: In order to enable the Computing Service to UE, the Computing related UE Policy (i.e., URSP enhanced with new computing related parameter) needs to be provisioned to UE in order to make UE aware whether, where and when it can use the Computing Service to establish the according PDU Session supporting computing.

Provisioning Computing Policy from CCF (from Solution #12):

- The CCF generates and provides the computing service policy to UE, which can assist UE to decide whether triggers computing service request (e.g. whether is within allowed time and location for requesting computing service) and determines the offloading decision (e.g. which computing task(s) can be offloaded to computing site).

- The UE requests computing service from 6G network, and if the service request is authorized based on subscription data, the CCF selects the computing site(s) to execute the computing task for UE.

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

NEF Authorizes UE/AF (from Solution #38 in Annex): It defines how the 6G system authorizes and enables computing services. Enablement is strictly controlled by the operator via the COCF, ensuring that only authorized UEs or AFs can access specific computing resources based on subscription and policy.

AMF Authorizes UE (from Solution #34 in Annex): The solution assumes that support for 6G Computing will based on the following principles and architecture assumptions:

6GS offers Computing Services to a UE or AF by utilizing computing resources from computing sites within the 6G CN and/or operator-controlled DN.

A new 6G NF (i.e., the Computing Management Function (CMF)) manages the provisioning, configuration and monitoring of Computing Services.

The UE discovers the Computing Service capabilities available to it during registration.

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

Variant A (Solution #7, for variant B in clause 6.22.2): Computing Service authorization by CCCE. The high-level principles are:

When a UE requests to establish a PDU session for a computing service, it includes a computing service indication

When the indication is included in the PDU session establishment request, the eSMF selects the CCCE, which authorizes the UE request based on the UE subscription information that includes both UP and computing service related information.

Variant B (Solution #33, for variant H in clause 6.22.2): Computing Service authorization by CCF. The high-level principles are:

The CCF shall act as the central control point for authentication and authorization of both UE and service (AF) with respect to computing service usage.

All requests for computing session creation, update, or usage shall be validated against operator-defined policies, ensuring that only authorized entities can access computing resources under permitted conditions.

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

The Computing resource is authorized by Computing framework (e.g., AF) not by 6G CN.

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

The proposed solution is based on the below high-level principles:

6G Core network exposes E2E QoS monitoring information towards service hosting environment/Compute Site to trusted AF or to untrusted AF via NEF.

E2E QoS monitoring information includes 6G Core network internal delay metrics as well as N6 delay metrics. 6G Core network may learn these e.g. as specified in TS 23.502 and TS 23.548. When combined, the network internal and the N6 delay metrics cover the whole end-to-end network path between a UE and the Application Sever (AS) or the Compute Site (CS).

The AF can request to monitor delay metrics not only between a UE and a particular AS instance, but between UE and a group of candidate AS’s or CS’s providing the same service. This allows the AF to make informed selections across multiple AS or CS candidates based on the monitoring provided by the 6G Core.

In case the Compute Site and/or the Application Servers are deployed in a Service Hosting Environment fully controlled by the Network Operator, the 6G Core network is able to guarantee the E2E QoS between the UE and the AS or the CS including the N6 segment of the network path.

Coordination of compute and communication can be handled by an AF based on the QoS monitoring information provided by the 6G Core Network about different AS/CS candidates, ability to request E2E QoS between UE and the selected AS, and the AF can separately retrieve by methods outside of 3GPP scope about the candidate AS’s or CS’s compute metrics such as hardware availability, load status, energy-related metrics, etc.

AF decides most suitable DNAI corresponding to selected/suitable Compute Server IP address, and influences 6G Core to select most suitable user path considering target DNAI.

AF keeps track of the network metrics and computing site status to decide re-selection and/or update of E2E QoS requirement.

NOTE: N6 represents the interface between a (candidate) UP anchor and Compute Site/Edge Application Server residing in SHE and/or DN. The exact interface name can be determined based on the discussions in this KI and other KIs.

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

This solution addresses bullet#3b of KI#22 and is extracted from Solution # 5, 7, 11, 19 in Annex C.22.

There are two variants:

Variant A (Solution #5, 11, 19): A CP NF (e.g., 6G SMF, CMF, CCF, NRF, etc.) in 6G CN monitoring the computing resources under operator’s control.

Variant B (Solution #7): A SHE controller in SHE monitoring the computing resources based on implementation.

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

The new CP Function (e.g., CMF) monitors and adjusts the configured communication QoS and computing resources of a Computing Session to ensure that the E2E Computing Service performance requirements (e.g., communication and computing performance requirements) are maintained.

The solution assumes that support for 6G Computing will be based on the following principles and architecture assumptions:

6GS offers Computing Services to a UE or AF by utilizing computing resources from computing sites within the 6G CN and/or operator-controlled DN.

A new 6G NF (i.e., Computing Management Function (CMF)) manages the provisioning, (re)configuration, and monitoring of Computing Services.

The CMF monitors and adjusts communications QoS and computing resources to ensure that the E2E Computing Session performance requirements (e.g., combined communication and computing performance requirements) are continuously maintained.

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

Variant A (Solution #32, 50): The CP NF (e.g., EASDF, UDR, CMF, a Proxy NF, NRF, etc.) collects/monitors the computing resource related information (e.g., Status/Load information) from AF.

Variant B (Solution #50): The CMF collects/monitors computing resource related information of Computing Site in CN via PSA UPF

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

The AF Influence procedure is used for the AF to provide the computing related information in a DN to 6G CN.

#### 6.22.14.1 Description

TBD.

#### 6.22.14.2 Procedures

TBD.

#### 6.22.14.3 Services, Entities and Interfaces

TBD.

#### 6.22.14.4 Open Issues

TBD.

**\* \* \* \* 17th Change \* \* \* \***

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