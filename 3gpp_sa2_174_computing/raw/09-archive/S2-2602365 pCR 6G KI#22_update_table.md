**3GPP TSG-WG SA2#174 S2-2602365**

**Malta, MT, 13-17 April 2026**

**Source: Qualcomm**

**Title: [KI#22, Solution Category Overview update] Add missing categories**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This paper adds missing categories in the solution category overview.*

# 1. Text proposal

It is proposed to agree the following changes to TR 23.801-01.

\* \* \* First Change \* \* \* \*

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
| (2) Communication Delay exposure |  | Solution #24, 28 | 22.10 |
| (3) Expose selected DNAI and compute site |  | Solution #35 | 22.X |
| 5. Computing Resource Monitoring and Management by 6G CN | 3b | (1) CP Function (e.g. 6G SMF, CMF, CCF, etc.) monitors the Computing Resources status in Computing Node/Site (e.g. Computing Node/Site, etc.) |  | Solution #5, 7, 19 | 22.11 |
| (2) CP Function (e.g. CSMF, etc.) monitors the QoS for Computing Service from other NFs (e.g. from SMF, PCF, NWDAF, etc.) in 6G CN |  | Solution #34 | 22.12 |
| (3) CP Function (i.e. EASDF) monitors the Computing Resources in DN via AF |  | Solution #32 | 22.13 |
| (4) CP function (SMF) receives compute delay information from AF for each DNAI relevant for the UE |  | Solution #35 | 22.X |

Editor's note: Solution details and open issues will be added in the next meeting and are FFS.

\* \* \* End of Changes \* \* \* \*