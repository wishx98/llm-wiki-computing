**3GPP TSG-WG SA2#174 S2-2602131**

**Malta, St Julian’s, 13 – 17 April, 2026**

**Source: MediaTek Inc.**

**Title:** **[KI#22, new] Update and simplify descriptions based on endorsed version (S2-2601619) for 6.22.1 to 6.22.13**

**Spec: 3GPP TR 23.801-01-030**

**Agenda item: 20.6.22**

**Work Item / Release: FS\_6G\_ARC / Rel-20**

**Document for: Approval**

*Abstract of the contribution: This is the paper for KI#22 (Computing support in 6G)*

# Discussion

Refining the contents more convergence for all the solution variants based on the description of S2-2601619, it simplifies to the following solution variants listed below:

- 22.1 Computing Architecture Requirements, Definitions and Computing Resources

- 22.2 Coordination between Communication and Computing is controlled by 6G CN

- 22.3 Coordination between Communication and Computing is performed by AF

- 22.4 Use SA6 defined Edge Enabler Layer to Support Computing

- 22.5 Computing Service Authorization to UE by PCF/CP NF for Computing Service based on UE policy

- 22.6 CP Function monitors the Computing Resources status in Computing Site via Computing Node

- 22.7 CP Function monitors the Computing Resources status in Computing Site via AF

**\* \* \* \* First Change(revision)\* \* \* \***

### 6.22.1 Solution #22.1 Computing Architecture Requirements, Definitions and Computing Resources

#### 6.22.1.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution is assumed to address bullet#1a, 1b on architecture requirements, definitions, location of Computing Site, Computing resources.

This solution addresses bullet #1a, 1b under KI#22.

#### 6.22.1.1 Description

##### 6.22.1.1.1 Definitions

**Computing Service**: a service that offers the ability for UE or AF to offload the compute-intensive part(s) from the triggered application to use the computing resources in the computing site to meet the performance requirements from the triggered application

**Computing Site**: a specific location to represent the deployed computing resources where computing service utilizes to meet the computing performance requirements requested from UE or AF.

**Computing Resource:** a general abstracted resource provided by different type of solution variants architecture from 22.2 to 22.4 in the TR

NOTE X: As described in different solution variants, different types of computing resource are specified for meeting the requirements from the computing service.

**Service Hosting Environment (SHE)**: a network domain owned and fully controlled by MNO which can have computing site residing in it for supporting computing services deployed by MNO or third-party.

**Computing Node**: an entry point that represents a computing site for the computing service requested from UE or AF.

NOTE Y: Whether it is necessary to require a computing node as an entry point to a computing site is dependent on the different solution variant described in this TR. Furthermore, how the functionalities that a computing node has also depends on the different solution variants in this TR.

##### 6.22.1.1.2 Architecture Requirements

- Support computing service requested by UE and AF to

- determine which type of computing resource in the computing site for computing service

- meet the performance requirements from computing service

- satisfy end to end QoS requested by UE or AF

- Support mobility and service continuity for computing service

##### 6.22.1.1.3 Computing Site Location

Two possible locations for computing site:

Located in data network:

If computing site is located in data network, accessing the computing site requires to go through 6G UPF and via N6 to reach compute site.

Located in 6G core network:

If computing site is located in 6G core network, the way accessing the computing site depends on the solution variants in this TR, e.g.,

- a computing node is selected as an entry point to represent the computing site for managing computing resources and for transmitting the data packets from UE via 6G UPF to the compute site

- possibly requires standardized interfaces between 6G UPF and the computing node, between CP compute NF (e.g., CMF, CCCE) and computing node

#### 6.22.1.4 Open Issues

(1) Computing Site location.

For locating in 6G CN, it needs to decide whether it requires computing node as an entry point

(2) Computing related definitions

It depends on the proposals from different solution variants

(3) Architecture requirements.

It requires to support the computing service requested from UE or AF

**\* \* \* \* Second Change (all new texts)\* \* \* \***

### 6.22.2 Solution #22.2: Coordination between Communication and Computing is controlled by 6G CN

#### 6.22.2.0 Topics addressed and High-level Solution Principle

This solution variant address coordination controlled by 6G core network with following options

Control plane NF coordination [1, 3, 5, 6, 7, 8, 10, 11, 13, 15, 16, 21, 25, 26, 33, 34, 36, 38, 39, 40] of Annex Table

**A.1**: A new core network function is to manage computing resource and coordinates with 6G SMF to support computing service

**A.1.1**: UE requested Computing Service via SM NAS and/or UP connectivity to the Computing Site (referring to A, B in Table Solution Category overview in Clause 6.22.0)

**A.1.2**: UE requested Computing Service via Compute NAS and/or UP connectivity, data plane to the Computing Site (referring to C, D in Table Solution Category overview in Clause 6.22.0)

**A.1.3**: UE requested Computing Service via UP or new plane (referring to E, F in Table Solution Category overview in Clause 6.22.0)

**A.1.4: AF Requested Computing Service via CP function** (referring to H in Table Solution Category overview in Clause 6.22.0)

**A.2**: 6G SMF is coordinating with AF to support computing service (referring to G in Table Solution Category overview in Clause 6.22.0)

#### 6.22.2.1 Description

**A.1 Architecture view (two options)**

**Option 1:**

![](data:image/x-emf;base64...)

**Option 1: Computing Site within 6G CN**

**Option 2:**

![](data:image/x-emf;base64...)

**Option 2: Computing Site within DN**

The new CP network function (e.g., CMF in figures of Options 1 and 2) is introduced to manage Computing Resource in Computing Site within 6G CN or DN. Computing Node as defined in clause 6.22.1 is an entry point which represents the Computing Site for following functionalities:

- managing Computing Resource in Computing Site

- how Computing Node manages Computing Resource in Computing Site is out of 3GPP Scope

- reporting to the CP NF (e.g., CMF)

- a standardized interface is introduced between CP NF and Computing Node

- coordinating with 6G UPF

- a standardized interface is introduced between 6G UPF and Computing Node

**A.1 Coordination between Communication and Computing**

**A.1.1: UE triggered Computing Service via SM NAS**

1) During PDU Session establishment procedure, UE indicates Computing Service Request for the PDU Session. 6G AMF selects 6G SMF and forwards SM NAS to the selected 6G SMF

2) 6G SMF selects CP NF for Computing Service and 6G UPF. At same time, 6G SMF receives PCC rules for Computing Service. PCF derives PCC rules based on e.g., local configuration, user subscription, AF request, etc. PCF may also forward PCC rules to the selected CP NF for Compute Service

3) 6G UPF forwards Computing Site Identifier to 6G SMF based on its configuration

4) based on bullets 1) to 3), 6G SMF coordinates with CP NF for Computing Service for determining Computing Node

5) UE receives the PDU Session accept message and establishes connectivity to the selected Computing Node via 6G UPF for Computing Service

**A.1.2: UE requested Computing Service via Compute NAS and/or UP connectivity, data plane to the Computing**

1) During PDU Session establishment procedure, UE includes Compute NAS message.

- 6G AMF selects 6G SMF and forwards SM NAS and Compute NAS to 6G SMF, or

- 6G AMF selects 6G SMF and CP NF for Computing Service and forwards SM NAS and Compute NAS to them respectively

2) 6G SMF receives PCC rules for Computing Service. PCF also forward PCC rules to the selected CP NF for Computing Service

3) 6G SMF coordinates with CP NF for Computing Service and determines Computing Node

4) UE receives the PDU Session accept message and establishes connectivity to the selected Computing Node via 6G UPF or data plane for Computing Service

**A.1.3: UE requested Computing Service via UP or new plane**

NOTE X: The decision on whether a new plane (e.g., Service Plane) is used between the UE and the CP NF for Computing Service will be coordinated with Key Issue #1.2

**A.1.4: AF Requested Computing Service via CP function**

The AF initiates the request for computing support from the 6G CN. This request includes crucial computing-related information, such as:

- Computing Request indication

- Task type

- Overall Task latency and throughput requirements

- Computing resource type

- Round Trip Time (RTT) delay requirements

Based on the AF's request, user subscription authorization data, and Computing Policy (which can be locally configured or obtained from the PCF), The CP NF for Computing Service derives the QoS (Quality of Service) profile for the Radio Access Network (RAN) and the Computing Enforcement rules for the Computing Node or Computing Site

**A.2: Architecture view**

No new CP NF for Computing Service is introduced. An AF will be represented as computing framework to provide the information to 6G CN for Computing Service.

The information provided by the AF can be e.g.

- maximum acceptable aggregation latency as the sum of N3 and N6 delay

- Compute Site information as specifying DNAI (Data Network Access Identifiers), and each DANI is related to Compute Site address information, latency information

- the AF via exposure function (NEF) as part of AF influence request

**A.2 Coordination between Communication and Computing**

Based on AF’s influence information, 6G SMF determines the 6G UPF that can support maximum acceptable aggregation latency for the indicated DNAIs and adjust QoS based on AF’s request

#### 6.22.2.3 Services, Entities and Interfaces

Editor’s note: The impacts will be updated based on the solution update.

#### 6.22.2.4 Open Issues

**\* \* \* \* Third Change (all new texts) \* \* \* \***

### 6.22.3 Solution #22.3: Coordination between Communication and Computing is performed by AF

#### 6.22.3.0 Topics addressed and High-level Solution Principles

An AF is responsible for coordination of communication and compute:

- Computing Site is in SHE and/or Data Network which can be operator-owned or third party owned and can be accessible by 6G UPF in 6G CN

- manage the Computing Resource (i.e. application components) in Computing Site and the management mechanism is out of 3GPP scope

- coordinates with 6G CN for E2E QoS monitor and guarantee

6.22.3.1 Description

The UE or AF can request compute offloading to operator-owned Computing Sites deployed in SHE. The access to the Computing Site is via 6G UPF.

The Computing Resource referred in this solution variant is Application Components which can run on the UE or server-site (i.e. operator-owned Computing Sites). Cloud-native automation and orchestration (e.g., Kubernetes) are used for Application Components handling in Computing Sites.

Four roles are presented:

- Network Service provider: providing communication services, ensuring QoS, steering traffic and measuring network metrics between UE/AF and Computing Sites

- Computing Service provider: offering and managing Computing Resource (i.e., Application Components) for EAS

- Application Service provider: providing EAS associated with Computing Resource (i.e., Application Components)

- Computing and Network Coordination Service provider: as an AF and can coordinates among Network Service provider, Computing Service provider, and Application Service provider.

The coordination processing operations are like below:

- The AF acquires network metrics from Network Service provider and compute metric from Computing Service provider.

- The AF performs "decision-making" to select an EAS or Computing Site that satisfies Computing Service requirements.

- The AF request Network Service provider to build up the PDU Session and Computing Service provider to provide the Application Components for Computing Service

#### 6.22.3.2 Procedures

#### 6.22.3.3 Services, Entities and Interfaces

#### 6.22.3.4 Open Issues

**\* \* \* \* Fourth Change (all new texts)\* \* \* \***

### 6.22.4 Solution #22.4: Use SA6 defined Edge Enabler Layer to Support Computing

#### 6.22.4.0 Topics addressed and High-level Solution Principles

This solution addresses KI#22 (bullet#1b, 3a, 3c, 3d, 3e, 4a) and extracted from Solution #9 in Annex X.22.

By adopting Architecture for enabling Edge Applications defined by SA6 more or less all sub-issues under KI can already today be supported. An EAS (Edge Application Server) can register itself to the EES (Edge Enabling Server) with its EAS profile. An EAS Profile includes information about an EAS used to describe services and service characteristics offered.

EEC (Edge Enabling Client) within the UE can discover EAS based on the required functionality of the EAS.

The EAS can for example provide a server component of the application or libraries for external execution of processing heavy operations need by the UE.

The EES as AF towards the core network can use APIs for breaking out traffic and getting QoS.

Discovery of the ECS (Edge Configuration Server) is currently enabled via PCO within 5GC.

The architecture supports Authentication and Authorization.

Figure 6.22.4.0-1below shows a high-level architecture:

![](data:image/x-emf;base64...)

Figure 6.22.4.0-1: High level architecture for enabling edge applications

For further details see 3GPP TS 23.558 [xx].

What is currently not supported:

- raw computing service (although memory and computing service characteristics is part of the EAS profile, but not really part of the profile). The question is if this is really needed.

- AF to get computing resources. However, this should be supported by other types of service APIs from cloud computing platforms.

#### 6.22.4.1 Description

By adopting Architecture for enabling Edge Applications defined by SA6, more or less all sub-issues under KI can already today be supported. An EAS (Edge Application Server) can register itself to the EES (Edge Enabling Server) with its EAS profile. An EAS Profile includes information about an EAS used to describe services and service characteristics offered.

EEC (Edge Enabling Client) within the UE can discover EAS based on the required functionality of the EAS.

The EAS can for example provide libraries for external execution of processing heavy operations need by the UE.

The EES as AF towards the core network can use APIs for breaking out traffic and getting QoS.

Discovery of the ECS (Edge Configuration Server) is currently enabled via PCO within 5GC.

The architecture supports Authentication and Authorization.

Figure 6.22.5.1-1 below shows the Edge Enabler Architecture:

![](data:image/x-emf;base64...)

Figure 6.22.4.1-1: Architecture for enabling edge applications

For further details see 3GPP TS 23.558 [xx].

What is currently not supported:

- raw computing service (although memory and computing service characteristics is part of the EAS profile, but not really part of the profile). The question is if this is really needed.

- AF to get computing resources. However, this should be supported by other types of service APIs from cloud computing platforms.

#### 6.22.4.2 Procedures

Please see 3GPP TS 23.558 [xx].

#### 6.22.4.3 Services, Entities and Interfaces

Please see 3GPP TS 23.558 [xx].

#### 6.22.4.4 Open Issues

TBD.

**\* \* \* \* Fifth Change (all new texts)\* \* \* \***

### 6.22.5 Solution #22.5: Computing Service Authorization to UE by PCF/CP NF for Computing Service based on UE policy

6.22.5.0 High-level solution Principles

This solution addresses the bullet #2a under KI#22.

This solution is extracted from Solution #12, 18, 25 in Annex X.22.

URSP based:

- URSP rules contains new field with Computing Service related parameters).

- UE evaluates URSP rules to know whether the PDU Session support Computing Service.

Computing Policy from CP NF for Computing Service

- CP NF for Computing Service provides Computing Policy to UE

- Based on Computing Policy, UE can request Computing Service.

#### 6.22.5.1 Description

**URSP-based authorization:**

In this solution, it adds new information or new field to URSP

In Traffic Description, it can have new Connection Capability set to "Computing Service" besides IMS, MMS, Internet.

UE based on the new Connection Capability knows the PDU Session is established for accessing Computing Service.

**Computing Policy from CP NF for Computing Service**

Editor’s note: TBD

#### 6.22.5.2 Procedures

6.22.5.3 Impacts on Services, Entities and Interfaces

6.22.5.4 Open Issues

**\* \* \* \* Sixth Change (all new texts)\* \* \* \***

### 6.22.6 Solution #22.6: CP Function monitors the Computing Resources status in Computing Site via Computing Node

6.22.6.0 High-level solution Principles

The CP NF for Computing Service described in clause 6.22.2 monitors the Computing Resource in Computing Site via exchanging the information with Computing Node.

6.22.6.1 Description

6.22.6.2 Procedures

6.22.6.3 Impacts on Services, Entities and Interfaces

6.22.6.4 Open Issues

**\* \* \* \* Seventh Change (all new texts)\* \* \* \***

6.22.7 Solution #22.7: CP Function monitors the Computing Resources status in Computing Site via AF

6.22.7.0 High-level solution Principles

The EASDF monitors the Computing Resource in Computing Site via exchanging the information with an AF as described in clause 6.22.3

6.22.7.1 Description

6.22.7.2 Procedures

6.22.7.3 Impacts on Services, Entities and Interfaces

6.22.7.4 Open Issues

## Annex X.22: 6G Computing Support

Input papers at SA2#173:

| Meeting | **Solution#** | **Tdoc** | **Source** | **Subject/Comment** |
| --- | --- | --- | --- | --- |
| SA2#173 | 1 | [**S2-2600098**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600098.zip) | China Mobile, Rakuten, CATT,Huawei | [KI#22, bullet #1&2&4] Solution for KI#22 of 6G architecture enhancement to support 6G computing service |
| SA2#173 | 2 | [**S2-2600125**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600125.zip) | Transsion Holdings | NF computing capability collection and exposure for 6G Computing Supporting |
| SA2#173 | 3 | [**S2-2600156**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600156.zip) | vivo | [KI#22] 6G computing service to UE |
| SA2#173 | 4 | [**S2-2600174**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600174.zip) | LG Electronics | [KI#22, bullet#1(b)] New Sol#X: “Computing Resource Profile” |
| SA2#173 | 5 | [**S2-2600181**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600181.zip) | Huawei, HiSilicon | [KI#22] New Sol: Solution to support 6G Computing |
| SA2#173 | 6 | [**S2-2600183**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600183.zip) | Jio Platforms | Capability Aware Discovery and selection of compute sites |
| SA2#173 | 7 | [**S2-2600190**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600190.zip) | NTT DOCOMO INC.. | [KI#22] New Sol: Solution to support computing service |
| SA2#173 | 8 | [**S2-2600192**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600192.zip) | Samsung | [KI#22, bullet#1,#2,#4] 6G computing service |
| SA2#173 | 9 | [**S2-2600247**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600247.zip) | Ericsson | [KI#22, bullet 1] Use of Edge Enabler Layer to support 6G computing support |
| SA2#173 | 10 | [**S2-2600262**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600262.zip) | Lenovo | [KI#22] Solution to support computing task offloading to the 6G network |
| SA2#173 | 11 | [**S2-2600267**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600267.zip) | CATT | [KI#22, bullet #1, #3] Identification of architecture requirements and computing resource |
| SA2#173 | 12 | [**S2-2600268**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600268.zip) | CATT | [KI#22, bullet #2, #4] Support computing service for UE |
| SA2#173 | 13 | [**S2-2600358**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600358.zip) | NEC Corporation. | [KI#22] PDU session establishment for Computing Service |
| SA2#173 | 14 | [**S2-2600359**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600359.zip) | NEC Corporation. | [KI#22] Exposed services for Computing Service |
| SA2#173 | 15 | [**S2-2600374**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600374.zip) | China Telecom | [KI#22, bullet #1,3,4] Solution on 6G Computing Architecture |
| SA2#173 | 16 | [**S2-2600383**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600383.zip) | IIT Bombay | [KI#22, bullet #2.a, KI#1.2 bullet #a)] A service-plane-based architectural solution to support computing services in 6G systems |
| SA2#173 | 17 | [**S2-2600402**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600402.zip) | Rakuten Mobile, Inc | [KI#22, bullet #1,2,3,4] Solution for 6G Computing Support |
| SA2#173 | 18 | [**S2-2600409**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600409.zip) | OPPO | [KI#22, bullet#2a] New Solution on Enabling Computing Service to UE |
| SA2#173 | 19 | [**S2-2600410**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600410.zip) | OPPO | [KI#22, bullet#3b] New Solution on Computing Resource Collection and Management in 6G CN |
| SA2#173 | 20 | [**S2-2600411**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600411.zip) | OPPO | [KI#22, bullet#4a] New Solution on Computing Node and Site Discovery and Selection |
| SA2#173 | 21 | [**S2-2600417**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600417.zip) | OPPO | [KI#22] New solution for 6G computing resource allocation and coordination |
| SA2#173 | 22 | [**S2-2600421**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600421.zip) | OPPO | [KI#22] Architectural requirement of 6G computing |
| SA2#173 | 23 | [**S2-2600426**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600426.zip) | Xiaomi | [KI#22, bullet #1, bullet#2, bullet#3] New solution: Computing service support for UE request |
| SA2#173 | 24 | [**S2-2600427**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600427.zip) | Xiaomi | [KI#22, bullet #2] New solution: Computing service resource information exposure to AF |
| SA2#173 | 25 | [**S2-2600430**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600430.zip) | MediaTek (Chengdu) Inc. | Enabling computing service access and offload |
| SA2#173 | 26 | [**S2-2600453**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600453.zip) | ZTE | [KI#22] Computing Framework and Computing Service Enablement Mechanism |
| SA2#173 | 27 | [**S2-2600477**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600477.zip) | Apple | [KI#22, bullet#1] Scenarios and architectural requirements for 6G compute |
| SA2#173 | 28 | [**S2-2600479**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600479.zip) | Nokia | [KI#22 bullets 2-4] Coordination of communication and computing |
| SA2#173 | 29 | [**S2-2600480**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600480.zip) | Nokia | [KI#22 bullet 1] Architectural requirements on 6G Computing support |
| SA2#173 | 30 | [**S2-2600486**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600486.zip) | LG Electronics | [KI#22, bullet#4] Discovery and (re)selection |
| SA2#173 | 31 | [**S2-2600487**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600487.zip) | LG Electronics | [KI#22, bullet 2-b and 3-b] Management and exposure |
| SA2#173 | 32 | [**S2-2600488**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600488.zip) | LG Electronics | [KI#22, bullet#3] CS re-discovery with monitoring |
| SA2#173 | 33 | [**S2-2600502**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600502.zip) | ETRI | [KI#22] Solution proposals on 6G Computing Support |
| SA2#173 | 34 | [**S2-2600548**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600548.zip) | InterDigital, Inc. | [KI#22, Bullets #1, #2a, #3a, b, c, & d, and #4] 6G Computing Service provisioning, configuration and monitoring |
| SA2#173 | 35 | [**S2-2600575**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600575.zip) | Qualcomm | [KI#22] Coordinated selection of UPFs and compute sites without HLOS and UE application dependencies |
| SA2#173 | 36 | [**S2-2600584**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600584.zip) | LG Uplus, Ewha Woman University | [KI#22, bullet 1] Solution for Architecture of Computing resource and definition of computing resource |
| SA2#173 | 37 | [**S2-2600585**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600585.zip) | LG Uplus, Ewha Woman University | [KI#22, bullet 2] Solution for Exposure of computing service |
| SA2#173 | 38 | [**S2-2600586**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600586.zip) | LG Uplus, Ewha Woman University | [KI#22, bullet 2] Solution for Enablement of computing service |
| SA2#173 | 39 | [**S2-2600587**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600587.zip) | LG Uplus, Ewha Woman University | [KI#22, bullet 3] Solution for application aware computing orchestration |
| SA2#173 | 40 | [**S2-2600588**](file:///D%3A%5CWork%20File%5C3GPP%5CTSG_SA%5CWG2_Arch%5CTSGS2_173_Goa_2026-02%5CPapers%5COPPO%5CComputing%20baseline%5CDocs%5CS2-2600588.zip) | LG Uplus, Ewha Woman University | [KI#22, bullet 3] Solution for dynamic computing configuration based on QoS and UE mobility |

**\* \* \* \* End of Changes \* \* \* \***