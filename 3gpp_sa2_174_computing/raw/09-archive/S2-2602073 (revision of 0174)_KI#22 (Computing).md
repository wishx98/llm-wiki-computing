**3GPP TSG-WG SA2#174 S2-2602073**

**Malta, MT, 13 – 17 April 2026 (revision of S2-2600174)**

**Source: LG Electronics**

**Title: [KI#22, Solution#22.11 update] CP Function monitors the Computing Resources status in Computing Node/Site**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This is a solution update for solution #22.11. Especially, it is based on “computing resource profile” in S2-2600174 which was submitted at SA2#173.*

# 1. Introduction

This paper proposes the new solution for Key Issue#22: 6G Computing Support, especially, bullet#3(b).

3. *Coordination of communication and computing, service continuity and QoS aspects:*

*a) Whether and how to coordinate (e.g., within or outside the core network) communication (for the traffic transferred over user plane) and computing resource(s) in the Computing Site.*

*b) Whether and how to identify, collect/monitor, provision the computing resource related information.*

*c) Whether and how to improve the service experience.*

*d) Whether there is a need to improve QoS to satisfy Computing Service requirements.*

*e) Whether and how to support service continuity for computing service upon change of computing site and/or user plane function (e.g., due to UE mobility, computing load balancing, AF influence etc.).*

# 2. Text proposal

It is proposed to agree the following changes vs. TR 23.801-01:

\* \* \* First Change \* \* \* \*

### 6.22.0 Solution Category Overview

The solutions for KI#22 are structured as following in Table 6.22.0-1:

Table 6.22.0-1: Solution Category overview

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Solution Groups | Addressed bullet # | Solution category for the group | Variants for each category | Referred input paper in Annex C, clause .22 | Solution # in TR |
| 1. Architecture Requirements, | 1a, 1b | (1) Architectural requirements | FFS | Solution #11, 22, 27, 29 | 22.1 |
| Definitions, Location of |  | (2) Computing related definitions | FFS | FFS |  |
| Computing Node/Site |  | (3) Computing Site location | FFS | FFS |  |
| 2. Architecture and Coordination of Communication and Computing | 1b, 3a, 3c, 3d, 3e, 4a | (1) Coordination between Communication and Computing is controlled by 6G CN (e.g. 6G SMF, CMF, CCF, CCCE, etc.): | UE Requested Computing Support in 6G by using SM NAS | Solution #1, 6 (collocating CMF with NRF), 8, 13, 15 (Over CP), 20, 21, 25, 33 (UE Requested), 34 | 22.2 |
|  |  |  | UE Triggered Computing Service Support in 6G by using SM NAS and UP connectivity to a Computing Site in the SHE, an Operator controlled domain other than 6G CN | Solution #7 |  |
|  |  |  | UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G UPF | Solution #3, 5, 10, 11, 15, 26, 36, 38, 39, 40 |  |
|  |  |  | UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G Data Plane Function | Solution #11, 15 |  |
|  |  |  | UE Requested Computing Support with Computing messages over User Plane | Solution #14, 15, 23 |  |
|  |  |  | UE Requested Computing Support in 6G over new Plane (e.g. service plane) | Solution #16, 26 |  |
|  |  |  | UE Initiated Computing Service Support and SMF Controlled Coordinated selection of UPFs and compute sites | Solution #35 |  |
|  |  |  | AF Requested Computing Support via CP Function | Solution #5, 10, 16, 17, 33 |  |
|  |  | (2) Coordination between Communication and Computing is performed by AF |  | Solution #27, 28, 30 | 22.3 |
|  |  | (3) Use SA6 defined Edge Enabler Layer to support computing in 6G |  | Solution #9 | 22.4 |
| 3. Computing Service Authorization to UE/AF | 2a | (1) UE Policy (i.e. URSP, new Computing Policy) based authorization to UE by PCF/CCF |  | Solution #12, 18, 25 | 22.5 |
|  |  | (2) Non-UE policy based authorization | A. Computing Service Authorization to UE/AF by NEF | Solution #38 | 22.6 |
|  |  |  | B. Computing Service Authorization to UE by AMF | Solution #34 |  |
|  |  | (3) Subscription based authorization without explicit authorization to UE/AF |  | Solution #7, 33 | 22.7 |
|  |  | (4) Computing resource authorization by computing framework (no need for computing resource authorization by 6G CN) |  | Solution #27, 28, 30, 35 | 22.8 |
| 4. Computing Exposure to AF | 2b | (1) Computing Related Information exposure |  | Solution #2, 24, 31, 37 | 22.9 |
|  |  | (2) Communication Delay exposure |  | Solution #24, 28 | 22.10 |
| 5. Computing Resource Monitoring and Management by 6G CN | 3b | (1) CP Function (e.g. 6G SMF, CMF, CCF, etc.) monitors the Computing Resources status in Computing Node/Site (e.g. Computing Node/Site, etc.) |  | Solution #5, 7, 19, #4 | 22.11 |
|  |  | (2) CP Function (e.g. CSMF, etc.) monitors the QoS for Computing Service from other NFs (e.g. from SMF, PCF, NWDAF, etc.) in 6G CN |  | Solution #34 | 22.12 |
|  |  | (3) CP Function (i.e. EASDF) monitors the Computing Resources in DN via AF |  | Solution #32 | 22.13 |

Editor's note: Solution details and open issues will be added in the next meeting and are FFS. For Solution group #4 and 5, additional categories will be added for solutions that don’t require computing resource management and exposure by 6GS.

\* \* \* Next Change \* \* \* \*

**!! All New Text - Update based on S2-2600174 (submitted in SA2#173) !!**

### 6.22.11 Solution #22.11: CP Function monitors the Computing Resources status in Computing Node/Site

#### 6.22.11.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.3b.

This solution addresses bullet#3b of KI#22 and is extracted from Solution #4, 5, 19 in Annex X.22.

- A CMF (Computing Management Function) is introduced to collect and manage the computing resources of Computing Nodes/Sites in 6G CN.

- The computing node supporting the computing service registers “Computing resource profile” to CMF

- When requested, the CMF searches for sufficient computing resources to satisfy the computing service requirements (e.g. E2E service latency, computing load or delay of each work task, etc.).

- When requested, the CMF selects the computing node/resource and triggers the computing service.

#### 6.22.11.1 Description

The solution assumes

- The computing node (e.g. core network and application server) which is able to support the computing service, registers “Computing resource profile” to the Computing Management Function (CMF).

- “Computing resource profile” includes the computing resource related information. For example,

Computing resource type (e.g. CPU, NPU, GPU, etc.)

Computing resource capability (e.g. XR Rendering capability, AI capability, etc.)

Location information of computing resource (e.g. FQDN or IP address)

Current Processing load or time per specific work task

Available Processing load or time per specific work task

NOTE 1: The examples of specific work task can be XR rendering, AI model training or inference, etc.

Editor's note: Additional information for computing resource profile is FFS.

- The requester (e.g. UE or AF) which intends to use the computing resource, can request the network the computing resource with the computing related requirement (e.g. E2E service latency, computing load or delay of each work task, etc.).

- This request is forwarded to CMF in core network.

NOTE 2: In case of UE request, it may depend on the discussion of KI#1 (control signalling for 6G System).

NOTE 3: In case of AF request, it may depend on the discussion of KI#7 (Network Exposure).

- The CMF searches for sufficient computing resources to satisfy the computing service requirements.

#### 6.22.11.2 Procedures

The Figure 6.22.11.2-1 shows the overall procedure for the registration of computing resource profile, and for computing resource request and allocation.

![](data:image/x-emf;base64...)

Figure 6.22.11.2-1: Overall procedure of computing resource management

NOTE 1: In case of UE request, it may depend on the discussion of KI#1 (control signalling for 6G System).

NOTE 2: In case of AF request, it may depend on the discussion of KI#7 (Network Exposure).

Computing Node(s) (e.g. core network, data network) informs CMF of its computing resource profile described in clause 6.22.11.1, via the registration request of computing resource profile.

The CMF stores the computing resource profile of computing Node(s).

The CMF acknowledges Computing resource registration is accepted.

Requester of computing service (e.g. UE, AF) sends computing service request with the computing related requirement (e.g. E2E service latency, computing load or delay of each work task, etc.). This request is forwarded to CMF in core network.

If a Requester is located outside MNO, the NEF may authorize it to accept the request.

NOTE 3: The delivery of request message depends on the discussion of solution#6.22.2.

The CMF selects the proper computing node(s) based on computing resource requirements.

The CMF tiggers the computing service in computing node(s) and requests the computing resource related report.

The interaction between CMF and CN NFs may occurs for computing service. For example, the policy may be checked and updated.

The computing related policy may be provisioned, and (if needed) the PDU session establishment or modification procedure is performed

Computing Node(s) informs the CMF of the computing service status report related to the computing resource.

The CMF sends the computing service response to requester.

#### 6.22.11.3 Services, Entities and Interfaces

Computing Management Function (CMF) and corresponding service operations

Maintain “Computing resource profile”

Search for the computing resource to satisfy the computing service requirement when requested

Trigger the computing service in computing node(s)

\* \* \* Next Change \* \* \* \*

## Annex X.22: 6G Computing Support

Input papers at SA2#173:

| Meeting | **Solution#** | **Tdoc** | **Source** | **Subject/Comment** |
| --- | --- | --- | --- | --- |
| SA2#173 | 1 | [**S2-2600098**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600098.zip) | China Mobile, Rakuten, CATT,Huawei | [KI#22, bullet #1&2&4] Solution for KI#22 of 6G architecture enhancement to support 6G computing service |
| SA2#173 | 2 | [**S2-2600125**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600125.zip) | Transsion Holdings | NF computing capability collection and exposure for 6G Computing Supporting |
| SA2#173 | 3 | [**S2-2600156**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600156.zip) | vivo | [KI#22] 6G computing service to UE |
| SA2#173 | 4 | **[S2-2600174](file:///D%3A%5C%5CWork%20File%5C%5C3GPP%5C%5CTSG_SA%5C%5CWG2_Arch%5C%5CTSGS2_173_Goa_2026-02%5C%5CPapers%5C%5COPPO%5C%5CComputing%20baseline%5C%5CDocs%5C%5CS2-2600174.zip)**  **S2-2600273** | LG Electronics | [KI#22, bullet#1(b), #3(b)] New Sol#X: “Computing Resource Profile” |
| *Reduced for simplification* | | | | |

\* \* \* End of Changes \* \* \* \*