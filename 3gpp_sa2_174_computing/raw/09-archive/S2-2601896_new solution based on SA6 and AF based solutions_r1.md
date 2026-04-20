**3GPP TSG-WG SA2#174 S2-2601896**

**St Julian’s Malta, 13 – 17 April 2026 (revision of S2-26xxxxx)**

**Source: Ericsson**

**Title: [KI#22] New/Solution variant #4 update: solution based on Edge Enabling Layer and AF based solutions**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This contribution proposes a new/updated solution based on Edge Enablement Layer and AF based solutions*

# Discussion

This contribution proposes a new/updated solution based on Edge Enabling Layer and AF based solutions as described in 6.22.4 and 6.22.3 of the penholder version of the solution descriptions from last meeting (S2-2601619). The solution is revision marked as an update of 6.22.4 in S2-2601619 and could in our opinion replace the existing solution in 6.22.4.

# Proposal

It’s proposed to add the following text to 23.801-01.

All text is new text but changes are marked against the penholder version of the solution descriptions from last meeting in S2-2601619.

**\* \* \* \* 1st Change \* \* \* \***

# 2 References

The following documents contain provisions which, through reference in this text, constitute provisions of the present document.

- References are either specific (identified by date of publication, edition number, version number, etc.) or non‑specific.

- For a specific reference, subsequent revisions do not apply.

- For a non-specific reference, the latest version applies. In the case of a reference to a 3GPP document (including a GSM document), a non-specific reference implicitly refers to the latest version of that document *in the same Release as the present document*.

[1] 3GPP TR 21.905: "Vocabulary for 3GPP Specifications".

[2] 3GPP TS 23.501: "System Architecture for the 5G System; Stage 2".

[3] 3GPP TS 23.502: "Procedures for the 5G System; Stage 2".

[4] 3GPP TS 23.503: "Policies and Charging control architecture; Stage 2".

[5] 3GPP TS 23.228: "IP Multimedia Subsystem (IMS); Stage 2".

[6] 3GPP TS 23.167: "3rd Generation Partnership Project; Technical Specification Group Services and Systems Aspects; IP Multimedia Subsystem (IMS) emergency sessions".

[7] RP-252912: "Revised SID: Study on 6G Radio", 3GPP TSG RAN Meeting #109, Beijing, China, September 15-18, 2025.

[8] 3GPP TS 22.101: "Service aspects; Service principles".

[9] 3GPP TS 22.261: "Service requirements for the 5G system".

[10] 3GPP TS 22.105: "Services and service capabilities".

[11] 3GPP TR 22.870: "Study on 6G Use Cases and Service Requirements".

[12] 3GPP TS 23.380: "IMS Restoration Procedures".

[13] 3GPP TS 23.273: "5G System (5GS) Location Services (LCS); Stage 2".

[14] 3GPP TS 33.535: "Authentication and Key Management for Applications (AKMA) based on 3GPP credentials in the 5G System (5GS)".

[15] 3GPP TS 38.331: "NR; Radio Resource Control (RRC); Protocol specification".

[16] 3GPP TS 23.204: "Support of Short Message Service (SMS) over generic 3GPP Internet Protocol (IP) access; Stage 2".

[17] 3GPP TS 29.514: "5G System; Policy Authorization Service; Stage 3".

[xx] 3GPP TS 23.558: "Architecture for enabling Edge Applications".

[xy] 3GPP TS 23.548: "5G System Enhancements for Edge Computing; Stage 2".

**\* \* \* \* 2nd Change (all new text) \* \* \* \***

## 6.22 Solutions to KI#22

### 6.22.4 Solution #22.4: Coordination between Communication and Computing is performed by AF or Edge Enabler Layer.

#### 6.22.4.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to address bullet#1b, 3a, 3c, 3d, 3e, 4a, the missing aspect can be added later.

This solution addresses KI#22 (bullet#1b, 3a, 3c, 3d, 3e, 4a) and extracted from Solution #9 in Annex X.22.

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

When adopting Architecture for enabling Edge Applications defined in 3GPP TS 23.558 [xx] more or less all sub-issues under KI can already today be supported. An EAS (Edge Application Server) can register itself to the EES (Edge Enabling Server) with its EAS profile. An EAS Profile includes information about an EAS used to describe services and service characteristics offered.

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

##### 6.22.4.1.1 Architectural representation of Service Hosting Environment and Computing sites

In SA1 TR 22.870, for compute offloading scenarios, the use case is around UE applications to be run on operator owned compute sites. As part of SA1 discussions, operator-owned data network is now termed as Service Hosting Environment (SHE). Moreover, the current SA1 definition of 6G Computing Service states that the service will utilize the computing resources in SHE. In order to enable operators to utilize the computing resources in the data networks managed by operator but owned by a 3rd party like an hyperscaler, the current SHE definition should be refined. Accordingly, the SHE can be represented from architecture point of view as below figures:

![](data:image/x-emf;base64...)

Figure 6.22.4.1.1-1: Architectural representation of Service Hosting Environment and Computing Site

![](data:image/x-emf;base64...)

Figure 6.22.4.1.1-2: Architectural representation of Service Hosting Environment and Computing Site for co-located UPF-SHE deployment

In both Figure 6.22.4.1-1 and Figure 6.22.4.1-2, SHE is accessed via the user plane function; and computing(s) site can be either residing in SHE or Data Network (DN) where DN can be owned by an operator or 3rd party and controlled/managed by an operator depending on the operator deployment choice. Similarly, computing site(s) in DN is accessed via user plane function of 6G. Figure 6.22.Y.1-2 further provides an operator deployment choice where SHE can be co-located with user plane function of 6G, and computing site(s) in SHE is accessed via the user plane function of 6G. The interface between the user plane function of 6G and computing site residing in an operator managed environment, the 6G Network may support QoS enforcement from UE to user plane function of 6G and traffic classification/prioritization is performed from user plane function of 6G to Application Server/computing site.

##### 6.22.4.1.2 Expected compute offloading role from 6G System

When the SA1 defined compute-oriented use cases in TR 22.870 are considered, as summarized in Table 6.22.4.1.2-1, it is evident that most of the use cases (if not all) require an application component to be available and running on a selected compute site/application server in order to provide the computing service to a consumer.

NOTE: Whether consumer can be a user/subscriber or an AF is not scope of this document and will be addressed as part of item 2 of KI#22.

Table 6.22.4.1.2-1: Summary of compute-oriented use cases in TR 22.870 and expected offloading role from 6G System

|  |  |  |  |
| --- | --- | --- | --- |
| **Use case** | **Compute-oriented use case** | **Offloading Role** | **What Gets Offloaded** |
| **1** | **Extended Reality (XR) and Immersive Services** | UE offloads rendering tasks and scene reconstruction to edge/cloud servers to reduce latency and device power consumption. | Rendering application component |
| **2** | **AI/ML Inference and Training** | UE offloads inference or training to nearby compute sites or cloud platforms. | AI/ML application component (inference)  AI/ML application component and required data set info (training) |
| **3** | **Vehicular and Drone Operations** | UE offloads path computation, object detection, and coordination logic. | Object detection application component  Logic/code (coordination) |
| **4** | **Industrial Automation and Robotics** | UE offloads control logic, sensor fusion, and predictive analytics to edge compute sites. | Analytics application component  Logic/code (control) |
| **5** | **Digital Twin and Simulation Services** | UE offloads simulation tasks to edge/cloud to maintain fidelity and responsiveness. | Logic/code (simulation) |

The term application component like rendering, AI/ML, object detection, analytics etc. as captured in Table 6.22.Y.1.2-1, can be further clarified as a piece of software that implements a specific part of the application functionality. The overall application is composed of multiple application components that communicate with each other. In a given application, some application components (“*frontend application components*”) may need to always run in the UE as they directly interact with device hardware, e.g., the UI. Other application components (“*backend application components*”) may need to always run centralized on the server side as they may for instance interact with databases that cannot be moved, e.g., for security reasons. However, there may also be application components (“*distributable application components*”) that could run either on the UE or on the server side, including on the operator owned computing sites, as long as they have enough compute resources and the requirements for their communication with other application components are met. For example, to meet the overall application QoE/performance requirements, it may be required that a distributable component must be able to respond to a frontend component in less than 20 ms. If 6G Computing Service can provide a compute site for the distributable component to run and user plane connection from UE to the compute site that meets this requirement, the component can be “offloaded” from the UE to the compute node. An application component deployed and run on a computing site becomes an application workload for that compute node, i.e., it consumes a certain amount of compute resources of the computing site to perform its tasks. Figure 6.22.Y.1.2-1 shows a representation of frontend, backend and distributable application components and possible user plane connections between them. Distributable application component can be available in UE, computing site and application server. For the upper part of the figure, UE runs both frontend and distributable application components whereas for the lower part of the figure, the distributable application component is running in a selected computing site.

![](data:image/x-emf;base64...)

Figure 6.22.4.1.2-1: Representation of different application components and user plane connections between them (Computing Site resides in an operator-managed DN and Application Server resides in 3rd party DN)

In Figure 6.22.3.1.2-1, it is assumed that the application server is running in a 3rd party DN. When, based on an SLA between the operator and application provider, the application server is running in an operator-owned DN/SHE, the operator may manage QoS enforcement from UE to user plane function of 6G and traffic classification/prioritization from user plane function of 6G to Application Server.

![](data:image/x-emf;base64...)

Figure 6.22.4.1.2-2: Representation of different application components and user plane connections between them (Computing Site and Application Server reside in an operator-managed DN(s))

Cloud Native automation and orchestration is considered one of defacto standard for life cycle management (LCM) of cloud infrastructure (out of scope of 3GPP) and LCM of Application which including application/workload Instantiation, placement and LCM utilizing other SDO/Open source community/projects such as Kuberntes, GitOps. Cloud/edge orchestration and management have been widely handled by Cloud Native Computing Foundation (CNCF - <https://www.cncf.io/>). As can be seen from Figure 6.22.Y.1.2-3, there are quite a high number of open-source projects that work on enabling cloud/edge orchestration and management. In real deployments, the operator-owned and managed SHE and/or DN may implement a different platform such as Kubernetes, GitOps, etc. and their execution environment may rely on different virtualization and containerization methods such as containers, Open Stack Virtual Machines or stay bare metal. Moreover, the development cycles of these open-source projects are a lot shorter than 3GPP release cycle. Any new enabler, for example a new hook to get further telemetry data defined by these open-source projects such as Prometheus, cannot be implemented within 3GPP standards. Therefore, any aspect on cloud/edge orchestration and management should follow the procedures already defined by these open-source projects and should stay as flexible as these projects can enable. Redefining these procedures as 6G System procedures would halt the progress and create unnecessary complexity for whole ecosystem including operators, application owners and hyperscalers.

![A screenshot of a computer

AI-generated content may be incorrect.](data:image/png;base64...)

Figure 6.22.4.1.2-3: Landscape of Cloud Native Computing Foundation (CNCF) projects on cloud/edge orchestration **and management (<https://landscape.cncf.io/> accessed on 15/01/2026)**

#### 6.22.4.1.3 Coordination of Communication and Computing

A high-level architecture for coordination of communication and computing is depicted in Figure 6.22.4.1-1. In this architecture:

The Network Service Provider provides communication services to the end-user (e.g., via access and core networks). The Network Service Provider manages QoS and steering of traffic between the end-users and the target compute sites. Furthermore, it can also measure network metrics between end-user and compute sites.

Computing Service Provider offers computing resources to run the EAS that serve the end-user. The EAS can have multiple instances deployed at various physical sites of the Computing Service Provider. It is responsible for the lifecycle management (LCM) of these EASs and the collection of related compute, infrastructure and energy metrics.

Application Service Provider (ASP) provides the EASs that will serve the end-user. An EAS is associated with network and compute requirements. The ASP interacts with the Computing Service Provider to purchase compute resources to run the EASs.

Compute and Network Coordination Service Provider (CNCSP) is responsible for compute service coordination by selecting optimal EASs or compute sites that satisfy the requirements, based on network, compute and infrastructure metrics. It therefore provides its services to the ASP, or directly to the end-users. As shown in Figure 6.22.x.1-1, this CNCSP is realized by AF with Compute Coordination Functionality and would therefore need to interact with Compute Service Provider and Network Service Provider to acquire the relevant metrics to perform optimal coordination between compute and network.

The same business organization can hold one or multiple of the abovementioned roles.

![](data:image/x-emf;base64...)

![](data:image/png;base64...)

Figure 6.22.4.1.3-1: High-level architecture for coordination of communication and computing with AF

When adopting Edge enablement layer defined in 3GPP TS 23.558 [xx], the architecture can be depicted as in figure 6.22.4.1-2 below.

![](data:image/x-emf;base64...)

![](data:image/png;base64...)

Figure 6.22.3.1.3-2: High-level architecture for coordination of communication and computing with EEL

The Edge Enablement Layer (EEL) specified in 3GPP TS 23.558[xx] contains the following functionality:

EEC (Edge Enabling Client) within the UE can discover EAS based on the required functionality and compute resources.

The EAS can for example provide libraries for external execution of processing heavy operations need by the UE.

The EES as AF towards the core network can use APIs for breaking out traffic and getting QoS.

Discovery of the ECS (Edge Configuration Server) is currently enabled via PCO within 5GC.

A typical process of coordination of communication and computing follows the below steps:

AF/EEL with Compute Coordination Function acquires network metrics from Network Service Provider, and compute, infrastructure and energy metrics from Compute Service Provider.

AF/EEL with Compute Coordination Function receives compute and communication coordination request which may include network, compute and other infrastructure requirements.

AF/EEL with Compute Coordination Function performs “decision-making”, which consists of selecting an EAS or a compute site that satisfies the requirements, based on network, compute and infrastructure metrics.

The decision-making should be followed by a request, to the Network Service Provider, for path build-up/traffic steering, and eventually a request, to Compute Service Provider, for compute control/LCM management.

#### 6.22.4.2 Procedures

For Edge Enabling procedures , see 3GPP TS 23.558 [xx].

#### 6.22.4.3 Services, Entities and Interfaces

For Edge Enabling procedures, see 3GPP TS 23.558 [xx].

#### 6.22.4.4 Open Issues

TBD.

**\* \* \* \* End of Changes \* \* \* \***