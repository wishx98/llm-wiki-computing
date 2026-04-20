**3GPP TSG-WG SA2#174 S2-2602130**

**Malta, EU, April. 13th – 17th, 2026 (Revision of S2-2600488/S2-2601619)**

**Source: LG Electronics**

**Title: [KI#22, bullet#3b, update] CS re-discovery with monitoring**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This pCR proposes a solution for KI#22, to address bullet#22.3b.*

# 1. Introduction

This contribution is for solution#22.13 (Solution Group 5, Category (3)) with the mechanism for the 6G CN to collect/monitor the computing resource related information (e.g. Status/Load information) to address bullet#22.3b.

The solution is extracted from Solution # 32 (S2-2600488, which was submitted in SA2#173) in Annex X.22.

# 2. Text proposal

It is proposed to agree the following changes vs. TS 23.801-01:

\* \* \* \* Start of 1st Change \* \* \* \*

### 6.22.0 Solution Category Overview

The solutions for KI#22 are structured as following in Table 6.22.0-1:

Table 6.22.0-1: Solution Category overview

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Solution Groups | Addressed bullet # | Solution category for the group | Variants for each category | Referred input paper in Annex C, clause .22 | Solution # in TR |
| 1. Architecture Requirements, | 1a, 1b | (1) Architectural requirements | FFS | Solution #11, 22, 27, 29 | 22.1 |
| Definitions, Location of |  | (2) Computing related definitions | FFS | FFS |  |
| Computing Node/Site |  | (3) Computing Site location | FFS | FFS |  |
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
|  |  | (3) CP Function (i.e. EASDF) monitors the Computing Resources in DN via AF | A. Computing resource monitoring by 6G EASDF. | Solution #32 | 22.13 |

Editor's note: Solution details and open issues will be added in the next meeting and are FFS. For Solution group #4 and 5, additional categories will be added for solutions that don’t require computing resource management and exposure by 6GS.

\* \* \* \* Start of 1st Change (ALL NEW TEXT) \* \* \* \*

Update proposal on top of penholder output (S2-2601619)

### 6.22.13 Solution #22.13: CP Function (i.e., EASDF) monitors the Computing Resources via AF

#### 6.22.13.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.3b.

This solution addresses bullet#3b of KI#22 and is extracted from Solution # 32 in Annex X.22.

The EASDF discovers the AF available data and the NEF information via NRF and subscribes the AF to collect/monitor the computing resource related information (e.g., Status/Load information).

#### 6.22.13.1 Description

The computing resources within the Shared Hosting Environment and/or Data Network either owned and controlled by the operator or 3rd party are assumed to be available by the 6G CN and accessed via the UPF.

This solution assumes that the AF providing the computing service via 6G CN registers the available data including the computing resource related information (e.g., Status/Load information) in the NF profile to the NRF.

This solution assumes that the UE finds the computing server based on the CS Discovery Procedure with EASDF procedure, for example, this could be similar to as specified in clause 6.2.3.2.2 of TS 23.548.

#### 6.22.13.2 Procedures

##### 6.22.13.2.1 Computing resource monitoring by EASDF

This procedure shows the computing resource monitoring while providing the computing service to consumer.

![](data:image/x-emf;base64...)

Figure 6.22.13.2.1-1: Computing resource monitoring procedure

1. During the PDU Session Establishment procedure, the UE finds computing server based on the CS Discovery Procedure with EASDF, for example, this could be similar to as specified in clause 6.2.3.2.2 of TS 23.548.

2. Based on the selected computing server with the DNS message exchange in step 1, the EASDF discovers the AF available data to subscribe for the computing resource related information (e.g. Status/Load information) and the NEF information via NRF.

NOTE 1: It is assumed that the AF providing the computing service via 6G CN has registered the available data including the computing resource related information (e.g. Status/Load information) in the NF profile to the NRF.

3. The EASDF subscribes to the AF for the computing resource related information based on the instruction from the SMF in steps 1.

4. The NEF sends the subscription in steps 3 to the AF.

Steps 2 to 4 can also be performed based on the computing resource information (e.g. Computing Server Deployment Information) available by the SMF to instruct the EASDF for subscription.

5. The AF sends the computing resource related information (e.g. Status/Load information) when the condition for the notification is met.

The notification includes the target UE identifier(s), CS IP address and the Status/Load information (e.g. Failure status, Overload status, Computing delay, etc.) based on the subscription from the EASDF in step 3.

6. The NEF sends the notification from the AF in steps 5 to the EASDF.

7. The EASDF sends notification to the SMF indicating that the CS relocation is required.

The SMF may, based on the notification, update the CS Deployment Information and/or DNS message handling rule and may also determine the CS re-discovery procedure for the UE to rediscover the computing server.

#### 6.22.13.3 Services, Entities and Interfaces

**6G EASDF:**

- Discovers the AF available data to subscribe for the computing resource related information (e.g. Status/Load information) and the NEF information via NRF.

- Subscribes to get notified for the computing resource related information from the AF.

- Sends notification to the SMF indicating that the CS relocation is required upon the AF notification.

**6G SMF:**

- Instructs the EASDF to subscribe and monitor the computing resource related information.

- Manages/updates the CS Deployment Information upon notification from the EASDF.

**6G AF:**

- Registers the available data including the computing resource related information in the NF profile to the NRF.

- Sends notification with the computing resource related information to the 6G CN based on subscription.

#### 6.22.13.4 Open Issues

TBD.

\* \* \* \* End of Changes \* \* \* \*