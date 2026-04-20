**3GPP TSG-WG SA2#174 S2-2602123**

**Malta, EU, April. 13th – 17th, 2026 (Revision of S2-2600487/S2-2601619)**

**Source: LG Electronics**

**Title: [KI#22, bullet 2b, update] Management and exposure**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This pCR proposes a solution for KI#22, to address bullet#22.2b.*

# 1. Introduction

This contribution is for solution#22.9 (Solution Group 4, Category (1)) to address bullet#22.2b with the mechanism to support the management of the computing resource related information by the 6G CN and exposure to the AF.

The solution is extracted from Solution # 31 (S2-2600487, which was submitted in SA2#173) in Annex X.22.

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
| 4. Computing Exposure to AF | 2b | (1) Computing Related Information exposure | A. Computing related information (Computing Server Deployment Information) exposure to AF by 6G CN. | Solution #2, 24, 31, 37 | 22.9 |
|  |  | (2) Communication Delay exposure |  | Solution #24, 28 | 22.10 |
| 5. Computing Resource Monitoring and Management by 6G CN | 3b | (1) CP Function (e.g. 6G SMF, CMF, CCF, etc.) monitors the Computing Resources status in Computing Node/Site (e.g. Computing Node/Site, etc.) |  | Solution #5, 7, 19 | 22.11 |
|  |  | (2) CP Function (e.g. CSMF, etc.) monitors the QoS for Computing Service from other NFs (e.g. from SMF, PCF, NWDAF, etc.) in 6G CN |  | Solution #34 | 22.12 |
|  |  | (3) CP Function (i.e. EASDF) monitors the Computing Resources in DN via AF |  | Solution #32 | 22.13 |

Editor's note: Solution details and open issues will be added in the next meeting and are FFS. For Solution group #4 and 5, additional categories will be added for solutions that don’t require computing resource management and exposure by 6GS.

\* \* \* \* Start of 2nd Change (ALL NEW TEXT) \* \* \* \*

Update proposal on top of penholder output (S2-2601619)

### 6.22.9 Solution #22.9: Computing Related Information exposure to AF

#### 6.22.9.0 Topics addressed and High-level Solution Principles

**NOTE (from Pen holder):** This solution category is assumed to only address bullet#22.2b.

This solution address bullet#2b of KI#22 and is extracted from Solution #2, 24, 28, 31, 37 in Annex X.22.

There are two options:

A new CP Function (e.g., CCIF, CSMF, etc.) is newly introduced to be responsible for Computing Related information (e.g., NF computing capability information, Computing metrics, etc.) exposure.

6G CN Function (e.g., NEF, etc.) exposes the Computing Deployment Information to AF.

The following clauses describe option b).

#### 6.22.9.1 Description

The CS Deployment Information, similar to as specified in clause 6.2.3.4, TS 23.548, indicates how computing services are deployed within the Service Hosting Environment and/or in each Local part of the DN.

The following table shows the CS Deployment Information provisioned by 3rd party AF(s) or configured via OAM, managed by the 6G CN and exposed to the subscribed AF.

The CS Deployment Information management refers to the capability to create, update or remove CS Deployment Information provisioned by the 3rd party AF(s) or configured by the OAM. The NEF is in charge of the management of CS Deployment Information which may be stored in NEF or UDR.

|  |  |
| --- | --- |
| Parameters | Description |
| AF ID | Addressing information of Application Function responsible for the DNAI in the record.  [Optional] |
| DNN | DNN for the CS Deployment Information.  [optional] |
| S-NSSAI | S-NSSAI for the CS Deployment Information.  [Optional] |
| Application ID | Identifies the application for which the CS Deployment Information corresponds to.  [Optional] |
| FQDN(s) | Supported FQDN(s) for application(s) subject to the computing service. |
| DNAI(s) | DNAI(s) for the CS Deployment information.  [optional] |
| CS IP address range Information | IP address(es) of the computing server or the IP address ranges (IPv4 subnetwork(s) and/or IPv6 prefix(es) of the Local part of the DN where the computing server is deployed for each DNAI.  [Optional] |
| N6 traffic routing information | Information about how to forward computing traffic in the local part of DN corresponding to DNAI.  [Optional] |

Table 6.22.9.1-1: CS Deployment Information

The procedure for the Exposure of the computing resource information in clause 6.22.9.2.1.

#### 6.22.9.2 Procedures

##### 6.22.9.2.1 Exposure of the computing resource information

This procedure shows the exposure of the computing resource information to the AF.

![](data:image/x-emf;base64...)

Figure 6.22.9.2.2-1: Exposure of the computing resource information

1. The CS Deployment Information is available by the 6G CN by configuration via OAM or provisioned by 3rd party AF(s).

2. The AF invokes Nnef\_CSDeployment\_Subscribe service to request the CS Deployment Information. The request optionally includes the DNN, S-NSSAI and AF Identifier.

3. If the CS Deployment Information is stored in UDR, the NEF determines the DNN and/or the S-NSSAI if not received from the AF, potentially using the AF identifier. If the NEF has not yet received the CS Deployment Information for this DNN and/or S-NSSAI, NEF invokes the Nudr\_CSDeployment\_Subscribe service to subscribe for the CS Deployment Information for this DNN and/or S-NSSAI.

4. The UDR notifies the NEF with all the CS Deployment Information for the requested DNN and/or S-NSSAI.

If CS Deployment Information is stored in NEF, step 3-4 is skipped.

5. The NEF determines the CS Deployment Information to be provided.

6. The NEF notifies the CS Deployment Information corresponding to the request in step 2 to the AF.

If the CS Deployment Information is stored in the UDR, whenever the CS Deployment Information change, steps 4 to 6 take place.

The AF may use the CS Deployment Information e.g. for the Discovery and (re)selection of computing server.

#### 6.22.9.3 Services, Entities and Interfaces

**[For option b]**

**6G AF:**

- Provisions the CS Deployment Information to the 6G CN.

- Subscribes for the CS Deployment Information to the 6G CN via NEF.

**6G NEF:**

- Manages the CS Deployment Information provisioned by the AF or configured via OAM.

- Support the distribution and exposure of the CS Deployment Information to the subscribed AF.

#### 6.22.9.4 Open Issues

\* \* \* \* End of Changes \* \* \* \*