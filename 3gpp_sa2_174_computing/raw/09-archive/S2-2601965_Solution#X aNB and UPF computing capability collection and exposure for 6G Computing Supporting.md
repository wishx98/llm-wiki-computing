**3GPP TSG-SA2 Meeting #174 *S2-******2601965***

**St Julian, Malta, 13 – 17 April 2026** (was S2-260xxxx)

**Source: Transsion Holdings**

**Title:** **KI#22bullet#2: Solution#X aNB computing capability collection for 6G Computing Supporting**

**Document for: Approval**

**Agenda Item: 20.6.22**

**Work Item / Release:** **FS\_6G\_ARC/Rel-20**

*Abstract of the contribution: This paper proposes a solution on computing capability collection and exposure to KI#22bullet#2 of* *TR* *23.801-01.*

# 1 Discussion

It was agreed in SA2#172 for KI#22bullet#2 of FS\_6G\_ARC as below, and was captured in TR 23.801-01.

2. Enablement/authorization of computing service to UE or AF.

a) Whether and how to enable Computing Service.

b) Whether and how the operator network may expose the computing resource related information (e.g. its hosting capability (e.g. using compute resources at Service Hosting Environment)) and/or network metrics to AF.

This paper introduces a new Network Function CCIF (Computing Capability Information Function) and describes how CCIF collects the computing capability information from 6G base station (assuming aNB) via AMF in order to exposes the collected computing capability information to AF.

It proposes a solution for computing capability collection 6G networks, focusing on aNB as major computing entities. Based on the CCIF (Computing Capability Information Function) framework, this solution enables standardized collection of computing capability information from aNBs. The proposed solution supports computing-aware network operation and optimization in 6G systems.

# 2. Proposal

It is proposed to add the following contents to TR 23.801-01.

Start of Change

## 6.0 Mapping of Solutions to Key Issues

Table 6.0-1: Mapping of Solutions to Key Issues

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Key Issues | | | | | | | | | | | | | | | | | | |
| Solutions | #P | #Q |  |  |  |  |  |  |  | #22 |  |  |  |  |  |  |  |  |  |
| #X |  |  |  |  |  |  |  |  |  | **X** |  |  |  |  |  |  |  |  |  |
| #Y |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

Next Change (all new text)

## 6.X Solutions to KI#22

### 6.X.Y Solution #X.Y: 6G aNB computing capability collection

#### 6.X.Y.0 High-level solution Principles

The following principles for this solution are proposed as below:

- New CCIF (Computing Capability Information Function) is introduced to collect aNB computing capability information in order to exposes collected aNB computing capability to AF.

- CCIF subscribes to AMF, and collects aNB computing capability from AMF.

- AMF subscribes to aNB, and collects aNB computing capability from aNB.

#### 6.X.Y.1 Description

CCIF is newly introduced to be responsible for aNB and UPF computing capability information collection for exposure. And computing capability information collection procedure is introduced to collect aNB computing capability information in order to expose to AF.

#### 6.X.Y.2 Procedures

Computing capability information collection procedure

The procedure is used by the CCIF to discovery an aNB through AMF via NRF and subscribe to AMF to collect computing capability information.

![IMG_256](data:image/png;base64...)

Figure: aNB Computing capability collection procedure

1) CCIF sends AMF stance discovery request via Nnrf\_Nfstance\_DiscoveryRequest to NRF to get AMF profile, the request at least includes NF type：

- NF type: AMF

2) NRF sends the requested AMF profile back to CCIF via Nnrf\_Nfstance\_RetrievalNotify, the AMF profile at least includes：

- AMF instance ID.

- FQDN or IP address of AMF.

- AMF Set ID.

CCIF sends AMF discovery request on aNB or a group of aNBs which are connected to AMF via Namf\_aNBstance\_DiscoveryRequest to AMF to get aNB profile, the request at least includes to collect one type of aNB information：

- FQDN, IP address, ID

The AMF returns the aNB(s) information requested to the CCIF according to the instruction received in step 3, where the information includes at least one of the following:

- FQDN of aNB

- IP address of aNB

- aNB ID.

CCIF subscribes to AMF to get aNB computing capability via NaNB\_Computing\_Capability\_Subscribe with information of aNB profile (such as aNB ID, IP address, FQDN), the feedback style/format of the aNB computing capability is also included. The message includes

- FQDN or IP address of aNB or aNB ID or aNB Set ID

- Feedback Mode (Periodic/One Time)

- Feedback Interval if applicable

AMF subscribes to aNB to get computing capability via NaNB\_Computing\_Capability\_Subscribe, the feedback style/format of the aNB computing capability is also included. The message includes

- Feedback Mode (Periodic/One Time)

- Feedback Interval if applicable

aNB calculates and predicts its computing capability and available resources.

aNB provides its computing capability information to AMF via NaNB\_Computing\_Capability\_RetrialNotify, these information may includes,

Computing Capability of hardware：

- Clock frequency

- Number of cores and threads (e.g., 4 cores/8 threads, 8 cores/16 threads, etc.)

- IPC (Instructions Per Clock Cycle)

- Cache

- Memory and storage (Memory: capacity and frequency; Storage: hard drive read/write speed (IOPS, throughput))

- Floating-point performance (FLOPS, the number of floating-point operations performed per second)

The remaining computing capability, such as:

- Remaining cache percentage

- Remaining memory and storage percentage

- Remaining floating-point computing power percentage

AMF provides computing capability information of an aNB or a group of aNBs to CCIF via NaNB\_Computing\_Capability\_RetrialNotify.

#### 6.X.Y.3 Impacts on Services, Entities and Interfaces

CCIF:

- A newly introduced NF to collect NF computing capabilities;

- To expose NF computing capabilities.

AMF:

- AMF is enhanced to support collecting aNB computing capabilities.

End of Changes