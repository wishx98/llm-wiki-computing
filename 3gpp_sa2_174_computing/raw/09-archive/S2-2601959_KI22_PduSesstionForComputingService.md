**3GPP TSG-WG SA2#174 S2-2601959**

**Apr. 13 – 17, 2026, Malta, Malta, (revision of S2-2600358)**

**Source: NEC**

**Title: [KI#22, Solution Variant #13 update] PDU session establishment for Computing Service**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution:*  This contribution proposes a new solution for KI#22 related to PDU session establishment for Computing Services for the Rel-20 FS\_6G\_ARC study.

# 1. Introduction

This proposal addresses Key Issue #22, focusing on the mechanisms to support PDU session establishment for the UE for Computing Services. While current 3GPP specifications define the procedures for establishing PDU Sessions to provide connectivity to a Data Network, there is no standardized capability to associate Computing Service enablement or configuration with the PDU Session setup. The proposal introduces the missing mechanisms required to integrate Computing Service enablement into the PDU Session establishment process.

# 2. Text proposal

It is proposed to agree the following changes vs. TS 23.801-01:

\* \* \* First Change \* \* \* \*

## 6.0 Mapping of Solutions to Key Issues

Table 6.0-1: Mapping of Solutions to Key Issues

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Key Issues | | | | | | | | | | | | | | | | | | |
| Solutions | #22 | #Q |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| #X | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| #Y |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

\* \* \* Next Change \* \* \* \*

## 6.X Solutions to KI#X

### 6.X.Y Solution #X.Y: PDU session establishment for Computing Service

#### 6.X.Y.0 Topics addressed and High-level Solution Principles

In the 6G Core Network, Computing Sites represent distributed compute resources located either within the core network (e.g., co‑located with User Plane Functions) or in Data Networks under operator or third‑party control. These sites enable hosting of compute‑intensive workloads such as AI inference, XR rendering, and other advanced applications. Current 3GPP specifications (TS 23.501 and TS 23.502) define the mechanisms for establishing a PDU Session to provide the UE with connectivity towards a Data Network. These procedures support selection of the SMF, UPF, PDU Session type, IP allocation, and routing but there is no standardized capability to associate computing‑service enablement or computing‑service configuration with the PDU Session establishment procedure, nor do they prepare the user‑plane path for interactions with computing‑related network functions.

This solution specifically targets these missing capabilities by introducing mechanisms for enabling Computing Services during the PDU Session establishment phase, ensuring that compute‑aware service interactions can begin immediately once the PDU Session is active.

This solution addresses the following key issues:

1. Identification of the architectural requirements and computing resource(s):

a) Derive architectural requirements for scenario(s) and service requirements defined by SA WG1 to be enabled by the Computing Service.

b) Whether and how to define the computing resource (e.g. computing resource type and/or status, location of the computing resource, etc.).

3. Coordination of communication and computing, service continuity and QoS aspects:

a) Whether and how to coordinate (e.g. within or outside the core network) communication (for the traffic transferred over user plane) and computing resource(s) in the Computing Site.

NOTE 5: Computing Site represents the computing resources in a specific location of network topology. The computing site can offer computing services by allocating its computing resources to run application workloads upon demand of a Computing Service consumer. From networking perspective, the Computing Site is located within 6G CN (via e.g. user plane function in 6G) or Data Network (either owned and controlled by the operator or 3rd party).

#### 6.X.Y.1 Description

Figure 6.X.Y.1-1 below represents the overall architecture for Computing Service, following new network functions are introduced in 6G core network.

Resource Management Function (RMF) is introduced as a new network function in the 6G Core Network. RMF enables Computing Services supported by computing resources located at Computing Sites. RMF interworks with core control functions to set up connectivity and routing, and with Computing Service Function (CSF) for resource orchestration. RMF performs services for registration, discovery, provisioning, enforces policy and subscription compliance. RMF may include a feature of DNS for computing services endpoint resolution.

Computing Service Function (CSF) is introduced as a new network function in the 6G Core Network to enable compute-aware services. CSF hosts application workloads such as AI inference, XR rendering, and other compute-intensive applications within the Service Hosting Environment (SHE). These workloads execute on computing resources provided by Computing Sites, which may reside within the core network. CSF manages the binding and lifecycle of resources (compute, memory, storage, etc) for application workloads, monitors resource utilization, and ensures optimal placement. CSF interworks with Resource Management Function (RMF) to integrate with user plane functions to deliver compute services over connectivity.

Enhancements to existing 6G Core Network Functions are required to support Computing Service. The AMF and SMF are enhanced to provide Computing Service configuration information to the UE, while the SMF and UPF are further enhanced to support routing between the UE and Computing‑Service–related entities.

In this architecture, Computing Service is attached with connectivity service during PDU session establishment. Then Computing Services become available with coordination between UE and 6G CN. Finally, applications such as AI inference, XR rendering, and other compute-intensive applications are exposed by 6G CN over user plane path.

This solution focuses on the aspects about how Computing Service is attached with connectivity service during PDU session establishment. Further details are described in the clause 6.X.Y.2.

*![](data:image/png;base64...)*

**Figure 6.X.Y.1-1 Overall architecture for Computing Service**

#### 6.X.Y.2 Procedures

Detailed description of the procedure for the solution as follows:

UE → AMF: PDU Session Establishment Request

The UE initiates PDU session setup and may include Protocol Configuration Options (PCO). If the UE supports Computing Service configuration provisioning, it indicates that UE supports the ability to receive configuration information for Computing Service. This tells the network the UE can receive computing service configuration during session setup.

AMF → SMF: Nsmf\_PDUSession\_CreateSMContext

AMF forwards the request to SMF, including UE-provided PCO, DNN, S‑NSSAI, UE location/locality info, and other context. Passing the PCO enables SMF to coordinate both connectivity and Computing Service configuration as part of session setup.

SMF → NRF: Nnrf\_NFDiscovery (filter: UPF)

SMF discovers candidate UPFs using filters such as nfType=UPF, DNN, S‑NSSAI, locality/proximity to the UE, and operator-specific capabilities (e.g., support for computing service traffic). SMF retrieves the NF profiles for UPF given by NRF, and selects the PDU Session Anchor UPF per operator policy (load, proximity, feature support, cost), as specified in TS 23.501/23.502.

SMF → NRF: Nnrf\_NFDiscovery (filter: RMF)

If the UE indicated Computing Service configuration provisioning, SMF performs a second discovery for an RMF reachable via the selected UPF’s connectivity. SMF retrieves the NF profiles for RMF given by NRF, extracting endpoint details (e.g., FQDN, IP, port, protocols, security requirements, IP address of DNS) of RMF. If no RMF is found, the SMF may proceed without Computing Service configuration or return a cause indicating unavailability, per operator policy.

Editor’s note: It is FFS if DNS is implemented as existing or newly introduced NF or a part of them.

SMF → UPF: Configure routing to RMF endpoint

SMF configures the UPF with Packet Detection Rules (PDR) and Forwarding Action Rules (FAR) to steer traffic between the UE and the RMF endpoint via the UPF. The route can be used for DNS if RMF includes a feature of DNS. Configuration may assign a dedicated QoS Flow (QFI) if the computing service requires specific latency/bandwidth for the up/ down links.

SMF → RMF: Configure RMF

SMF configures RMF so the RMF updates its access controls to route the packets between RMF and UPF.

SMF internal: Compose “Computing Service configuration information”

SMF builds a configuration information to deliver to the UE. This may include:

Management endpoint details: FQDN and/or IP, port, protocol.

Authentication/authorization method and any bootstrap tokens (with expiry and binding).

SMF → AMF: Create SM Context Response

SMF returns the Create SM Context Response to AMF, embedding the “Computing Service configuration information” in the PCO.

AMF → UE: PDU Session Establishment (Accept | Reject )

AMF sends the PDU Session Establishment Accept to the UE. On success, the PCO includes the Computing Service configuration information. The UE stores the configuration and, after IP address assignment and session activation, can immediately access the RMF endpoint.

![ダイアグラム

AI 生成コンテンツは誤りを含む可能性があります。](data:image/png;base64...)

Figure 6.X.Y.2-1 PDU Session Establishment for Computing Service

#### 6.X.Y.3 Services, Entities and Interfaces

RMF: Newly introduced in 6G CN

CSF: Newly introduced in 6G CN

UPF: new interfaces for RMF and CSF

SMF: new interfaces for RMF

NRF: new interfaces for RMF

\* \* \* End of Changes \* \* \* \*