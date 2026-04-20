3GPP TSG-SA WG2#174 S2-2601969

St Julian, Malta, 13 – 17 April 2026

**Source: Lenovo**

**Title: [KI#22 bullet#3 new] Solution for Awareness of computing site information in DN at the 6G CN**

**Document for: Approval**

**Agenda Item: 20.6.22**

**Work Item / Release: FS\_6G\_ARC / Rel-20**

*Abstract of the contribution: It proposes the solution that the awareness of the computing site information in the DN is achieved by AF providing or computing site providing to the CMF.*

# 1. Introduction

As documented in the Key Issue 22 for 6G computing, the computing site represents the computing resources in a specific location of network topology. The computing site can offer computing services by allocating its computing resources to run application workloads upon demand of a Computing Service consumer. From networking perspective, the Computing Site is located within 6G CN (via e.g. user plane function in 6G) or Data Network (either owned and controlled by the operator or 3rd party).

When the computing site is located in DN, its information, e.g., site ID/address information, site location (represented by DNAI), supported computing resource type and capacity, site status, are also need to be known and updated to the 6G CN so that the computing site resource in the DN can be fully utilized.

If the DN is owned by the operator, the awareness of computing site information can be realized by OAM configuration to the CMF. However, when the DN is owned by the 3rd party, the awareness of its information at CMF will needs to be studied.

The following methods are proposed to enable the awareness of the computing site information in DN at the CMF:

AF provide the computing site information to the CMF.

Computing site send the computing site information to the CMF via the connected 6G PSA-UPF.

Based on options above, CMF subscribe/monitor the computing site and computing service information towards the computing site in the DN either via AF, or via 6G PSA-UPF.

**The solution may apply to the pen-holder’s table group 22.2, 22.7 and 22.11**.

# 2. Proposal

It is proposed to agree the following changes vs. TS 23.801-01:

\* \* \* First Change\* \* \* \*

6.0 Mapping of Solutions to Key Issues

**Table 6.0-1: Mapping of Solutions to Key Issues**

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | **Key Issues** | | | | | | | | | | | | | | | | | | |
| **Solutions** | **#22** |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| **#X** | X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

\* \* \* Second Change\* \* \* \*

6.22.X Solution #22.X: Solution for Awareness of computing site information in DN at the 6G CN

6.22.X.0 Topics addressed and High-level Solution Principles

The solution addresses the key issue 22 (computing) and mainly focuses on the bullet 3, sub-bullet b.

*3. Coordination of communication and computing, service continuity and QoS aspects:*

*a) Whether and how to coordinate (e.g. within or outside the core network) communication (for the traffic transferred over user plane) and computing resource(s) in the Computing Site.*

***b) Whether and how to identify, collect/monitor, provision the computing resource related information****.*

*c) Whether and how to improve the service experience.*

*d) Whether there is a need to improve QoS to satisfy Computing Service requirements.*

*e) Whether and how to support service continuity for computing service upon change of computing site and/or user plane function (e.g. due to UE mobility, computing load balancing, AF influence etc.)*.

The high-level technical principles of the solution are:

AF provides the computing site information that are located in the DN, to the 6G CN (CMF, or 6G UDM/UDR, or a proxy NF). The computing site information includes at least the site ID/address, DNAI, site status, the supported computing resource type and capacity/amount.

Computing site sends the computing site information to the 6G CN via the 6G PSA UPF.

CMF subscribes to the update of the computing site information via different ways, including towards 6G UDM/UDR/proxy NF, towards the AF, or towards the computing site via 6G PSA UPF.

6.22.X.1 Description

![](data:image/x-emf;base64...)

Figure 6.22.X.1 System architecture of 6G computing

Figure 6.22.X.1 gives the system architecture of 6G Computing. CMF is introduced to handle and manage the computing service request initiated by UE and AF. For the computing sites located in 6G CN, it can either be co-located with 6G UPF, or as a standalone NF or entity behind 6G UPF. CMF can either get the information from the computing site (6G CN) via its registration, or from a proxy NF that has all the computing site information (assume computing site has registered to this proxy NF).

For computing sites located in the DN (belongs to the 3rd party), there are two ways to let the 6G CN know about its information.

AF (that owns the computing sites) can send the computing site information to the 6G CN, via 6G NEF (if it is untrusted AF). The computing site information can either be stored at CMF, or at 6G UDM/UDR, or at Proxy NF. If it is not stored at CMF, CMF can subscribe towards the corresponding NF and gets notification about its update.

The computing site can send its information to the 6G CN via the 6G PSA-UPF. This can be achieved by 6G CN providing the selected PSA UPF information to the AF, or upon the active subscription sent from CMF to the computing site via the selected 6G PSA-UPF.

The computing site information provided by the computing site can include:

Site identification, address information and port number

Site location (e.g., represented by DNAI)

Site status (e.g., percentage of resource usage status, overloaded or not)

Supported computing resource type and its capacity/amount.

The computing service-related information that is running on the computing site, e.g., success/finish/failure, the processing delay of the computing service.

6.22.X.2 Procedures

![](data:image/x-emf;base64...)

Figure 6.22.X.2-1. Procedure of computing site (in DN) information awareness at 6G CN

**Step 1**: AF sends the computing site information to the 6G CN, that includes the computing site identification information (computing site ID, FQDN), address information (IP address, port number), DNAI of the computing site, AF information, transaction ID, computing resource type (e.g., app specific resource (APP identifier/DNN), plain resource, AI model), supported amount/capacity of the computing resource (pure computing resources), load status of the computing site, etc. It is assumed that the AF can have access to the computing site and obtain the related information, which is not within the scope of SA2.

**Step 2:** 6G-NEF authorizes the AF provisioning by checking the AF authorization information, stored in the 6G UDM/UDR, or locally configured. The authorization information can include, e.g., allowed AF information for provisioning. 6G-NEF may also select the CMF for storing the computing site information, either from NRF, or based on local configuration. If the information is stored at 6G UDM/UDR or proxy NF, then 6G-NEF will select accordingly.

**NOTE:** There might be a gateway NF acting between the NEF and the 6G CMF.

**Step 3:** 6G-NEF sends the AF provisioning response to the AF associated with transaction ID, either accept (if authorized), or reject with a cause value.

**Step 4a:** For the case of storing at the 6G UDM/UDR or a proxy NF, 6G-NEF selects the corresponding NF and sends the computing site information listed in step 1, together with selected CMF information.

**Step 5a:** 6G UDM/UDR or the proxy NF stores the computing site information locally and further notify the information to the CMF. This can either be based on the CMF information indicated by 6G-NEF in step 4a or based on the active retrieval from the CMF.

**Step 4b:** Alternatively, 6G NEF sends the computing site information directly to the selected CMF.

**Step 6:** CMF locally stores the computing site information (in the DN), and the AF information associated with the computing site. The computing site information can be used by the CMF to select for the received computing service request. Alternatively, CMF may also authorize the AF provisioning request.

**Step 7a/7b:** CMF subscribes/monitors the computing site information either towards the 6G UDM/UDR/proxy NF, or towards the AF (optionally via NEF) based on the association. The subscription input can include, e.g., computing site identification information/Address, the subscription correlation ID, notification target information (e.g., CMF), and the notification method (periodic, event, one-time), etc. For the AF method, the CMF may further subscribe to the computing site about the computing service/task information by providing the correlation ID that identifies the computing service, e.g., service finish/failure status, processing delay, transmission rate, result generation rate, etc.

**Step 8:** Based on the computing site information (e.g., DNAI), the CMF or the 6G SMF determine the 6G PSA-UPF information that can access the computing site in DN. What’s more, the determined 6G PSA-UPF information can also be sent to AF, which can be used by the computing site to send its information via the user plane.

**Step 9:** Alternatively, CMF sends the computing site subscription/monitoring request towards the computing site via the 6G PSA-UPF, where the content is the same as in step 7a/7b. For this method, the CMF may further subscribe to the computing site about the computing service/task information, e.g., service finish/failure, processing delay, transmission rate, result generation rate, etc.

**Step 10:** Based on the subscription/monitoring request received in step 9, or the AF instruction (by providing 6G PSA-UPF information), the computing site sends the computing site information to the CMF via the 6G PSA-UPF.

6.22.X.3 Services, Entities and Interfaces

**AF**:

Provide the computing site information to the 6G CN.

Receive the subscription of the computing site and computing service information from 6G CN.

**CMF**:

Receive the computing site information in the DN from AF, or retrieve from 6G UDM/UDR/Proxy NF, or via 6G PSA UPF

Subscribe/monitor the computing site information in the DN towards the AF, 6G UDM/UDR/Proxy NF, or to the computing site via the 6G PSA UPF.

Subscribe/monitor the computing service status and service information towards the computing site (DN) via AF, or via 6G PSA UPF.

**6G UDM/UDR/proxy NF:**

Store the computing site information that is in the DN (provided by AF).

Notify the computing site information update towards the CMF.

>>>>END OF CHANGES<<<<