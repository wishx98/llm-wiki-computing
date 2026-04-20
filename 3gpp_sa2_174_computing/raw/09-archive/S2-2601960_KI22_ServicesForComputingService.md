**3GPP TSG-WG SA2#174 S2-2601960**

**Apr. 13 – 17, 2026, Malta, Malta, Is Revision of S2-2600359**

**Source: NEC**

**Title: [KI#22] Exposed services for Computing Service**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution:* This contribution proposes a new solution for KI#22 related to exposed services for Computing Service for the Rel-20 FS\_6G\_ARC study.

# 1. Introduction

This proposal addresses Key Issue #22, focusing on the mechanisms for enabling and exposing services required for Computing Service registration and discovery in the 6G CN. In the current 3GPP specifications, computing resources hosted in the network—whether located within the Core Network cannot be registered, discovered, or managed in a standardized way. As a result, the 6G Core Network lacks native capabilities to support compute‑aware applications such as AI inference, XR rendering, and other compute‑intensive workloads in the 6G CN. This proposal introduces architectural supports to enable Computing Service exposure in the 6G CN.

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

### 6.X.Y Solution #X.Y: Exposed services for Computing Service

#### 6.X.Y.0 Topics addressed and High-level Solution Principles

In the 6G Core Network, Computing Sites represent distributed compute resources located either within the core network (e.g., co-located with User Plane Functions) or in Data Networks under operator or third-party control. These sites enable hosting of compute-intensive workloads such as AI inference, XR rendering, and other advanced applications. However, as defined in current 3GPP specifications (TS 23.501 and TS 23.502), there is no standardized capability to register, discover, or control these computing resources at the core network level. To address this, this solution proposes introducing a new network functions, Resource Management Function (RMF) and Computing Service Function (CSF), in the 6G Core Network.

This solution addresses the following key issues:

1. Identification of the architectural requirements and computing resource(s):

a) Derive architectural requirements for scenario(s) and service requirements defined by SA WG1 to be enabled by the Computing Service.

b) Whether and how to define the computing resource (e.g. computing resource type and/or status, location of the computing resource, etc.).

2. Enablement/authorization of computing service to UE or AF.

a) Whether and how to enable Computing Service.

b) Whether and how the operator network may expose the computing resource related information (e.g. its hosting capability (e.g. using compute resources at Service Hosting Environment)) and/or network metrics to AF.

3. Coordination of communication and computing, service continuity and QoS aspects:

a) Whether and how to coordinate (e.g. within or outside the core network) communication (for the traffic transferred over user plane) and computing resource(s) in the Computing Site.

4. Discovery and (re-)selection of compute site(s) for the Computing Service:

a) Whether and how to discover and (re-)select Computing Site(s) for the Computing Service.

NOTE 5: Computing Site represents the computing resources in a specific location of network topology. The computing site can offer computing services by allocating its computing resources to run application workloads upon demand of a Computing Service consumer. From networking perspective, the Computing Site is located within 6G CN (via e.g. user plane function in 6G) or Data Network (either owned and controlled by the operator or 3rd party).

#### 6.X.Y.1 Description

Figure 6.X.Y.1-1 below represents the overall architecture for Computing Service. The following new network functions are introduced in 6G core network:

Resource Management Function (RMF) is introduced as a new network function in the 6G Core Network. RMF enables Computing Services supported by computing resources located at Computing Sites. RMF interworks with core control functions to set up connectivity and routing, and with Computing Service Function (CSF) for resource orchestration. RMF performs services for registration, discovery, provisioning, enforces policy and subscription compliance. RMF may include a feature of DNS for computing services endpoint resolution.

Computing Service Function (CSF) is introduced as a new network function in the 6G Core Network to enable compute-aware services. CSF hosts application workloads such as AI inference, XR rendering, and other compute-intensive applications within the Service Hosting Environment (SHE). These workloads execute on computing resources provided by Computing Sites, which may reside within the core network or in operator data networks. CSF manages the binding and lifecycle of resources (compute, memory, storage, etc) for application workloads, monitors resource utilization, and ensures optimal placement. CSF interworks with Resource Management Function (RMF) to integrate with user plane functions to deliver compute services over connectivity.

Enhancements to existing 6G Core Network Functions are required to support Computing Service.
The AMF and SMF are enhanced to provide Computing Service configuration information to the UE, while the SMF and UPF are further enhanced to support routing between the UE and Computing‑Service–related entities.

In this architecture, Computing Service is attached with connectivity service during PDU session establishment. Then Computing Services become available with coordination between UE and 6G CN. Finally, application workloads such as AI inference, XR rendering, and other compute-intensive applications are exposed by 6G CN over user plane path.

This solution focuses on the aspects about the coordination for registration and discovery between UE and RMF in order to set up Computing Services. Further details are described in the clause 6.X.Y.2.

*![](data:image/png;base64...)*

**Figure 6.X.Y.1-1 Overall architecture for Computing Service**

#### 6.X.Y.2 Procedures

Detailed description of the procedure for the solution as follows:

UE 🡪DNS: Query to DNS to discover RMF

DNS may be implemented as existing or newly introduced NF or a part of them. In this procedure, assume that DNS is implemented as a part of RMF. The query to discover RMF is routed to RMF.

UE → RMF: Register to the Computing Service (over N6 via the PSA‑UPF)

Once the UE’s PDU session is up, it reaches the RMF’s management endpoint across the data path that traverses the PDU Session Anchor UPF. The UE opens a secure connection and presents a minimal, session‑bound identity—typically a short‑lived token or pseudonymous ID it received during session setup—so the RMF can associate the request with the active session without exposing permanent subscriber identifiers. Along with this, the UE may express what it’s trying to do: a specific Computing Service ID and any service characteristics it needs or prefers, such as latency or bandwidth targets, or resource hints like CPU and memory. The RMF validates the token (expiry, audience, binding to the session) so the end‑to‑end interaction can be traced.

RMF → PCF (and discovery via NRF): Policy authorization (optional)

RMF validates the registration request. If authorized, RMF proceeds the registration of the UE to consume Computing Service.

Before granting access, the RMF may consult PCF. Acting as a client, it sends a policy authorization request that summarizes the UE’s session context, the requested Computing Service, and any QoS or traffic treatment the application is asking for. The PCF evaluates whether the UE is allowed to use that service under current policies and may return both a permit/deny decision and instructions the network should enforce (for example, QoS flows or traffic steering the PCF will propagate to the SMF/UPF).

RMF → UDR (and discovery via NRF): Subscription and entitlement check (optional)

The RMF may also verify that the UE’s subscription entitles it to the requested computing service level. It discovers the UDR via the NRF and queries the relevant subscription data. From the returned profile, the RMF confirms whether the UE can access the service, in which regions, and under what limits (such as rate caps or resource ceilings).

RMF → UE: Registration response (Success or Failure)

With policy and subscription information in hand, the RMF decides and informs the UE.

If authorized and the UE did not specify a particular service, the RMF returns a success along with a pointer to the discovery mechanism—typically an FQDN the UE can resolve to find available CSF endpoints—plus a validity period for that information.

If authorized and the UE did specify a service, the RMF returns success and provides the serving endpoint details for the CSF (FQDN preferred, optionally IP/port), any protocol/security requirements, and an access token bound to the current session with a clear expiry.

If the request is not authorized or the service is unavailable, the RMF returns a failure with a specific cause and guidance on whether and when to retry.

When the response includes endpoints, the UE can immediately proceed to access the CSF; any necessary network policies (QoS or steering) will already have been coordinated via the PCF, ensuring the data path supports the service’s needs.

![](data:image/png;base64...)

**Figure 6.X.Y.2-1 Registration service for Computing Service**

UE → RMF: Discover Computing Service (via PSA-UPF)

After the UE is authorized to use computing services, it opens a secure connection to the RMF’s management endpoint across the data path that traverses the PDU Session Anchor UPF. The UE sends a discovery request that describes what it needs and where it might prefer to run. The request carries filter information: which computing service (service ID or type) the UE wants, any location constraints (for example, site name, region, proximity to the UE, or coordinates), and resource constraints (such as CPU type/frequency, memory size, storage, and latency/bandwidth targets). With these details, the RMF can look for matching service placements in the operator’s hosting environment.

RMF: Authorize the request

RMF validates the discovery request against subscription. If authorized, it proceeds to registration of the UE to consume Computing Service.

RMF → NRF: Discover candidate CSFs

RMF validates the discovery request. If authorized, RMF proceeds the discovery of candidates CSFs.

To find where the service can run, the RMF queries the NRF for CSF instances that match the UE’s constraints. It applies filters for the requested service ID/type, locality (e.g., computing site), and capabilities/capacity relevant to the UE’s resource and latency needs. Only CSFs that are registered as able to serve the specified service and that are in the right place with enough capacity will be returned.

RMF: Select CSF

The RMF examines the NF profiles of the CSF candidates: their endpoints, supported services, capacity/load, locality, and security characteristics. It chooses the best fit by checking compliance with the UE’s service, location, and resource constraints, and by favoring proximity to the UE/UPF to minimize latency. If no existing instance qualifies, the RMF may instruct the hosting environment to instantiate a new CSF and obtain its endpoint details before proceeding.

RMF → SMF: Configure routing to the CSF endpoint

Once a target CSF is decided, the RMF requests SMF to set up the path so the UE can reach that endpoint. The RMF sends an authenticated request specifying the CSF endpoint and any needed traffic selectors or QoS requirements. The goal is to have the SMF prepare the UPF to forward UE traffic toward the CSF and route return traffic back to the UE.

SMF → UPF: Program the data path to the CSF

The SMF configures the UPF to support UE↔CSF traffic. It installs Packet Detection Rules and Forwarding Action Rules for both uplink (UE to CSF) and downlink (CSF to UE), and may assign a specific QoS flow if the computing service calls for particular latency or bandwidth.

SMF → RMF: Confirm path setup

After the UPF is configured, the SMF returns a confirmation to the RMF. This acknowledgement may include details like the UPF egress characteristics or identifiers of any QoS flows that were installed. The RMF records this state so it can correlate the network setup with the service session it is about to enable.

RMF → CSF: Apply service-side configuration

With the network path ready, the RMF prepares the CSF to accept the UE. The CSF typically doesn’t need a special route to the UPF; it sends traffic to the UE’s IP and the site’s normal routing carries packets toward the UPF. The CSF updates its access controls and internal configuration so the packets are accepted by the CSF.

RMF → UE: Discovery response (Success | Failure)

Finally, the RMF informs the UE of the outcome. If successful, it returns the serving endpoint information for the CSF—preferably an FQDN (and IP/port if necessary)—and may include the computing site ID or region, protocol/security requirements, a session‑bound access token, and a validity period with guidance on when to refresh. If unsuccessful because no suitable instance was found or policy/capacity prevented placement, the RMF returns a failure with a specific cause and suggestions on whether and when to retry. With a successful response in hand, the UE can immediately start consuming the computing service over the established data path.

![](data:image/png;base64...)

**Figure 6.X.Y.2-2 Discovery service for Computing Service**

#### 6.X.Y.3 Services, Entities and Interfaces

RMF: Newly introduced in 6G CN

CSF: Newly introduced in 6G CN

SMF: new interfaces for RMF

UPF: new interfaces for RMF and CSF

NRF: new discovery for RMF

\* \* \* End of Changes \* \* \* \*