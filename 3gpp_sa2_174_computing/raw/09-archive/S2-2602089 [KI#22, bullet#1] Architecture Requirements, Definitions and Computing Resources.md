**3GPP TSG-SA WG2 Meeting #174 S2-2602089**

**Malta, Malta, April 13 – 17, 2026**

**Source: Samsung**

**Title: [KI#22, bullet 1, update] Updates on Architecture Requirements and definitions**

**Document for: Approval**

**Agenda Item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This contribution proposes a solution update for Key Issue #22 of FS\_6G\_ARC.*

# 1. Introduction

This contribution proposes to update the solution categorization table in the TR. [First Change].

Also, this pCR proposes the following aspects based on the postponed document S2-2601619 in the [Second Change].

The proposed updates are based on the following discussion:

- 6G Computing Service: A service provided via 6G CN enables operator to utilize computing resources in Service Hosting Environment for the purpose of (i) enabling a service instance to be hosted in the Service Hosting Environment close to the UE’s access point of attachment to reduce end-to-end latency and load on the transport network, and/or (ii) enabling the 6G CN to expose the operator’s computing resource related information to 3rd party service (i.e., app client in UE or server) in order to allow the 3rd party service to utilize computing resource in the Service Hosting Environment.

- Service Hosting Environment: An environment, located inside of 6G CN or a part of Data Network (managed by the operator) and fully controlled by the operator, providing support required for service instance execution.

- Computing resource: A set of hardware components (CPU, GPU, memory, etc) and/or the software components (varying in granularity, ranging from coarse-grained VM or application server instance to fine-grained software modules or functions) in the Service Hosting Environment. The detailed computing resource specification can be based on the following attributes specified in SA5 and SA6.

|  |  |  |  |
| --- | --- | --- | --- |
| **SA6 specified resource information for EAS (TS 23.558)** | | **SA5 specified virtual resource attribute (TS 28.538)** | |
| Available Compute | The maximum compute resource available for the AC. | virtualResource | This parameter defines the virtual resource requirements of an EAS. |
| Available Graphical Compute | The maximum graphical compute resource available for the AC. | virtualMemory | It indicates the minimum virtual memory size requirements for EAS in megabytes. (see clause 7.1.9.3.2.2 in ETSI NFV IFA-011 [7]). |
| Available Memory | The maximum memory resource available for the AC. | virtualDisk | It indicates the minimum virtual disk storage requirement for the EAS (see clause 7.1.9.4.3.2 in ETSI NFV IFA-011 [7]). |
| Available Storage | The maximum storage resource available for the AC. | virtualCPU | It indicates the virtual CPU requirement for the EAS (see clause 7.1.9.2.3.2 in ETSI NFV IFA-011 [7]). |

- Logical Computing Site: An abstraction of computing resources in a specific location of network topology, which is located within the 6G CN or a part of Data Network managed by the operator. Within a logical computing site, the multiple Service Hosting Environment can be onboarded and provide support required for service instance.

This pCR also discusses difference between edge computing service as 6G computing service and operator-specific service as 6G computing service as follows:

|  |  |  |
| --- | --- | --- |
|  | **Edge computing as 6G computing service** | **Operator service as 6G computing service** |
| **Location of SHE/computing site** | DN (operator’s network | 6G CN or DN |
| **Computing resource** | Edge Server instance | Server instance, A set of SW and/or HW component  (NOTE) |
| **Consumer of resource** | Application Client in the UE | Application in the UE and/or 3rd party application server |
| **Service Path between UE/AF and SHE** | Over UP (for between UE and SHE) | **FFS** (UP or new dedicated plane for between UE/AF and SHE) |
| **Controllability of computing resource** | MNO or 3rd party service provider | MNO |
| **Target service (main purpose)** | Low latency service | Service requiring heavy computation;  Service implemented with a specific app logic of separating and delegating its workflow to other  (mainly providing sufficient resource for computation, may not be for low latency service) |
| NOTE: For the case of SW and/or HW components, it requires client-side entity in the UE (e.g., SDK or middleware) and a corresponding server-side entity at the computing site to provision resources. For UE-side, an application client interfaces with the computing client-side entity to decide/trigger a request for computing resource. For network-side, the server-side entity can host directly or interacts interface with it, e.g., via a sidecar mechanism | | |

# 2. Text proposal

It is proposed to agree the following changes against TR 23.801-01:

\* \* \* First Change \* \* \* \* (Updates to TR)

### 6.22.0 Solution Category Overview

The solutions for KI#22 are structured as following in Table 6.22.0-1:

Table 6.22.0-1: Solution Category overview

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Solution Groups | Addressed bullet # | Solution category for the group | Variants for each category | Referred input paper in Annex C, clause .22 | Solution # in TR |
| 1. Architecture Requirements, | 1a, 1b | (1) Architectural requirements | - Application client/server portability for computing service  - Service differentiation  - Efficient utilization of computing resource | Solution #11, 22, 27, 29, ?? | 22.1 |
| Definitions, Location of |  | (2) Computing related definitions | FFS | FFS |  |
| Computing Node/Site |  | (3) Computing Site location | located within the 6G CN or a part of Data Network managed by the operator | ?? |  |
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
| 5. Computing Resource Monitoring and Management by 6G CN | 3b | (1) CP Function (e.g. 6G SMF, CMF, CCF, etc.) monitors the Computing Resources status in Computing Node/Site (e.g. Computing Node/Site, etc.) |  | Solution #5, 7, 19 | 22.11 |
|  |  | (2) CP Function (e.g. CSMF, etc.) monitors the QoS for Computing Service from other NFs (e.g. from SMF, PCF, NWDAF, etc.) in 6G CN |  | Solution #34 | 22.12 |
|  |  | (3) CP Function (i.e. EASDF) monitors the Computing Resources in DN via AF |  | Solution #32 | 22.13 |

Editor's note: Solution details and open issues will be added in the next meeting and are FFS. For Solution group #4 and 5, additional categories will be added for solutions that don’t require computing resource management and exposure by 6GS.

\* \* \* Next Change \* \* \* \* (Proposal based on S2-2601619)

### 6.22.1 Solution #22.1 Computing Architecture Requirements, Definitions and Computing Resources

#### 6.22.1.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution is assumed to address bullet#1a, 1b on architecture requirements, definitions, location of Computing Site, Computing resources.

#### 6.22.1.1 Description

##### 6.22.1.1.1 Definitions

**6G Computing Service**: A service provided via 6G CN enables operator to utilize computing resources in Service Hosting Environment for the purpose of (i) enabling a service instance to be hosted in the Service Hosting Environment close to the UE’s access point of attachment to reduce end-to-end latency and load on the transport network, and/or (ii) enabling the 6G CN to expose the operator’s computing resource related information to 3rd party service (i.e., app client in UE or server) in order to allow the 3rd party service to utilize computing resource in the Service Hosting Environment.

**Logical Computing Site**: An abstraction of computing resources in a specific location of network topology, which is located within the 6G CN or a part of Data Network managed by the operator. Within a logical computing site, the multiple Service Hosting Environment can be onboarded and provide support required for service instance.

**Service Hosting Environment**: An environment, located inside of 6G CN or a part of Data Network (managed by the operator) and fully controlled by the operator, providing support required for service instance execution.

**Computing Resource**: A set of hardware components (CPU, GPU, memory, etc) and/or the software components (varying in granularity, ranging from coarse-grained VM or application server instance to fine-grained software modules or functions) in the Service Hosting Environment.

NOTE: How to define the detailed computing resource information needs coordination with SA5 and SA6.

Editor’s note: The Computing related definitions are FFS.

##### 6.22.1.1.2 Architecture Requirements

- Application client portability for computing service: Changes in logic of application clients to leverage the computing service, compared to existing cloud environment, are avoided.

NOTE: Inter-environment portability should be pursued. Cross-platform portability is FFS.

- Application server portability for computing service: Changes in logic of application servers when deployed in the Service Hosting Environment of the MNO, compared to the existing cloud environment, are avoided. Application server instance should be able to be executed in Service Hosting Environments of different MNOs without its modification.

- Service differentiation: The 6G system supporting computing service shall be able to enable MNO enforce service differentiation per UE or 3rd party service (e.g., by enabling/disabling the computing service related features) via an authorization mechanism.

- Efficient utilization of computing resource: The 6G system supporting computing service shall support to onboard or instantiate the proper amount of computing resource (e.g., the number of server instances) based on demand (e.g., real time or expected) service load for the purpose of sustainability and energy efficiency.

- Flexible deployment:

- The 6G system should support one PLMN that is connected to several service host environments (which may be provided by other parties).

- The 6G system supports the connection from UE to the service hosting environment located in the CN or a part of DN.

- The 6G system supporting the computing service shall provide mechanism to protect user privacy, especially when the UE-related computing service information is utilized.

##### 6.22.1.1.3 Computing Site Location

An abstraction of computing resources in a specific location of network topology, which is located within the 6G CN or a part of Data Network managed by the operator.

#### 6.22.1.4 Open Issues

\* \* \* End of Changes \* \* \* \*