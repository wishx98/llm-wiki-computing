**3GPP TSG-WG SA2#174 S2-2602122**

**Malta, St Julian’s, 13 – 17 April, 2026**

**Source: MediaTek Inc.**

**Title: [KI#22, resubmitted] Enabling computing service access and offload**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This paper proposes an architecture to enable the UE access to a computing service and offloading the computing service in 6G*

# 1. Introduction

The paper proposes an architecture and mechanism to enable the UE to access and offload computing service within MNO-managed Compute DN.

# 2. Text proposal

It is proposed to agree the following changes vs. TR 23.801-01:

\* \* \* First Change \* \* \* \*

## 6.0 Mapping of Solutions to Key Issues

Table 6.0-1: Mapping of Solutions to Key Issues

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Key Issues | | | | | | | | | | | | | | | | | | |
| Solutions | 22 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| X.Y | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

\* \* \* First Change (All new texts)\* \* \* \*

## 6.X Solutions to KI#X

This paper is to address the solution for KI#22: 6G Computing Support.

### 6.X.Y Solution #X.Y: Enabling computing service access and offload

#### 6.X.Y.0 Topics addressed and High-level Solution Principles

Key motivation:

- Premium service experience on a wide range of device form-factors.

- Large scale AI Inference with hybrid edge-to-cloud computing arch.

In this solution, below architecture assumptions are applicable:

- The architecture for this solution assumes 5GS framework as specified in TS 23.501 [nn], TS 23.502 [nn] and TS 23.503 [nn] as the baseline unless new enhancements identified and concluded by this key issue or other key issues of this TR.

To enable UE to access and offload computing service, the following principles are assumed:

- Enabling UE access and offload to an MNO-managed Compute DN for computing service.

- User-Plane as transport between UE and the MNO-managed Compute DN (within or outside MNO domain).

- An entity external to 3GPP network "Compute Orchestrator (CO)" that orchestrates computing resources in the MNO-managed Compute DN.

NOTE X: How CO orchestrates computing resources is not in the scope of 3GPP.

- SMF can get the assistance information (e.g. the estimated completion time of the computing service) from the CO over standardize interface.

- PCF determines computed-related policies in addition to other relevant communication policies.

#### 6.X.Y.1 Description

##### 6.X.Y.1.1 An architecture for support computing service

The below Figure 6.X.Y.1.1-1 shows an architecture supports access and offload to MNO-managed Compute DN for computing service.

Furthermore, the SMF interacts with the CO for exchanging the assistance information via Nx.

Editor’s note: How Nx is realized (e.g., direct or via AF APIs) is FFS.

The UPF forwards the compute data to Compute DN (within or outside MNO domain) via Ny

Editor’s note: How Ny is realized (e.g., re-using N6 or enhance N6) is FFS.

![](data:image/x-emf;base64...)

Fig. 6.X.Y.1.1-1: an architecture support enabling computing service access and offload.

##### 6.X.Y.1.2 Enabling computing service access and offload

To access and offload computing service, the UE based on UE policy / URSP rules provided by the 6G CN (e.g. connection capability set to "compute") establishes a PDU Session to a Compute DN.

Editor’s note: Other 6G identifies to be used is FFS.

During PDU Session establishment procedure, the SMF recognizes the PDU Session for accessing Compute DN based on UE subscription for computing service. As a result, the SMF can

- select a suitable UPF and CO based on NF profile or pre-configuration

- after selection of UPF and CO, SMF may trigger to exchange assistance information with CO via Nx for e.g.,

- checking the service can be supported by the available computing resources within the Compute DN or not with CO

- CO can determine the available computing resource within the Compute DN and response whether it can support the computing service or not

- the SMF may need to re-select UPF or CO if the CO responds it cannot support the computing service

- Furthermore, CO as an AF can provide the compute node address information to EASDF specified in TS 23.548 [nn] and EASDF can provide such address information to SMF as specified in clause 6.2 in TS 23.548 [nn].

- Then, the SMF configures the UPF and the UE for supporting computing service based on the subscription and received information from CO and EASDF

- The UE starts to transmit compute data traffic to the UPF and the UPF forwards to the Compute DN via Ny

Since the SMF can get the assistance information from the CO, e.g. the estimated completion time of the computing service and the SMF may determine whether to adjust QoS parameters based on received assistance information from CO.

Editor’s note: Other assistance information that can be exchanged with the SMF is FFS.

#### 6.X.Y.2 Procedures

*Guidance – include in this clause:*

*- description of the procedures and information flows for the solution*

*- above the call flow description (figure + steps description), include a brief description of the purpose of the procedure.*

#### 6.X.Y.3 Services, Entities and Interfaces

*Guidance – include in this clause:*

*description of the new/re-use Services, Entities and Interfaces assumed by the solution. If existing Services, Entities and/or Interfaces are impacted (e.g. 5G), describe the impacts i.e., explain the difference compared to existing (e.g., 5G) service(s), Entities and interface(s).*

\* \* \* End of Changes \* \* \* \*

## Extracted Images

![image_a3e2e66879be43e7836e7fc477e1ae4f_1](https://doc2markdown.com/images/20260419/doc_a3e2e66879be43e7836e7fc477e1ae4f/image_a3e2e66879be43e7836e7fc477e1ae4f_1.png)

