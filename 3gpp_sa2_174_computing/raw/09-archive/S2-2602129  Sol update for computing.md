**3GPP TSG-WG SA2 Meeting #173 *S2-2602129***

**Goa, IN, 9th Feb – 13th Feb, 2026 (revision of S2-2600181)**

**Source: Huawei, HiSilicon**

**Title: [KI#22, all bullets, update] Original Solution update to support 6G Computing**

**Document for: Approval**

**Agenda Item: 20.6.6**

**Work Item / Release: FS\_6G\_ARC / Rel-20**

*Abstract: It proposes to update original solution to support 6G computing.*

# Discussion

As agreed in the SA2#172 meeting, KI#22 captures the required computing functionalities that needs to be studied in TR 23.801-01. This contribution proposes a solution to capture the necessary architecture, and procedures as needed for the 6G computing support.

There are two scenarios for computing service provision.

The UE invokes computing service APIs directly based on requirement from AF or UE itself

The AS invokes computing service APIs for its DL traffic to the UE (e.g. XR rendering)

There are several types for computing service as following:

- Software as a Service (SaaS): consumed at the service/app layer to support an application, e.g. gaming, rendering, etc.

- Infrastructure as a Service (IaaS): consumed at the infrastructure layer for a given computing task. The resources include the raw computing resources, such as xPUs, which can be consumed by the consumer for the specific requirement, e.g., 5 GPUs.

- Platform as a Service (PaaS): The resource provides a development platform for the consumer, such as the Databased, Gitlab, etc. allowing the consumer to develop and run its own task or model.

- AI model as a Service (MaaS): The resource provides a AI model platform with the potential models for the potential uses, such as chatgpt, etc.

Each type of computing service may have more than one kind of protocol to do the resource discovery and request. For instance, CoAP, JUICE, NACOS, Consul and so on. The rationale behind them is similar. It is to send a request to a controller of the resource then the controller will provide the suitable resource to the consumer.

It is not sufficient and efficient for the 3GPP UE and 3GPP Core Network to support multiple protocols. But it is beneficial to have a unified request mechanism from UE/AF to the Core Network for the computing service in a similar way. And the straightest way forward is that both UE and AF request the computing service to a computing resource controller via control plane.

**Proposal 1: It is proposed UE and AF request the computing service to a computing resource controller via control plane.**

The potential benefits to support computing service by 3GPP Core Network is to have dynamic coordination between communication QoS and computing QoS. In Rel19, EAS load has been discussed but there is no conclusion. The reason behind is the EAS load change much faster than the signalling. Thus it makes little sense to select the UPF based on EAS load. However, the load change (or computing delay) still have big impact on QoS handling. To exchange such real time information, it is proposed to add the information on GTP-U header for the RAN scheduling.

**Proposal 2: It is proposed to have E2E QoS requirement (between UE and computing site) real time QoS parameter negotiation in user plane (i.e. on-path) for scheduling**

This KI will consider both computing site in CN and DN. It is better to have a unified way to communicate with computing site in both CN and DN. It is proposed to have a front end of computing site.

**Proposal 3: It is proposed to have a front end of computing site.**

Thus, the solution is based on following principles:

The UE/AF requests the computing service via control plane. In control plane there is an NF (i.e., Computing Control Function, CCF) is used to discover the suitable (front end of) computing site (i.e., Computing Service Plane Function, CSPF) for the request. The CCF is aware of the status and capabilities of the internal/external computing resources via the CSPF. The CCF needs to consider the coordination between the computing and communication to do the selection. A computing layer link between UE and the (front end of) computing site will be established to transfer the computing task related on-path information.

The coordination between the computing scheduling and communication QoS on computing task level is via user plane. The computing task information and delay monitoring information is transferred via the computing layer. This information will be used for the (front end of) computing site to perform the load balance (e.g., selecting the best computing site instance) or influence computing site on computing service. In DL, The QoS requirement per computing task will be sent from CSPF to the 6G UP via GTP-U protocol. 6G UP will translate such information into dynamic QoS parameter.

The update part:

- Add scenario the request can be for group of UEs.

- Add details for Network Agent behaviour.

- Differentiate Computing Site in CN or in DN.

# 2. Text Proposal

It is proposed to capture the following changes vs. TR 23.801-01 v0.3.0.

\* \* \* \* First change \* \* \* \*

# 6 Solutions

## 6.0 Mapping of Solutions to Key Issues

Table 6.0-1: Mapping of Solutions to Key Issues

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Key Issues | | | | | | | | | | | | | | | | | | |
| Solutions | #1 | #2 | #3 | #4 | #5 | … |  |  |  |  |  |  |  |  | #22 |  |  |  |  |
| #X |  |  |  |  |  |  |  |  |  |  |  |  |  |  | X |  |  |  |  |
| #Y |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

\* \* \* \* Second change \* \* \* \*

## 6.22 Solutions to KI#22

### 6.22.Y Solution #22.Y: Solution to support 6G Computing

#### 6.22.Y.0 Topics addressed and High-level solution Principles

This solution addresses the key issue #22 6G computing support (all bullets).

The solution supports the following scenarios:

it supports different types of computing resources in the computing sites.

The 6G Computing site can be located in 6G CN or DN;

The solution is based on the following principles:

The UE/AF requests the computing service via control plane. In control plane there is an NF (i.e., Computing Control Function, CCF) is used to discover the suitable (front end of) computing site (i.e., Computing Service Plane Function, CSPF) for the request. The CCF is aware of the status and capabilities of the internal/external computing resources via the CSPF. The CCF needs to consider the coordination between the computing and communication to do the selection. A computing layer link between UE and the (front end of) computing site will be established to transfer the computing task related on-path information.

The coordination between the computing scheduling and communication QoS on computing task level is via user plane. The computing task information and delay monitoring information is transferred via the computing layer. This information will be used for the (front end of) computing site to perform the load balance (e.g., selecting the best computing site instance) or influence computing site on computing service. In DL, The QoS requirement per computing task will be sent from CSPF to the 6G UP via GTP-U protocol. 6G UP will translate such information into dynamic QoS parameter.

#### 6.22.Y.1 Description

##### 6.22.Y.1.1 Definition

**Computing resource type:** Refers to different computing service contents in different types of computing resources, such as

Software as a Service (SaaS): Resources deployed at the service/app layer for the applications, such as the Gaming, rendering, etc.

Infrastructure as a Service (IaaS): consumed at the infrastructure layer for the specific computing task. The resources include the raw computing resources, such as xPUs, which can be consumed by the consumer for the specific requirement, e.g., 5 GPUs.

Platform as a Service (PaaS): The resource provides a development platform for the consumer, such as the Databased, Gitlab, etc. allowing the consumer to develop and run its own task or model.

AI model as a Service (MaaS): The resource provides a AI model platform with the potential models for the potential uses, such as chatgpt, etc.

**Computing task**: A unit of execution (e.g., a request or a process) of computing service in a specific computing resource type.

**Computing Site in 6G CN (CS-CN):** Refers to the computing resources in the computing site provided by the 6G Core network, which can be controlled by the operator.

**Computing Site in DN (CS-DN):** Refers to the computing resources in the computing site provided by the Data Network, which cannot be controlled by the operator.

##### 6.22.Y.1.2 General description

A network function CCF (Computing Control Function) is introduced to discover the internal/external computing site, perform authorization, control on the computing layer between UE and CSPF.,.

A Network Agent is introduced to interpret the computing request, generate the requirements for the computing resources, and the QoS, to arrange the procedure for the computing service provision.

A network function CSPF (Computing Service Plane Function) is introduced to represent the computing site in the Core Network or in the Data network to handle the E2E computing layer between UE and Core Network for coordination between computing and communication. The CSPF can be considered as a proxy between Core Network and Computing Site.

The CS (Computing Site) is assumed to provide various services based on different types of computing resources. The computing site in CN is embedded with CSPF. The computing site in DN use its own protocol to communicate with CSPF.

##### 6.22.Y.1.3 Computing Architecture

UE

6G RAN

exposure

SCF

AF

CCF

DN

CSPF

Other NF/Agents

6G UP

CSPF

6G UP

CSPF

6G UP

CN

CS

CS

Option 1

Option 2

Option 3

**Figure 6.22.Y.1.3-1 6G computing architecture**

To meet architectural assumptions for computing service, the potential computing framework is introduced with the following key components:

The Computing Agent supports the following functionality:

interpret the computing request

dynamically compose the PDU Session Establishment/Modification Procedure and or computing related procedures as described in clause

dynamically compose other operator service related procedures which are related to computing related procedures (e.g., AI inference as described in KI#19).

Dynamically migration the supported computing site among CSPFs based on UE requests

The Computing Control Function (CCF) supports the following functionality:

Supports the registration by the CSPF on behalf of computing site with the computing resource related information.

Supports to get performance event report from the CSPF.

Supports to CSPF selection function. Receive the computing discovery request from the computing resource consumer, and provide the computing resource related information of the discovered computing resources to the consumer.

Manage to establish Computing Layer Link and the tunnel between 6G UPF and CSPF.

The Computing Service Plane Function (CSPF) supports the following functionality:

Register to CCF on behalf of computing site with the computing resource related information

Coordination on computing layer with UE, used for dynamically identifying the computing task.

Sends DL QoS requirement to the 6G UP.

Monitors the performance of the ongoing computing task, and reports the performance event to the CCF.

Deployment option: CSPF can also be collocated with 6G UP (as illustrated in Option1 in Figure 6.22.Y.1.3-1) or after 6G UP (as illustrated in Option2/Option3 in Figure 6.22.Y.1.3-1).

The Session Control Function (SCF) supports Session Management in 6G.

The 6G UP supports the following functionality:

Anchor point for the PDU session. It may receive DL traffic from 3rd server, which requires computing resource.

Dynamic DL delay budget adjustment.

The 6G RAN supports the following functionality:

Receives QoS parameters (DL) from UPF and enforce DL packet scheduling accordingly.

The Computing Site supports the following functionality (which is not standardized in 3GPP):

Provides the computer services for the Computing service consumers based on different types of computing resource, as listed in the clause 6.22.Y.1.1.

Deployment options: it can be deployed inside the CSPF (as illustrated in Option 1/2 in Figure 6.22.Y.1.3-1) or deployed outside the core network but can be managed by core network via CSPF (as illustrated in Option 3 in Figure 6.22.Y.1.3-1).

#### 6.22.Y.2 Procedures

##### 6.22.Y.2.0 Procedure for Computing service provision

This clause gives out the procedures on Computing service provision.

Network Agent(s)

 CCF

 SCF

6GUP

 CSPF

UE

 4. CSPF Discovery and selection

 7. Computing Layer Link Establishment

3. Computing service response

6a. Computing control request

6b. Computing control response

5. PDU Session Establishment/Modification

9a. Performance event set

9b. Performance event report

 6G UDM

 2. computing service authorization

 1. Interaction between Agents and NFs.

 8. Procedure for dynamic coordination between communication and computing

**Figure 6.22.Y.2.0-1 Procedure for the Computing Service Provision**

The UE or AF sends request to the Computing Agent. The Network Agent (i.e., Computing Agent) sends computing service request to the CCF based on the request from UE (via NAS) or AF (via exposure), including the required computing resources for a UE/application, , communication QoS requirements, computing capabilities of UE(s) that use single-UE or UE-group computing service.

The Computing Agent can interact with Connection Agent to select SCF that can manage the PDU session of the UEs(s).

NOTE 1: Whether there is following-up interaction between Network Agents and NFs (e.g. CCF, SCF) needs coordination with KI#18.

2. The CCF authorizes the computing service based on the subscription data retrieved from the UDM as described in clause 6.22.Y.2.2.

3. If the authorization is failed, the CCF response to the Network agent and step 4-9 are skipped.

4.Based on the computing service request or CCF internal logic (e.g., due to the event report in step 9b, CSPF profiles or UE Mobility), the CCF selects the CSPF based on the computing service request. When the request is for a UE group, the CCF will take the information of multiple UEs into account. The CCF responses the Computing Agent with the selected CSPF information.

5. The Computing Agent interacts with Connection Agent to triggers PDU Session Establishment or Modification based on step 4. In details, the selected CSPF information is sent to the SCF. If there is existing PDU Session is suitable for the computing service request, the SCF modifies the existing PDU Session and provides the selected CSPF information (i.e. the GTP-U Tunnel information on the CSPF) to the 6G UP. If there is no such PDU Session, the Network Agent(s) will invoke 6G PDU Session Establishment procedure first to establish a new PDU Session for the computing service. The SCF may select a new 6G UP based on CSPF information. When CSPF is collocated with 6G UP, such 6G UP will be selected directly. This step may also be triggered by Computing Agent in advance. In such case, the Computing Agent sends related user plane information directly to the CCF and the step 5 is skipped. The SCF provides the related user plane information (i.e. the GTP-U Tunnel information on the 6G UP) to the CCF (e.g., via Network Agent(s)). If the service is operator service (e.g., AI Inference service as defined in KI#19), the Computing Agent may also invoke the procedures related to ASPF (as described in S2-2602166).

During the PDU session establishment (or modification) procedure, dedicated UL and DL QoS flows can be established between the UE and CSPF to convey messages of Computing Layer Link.

NOTE 2: The details of PDU Session Establishment/Modification needs coordination with KI#3 and KI#4. Whether the Computing Agent need to interact with Connection Agent needs coordination with KI#18.

6. The CCF sends the user plane information of the PDU Session to the CSPF via computing control request. The CSPF establish the GTP-U tunnel with the Anchor UP of the PDU Session.

7. The CCF establishes the Computing Layer Link as described in clause 6.22.Y.2.3 if needed. The CCF sends computing service response to theComputing Agent. The Computing Agent can continue to invoke other tools or provide feedback to the UE or the AF.

NOTE 3: When the computing resource in the computing site is only used for DL traffic, the UPF transfers the DL traffic first to CSPF and CSPF forwards the traffic to the UE after handling. Thus, the Computing Layer Link is not required in this case.

8. After Computing Layer Link Establishment, there can be dynamic coordination between communication and computing as described in clause 6.22.Y.2.4.

9. The CCF sets the performance events in the CSPF. The reporting frequency of performance events can be event triggered or periodic. If the reporting frequency is event triggered, the event also includes the corresponding reporting threshold to above parameters and minimum waiting time between subsequent reports.

The performance events includes, e.g.,:

computing delay;

CSPF load (e.g., load of xPUs);

failure of a computing task.

When the condition of the event armed in step 10 has met, the CSPF reports the related even has been met to the CCF. This step may trigger step 2.

##### 6.22.Y.2.1 Computing resource registration

The procedure is to support to register the computing resource related information of CSPF (as front end of computing site) in the CCF. It is used to enable the CCF to select the CSPF subsequently to provide computing service to the consumer.

CSPF

CCF

CSPF registration request

3. Ack

2. store the profile of CSPF

**Figure 6.22.Y.2.1 -1 Computing resource registration**

For Computing Site in CN, The CSPF sends the registration request to the CCF. The registration request includes the CSPF profile as following:

- CSPF ID.

- Supported Computing resource type listed in the clause 6.22.Y.1.3 for the computing sites after CSPF.

- Capability of the supported computing resources type for the computing sites after CSPF. Such as number of xPU for IaaS type, Application description for SaaS, Model ID indicating the model corresponding to the service, encoding/decoding, rendering for MaaS.

- Address of the CSPF, e.g., the FQDN, IP address, port number and protocol ID of the CSPF.

- Deployed type (i.e., CN)

NOTE: Further information required for the CSPF profile can be added.

For Computing Site in DN, the AF sends the registration request to the CMF. The registration request includes the CSPF profile as following:

- Supported Computing resource type.

- Capability of the supported computing resources type. Such as number of xPU for IaaS type, Application description, Model ID indicating the model corresponding to the service, encoding/decoding, rendering.

- Address of the related CSPF, e.g., the FQDN, IP address, port number and protocol ID of the Computing Node which stores the Computing Site.

- Deployed type (i.e., DN)

NOTE: Further information required for the profile can be added.

2. The CCF stores the CSPF profile.

3. The CCF sends the Ack to the CSPF.

##### 6.22.Y.2.2 Computing service authorization

The procedure is to support computing service authorization when CCF receives the request of computing service authorization from the consumer of CCF. The CCF selects the CSPF when the authorization is succeeded. Otherwise (i.e., when the authorization is failed), the CCF refuses the request.

CCF

6G UDM

1.Subscription data request

2. Subscription data response

0. Trigger of computing service authorization

**Figure 6.22.Y.2.2 -1 Computing service authorization**

0.The CCF gets the trigger of computing service authorization.

1. The CCF retrieves the subscription data from the UDM. The subscription data shows whether the subscriber is allowed for specific computing resources.

2. The CCF determines whether to authorize the computing service.

##### 6.22.Y.2.3 Computing Layer Link Establishment

The procedure is to support to establish the computing link between UE and CSPF when there is a request from the consumer. The Computing Layer Link is to exchange dynamic computing service information (e.g., computing task level information as described in clause 6.22.Y.3) between UE and CSPF.

UE

 CCF

CSPF

 Establish the link of Computing Layer

1a. Computing control request

1b. Computing control response

3a. Computing control report

3b. ack

2. CSPF information notification

0. Trigger to Establish the link of Computing Layer

**Figure 6.22.Y.2.3 -1 Computing resource registration**

0. The CCF receives the trigger to establish the Link of Computing Layer (e.g., from the consumer or based on CCF internal logic).

1. The CCF sends the information required for the computing layer (e.g., the UE address) via computing control request. The CCF may also send the rules to CSPF on the computing service requirement (e.g., RTT requirement) via computing control request.

2. The CCF send the information required for the computing layer (e.g., the address of selected CSPF) to the UE. The UE and the CSPF establish the link on computing layer between UE and the CSPF.

3. The CSPF reports the result of the link establishment to the CCF.

##### 6.22.Y.2.4 Procedure for dynamic coordination between communication and computing

The procedure is to support to adjust UL computing service and DL delay dynamically during computing service provisioning.

CMF

UE

RAN

6G SMF

6G PCF

6G UP

CSPF

0. Computing Layer Link has been Established

UL on-path information

2. DL on-path information

The link of Computing Layer has been established as described in clause 6.22.Y.2.0.

Dynamic computing service adjustment

After link of Computing Layer, the UE marks the computing task ID and the sending time of the first packet of the task and other information as described in clause 6.22.Y.3 in the computing layer for UL packets. The CSPF will, based on the configuration from CCF (e.g., RTT requirement), use computing task ID and the sending time of the first packet for each computing task to route to the suitable computing site or influence computing site on computing service scheduling (e.g., when computing site is within CSPF).

NOTE 1: it is assumed the same computing task needs to be routed to the same computing site.

Dynamic DL delay adjustment

In the Step 4 of Procedure for Computing service provision, the 6G SM sends the QoS parameters (which supports dynamic adjustment) to the 6G RAN.

For DL packets, the CSPF may generate dynamic QoS requirement based on computing delay and the sending time of each computing task received in Computing Layer considering the RTT requirement (it may also take the delay between 6G UP and CSPF into account) and/or its internal logic (e.g., for pure DL traffic). The CSPF marks dynamic QoS requirement in the GTP-U header of DL packets. The 6G UP generates dynamic QoS parameters and forwards them to the 6G RAN via GTP-U header. 6G RAN will take such information into account for the DL packet scheduling.

NOTE 2: The interaction among UE, RAN and 6G UP will coordinate with the solution in KI#5.

#### 6.22.Y.2.4 Computing services continuity

For addressing computing service continuity issues, in addition to considering session handover, the migration of computing contexts also needs to be considered. This can be triggered by Computing Agent based on UE requests and network status.

#### 6.22.Y.3 Protocol stacks among UE, 6G RAN, 6G UPF and CSPF

AN Layer

AN Layer

PDU Layer

PDU Layer

IP

IP

GTP-U+

GTP-U+

GTP-U+

GTP-U+

UDP/IP

UDP/IP

UDP/IP

UDP/IP

L1/L2

L1/L2

L1/L2

L1/L2

UE

6G RAN

6G UP

CSPF

Computing Layer

Computing Layer

Application Layer

Computing Layer

Computing Layer

**Figure 6.22.Y.3-1 Protocol Stacks among UE , 6G RAN, 6G UPF and CSPF**

Two layers are proposed for the coordination between the UE and CSPF.

Session Layer: The link between UE and CSPF. It contains two parts:

The link between UE and 6G UP is based on the PDU Session for the computing service. The link between 6G UP and CSPF is based on GTP-U Tunnel, which has 1 to 1 mapping to the PDU Session. The GTP-U protocol is enhanced to capture the new data for dynamic QoS adjustment as described in clause 6.22.Y.2.3.

NOTE 1: The design of the session layer is related with the work in KI#4. It is assumed the PDU Layer is IP type.

Computing Layer: Coordination between the UE and CSPF, the following information is included in the computing layer header for computing task (i.e., in-band information). The information is for CSPF to perform the load balance (e.g., selecting the best computing site instance) or influence computing site on computing service scheduling, such as:

The computing task ID,

Computing task type,

Sequence number/Total number of the payload within computing task,

Priority of the computing task,

Delay monitoring information (i.e. the sending time of each computing task),

Scheduling Requirement of computing task: Throughput of computing task, Specific requirements per computing resources type, e.g., the required TTFT (Time To First Token) / TPOT (Time Per Output Token) for MaaS.

NOTE 2: The payload of the computing layer (i.e., Application Layer) is not specified in this solution. It can refer to existing computing resource request in IT domain (e.g., JUICE, NACOS, Consul and so on).

#### 6.22.Y.4 Services, Entities and Interfaces

The Network Agent(s) supports the following functionality:

interpret the computing request

orchestrate the PDU Session Establishment/Modification Procedure and or computing related procedures as described in clause

The Computing Control Function (CCF) supports the following functionality:

Supports the registration by the CSPF on behalf of computing site with the computing resource related information.

Supports to get performance event report from the CSPF.

Supports to CSPF selection function. Receive the computing discovery request from the computing resource consumer, and provide the computing resource related information of the discovered computing resources to the consumer.

Manage to establish Computing Layer Link and the tunnel between 6G UPF and CSPF.

The Computing Service Plane Function (CSPF) supports the following functionality:

Register to CCF on behalf of computing site with the computing resource related information

Coordination on computing layer with UE, used for dynamically identifying the computing task.

Sends DL QoS requirement to the 6G UP.

Monitors the performance of the ongoing computing task, and reports the performance event to the CCF.

Deployment option: CSPF can also be collocated with 6G UP (as illustrated in Option1 in Figure 6.22.Y.1.3-1) or after 6G UP (as illustrated in Option2/Option3 in Figure 6.22.Y.1.3-1).

The Session Control Function (SCF) supports Session Management in 6G.

The 6G UP supports the following functionality:

Anchor point for the PDU session. It may receive DL traffic from 3rd server, which requires computing resource.

Dynamic DL delay budget adjustment.

The 6G RAN supports the following functionality:

Receives QoS parameters (DL) from UPF and enforce DL packet scheduling accordingly.

The Computing Site supports the following functionality (which is not standardized in 3GPP):

Provides the computer services for the Computing service consumers based on different types of computing resource, as listed in the clause 6.22.Y.1.1.

Deployment options: it can be deployed inside the CSPF (as illustrated in Option 1/2 in Figure 6.22.Y.1.3-1) or deployed outside the core network but can be managed by core network via CSPF (as illustrated in Option 3 in Figure 6.22.Y.1.3-1).

\* \* \* \* End of changes \* \* \* \*