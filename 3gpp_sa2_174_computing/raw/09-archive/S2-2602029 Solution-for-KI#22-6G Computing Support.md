**3GPP TSG-WG SA2#174** **S2-2602029**

**Malta, 13-18 March, 2026 *revision of S2-2600402***

**Source: Rakuten Mobile**

**Title: [KI#22, bullet #1,2,3,4 update]** **Solution for 6G Computing Support**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This paper proposes a solution for Key Issue #22: 6G Computing support.*

# 1. Introduction

The key issue #22 is based on the WT#6 about 6G Computing Support and this paper focuses on the following two aspects:

WT#6.1: Identification of the architectural requirements and computing resource(s):

a. Derive architectural requirements for scenario(s) and service requirements defined by SA1 to be enabled by the Computing Service.

b. Whether and how to define the computing resource (e.g., computing resource type and/or status, location of the computing resource, etc.).

WT#6.2: Enablement/authorization of computing service to UE or AF.

a. Whether and how to enable Computing Service.

b. Whether and how the operator network may expose the computing resource related information (e.g., its hosting capability (e.g. using compute resources at Service Hosting Environment)) and/or network metrics to AF.

WT#6.3: Coordination of communication and computing, service continuity and QoS aspects:

a. Whether and how to coordinate (e.g., within or outside the core network) communication (for the traffic transferred over user plane) and computing resource(s) in the Computing Site.

c. Whether and how to improve the service experience

d. Whether there is a need to improve QoS to satisfy Computing Service requirements.

WT#6.4: Discovery and (re-)selection of compute site(s) for the Computing Service:

a. Whether and how to discover and (re-)select Computing Site(s) for the Computing Service.

# 2. Text proposal

It is proposed to agree the following changes vs. TR 23.801-01:

\* \* \* First Change \* \* \* \*

## 6.0 Mapping of Solutions to Key Issues

Table 6.0-1: Mapping of Solutions to Key Issues

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Key Issues | | | | | | | | | | | | | | | | | | |
| Solutions | #P | #Q |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| #X | 22 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| #Y |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

\* \* \* Next Change \* \* \* \*

## 6.X Solutions to KI#X

### 6.X.Y Solution #X.Y: Solution for 6G Computing Support

#### 6.X.Y.0 Topics addressed and High-level Solution Principles

This paper proposes a solution to address **KI#22** by enabling a **6G computing service** where computing tasks originating from a UE or an Application Function (AF) can be offloaded to computing resources coordinated by the 6G Core Network.

Considering that some computing-intensive tasks initiated by UE applications (e.g. AI inference, AI model processing, immersive rendering) require computing resources that cannot be satisfied by the UE itself, this solution allows the **6G network to become aware of computing task requests** and to assist in selecting, authorising, and steering traffic to suitable computing sites deployed in the operator network. **At the same time, computing resource request could be made by AF**

In this solution, computing sites are deployed in **Service Hosting Environments** associated with the 6G Core Network and are coordinated by the operator. This allows the operator to:

Assist compute-site discovery and selection using network-internal knowledge,

Guarantee **end-to-end latency and QoS** for computing tasks,

Support **service continuity** under UE mobility or load variation,

Ensure compliance with security, privacy and policy constraints.

The following architectural enhancements are proposed:

Introduction of a **Compute Service Exposure Function (CSEF)**, hosted by NEF, to expose compute-related discovery and service APIs to authorised AFs in a bounded manner.

Introduction of a **Compute Service Management & Coordination Function (CMCF)** responsible for:

Coordinating computing resource management,

Joint admission and placement of computing workloads,

Interaction with policy, session and analytics functions.

Reuse of existing **PDU Session establishment/modification procedures** to configure traffic steering and QoS for computing service flows.

Use of **NWDAF** to provide predictive analytics (e.g. load, latency, UE mobility risk) to assist compute-site selection and reselection.

Support for **make-before-break service continuity,** enabling workload migration between compute sites with minimal service interruption. (This is assumed but not depicted in the call flow)

This solution mainly focuses on addressing the following issues:

**Identification of architectural requirements and computing resources**

a) Derivation of architectural requirements to support SA1 computing-related service requirements.

b) Definition and abstraction of computing resource information (type, capabilities, validity).

**Enablement and authorisation of computing service**

a) Enablement of computing service for UE and/or AF.

b) Support for subscription scope verification and UE consent where required.

**Discovery and (re-)selection of computing Sites**

Network-assisted discovery of candidate computing Sites.

4. Discovery and (re-)selection of compute site(s) for the Computing Service

#### 6.X.Y.1 Description

This solution provides an enhancement to the **6G Core Network architecture** to support a **6G computing service** for UEs and AFs.

The solution supports offloading computing tasks from UE to computing sites coordinated by the operator network.

There are 2 variations of where the computing site could be hosted. These are shown below:

1. Computing Site is hosted in Service Hosted Environment (SHE) inside the Core Network site adjacent to UPF. **In this solution this architecture is proposed.**

![A diagram of a computer network

AI-generated content may be incorrect.](data:image/png;base64...)

Figure 6.X.Y.1-1: Computing Site deployment inside operator network adjacent to UPF

2. Computing Site is hosted in the Data Network outside the Core Network site. We do not propose this as a solution because the computing site is outside the operator control and there will be delay because the traffic need to be routed to data network.

![A diagram of a computer network

AI-generated content may be incorrect.](data:image/png;base64...)

Figure 6.X.Y.1-2: Computing Site deployment outside operator network in the DN

#### 6.X.Y.2 Procedures

The procedure for providing a UE/AF-triggered 6G Computing Service is described below.

![](data:image/x-emf;base64...)

Figure 6.X.Y.2: Procedure of 6G computing service by computing node inside core network

## Phase 0: Discovery & capability exposure (WT#6.2, WT#6.4)

**0.a PDU session is assumed to be initiated by the UE**

**0.b Compute site registers its capabilities with CMCF (e.g., xPUs, Memory, SDK, run time etc.)**

**1.** The AF invokes the compute site discovery API towards the CSEF and provides service type and constraint information (e.g. latency constraint).
**2.** The CSEF requests the CMCF to provide a set of candidate compute sites and associated capabilities, with abstraction applied.

**3.** The CMCF requests NWDAF analytics/predictions relevant to candidate evaluation (e.g. site load, path latency, UE mobility risk).
**4.** The NWDAF provides the CMCF with ranked candidate information and associated confidence and time-horizon information.

**5.** The CMCF provides the candidate set information to the CSEF, including identifiers, abstracted capabilities, validity time and policy-related notes.
**6.** The CSEF provides the bounded candidate set information to the AF in accordance with exposure policies.

## Phase 1: Enablement / authorization (WT#6.2)

**Step 7.** The AF submits a compute service request to the CSEF including UE identification, workload profile, SLA requirements and continuity class.
**Step 8.** The CSEF requests authorisation for the UE computing service towards the UDM and requests consent handling where applicable.
**Step 9.** The UDM notifies the UE and performs consent acquisition and subscription scope verification for the computing service request.
**Step 10.** The UE provides consent and indicates application permission acceptance to the UDM.
**Step 11.** The UDM provides the authorisation result to the CSEF, including authorised scopes, limits and maximum resource constraints.

## Phase 2: Joint admission + placement (WT#6.1, WT#6.3, WT#6.4)

**Step 12.** The CSEF forwards the compute service request to the CMCF including the authorised scopes/limits and the candidate compute site information.
**Step 13.** The CMCF requests PCF to perform policy determination and QoS feasibility mapping for the computing service (e.g. mapping SLA to QoS flows).
**Step 14.** The PCF provides the QoS policy decision to the CMCF (e.g. 6QI, ARP, GBR/non-GBR characteristics, slice-related constraints).
**Step 15.** The CMCF requests the SMF to evaluate User Plane feasibility towards the candidate compute sites (e.g. anchor/ULCL/breakout options).
**Step 16.** The SMF requests the UPF to evaluate path KPIs for each candidate compute site (e.g. RTT, congestion, locality).
**Step 17.** The UPF provides to the SMF the path KPI information per candidate, including current and predicted values where available.
**Step 18.** The SMF provides to the CMCF the feasible User Plane options and the associated KPI information.
**Step 19.** The CMCF performs a joint optimisation considering latency, migration risk and cost, and selects the target compute site (Compute Site A).
**Step 20.** The CMCF requests Compute Site A to reserve resources and instantiate the workload (e.g. container/VM/function as applicable).
**Step 21.** Compute Site A confirms workload readiness to the CMCF and provides endpoint information and attestation evidence.

## Phase 3: Session/QoS setup & traffic steering (WT#6.3)

**Step 22.** The CMCF requests the SMF to update the session and configure steering towards Compute Site A, providing endpoint and/or topology information.
**Step 23.** The SMF requests the PCF to install QoS rules for the computing service traffic, including a dedicated QoS flow where applicable.
**Step 24.** The PCF provides to the SMF the QoS rules, including QFI assignment and PCC-related gating/enforcement parameters.
**Step 25.** The SMF installs User Plane rules in the UPF for steering and QoS enforcement (e.g. FAR/PDR/QER).
**Step 26.** The SMF notifies the AMF of the session/QoS update for UE coordination, where required.
**Step 27.** The AMF notifies the UE of PDU session modification and QoS flow information in accordance with existing procedures.
**Step 28.** The CSEF issues a compute token to the AF bound to the UE and including SLA and continuity rule constraints.
**Step 29.** The AF provides the compute token and endpoint information to the UE (alternatively the UE may retrieve such information via CSEF).
**Step 30.** The UE sends uplink traffic associated with the compute service towards the UPF.
**Step 31.** The UPF steers the compute service traffic towards the workload instance at Compute Site A in accordance with installed steering rules.
**Step 32.** Compute Site A provides computation results/response towards the UE.
**Step 33.** Compute Site A optionally provides results and/or telemetry information towards the AF.

#### 6.X.Y.3 Services, Entities and Interfaces

**Compute Service Exposure Function (CSEF):**

Support to receive computing request from AF

Expose compute-related discovery and service APIs to authorised AFs in a bounded manner.

This could be achieved by an extension to NEF

**Compute Service Management & Coordination Function (**CMCF**)** responsible for:

Registers computing site capabilities

Coordinating computing resource management,

Joint admission and placement of computing workloads,

Interaction with policy, session and analytics functions.

Support of new interface between CMCF and the computing site inside Service Hosting Environment

\* \* \* End of Changes \* \* \* \*

## Extracted Images

![image_08c10524e7f14756bc903f919c8ce09f_1](https://doc2markdown.com/images/20260419/doc_08c10524e7f14756bc903f919c8ce09f/image_08c10524e7f14756bc903f919c8ce09f_1.png)

![image_08c10524e7f14756bc903f919c8ce09f_2](https://doc2markdown.com/images/20260419/doc_08c10524e7f14756bc903f919c8ce09f/image_08c10524e7f14756bc903f919c8ce09f_2.png)

