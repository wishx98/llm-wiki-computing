**3GPP TSG-SA WG2 Meeting #174 S2-2602305**

**Malta, Malta, April 13 – 17, 2026**

**Source: Samsung**

**Title: [KI#22, bullet#2, #3] Var F. UE Requested Computing Service over new plane**

**Document for: Approval**

**Agenda Item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This contribution proposes a solution update for Key Issue #22 of FS\_6G\_ARC.*

# 1. Introduction

This contribution proposes to update the solution categorization table in the TR. [First Change].

Also, this pCR proposes the following aspects based on the structure of the postponed document S2-2601619 in the [Second Change].

The proposed updates are based on the following principles:

- Service differentiation: The MNO is able to enable service differentiation per UE or 3rd party service (e.g., by enabling/disabling the computing service related features) via an authorization mechanism.

- Efficient utilization of computing resource: It should be possible to onboard or instantiate the proper amount of computing resource (e.g., the number of server instances) based on demand (e.g., real time or expected) service load for the purpose of sustainability and energy efficiency.

- Minimized impact to the conventional signaling or connectivity service with future proofness

# 2. Text proposal

It is proposed to agree the following changes against TR 23.801-01:

\* \* \* First Change \* \* \* \* (Updates to TR)

### 6.22.0 Solution Category Overview

The solutions for KI#22 are structured as following in Table 6.22.0-1:

Table 6.22.0-1: Solution Category overview

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Solution Groups | Addressed bullet # | Solution category for the group | Variants for each category | Referred input paper in Annex C, clause .22 | Solution # in TR |
| 1. Architecture Requirements, | 1a, 1b | (1) Architectural requirements | FFS | Solution #11, 22, 27, 29 | 22.1 |
| Definitions, Location of |  | (2) Computing related definitions | FFS | FFS |  |
| Computing Node/Site |  | (3) Computing Site location | FFS | FFS |  |
| 2. Architecture and Coordination of Communication and Computing | 1b, 3a, 3c, 3d, 3e, 4a | (1) Coordination between Communication and Computing is controlled by 6G CN (e.g. 6G SMF, CMF, CCF, CCCE, etc.): | A. UE Requested Computing Support in 6G by using SM NAS | Solution #1, 6 (collocating CMF with NRF), 8, 13, 15 (Over CP), 20, 21, 25, 33 (UE Requested), 34 | 22.2 |
|  |  |  | B. UE Triggered Computing Service Support in 6G by using SM NAS and UP connectivity to a Computing Site in the SHE, an Operator controlled domain other than 6G CN | Solution #7 |  |
|  |  |  | C. UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G UPF | Solution #3, 5, 10, 11, 15, 26, 36, 38, 39, 40 |  |
|  |  |  | D. UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G Data Plane Function | Solution #11, 15 |  |
|  |  |  | E. UE Requested Computing Support with Computing messages over User Plane | Solution #14, 15, 23 |  |
|  |  |  | F. UE Requested Computing Support in 6G over new Plane (e.g. service plane) | Solution #16, 26, ?? |  |
|  |  |  | G. UE Initiated Computing Service Support and SMF Controlled Coordinated selection of UPFs and compute sites | Solution #35 |  |
|  |  |  | H. AF Requested Computing Support via CP Function | Solution #5, 10, 16, 17, 33 |  |
|  |  | (2) Coordination between Communication and Computing is performed by AF |  | Solution #27, 28, 30 | 22.3 |
|  |  | (3) Use SA6 defined Edge Enabler Layer to support computing in 6G |  | Solution #9 | 22.4 |
| 3. Computing Service Authorization to UE/AF | 2a | (1) UE Policy (i.e. URSP, new Computing Policy) based authorization to UE by PCF/CCF |  | Solution #12, 18, 25 | 22.5 |
|  |  | (2) Non-UE policy based authorization | A. Computing Service Authorization to UE/AF by NEF | Solution #38 | 22.6 |
|  |  |  | B. Computing Service Authorization to UE by AMF | Solution #34 |  |
|  |  | (3) Subscription based authorization without explicit authorization to UE/AF |  | Solution #7, 33, ?? | 22.7 |
|  |  | (4) Computing resource authorization by computing framework (no need for computing resource authorization by 6G CN) |  | Solution #27, 28, 30, 35 | 22.8 |
| 4. Computing Exposure to AF | 2b | (1) Computing Related Information exposure |  | Solution #2, 24, 31, 37 | 22.9 |
|  |  | (2) Communication Delay exposure |  | Solution #24, 28 | 22.10 |
| 5. Computing Resource Monitoring and Management by 6G CN | 3b | (1) CP Function (e.g. 6G SMF, CMF, CCF, etc.) monitors the Computing Resources status in Computing Node/Site (e.g. Computing Node/Site, etc.) |  | Solution #5, 7, 19 | 22.11 |
|  |  | (2) CP Function (e.g. CSMF, etc.) monitors the QoS for Computing Service from other NFs (e.g. from SMF, PCF, NWDAF, etc.) in 6G CN |  | Solution #34 | 22.12 |
|  |  | (3) CP Function (i.e. EASDF) monitors the Computing Resources in DN via AF |  | Solution #32 | 22.13 |

Editor's note: Solution details and open issues will be added in the next meeting and are FFS. For Solution group #4 and 5, additional categories will be added for solutions that don’t require computing resource management and exposure by 6GS.

\* \* \* Next Change \* \* \* \* (Proposal based on S2-2601619)

#### 6.22.2.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to address bullet#1b, 3a, 3c, 3d, 3e, 4a, the missing aspect can be added later.

This solution addresses bullet #1b, 3a, 3c, 3d, 3e, 4a under KI#22 since the solution for these 6 aspects have dependency with each other, and they are normally addressed in a single solution.

This solution is extracted from Solutions #1, 3, 5, 6 (Discovery and Selection of Computing Sites), 7, 8, 10, 11, 13, 15 (Computing Request over CP), 16, 21, 25, 26 (DNS query procedure), 33(UE Requested part), 34, 36, 38, 39, 40 of Annex X.22.

There are following variants:

UE Requested Computing Support in 6G by using SM NAS (Solutions #1, 8, 13, 15 (Computing Request over CP), 21, 25, 26 (DNS query procedure), 33(UE Requested part), 34 of Annex X.22.)

UE Triggered Computing Service Support in 6G by using SM NAS and UP connectivity to a Computing Site in the SHE, an Operator controlled domain other than 6G CN (Solution #7 of Annex X.22)

UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G UPF (Solution #3, 5, 10, 11, 15, 26 (Iaas) 36/38/39/40 in Annex X.22.)

UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G Data Plane Function (Solution 11 (over DP) and 15 (Computing Request over DP) in Annex X.22)

UE Requested Computing Support with Computing messages over User Plane (Solution #14, 15, 23 in Annex X.22.)

UE Requested Computing Support in 6G over new Plane (e.g., service plane) (Solution # 16 and 26 (only the Operator Service with NF part) in Annex X.22)

UE Initiated Computing Service Support and SMF Controlled Coordinated selection of UPFs and compute sites (Solution #35 in Annex X.22)

AF Requested Computing Support via CCF (Solution #**5, 10,** 16, 17, 33 in Annex X.22)

The solution illustrates how the UE or AF requests the computing support from 6G CN and how the 6G CN coordinates the communication and computing requirements and select the proper Computing Site(s) for the UE’s PDU Session.

The solution for variants A/C/D/E/F/H is based on the following principles:

In control plane there is an NF (e.g., 6G PCF, 6G SMF, CMF, etc.) is used to discover the suitable Computing Node (which is an entity that can represent Computing Site) for the computing request from UE.

For the solution variant F, the computing request from the UE is transferred via a new plane (or a dedicated signaling for operator service), which is distinguished from CP or UP.

The CMF (Computing Management Function) is aware of the status and capabilities of the internal/external computing resources via the Computing Node/Site. The 6G SMF and CMF need to consider the coordination between the computing and communication to do the selection of Computing Node/Site.

The UE needs to indicate the UE computing service capability information to let the 6G CN know if the UE supports computing service capability

The 6G CN needs to store the UE computing service capability information and manage this as UE computing service context information.

The CMF may interact with OAM entities (e.g., by invoking OAM API) or SA6 entities (e.g., by invoking SA6-defined API) to manage the computing resource, e.g., request for computing resource onboarding or instantiation, with consideration of efficiency.

The communication for computing service application traffic between the UE (app client for computing service) and Computing Node/Site (computing resource instance) for Computing Service is via user plane.

The coordination between the Computing metrics and Communication QoS parameters on computing session is determined by a CP NF. The CP NF determining Computing metrics and QoS related information (e.g., PDB, Computing latency) based on the subscription and Computing resources status.

NOTE: The coordination between the Computing metrics and Communication QoS parameters on computing session may need to coordinate with KI#5 (e.g., on adaptive QoS, QoS monitoring).

The solution for variant B is based on the following principles:

At PDU session establishment, the UE indicates the PDU session is for a Computing Service.

The SMF selects a CCCE that performs CC policy association with the PCF. The CC profile can be pre-configured or optionally provisioned by AF request.

The selected UPF provides a CS ID (Computing Site ID) associated to the UPF to the SMF, which forwards it to the CCCE. The CS ID is used by the CCCE to identify the SHE controller to be contacted.

The CCCE queries the SHE controller (which is out of 6G CN) to retrieve available resources and determine the CC policy applicable to the Computing Service session.

The CCCE enforces the SM policy toward the SMF and the CM policy toward the SHE controller by requesting reservation of the required SHE resources for the computing Site.

The solution for variant G is based on following principles:

Avoid any additional requirements on HLOS in the UE and UE applications and ensure that any 3GPP enhancements for compute can work with different computing/virtualization frameworks.

The UE application interacts with a computing framework or a network-side application component that uses a computing framework layer in the user-plane.

An AF (representing a computing framework or a network-side application component that uses a computing framework) that is deployed in the service hosting environment may provide the maximum acceptable aggregated latency (the sum of the communication latency (N3 latency and N6 latency) and the computing latency) and information about the computing latency of available computing sites for a particular UE (i.e., UE-related compute task) to the network.

Based on AF influence, the 6G SMF:

selects a DNAI and computing site for which the communication latency (N3 latency and N6 latency) and the computing latency for the computing site as provided by the AF is lower than the maximum acceptable aggregated latency.

adds a ULCL / BP and L-PSA for the selected DNAI;

adjusts the QoS parameters of the flows between the UE and the computing site;

informs the AF about the selected DNAI and computing site.

#### 6.22.2.1 Description

##### **6.22.2.1.1 Architecture and General Description**

6.22.2.1.1.1 Description for variants A/C/D/E/F/H

A Computing Management Function is introduced to monitor the computing resources in 6G CN, the Computing resources are assumed to be located in Computing Site and accessed via 6G UPF. The Computing Site can be located in DN or 6G CN. When the Computing Site is located in 6G CN, it can be separated from or collocated with 6G UPF. Figure 6.X.Y.1.2-1 shows the architecture.

The computing node is introduced to route the Computing data packet between 6G UPF and Computing Site, represent the computing site (in the 6G Core Network or in the Data network) to monitor the Computing resources in Computing Site(s), receive and execute the Computing resource Request from CMF.

The CS (Computing Site) is assumed to provide various services based on different types of computing resources. The computing site in CN is either collocated with or separate from computing node. It is FFS whether the interface and protocol between the CMF and Computing Node will be standardized in SA2.

The interface between Computing Node and Computing Site will not be standardized (e.g., via k8s) in 3GPP SA2.

![](data:image/x-emf;base64...)

**Figure 6.22.2.1.2-1(Option #1): 6G Computing Architecture with Computing Site in 6G CN**

**NOTE 1:** In Option #1, the Computing Site in CN can be collocated with Computing Node.

![](data:image/x-emf;base64...)

**Figure 6.22.2.1.2-2(Option #2): 6G Computing Architecture with Computing Site in DN**

**NOTE 2:** In both Option #1 and Option #2, the Computing Node can be collocated with 6G UPF.

The Computing Site can be located in a part of DN or 6G CN. When the Computing Site is located in CN, it can be either separated from the 6G UPF or collocated with 6G UPF.

The CMF is defined as a standalone NF, which may interact with the 6G SMF.

NOTE 2: The CMF may collect the Computing resource related information (e.g., resource type, resource status, etc.) from Computing Site directly or via 6G Anchor UPF.

NOTE 4: Whether the UE’s Computing Request will go through an AI Agent Function will be coordinated with KI#1.1 (NAS) and KI#18 (AI for 6G architecture).

NOTE 5: Whether the interfaces (e.g., between the 6G-SMF and 6G UPF, between CMF and 6G UPF, between CMF and Computing Site, etc.) are service based will depend on the conclusion on KI#2 (SBA).

NOTE 6: The 6G UPF and Computing Site can be regarded as a virtual Computing Node which can be controlled by both CMF and 6G SMF.

NOTE 7: The UPF and Computing Node can be collocated and become a Data Plane Function as proposed in variant D, this aspect will be coordinated with KI#21.

NOTE 8: Whether a new Plane (e.g., Service Plane) is used between the UE and the CMF will be coordinated with KI#1.2.

NOTE 9: Whether NAS is terminated at 6G AMF and whether there is interface between 6G RAN and 6G AMF depend on the conclusion for KI#1.1.

NOTE 10: In some options, the Application Server in DN is not required.

NOTE 11: Whether the interface between CMF and Computing Node/Computing Site is service based or not should be explicitly described in specific solution variants.

NOTE 12: In some options, the Computing Node is not introduced, the packet routing is between 6G UPF and Computing Site.

Editor’s note: Whether the CMF can control the Computing Site in DN is FFS.

…..

##### 6.22.2.1.2 Coordination between Communication and Computing

6.22.2.1.2.1 Description for variants A/C/D/E/F/H

The coordination solution for variants A/C/D/E/F/H comprises:

UE/AF requests computing support from 6G CN by using the Computing Request including the computing related information (e.g., Computing Request indication, Task type, overall Task latency, overall Task throughput, Computing resource type, RTT delay requirements, etc.) in order to satisfy the service experience.

Based on the UE/AF request, authorization information in the User Subscription data and Computing Policy (e.g., locally configured or from PCF), the CP Function (e.g., 6G SMF, CMF, CCF) derives the QoS profile for a given computing service application traffic flow and Computing Enforcement rule for Computing Node/Site for Computing Service by coordinating with CMF which selects proper Computing Site(s).

Computing Node/Site for Computing Service enforces the Computing Enforcement rule received from the CP Function by allocating corresponding computing resources of a Computing Site or routing the data packet(s) to the selected Computing Node/Site.

Editor’s note: The detailed computing related information from UE can be captured in the detailed procedures.

The coordination NF variants:

6G SMF derives the communication QoS parameters and Computing requirements (e.g., latency, throughput, resource type, etc.)

CMF derives the communication QoS parameters and Computing requirements (e.g., latency, throughput, resource type, etc.)

6G PCF derives the communication QoS parameters and Computing requirements (e.g., latency, throughput, resource type, etc.)

6G SMF derives the communication QoS parameters and the CMF derives Computing requirement, respectively. When deriving the communication QoS parameters, the Computing related requirement or metric can be considered or vice versa.

The coordination decision on how to derive the Computing related parameters in the Computing Enforcement rule in Computing Node/Site can be made based on UE requested information, authorization in User subscription and PCC rule/Computing Policy.

…..

\* \* Next Change \* \* \* \* (Proposal based on S2-2601619)

### 6.22.5 Solution #22.5: Computing Service Authorization to UE by PCF/CCF/CMF based on UE Policy

#### 6.22.5.0 High-level solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2a.

This solution addresses the bullet #2a under KI#22.

This solution is extracted from Solution #12, 18, 25 in Annex X.22.

There are two variants:

URSP based (From Solution #12, 18, 25 in Annex X.22) from PCF: In order to enable the Computing Service to UE, the Computing related UE Policy (i.e., URSP enhanced with new computing related parameter) needs to be provisioned to UE in order to make UE aware whether, where and when it can use the Computing Service to establish the according PDU Session supporting computing.

Computing Policy based from CCF (or CMF in clause 6.22.2.1.1) (from Solution #12 in Annex X.22):

- The CCF/CMF generates and provides the computing service policy to UE, which can assist UE to decide whether triggers computing service request and determines the offloading decision.

- The UE requests computing service from 6G network, and if the service request is authorized based on subscription data, the CCF/CMF selects the computing site(s) to execute the computing task for UE.

#### 6.22.5.1 Description

Editor’s note: The solution description is FFS.

#### **6.22.5.2 Procedures**

Editor’s note: Procedures are FFS.

#### 6.22.5.3 Impacts on Services, Entities and Interfaces

Editor’s note: Impacts are FFS.

#### 6.22.5.4 Open Issues

TBD.

**\* \* \* \* 7th Change \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.6 Solution #22.6: **Non-Policy based Authorization to UE/AF**

#### 6.22.6.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2a.

This solution addresses bullet #2a under KI#22 and extracted from Solution #38 and 34 in Annex X.22.

There are two variants:

NEF Authorizes UE/AF via NEF (from Solution #38 in Annex): It defines how the 6G system authorizes and enables computing services. Enablement is strictly controlled by the operator via the COCF, ensuring that only authorized UEs or AFs can access specific computing resources based on subscription and policy.

AMF Authorizes UE (from Solution #34 in Annex): The solution assumes that support for 6G Computing will based on the following principles and architecture assumptions:

6GS offers Computing Services to a UE or AF by utilizing computing resources from computing sites within the 6G CN and/or operator-controlled DN.

A new 6G NF (i.e., the Computing Service Management Function (CSMF)) manages the provisioning, configuration and monitoring of Computing Services.

The UE discovers the Computing Service capabilities available to it during registration.

The 6G CMF authorizes the UE based on the subscription data for computing service.

#### 6.22.6.1 Description

Editor’s note: The solution description is FFS.

#### 6.22.6.2 Procedures

Editor’s note: Procedures are FFS.

#### 6.22.6.3 Services, Entities and Interfaces

Editor’s note: Impacts are FFS.

#### 6.22.6.4 Open Issues

TBD.

\* \* \* End of Changes \* \* \* \*