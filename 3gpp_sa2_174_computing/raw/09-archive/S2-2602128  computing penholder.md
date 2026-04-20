**3GPP TSG-WG SA2 Meeting #174 *S2-2602128***

**Malta, MT, 13th April – 17th April, 2026 (revision of S2-260xxxx)**

**Source: Huawei, HiSilicon, Vivo, CATT, Xiaomi**

**Title: [KI#22, Candidate Solution Variant #22.2, update] Coordination between Communication and Computing is controlled by 6G CN**

**Document for: Approval**

**Agenda Item: 20.6.22**

**Work Item / Release: FS\_6G\_ARC / Rel-20**

*Abstract: It proposes to update solution variant in pen holder version to support 6G computing.*

# 1. Introduction/Discussion

There are multiple sub variants under Solution #22.2: Coordination between Communication and Computing is controlled by 6G CN. It proposed to find common part of UE requested Computing Service via CMF approach. Whether the request is via control plane, user plane, service plane or data plane is not the key point of KI#22.

The common parts are:

For Computing Site in CN there is dynamic Coordination between Communication and Computing (i.e., QoS/delay coordination for Computing Service). For Computing Site in DN, at least the Computing Node is selected by the CMF.

For dynamic Coordination between Communication and Computing, the computing enforcement rule will be generated be CMF. QoS Profile is handled by 6G SMF. There is a control plane function to sync the information among CMF(s) and 6G SMF(s)

# 2. Text Proposal

It is proposed to capture the following changes vs. TR 23.801-01.

\* \* \* \* First change \* \* \* \* All new text

## 6.22 Solutions to KI#22

### 6.22.2 Solution #22.2: Coordination between Communication and Computing is controlled by 6G CN

#### 6.22.2.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to address bullet#1b, 3a, 3c, 3d, 3e, 4a, the missing aspect can be added later.

This solution addresses bullet #1b, 3a, 3c, 3d, 3e, 4a under KI#22 since the solution for these 6 aspects have dependency with each other, and they are normally addressed in a single solution.

This solution is extracted from Solutions #1, 3, 5, 6 (Discovery and Selection of Computing Sites), 7, 8, 10, 11, 13, 15 (Computing Request over CP), 16, 21, 25, 26 (DNS query procedure), 33(UE Requested part), 34, 36, 38, 39, 40 of Annex X.22.

There are following variants:

UE Requested Computing Support in 6G by using SM NAS (Solutions #1, 8, 13, 15 (Computing Request over CP), 21, 25, 26 (DNS query procedure), 33(UE Requested part), 34 of Annex X.22.)

UE Triggered Computing Service Support in 6G by using SM NAS and UP connectivity to a Computing Site in the SHE, an Operator controlled domain other than 6G CN (Solution #7 of Annex X.22)

UE Requested Computing Support in 6G by using Computing NAS for Computing Site (Solution #3, 5, 10, 11, 14, 15, 16, 26 (Iaas) 36/38/39/40 in Annex X.22.)

UE Requested Computing Support in 6G by using Computing NAS for Computing Site connecting to 6G UPF via Control Plane (Solution #3, 5, 10, 11, 15, 26 (Iaas) 36/38/39/40 in Annex X.22.)

UE Requested Computing Support with Computing messages over User Plane (Solution #14, 15, 23 in Annex X.22.)

Void.

Void.

Void.

UE Initiated Computing Service Support and SMF Controlled Coordinated selection of UPFs and compute sites (Solution #35 in Annex X.22)

AF Requested Computing Support via CCF (Solution #**5, 10,** 16, 17, 33 in Annex X.22)

The solution illustrates how the UE or AF requests the computing support from 6G CN and how the 6G CN coordinates the communication and computing requirements and select the proper Computing Site(s) for the UE’s PDU Session.

The solution for variants A/C/D/E/F/H is based on the following principles:

In control plane there is an NF (e.g., 6G PCF, 6G SMF, CMF, etc.) is used to discover the suitable Computing Node (which is an entity that can represent Computing Site) for the computing request from UE.

The CMF (Computing Management Function) is aware of the status and capabilities of the internal/external computing resources via the Computing Node/Site. The 6G SMF and CMF need to consider the coordination between the computing and communication.

The communication between the UE and Computing Node/Site for Computing Service is via user plane.

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

A Computing Management Function is introduced to authorize the computing resource request from the computing resource consumer (e.g., UE, AF) and select the computing node in 6G CN.

The computing node is introduced to represent the computing site (in the 6G Core Network or in the Data network) for coordination between computing and communication. The Computing Node monitors the Computing resources in Computing Site(s) and reports to CMF. On the other side, it receives and executes the Computing resource Request from CMF. The computing node/computing site executes the computing task. The interface and protocol between the CMF and Computing Node will be standardized.

Figure 6.X.Y.1.2-1 shows the architecture. The CS (Computing Site) is assumed to provide various services based on different types of computing resources. The computing site in CN is either collocated with or separate from computing node. The interface between Computing Node and Computing Site will not be standardized in 3GPP SA2(e.g., via k8s when Computing Site is in DN, by local configuration when Computing Site is in CN).

UE

6G RAN

6G SMF

Application Server

CMF

DN

Other NF

Computing node

6G UPF

CN

**Figure 6.22.2.1.2-1: 6G Computing Architecture**

The functionalities of the NFs in the framework is as following:

The Computing Management Function (CMF) supports the following functionality:

Supports the registration by the computing node with the computing resource related information.

Supports to get computing resource status report from the Computing Node.

Supports to computing node selection function. Receive the computing discovery request from the computing resource consumer, and provide the computing resource related information of the discovered computing resources to the consumer.

Manage to establish a Computing Session between UE and Computing Node. The Computing Session is an association between the UE and a Computing Node that provides a computing service.

Manage the tunnel between 6G UPF and computing node.

The Computing Node supports the following functionality:

In control plane, reports to CMF on behalf of computing site in CN with the computing resource related information and the computing resource status. Enforces the computing enforcement rule from CMF for the computing resource request.

In user plane, exchanges information for identifying the computing task and related QoS information.

Executes the computing task and provides the computing service to the UE in the computing session.

The 6G SMF supports Session Management in 6G.

The 6G UPF is the Anchor of 6G PDU Session.

A control plane NF (e.g., PCF, Computing Agent) supports the following functionality:

Determine the necessary session management input parameters or computing input parameters based on the request or intent.

Invokes session management and computing related services to send the parameters to 6G SMF, CMF respectively.

Editor’s note: Location of the control plane NF is FFS. It could be collocated with SMF or CMF.

NOTE 1: Void.

NOTE 2: The CMF may collect the Computing resource related information (e.g., resource type, resource status, etc.) from Computing Node directly.

NOTE 3: Void.

NOTE 4: Whether the UE’s Computing Request will go through an AI Agent Function will be coordinated with KI#1.1 (NAS) and KI#18 (AI for 6G architecture).

NOTE 5:Void.

NOTE 6: The 6G UPF and Computing Site can be regarded as a virtual Computing Node which can be controlled by both CMF and 6G SMF.

NOTE 7: The UPF and Computing Node can be collocated and become a Data Plane Function as proposed in variant D, this aspect will be coordinated with KI#21.

NOTE 8: Whether a new Plane (e.g., Service Plane) or User Plane or Control Plane or Data Plane is used to transfer computing related signalling between the UE and the CMF will be coordinated with KI#1.2.

NOTE 9: Whether NAS is terminated at 6G AMF and whether there is interface between 6G RAN and 6G CMF depend on the conclusion for KI#1.1.

NOTE 10: In some options, the Application Server in DN is not required.

NOTE 11: Whether the interface between CMF and Computing Node/Computing Site is service based or not should be explicitly described in specific solution variants.

NOTE 12: Void.

6.22.2.1.1.2 Description for variant B

The CCCE (Communication and Computing Coordination Entity), a functionality of the 6G CN CP, enforces the Communication and Compute (CC) Policy for the Computing Service session by:

providing SM policy association service towards the SMF (similarly to the PCF in the 5GC) that manages the UP connection of the Computing Service session, and

interacting with SHE Controller(s) to request the enforcement of the SHE Policy for the Computing Site. The CCCE interacts with the SHE Controller(s) through the reference point 6G-CCCE-SHE.

The CCCE may be a standalone NF in the 6G CN or a functionality implemented by the 6G SMF or the 6G PCF.

The implementation of the SHE Controller is out of the scope of 3GPP SA2, but SA2 should standardize the 6G-CCCE-SHE reference point.

![](data:image/x-emf;base64...)

**Figure 6.22.2.1.3: Control Plane components involved in the proposed solution variant B**

6.22.2.1.1.2 Description for variant G

The goal of this solution is to define 3GPP enhancements for coordinated selection of UPFs and compute sites as well as assignment of QoS while avoiding any additional requirements on HLOS and UE applications.

It is essential to avoid additional requirements on HLOS in the UE and UE applications because it is unrealistic to assume that UE application developers would use 3GPP-specific mechanisms for compute resource management and selection. This is because UE application developers typically aim to maximize the addressable market for their applications, which means to ensure that an application can work over any access technology and in any network.

For the same reason it is essential to ensure that any 3GPP enhancements in this area are agnostic to the actual compute/virtualization framework that is used to maximize chance of adoption.

This solution achieves this by enabling the compute framework to provide the network with information so that the network can calculate the aggregated latency (communication latency and compute latency) for each DNAI and related compute sites and compare it with a maximum acceptable aggregated latency provided by the compute framework. This enables the network to select a DNAI and add a ULCL/BP for that DNAI while being able to trade communication latency for compute latency or vice versa.

##### 6.22.2.1.2 Coordination between Communication and Computing

6.22.2.1.2.1 Description for variants A/C/D/E/F/H

The coordination solution for variants A/C/D/E/F/H comprises:

UE/AF requests computing support from 6G CN by using the Computing Request including the requirement of computing resource request in order to satisfy the service experience.

Based on the UE/AF request, authorization information in the User Subscription data and Computing Policy (e.g., locally configured or from PCF), the CMF selects proper Computing Node and derives Computing Enforcement rule for Computing Node for Computing Service . The SMF derives the QoS profile for RAN.

Computing Node/Site for Computing Service enforces the Computing Enforcement rule received from the CP Function by allocating corresponding computing resources of a Computing Node.

Editor’s note: The detailed computing related information from UE can be captured in the detailed procedures.

The coordination NF variants:

A control plane NF derives the communication QoS parameters and Computing requirements (e.g., latency, throughput, resource type, etc.)

The coordination decision on how to derive the Computing related parameters in the Computing Enforcement rule in Computing Node/Site can be made based on UE requested information, authorization in User subscription and PCC rule/Computing Policy.

6.22.2.1.2.2 Description for variant B

The CCCE interacts with SHE Controller(s) to (i) query for available SHE resources, and (ii) reserve SHE resources.

The CC Policy for a Computing Service session is determined by the PCF from a CC (Computing and Communication) Profile. The CC Profile may be based on local configuration in the 6G PCF, user subscription or AF request. If the CCCE is a separate function from the PCF, at the Compute Service session establishment, the CCCE performs CC Policy association with the PCF to get the CC Policy.

To enforce the CC Policy, the CCCE selects suitable SM Policy and SHE Policy based on the SM Policy that can be supported by the SMF and the SHE Policy that can be supported by the SHE. After selecting the suitable SM policy and SHE policy, the CCCE confirms the selected SM policy to the SMF and enforces the selected SHE policy to the SHE.

6.22.2.1.2.3 Description for variant G

The solution works as follows:

- The AF (representing a compute framework or a network-side application component that uses a compute framework) may provide the following information to the SMF (via NEF/PCF) as part of an enhanced AF traffic influence request:

- Targeted UE

- Maximum acceptable aggregated latency, which is defined as the sum of the communication latency (N3 delay and N6 delay) and the compute delay.

- Compute site information:

- DNAIs where compute sites relevant for the UE are available.

- For each DNAI a list of (Compute site IP address, compute delay) tuples which indicates for each compute site the current compute delay relevant for the UE.

NOTE: The order of compute sites in the list indicates the AF's preference to use a specific compute site associated with a DNAI (e.g., based on load considerations).

- The SMF then determines if the currently selected PSA-UPF serves one of the DNAIs indicated by the AF, and if so, if the maximum acceptable aggregated latency can be supported for that DNAI based on the compute site information provided by the AF.

- In preparation for this, the SMF may trigger N6 delay measurements for the compute sites associated with the PSA-UPF DNAI (as indicated by the AF).

- If the PSA-UPF cannot support the maximum acceptable aggregated latency, then the SMF may select a different DNAI from the DNAIs indicated by the AF.

- For this, the SMF may trigger N6 delay measurements for the DNAIs and compute sites indicated by the AF.

- SMF may select any DNAI and compute site for which the aggregate of communication latency (N3 latency and N6 latency) and the compute latency for the compute site as provided by the AF is lower than the maximum acceptable aggregated latency.

- Based on this, SMF may add a ULCL / BP for the selected DNAI and inform the PCF about the selected DNAI and compute site.

- PCF may modify the PCC rules (e.g., to adjust the QoS parameters of the flows between the UE and the compute site)

- PCF (via NEF) informs the AF about the selected DNAI and compute site.

- If none of the DNAIs can address the maximum acceptable aggregated latency, then the network rejects the AF traffic influence.

- The AF may update the network if the compute site information changes, e.g., if the compute delay changes for any of the compute sites. SMF may take this information into account for selecting a different DNAI if the maximum acceptable aggregated latency cannot be met anymore.

6.22.2.1.3 Computing Node/Site Discovery and (Re-)Selection

For variants A/C/D/E/F/G/H, CMF is proposed to perform the Computing Node/Site discovery and (re-)selection:

For variant B, there is no selection of the Computing Site, which is determined by the CS ID associated to the selected UPF. Selection of the computing resources performed by the SHE Controller is out of scope of SA2.

#### 6.22.2.2 Procedure

##### 6.22.2.2.1 General Procedure on Computing Service.

This clause gives out the procedures on Computing service request.

Consumer of computing service

 CMF

 6G SMF

6G UP

 Computing node

UE

 3. Computing node Discovery and selection

5a. Computing control request

5b. Computing control response

4. PDU Session Establishment/Modification

 2. computing service authorization

 1. Computing request.

 6. Procedure for dynamic coordination between communication and computing

6G UDM

**Figure 6.22.2.2.1-1 Procedure for the Computing Service Request**

The consumer sends computing service request to the CMF, including the required computing resources for a UE or AF, (such as the requirement of computing session (e.g. RTT delay), the requested computing resource type)

NOTE 1: The details of UE request needs coordination with KI#1 and KI#18, e.g., whether the request will be sent to Network AI Agent first.

2. The CMF authorizes the computing service based on the subscription data from the UDM. The subscription data shows whether the subscriber is allowed for computing resources request.

3. Based on the computing resource request in step 1 and CMF internal logic (e.g., UE location, the computing site profile or the events defined in step 6) or policy, the CMF selects the computing node for the Computing Session.

4. The CMF further triggers PDU Session Establishment or Modification. The Anchor 6G UPF is selected based on the selected computing node in step 3. In details, if there is existing PDU Session is suitable for the computing service request, the 6G SMF modifies the existing PDU Session and provides. If there is no such PDU Session, 6G PDU Session Establishment procedure will be invoked first to establish a new PDU Session for the computing resource request.

NOTE 2: The details of PDU Session Establishment/Modification needs coordination with KI#3 and KI#4.

5. For computing site in CN, the CMF interacts with the computing node to establish the tunnel with the Anchor UP for the Computing Session.

6. For computing site in CN, the Computing Node executes the computing task. There can be dynamic coordination between communication and computing as following:

The coordination between the computing scheduling and communication QoS on computing session level is via control plane. There will be a control plane NF (e.g., Computing Agent or PCF) determining communication related parameters and the computing related parameters (e.g., overall RTT latency) based on the subscription and network status (including computing resource status and the communication related status). The control plane NF will send the communication related parameters to the SMF and the computing related parameters to the CMF. The SMF will update QoS profile accordingly. The CMF will update computing enforcement rule accordingly.

The coordination between the computing scheduling and communication QoS on computing task level is via user plane. It is based on related on-path information related to the computing task in computing session which will be used for the computing site to perform the load balance or computing scheduling.

NOTE 3: The details of communication QoS handling needs coordination with KI#5, solution variant 5.4 and 5.6.

Furthermore, the CMF sets the computing resource status related events in the computing node. The reporting frequency of events can be event triggered or periodic. If the reporting frequency is event triggered, the event also includes the corresponding reporting threshold to above parameters and minimum waiting time between subsequent reports.

The events includes, e.g.,:

computing delay;

Computing node load (e.g., load of xPUs);

failure of a computing task.

When the condition of the event has met, the computing node reports the related even has been met to the CMF. This step may trigger step 3.

##### 6.22.2.2.2 Procedure on Computing Resource registration.

The procedure is to support to register the computing site related information in the CMF. It is used to enable the CMF to select the Computing Node subsequently to provide computing service to the consumer.

AF / Computing Node

CMF

Computing Node registration request

3. Ack

2. store the profile of Computing Node

**Figure 6.22.Y.2.1 -1 Computing resource registration**

For Computing Site in CN, the Computing Node sends the registration request to the CMF directly. The registration request includes the Computing Node profile as following:

- Computing Node ID.

- Supported Computing resource type.

- Capability of the supported computing resources type. Such as number of xPU for IaaS type, Application description, Model ID indicating the model corresponding to the service, encoding/decoding, rendering.

- Address of the Computing Node, e.g., the FQDN, IP address, port number and protocol ID of the CSPF.

- Deployed type (i.e., CN)

NOTE: Further information required for the profile can be added.

For Computing Site in DN, the AF sends the registration request to the CMF. The registration request includes the Computing Node profile as following:

- Supported Computing resource type.

- Capability of the supported computing resources type. Such as number of xPU for IaaS type, Application description, Model ID indicating the model corresponding to the service, encoding/decoding, rendering.

- Address of the related Computing Node, e.g., the FQDN, IP address, port number and protocol ID of the Computing Node which stores the Computing Site.

- Deployed type (i.e., DN)

NOTE: Further information required for the profile can be added.

2. The CMF stores the Computing Node profile.

3. The CMF sends the Ack to the Computing Node.

Editor’s note: Procedures (e.g., Computing Session Establishment/Modification/Release, Computing Node/Site Discovery and (Re-)Selection, Session and Service Continuity aspects, etc.) are FFS.

#### **6.22.2.3 Services, Entities and Interfaces**

Editor’s note: The impacts will be updated based on the solution update.

#### 6.22.2.4 Open Issues

TBD.

\* \* \* \* Second change \* \* \* \* All new text

#### 6.22.1.1 Description

##### 6.22.1.1.1 Definitions

**Computing Service**: TBD.

**Computing Site**:

**Computing Site in 6G CN (CS-CN)**: Refers to the computing resources in the computing site provided by the 6G Core network. These resources are directly controlled by the operator via core network control plane signaling.

**Computing Site in DN (CS-DN)**: Refers to the computing resources in the computing site provided by the Data Network via the interface between 6G CN and DN. These resources can be coordinated via the interface between 6G CN and DN.

**Computing resource type:** Refers to different computing service contents in different types of computing resources. It is to identify the kind of the resource and the resource instance, e.g., to indicate the resource is software type and the identifier of software, to indicate the resource is Infrastructure type and the identifier of Infrastructure, to indicate the resource is Platform type and the identifier of platform, or to indicate the resource is Model type and the identifier of model.

**Computing task**: A unit of execution (e.g., a request or a process) of computing service in a specific computing resource type.

Editor’s note: The Computing related definitions are FFS.

\* \* \* \* End of changes \* \* \* \*