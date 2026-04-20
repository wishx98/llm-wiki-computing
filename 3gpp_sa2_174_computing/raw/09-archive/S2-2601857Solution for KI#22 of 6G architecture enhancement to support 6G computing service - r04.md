**3GPP TSG SA WG2 Meeting #174** ***S2-2601857***

**Malta, MT, 13 – 17 April 2026 (revision of S2-2600098)**

**Source:** **China Mobile, Huawei**

**Title:** **[KI#22, Solution #22.2 update]**: **6G architecture enhancement to support 6G computing service**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item / Release: FS\_6G\_ARC**

*Abstract of the contribution:* *This paper proposes a 6G architecture enhancement for computing* *including the definition update and solution for the coordination between communication and computing that controlled by CN****.***

# 1. Text proposal

It is proposed to agree the following changes to TR 23.801-01, including the definition update and solution for the coordination between communication and computing that controlled by CN.

This paper is revised from S2-2600098, that with the following changes:

- Some definition updated, and put in the certain section according to the new skeleton in S2-26001619.

- Add computing QoS section, that described how to 6G core network to guarantee the QoS for the computing task.

- Change the procedure to add the enhancement of how to 6G core network to select the computing site and how to configure the computing QoS.

- Add the new features that the CCF can directly receive the computing task request from UE, as the new option.

All the new changes compared to the original paper S2-2600098 are in the **yellow**.

\* \* \* First Change \* \* \* \*

## 6.0 Mapping of Solutions to Key Issues

Table 6.0-1: Mapping of Solutions to Key Issues

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Key Issues | | | | | | | | | | | | | | | | | | | |
| Solutions | #22 | #Q |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| #X.Y | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| #Y |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

\* \* \* Second Change \* \* \* \*

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

[15] 3GPP TS 38.331: "NR; Radio Resource Control (RRC); Protocol specification".

[16] 3GPP TS 23.204: "Support of Short Message Service (SMS) over generic 3GPP Internet Protocol (IP) access; Stage 2".

[x1] https://docs.juicelabs.co/docs/juice/intro.

[x2] https://docs.unity3d.com/cn/2018.4/ScriptReference/ComputeShader.html

[x3] https://www.nvidia.com/en-us/data-center/products/ai-enterprise/

\* \* \* Third Change, all new text \* \* \* \*

#### 6.22.1.1 Description

##### 6.22.1.1.1 Definitions

The following definitions will be referred during the solution and procedure design in the computing topic.

**Computing tasks:** A Computing Task (e.g.: XR rendering)​ is a type of task that transforms input data or instructions into expected outputs through consuming computational resource ​(such as CPU cycles, GPU processing power, memory, and storage capacity over time) and is typically required to be completed within specified time constraints.

**Computing Site/Node:** **The physical or logical entities that providing computing resources, runtime, or model related resources to computing task**, to facilitate and guarantee the execution of computing tasks.

**Computing task request:** A request to trigger the execution of computing task, including both the required computing resources and execution environment of computing task and computing QoS.

NOTE 1: A computing task request can clearly indicate the required computing resources and execution environment of computing task, input data and expected output. The computing task request can also be the intent information that a structured semantic information used to describe computing tasks and carry out users' intentions. Computing task requests in this solution also includes computing QoS.

**Computing QoS:** The computing QoS contains the QoS parameters (such as E2E delay or computing task processing delay) that refers to the quantifiable guarantee level provided by a 6G system for execution of a computing task or the result of a computing task.

NOTE 2: The computing QoS parameters also depends on the real computing task. For example, if the computing task is sensing, the computing QoS parameters may include such as sensing QoS parameters.

**Computing resource:** The computing resources can refer to hardware and/or software that provides the required processing, storage capability etc. to perform computing tasks (e.g. XR rendering).

NOTE 3: This definition is referred from TR 22.870 [11].

\* \* \* Fourth Change \* \* \* \*

##### 6.22.1.1.3 Computing Site Location

In 5G, the EAS is deployed in data network, which is outside of the operator’s network. And also whether the EAS is controlled by operator or 3rd party is unclear.

In order to support to provide 6G computing service which defines in TR 22.870[11], the operator should have the capability to manage the computing site, and provide the computing services to the service consumer. One idea is to deploy the computing site inside the operator network, see below.

![](data:image/x-emf;base64...)

Figure 6.22.1.1.3-1: Computing site deployment inside operator network to provide 6G computing service

This computing site and related computing resources are deployed inside core network behind the UPF, by operator itself. And it means that the traffic from UE can be terminated inside operator network and do not need to be routed to data network. **The benefits of computing site deployed inside the operator network are shown in the following bullets:**

- The interface between 6G UP and computing site can be seen as the internal network interfaces. It means that the N6 delay between PSA and computing site is controlled and user experience can be optimized by operator. So, the QoS of computing service is also control able.

- Considering the 6G UP in core network can have the flexible deployment location (e.g.: local site, central site), it means that the computing site can also have the flexible deployment location. If the computing task has the requirement of low latency, inside deployment computing site may have benefits compared to computing site located in data network. For the computing resource provided by 3rd party, public cloud computing resources are usually located in centralized data centres, which brings larger E2E latency.

- If the computing task requires the operator’s data, for example, the AI inference application on UE requires the RAN sensing data to inference, this kind of data can only be consumed (e.g.: training or analysis) inside the operator network because of the security and privacy consideration. So, only the computing site inside operator network can be selected.

\* \* \* Fifth Change \* \* \* \*

## 6.22 Solutions to KI#22

### 6.22.2 Solution #22.2: Coordination between Communication and Computing is controlled by 6G CN

#### 6.22.2.0 Topics addressed and High-level Solution Principles

This paper proposes a solution on KI#22 and mainly solve the issue of enabling 6G computing service for computing task from UE. Considering that on UE side, that some of the computing intensive task may need amounts of computing resource that UE can not satisfy, so in this solution, one way forward is to let the network side to aware the computing task request from UE, and delivers the request to computing site deployed inside the core network. The computing site deployed inside the core network is deployed by operator and can satisfy the requirement of computing task from UE. Also, the operator can guarantee the E2E latency and QoS of the computing task.

Here is the following enhancement to network architectures below:

- New network functions CCF is introduced. The CCF is responsible for management of computing site deployed inside core network such as monitoring the status of computing resources on computing site. And the CCF also can receive the computing task request from UE and the CCF can select the proper computing site for computing task.

- Reusing the PDU session establishment/modification interface or introduce new NAS information between UE and CCF, to delivers the computing task request from UE to 6G SM via NAS messages, and then the 6G SM delivers the computing task request to CCF.

- The CCF can interact with 6G SM to guarantee the computing QoS for the computing task.

- The new Model Management is introduced and the Model Management is responsible for the for pulling of mirror and instantiation deployment of application instances or models on computing site, if the computing task request includes the required model.

#### 6.22.2.1 Description

##### 6.22.2.1.1 Architecture and General description

Figure 6.22.2.1-1 describes the architecture assumption of this solution.

The 6G core network still reuse the service-based interface and two new network functions CCF and Model Management are introduced.

Firstly, the 6G core network should support to receive or aware the computing task request from UE.

- Option 1 is to reuse the PDU session establishment/modification interface to delivers the computing task request from UE to 6G SM via NAS messages, and then the 6G SM delivers the computing task request to CCF.

- Option 2 is to introduce the new NAS information to delivers the computing task request from UE to CCF.

![](data:image/x-emf;base64...)

Figure 6.22.2.1-1: Architecture assumption of supporting 6G computing service

Secondly, to achieve the centralized and uniform management of computing site inside of operator network, a new NF, Computing Control Function (CCF), is introduced. The CCF supports the following functionalities:

- The CCF receives the computing task requests from UE via control plane.

NOTE 2: For example, if the computing task is AI inference task, the computing task requirements can be a general AI inference request. Also, it can be the intent information, for example, the user wants to generate a video according to the user intent. See example in section 6.33 of TR 22.870[11].

![图示

AI 生成的内容可能不正确。](data:image/jpeg;base64...)

Figure 6.22.2.1-2: AI text-to-video generation, refer to Figure 6.33.1-1 of TR 22.870[11]

- The CCF can manage the computing site inside the core network. For the management of the computing site, this includes the such as monitoring the status of computing resources on computing site and etc, that can be seen in the solution 22.11.

- The CCF can select/re-select the computing site according to the computing task request from UE for computing task. The CCF can decide the requested computing resource of the computing task and determine the proper computing site according to the computing task requests from UE.

- The CCF can interact with 6G SM to guarantee the computing QoS for the computing task.

For the computing site deployed inside the core network, the CCF interacts with computing site via service-based interface.

If the computing task requests contains the intent information, the CCF can interact with System AI Agent that to request agent to perform the intent resolution and convert the user intent to real required computing resources and execution environment of computing task.

And another new network function Model Management (MM) is for pulling of mirror and instantiation deployment of application instances or models on computing site. After the computing site is selected by the CCF for computing, if the computing site doesn’t deploy the application instance or related resources for computing task, for example, no AI model is deployed on computing site, that the CCF should trigger the Model Management to quick install the AI model or environment on the computing site.

![](data:image/x-emf;base64...)

Figure 6.22.2.1.1-1: UE side enhancement to support 6G computing service

The UE deploys or install the SDK that support receiving the computing task request (e.g.: AI inference request) from application, and after receiving the request this SDK is triggered to perform the procedure of sending computing task request to CCF via NAS message. Or, the UE can be enhanced on the UE capability (e.g.: UE OS enhancement) that support receiving the computing task request and then to support to sends this request to CCF.

For example, that the SDK can receive several kinds of computing task request from applications, and applications do not need to change their inputs. And as seen in the Figure 6.22.2.1.2-1, the UE APP 1 triggers the AI inference requests. And after receiving such request, the SDK is triggered and the UE sends this request to CCF via NAS messages. And the CCF can select the proper computing site for UE APP 1 according the computing task request, for example, the Computing site 1.

##### 6.22.2.1.2 Coordination between Communication and Computing

The computing QoS contains the QoS parameters (such as E2E delay or computing task processing delay) that refers to the quantifiable guarantee level provided by a 6G system for execution of a computing task or the performance of a computing task.

When the UE sends the computing task request to CCF, the computing QoS may be included. The computing QoS can be the following parameters:

- Delay related parameters, including both processing delay and communication delay. All of the requested computing resource that can be reflected as the time delay. The delay related parameters include the computing task processing delay or the E2E delay. The communication delay part can be reusing the 5G mechanism to solve, such as N6 delay measurement. The processing delay depends on the amount of computing resources and computing resource type that consumed by computing task. The E2E delay or processing delay can be the upper bound.

- QoS metrics for computational task performance. QoS metrics for computational task performance, such as the number of parameters for AI model training, or inference accuracy, sensing accuracy and location resolution. How much of the computational task performance wants to realize that has high dependent to the amount of computing resources and computing resource type that consumed by computing task.

In this solution, the CCF can perform the convert between the computing QoS and required computing resources and execution environment of computing task. Here is the example below:

**Case 1:** If the computing task request from the UE includes the required amount of computing resources and computing resource type and the computing QoS, the CCF selects the candidate satisfied computing site according to the required amount of computing resources and computing resource type. And the CCF interacts with 6G SM to decide the computing QoS of each candidate satisfied computing site, for example the E2E delay. And the CCF decides the final computing site of the computing task.

**Case 2:** If the computing task request from the UE only includes computing QoS, the CCF can convert the computing QoS to the required amount of computing resources and computing resource type of the computing task. And the CCF still selects the computing site as Case 1 clarified procedure.

#### 6.22.2.2 Procedures

![](data:image/x-emf;base64...)Figure 6.22.2.2-1: Procedure of 6G computing service provision by computing site inside core network

The following procedure describes the 6G computing service provision by computing site inside core network.

0. The UE deploys or install the SDK that support receiving the computing task request (e.g.: AI inference request) from application, and after receiving the request this SDK is triggered to perform the procedure of sending computing task request to CCF via NAS message. Or, the UE can be enhanced on the UE capability (e.g.: UE OS enhancement) that support receiving the computing task request and then to support to sends this request to CCF.

1. The CCF manages the computing site inside the core network. For example, the computing site performs registration procedure to CCF, including indicates the computing resource deployment (e.g.: CPUs, GPUs), status of computing resources and supported AI models. This refers to the solution 22.11 part.

2. PDU session establishment procedure.

3. UE application on UE triggers the computing task request, for example, AI model inference request.

(4a and 5a are the procedure related to Option 1 that sending computing task request to CCF indirectly, and 4b is the procedure related to Option 2 that sending the computing task request to CCF directly.)

4a. Due to the SDK installation on UE, after receiving the computing task request, the UE sends the computing task request to 6G SM via PDU session establishment/modification request in NAS container. The computing task request can include the following parameters:

- Amount of computing resources computing task consumes that act as IaaS, for example, the number of CPUs/GPUs, virtual resources: pooled, shared, and accessible by AI and graphics workloads can be indicated, see reference in [x1].

- General AI inference request that including the service that UE consumes. In this request, the computing resources requirements uses AI inference framework, inference parameters and related models and etc to indicate the real computing requirements, see reference in [x2] [x3].

The computing QoS can also be included in the computing task request.

4b. Due to the SDK installation on UE, after receiving the computing task request, the UE sends the computing task request directly to CCF.

5a. The 6G SM delivers the received computing task request to CCF.

6. Optional, after receiving the requests from UE, if the computing task requirements includes the intent information, the CCF can interact with System AI Agent that to request System AI Agent to perform the intent resolution and convert the user intent to real computing task requirements.

7. After receiving the real computing requirement of computing task (e.g.: the number of GPUs/CPUs), the CCF may request the computing resource status information (e.g.: available CPUs/GPUs, or supported computing resource type) from each computing site.

If the computing task request from the includes computing QoS, the CCF can convert the computing QoS to the required amount of computing resources and computing resource type of the computing task.

8. The CCF determines the candidate computing site to perform the computing task by considering the computing task requests and the computing resource status information from each computing site.

9. The CCF provides the candidate computing site address to the 6G SM to request the communication delay to each candidate computing site.

10. The 6G SM determines the communication delay by measurement, for example, N6 delay measurement or the QoS monitoring mechanism.

11. The 6G SM provides the communication delay measurement result of each computing site to CCF.

12. The CCF determines the final computing site that executes the computing task by considering the computing task requests and the computing resource status information from each computing site, and the computing QoS.

13. The CCF indicates to MM to install the environment or prepare the computing resource on computing site for the computing tasks.

14-15. The Model Management performs the installation of environment.

16. The CCF requests the 6G SM to configure the traffic routing between UE and the computing site. The CCF provides the location information and IP address of computing sites to 6G SM.

17. The 6G SM configures the traffic routing information in 6G UP.

18a. The 6G SM sends to UE the computing site address via PDU session establishment/modification response.

18b. The CCF directly sends the computing site address to UE.

19. After receiving the computing site address, the UE triggers the socket connection establishment to the computing site.

#### 6.22.2.3 Impacts on Services, Entities and Interfaces

**CCF:**

- Receive computing task request from UE directly or indirectly.

- Management of computing resource on computing site.

- Select/reselect the computing site for computing task.

- Convert the computing QoS to the required amount of computing resources and computing resource type of the computing task.

- Interact with 6G SM to configure the traffic routing information from UE towards computing site.

**UE:**

- UE deploys or install the SDK that support receiving the computing task request (e.g., AI inference request) from application, and after receiving the request this SDK is triggered to perform the procedure of sending computing task request to 6G SM via NAS message.

**6G SM:**

- Receiving computing task request from UE, and delivers to CCF.

- Measurement of the communication delay of each computing site.

- Configures the traffic routing information in 6G UPF for computing site.

**Model Management:**

- Responsible for resource installation on computing site for computing task.

**System AI agent:**

- Responsible for intent resolution.

\*\*\*\* End of Change \*\*\*\*