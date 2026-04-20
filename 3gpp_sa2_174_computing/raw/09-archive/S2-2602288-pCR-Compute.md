**SA WG2 Meeting #174 S2-2602288**

**St. Julian’s, Malta, 13 – 17 April 2026**

**Source: Apple**

**Title: [KI#22, solution variants #22.2 and #22.5 update]: Proposed changes to solution principles**

**Document for: Approval**

**Agenda Item: 20.6.22**

**Work Item / Release: FS\_6G\_ARC / Rel-20**

# 1. Introduction

The pen-holder proposal for capturing the solution variants for KI#22 (6G Computing) was endorsed in SA2#173 as S2-2601619. The solution principles in the Tdoc S2-2601619 were agreed as a basis for further work to develop the solution variants for 6G Computing. This pCR discusses the principles of a few of the solution variants and proposes the addition of some Editor's Notes to address unresolved issues in the future. In this document, the text from S2-2601619 is shown as baseline text and proposed changes are highlighted using “track changes”.

# 2. Discussion

### 2.1 Solution Variant 22.2: Coordination controlled by 6G CN

This solution describes the various options for an architectural approach where coordination of compute and communication is controlled by 6G CN. The solution sub-variants A/C/D/E/F/H propose a control plane network function (CMF) to discover a suitable Computing Node for the computing request from UE.

However, the following aspects related to the computing request are not clear from the input solutions.

- It appears that the solutions assume the semantics of the UE request to the CMF is defined by 3GPP. The UE may be running applications that require different distributed computing frameworks, e.g., GPU-over-IP or CUDA APIs, Serverless compute paradigms. It is not clear how the CMF is able to identify and interpret the computing request from a UE. Further on the CMF is using this information to discover and select a suitable Computing Site/ Computing Node.

- Similar to the client side component of the computing framework, the server side also needs a matching component (e.g., Juice agents for the GPU-over-IP framework). The solution needs to identify how this interaction can be made applicable for a wide variety of frameworks used by applications.

It is therefore proposed to capture these Editor’s Notes for further elaboration of these aspects.

|  |
| --- |
| Editor’s Note: How the 6G CN identifies and interprets a computing request from the UE is FFS. The content of a computing request is FFS. |

|  |
| --- |
| Editor’s Note: What criteria is used by CMF to assess the suitability of a computing resource for a computing request from the UE is FFS. |

Further on, in the architecture general principles for this sub-variant (clause 6.22.2.1.1.1) , NOTE 2 describes that CMF may collect computing resource related information from the Computing Site directly or via anchor UPF. However, it is not clear why an anchor UPF (understood to be associated to a UE PDU Session) and a UE’s PDU Session are required to collect computing related information from a Computing Site. It is proposed to capture an Editor’s Note to study this aspect.

|  |
| --- |
| Editor’s Note: Whether the computing site has to be associated with a UE PDU Session (and an anchor UPF) for CMF to collect computing resource related information is FFS. |

In the solution sub-variant B it is described that at PDU Session establishment the UE indicates that the PDU Session is for a compute session. Also, it may include information about UE capability to perform a computing session. It is not justified why a dedicated PDU Session is required for compute. It is also not clear whether different computing sessions (triggered by different applications) need separate PDU Sessions. It is therefore proposed to capture the following Editor’s Note.

|  |
| --- |
| Editor’s Note: It is FFS whether there has to be a dedicated PDU session per computing service triggered by different applications. |

Further on in the procedure, the SMF selects a Connected Computing and Communication Environment **(**CCCE), which in turn contacts the PCF and works towards finalizing an appropriate CC policy. Now the specific contents of the CC policy are not clearly described, but it includes a SHE policy. Since it is a compute specific policy, it can be assumed that CC policy will depend on the specific compute service requested by the UE. CCCE would need more information from the UE to understand what type of application is using this PDU Session at this time. The detailed information from the UE required by the CCCE to select a Computing and Communication (CC) policy containing Service Hosting Environment (SHE) requirements has to be elaborated. It is proposed to capture the following Editor’s Note for these aspects.

|  |
| --- |
| Editors’ Note: Information required from the UE to perform the appropriate CC policy association is FFS. The content of the CC policy is FFS. |

### 2.2 Solution Variant 22.5 Computing Service Authorization to UE by PCF/CCF based on UE Policy

The solution variant 22.5 describes how computing service authorization is performed by PCF/CCF based on UE policy. The proposed principles for this solution variant are derived from solutions #12, #18 and #25. A few aspects are of the solution principles do not have a clear explanation in the input solution.

Solution #18 describes UE sending a Computing Capability indication in UE MM Core Network Capability. It is not clear what this capability really implies. Does it mean UE has some computing capability? Or that it needs computing capability from the network or whether there are some applications installed in the UE that needs computing service offered by a 6G network? This has to be clarified with more supporting information.

The solution further describes when a Computing Application in the UE requests for a network connection, the Computing Support Indication is provided in the PDU Session Establishment Request. It is not clear what is meant by a Computing Application here. In practice, many applications are installed in a UE and most of them require a network connection to their respective servers. It is not clear whether a Computing Application in this solution is a special type of MNO application designed to work on 6G networks and whether the UE policy is applied to only those cases.

Solution #25 describes that a connection capability is set to compute. Connection capability is provided by the UE application while requesting network connection. Note here that in 5G system connection capabilities refer to the qualifiers of a network connection (i.e., to identify the DNN or the application traffic type). When the connection capability is referring to a DNN other than ‘internet’, it is typically an operator service. The application requesting such a service would also be unique in a UE (e.g., IMS client, Phone and Messaging application). If ‘computing’ is defined as a connection capability, it is not clear whether the expectation is that only a specific application (maybe MNO owned) in the UE is going to use this service.

It is proposed to add an Editor’s Note to clarify these aspects.

|  |
| --- |
| Editor’s Note: It is FFS whether computing service in this case is provided only to a specific type of application in the UE (i.e., Computing Application) as described in Solution #18 and implied by the use of connection capability in Solution #25. |

Solution #12 describes that a Compute Control Function (CCF) generates and provides computing service policy to the UE. One of the components of the computing service policy is guaranteed computing performance which includes computing capability and computing delay. It is not clear whether a computing service policy with this type of information (which would be specific to each application) can be generated without knowledge about applications that are installed in the UE. Also, it is not clear how this information can be useful for an application in the UE unless it is provided with the semantics expected by the application’s offloading framework. It is proposed to add an Editor’s Note to clarify these aspects.

|  |
| --- |
| Editor’s Note: Whether a computing service policy can be generated without knowledge about applications installed in the UE is FFS. |

# 3. Text Proposal

It is proposed to agree the following changes in the text originally from S2-2601619 to be documented in TR 23.801-01:

\*\*\*\* BEGINNING OF CHANGES \*\*\*\*

### 6.22.2 Solution #22.2: Coordination between Communication and Computing is controlled by 6G CN

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

Editor's Note: How the 6G CN identifies and interprets a computing request from the UE is FFS. The content of a computing request is FFS.

The CMF (Computing Management Function) is aware of the status and capabilities of the internal/external computing resources via the Computing Node/Site. The 6G SMF and CMF need to consider the coordination between the computing and communication to do the selection of Computing Node/Site.

Editor's Note: What criteria is used by CMF to assess the suitability of a computing resource for a computing request from the UE is FFS.

The communication between the UE and Computing Node/Site for Computing Service is via user plane.

The coordination between the Computing metrics and Communication QoS parameters on computing session is determined by a CP NF. The CP NF determining Computing metrics and QoS related information (e.g., PDB, Computing latency) based on the subscription and Computing resources status.

NOTE: The coordination between the Computing metrics and Communication QoS parameters on computing session may need to coordinate with KI#5 (e.g., on adaptive QoS, QoS monitoring).

The solution for variant B is based on the following principles:

At PDU session establishment, the UE indicates the PDU session is for a Computing Service.

Editor's Note: It is FFS whether there has to be a dedicated PDU session per computing service triggered by different applications.

The SMF selects a CCCE that performs CC policy association with the PCF. The CC profile can be pre-configured or optionally provisioned by AF request.

Editor's Note: Information required from the UE to perform the appropriate CC policy association is FFS. The content of the CC policy is FFS.

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

##### 6.22.2.1.1 Architecture and General Description

###### 6.22.2.1.1.1 Description for variants A/C/D/E/F/H

A Computing Management Function is introduced to monitor the computing resources in 6G CN, the Computing resources are assumed to be located in Computing Site and accessed via 6G UPF. The Computing Site can be located in DN or 6G CN. When the Computing Site is located in 6G CN, it can be separated from or collocated with 6G UPF. Figure 6.X.Y.1.2-1 shows the architecture.

The computing node is introduced to route the Computing data packet between 6G UPF and Computing Site, represent the computing site (in the 6G Core Network or in the Data network) to monitor the Computing resources in Computing Site(s), receive and execute the Computing resource Request from CMF.

The CS (Computing Site) is assumed to provide various services based on different types of computing resources. The computing site in CN is either collocated with or separate from computing node. The interface and protocol between the CMF and Computing Node will be standardized, while the interface between Computing Node and Computing Site will not be standardized (e.g., via k8s) in 3GPP SA2.

![](data:image/x-emf;base64...)

**Figure 6.22.2.1.2-1(Option #1): 6G Computing Architecture with Computing Site in 6G CN**

**NOTE 1:** In Option #1, the Computing Site in CN can be collocated with Computing Node.

![](data:image/x-emf;base64...)

**Figure 6.22.2.1.2-2(Option #2): 6G Computing Architecture with Computing Site in DN**

**NOTE 2:** In both Option #1 and Option #2, the Computing Node can be collocated with 6G UPF.

The Computing Site can be located in DN or 6G CN. When the Computing Site is located in CN, it can be either separated from the 6G UPF or collocated with 6G UPF.

NOTE 1: There two alternative options to place CMF, one is collocating CMF with 6G SMF, the other is to collocate CMF with NRF.

NOTE 2: The CMF may collect the Computing resource related information (e.g., resource type, resource status, etc.) from Computing Site directly or via 6G Anchor UPF.

Editor’s Note: Whether the computing site has to be associated with a UE PDU Session (and an anchor UPF) for CMF to collect computing resource related information is FFS.

NOTE 3: An Intermediate UPF may be added between 6G RAN and 6G Anchor UPF.

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

###### 6.22.2.1.1.2 Description for variant B

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

###### 6.22.2.1.2.1 Description for variants A/C/D/E/F/H

The coordination solution for variants A/C/D/E/F/H comprises:

UE/AF requests computing support from 6G CN by using the Computing Request including the computing related information (e.g., Computing Request indication, Task type, overall Task latency, overall Task throughput, Computing resource type, RTT delay requirements, etc.) in order to satisfy the service experience.

Based on the UE/AF request, authorization information in the User Subscription data and Computing Policy (e.g., locally configured or from PCF), the CP Function (e.g., 6G SMF, CMF, CCF) derives the QoS profile for RAN and Computing Enforcement rule for Computing Node/Site for Computing Service by coordinating with CMF which selects proper Computing Site(s).

Computing Node/Site for Computing Service enforces the Computing Enforcement rule received from the CP Function by allocating corresponding computing resources of a Computing Site or routing the data packet(s) to the selected Computing Node/Site.

Editor’s note: The detailed computing related information from UE can be captured in the detailed procedures.

The coordination NF variants:

6G SMF derives the communication QoS parameters and Computing requirements (e.g., latency, throughput, resource type, etc.)

CMF derives the communication QoS parameters and Computing requirements (e.g., latency, throughput, resource type, etc.)

6G PCF derives the communication QoS parameters and Computing requirements (e.g., latency, throughput, resource type, etc.)

The coordination decision on how to derive the Computing related parameters in the Computing Enforcement rule in Computing Node/Site can be made based on UE requested information, authorization in User subscription and PCC rule/Computing Policy.

###### 6.22.2.1.2.2 Description for variant B

The CCCE interacts with SHE Controller(s) to (i) query for available SHE resources, and (ii) reserve SHE resources.

The CC Policy for a Computing Service session is determined by the PCF from a CC (Computing and Communication) Profile. The CC Profile may be based on local configuration in the 6G PCF, user subscription or AF request. If the CCCE is a separate function from the PCF, at the Compute Service session establishment, the CCCE performs CC Policy association with the PCF to get the CC Policy.

To enforce the CC Policy, the CCCE selects suitable SM Policy and SHE Policy based on the SM Policy that can be supported by the SMF and the SHE Policy that can be supported by the SHE. After selecting the suitable SM policy and SHE policy, the CCCE confirms the selected SM policy to the SMF and enforces the selected SHE policy to the SHE.

###### 6.22.2.1.2.3 Description for variant G

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

For variants A/C/D/E/F/G/H, one of the following NFs is proposed to perform the Computing Node/Site discovery and (re-)selection:

6G SMF;

CMF;

NRF.

For variant B, there is no selection of the Computing Site, which is determined by the CS ID associated to the selected UPF. Selection of the computing resources performed by the SHE Controller is out of scope of SA2.

#### 6.22.2.2 Procedure

Editor’s note: Procedures (e.g., Computing Session Establishment/Modification/Release, Computing Node/Site Discovery and (Re-)Selection, Session and Service Continuity aspects, etc.) are FFS.

#### 6.22.2.3 Services, Entities and Interfaces

Editor’s note: The impacts will be updated based on the solution update.

#### 6.22.2.4 Open Issues

TBD.

\*\*\*\* NEXT CHANGE \*\*\*\*

### 6.22.5 Solution #22.5: Computing Service Authorization to UE by PCF/CCF based on UE Policy

#### 6.22.5.0 High-level solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2a.

This solution addresses the bullet #2a under KI#22.

This solution is extracted from Solution #12, 18, 25 in Annex X.22.

There are two variants:

URSP based (From Solution #12, 18, 25 in Annex X.22) from PCF: In order to enable the Computing Service to UE, the Computing related UE Policy (i.e., URSP enhanced with new computing related parameter) needs to be provisioned to UE in order to make UE aware whether, where and when it can use the Computing Service to establish the according PDU Session supporting computing.

Editor’s Note: It is FFS whether computing service in this case is provided only to a specific application in the UE (i.e., Computing Application) as described in Solution #18 and implied by the use of connection capability in Solution #25.

Computing Policy based from CCF (from Solution #12 in Annex X.22):

- The CCF generates and provides the computing service policy to UE, which can assist UE to decide whether triggers computing service request and determines the offloading decision.

- The UE requests computing service from 6G network, and if the service request is authorized based on subscription data, the CCF selects the computing site(s) to execute the computing task for UE.

Editor’s Note: Whether a computing service policy can be generated without knowledge about applications installed in the UE is FFS.

#### 6.22.5.1 Description

Editor’s note: The solution description is FFS.

#### **6.22.5.2 Procedures**

Editor’s note: Procedures are FFS.

#### 6.22.5.3 Impacts on Services, Entities and Interfaces

Editor’s note: Impacts are FFS.

#### 6.22.5.4 Open Issues

TBD.

\*\*\*\* END OF CHANGES \*\*\*\*

\*\*\*\* Next change \*\*\*\*

\*\*\*\* Next change \*\*\*\*

\*\*\*\* Next change \*\*\*\*

\*\*\*\* End of changes \*\*\*\*