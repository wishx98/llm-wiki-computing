**3GPP TSG-WG SA2#174 S2-2601897**

**St Julian’s Malta, 13 – 17 April 2026 (revision of S2-26xxxxx)**

**Source: Ericsson**

**Title: [KI#22] Comments on general issues and solutions to be captured in TR 23.801-01**

**Document for: Approval**

**Agenda item: 20.6.22**

**Work Item: FS\_6G\_ARC**

*Abstract of the contribution: This contribution provides comments and editors notes to be capture in the TR.*

# Discussion

This clause discusses general architectural issues and considerations identified across the proposed solution variants for 6G computing support that need to be resolved. In particular for solutions that intend to manage compute resources in the CN (e.g. clause 20.6.22.2) there’s a need to clarify what is meant with compute resources in context of the solution. e.g. At which level, e.g., IaaS, PaaS, the compute resources are provisioned and how do they reflect on the definition of the UE request and the response to the UE?

In Infrastructure as a Service (IaaS), compute resources are typically provisioned as virtual machines (VMs), containers, storage volumes, and network interfaces. Proper lifecycle management must address every stage of this process: resource planning based on User Equipment (UE) requests, resource instantiation, resource management (e.g., VM response time monitoring and CPU load control), and the final release of the resources when the service concludes.

During the planning phase, the system evaluates the UE's compute capacity, latency, and availability requirements to select resources that fulfill these needs. For example, if a UE requests GPUs for executing an AI task and the latency must be less than 100ms, the compute site that provides the GPU resources and fulfils the latency requirement shall be selected.

Resource instantiation then involves allocating and spinning up VMs or containers with requested GPUs, volumes, and interfaces required for the request.

While the resources are in use, resource management is responsible for ensuring resource performance assurance and monitoring resource usage. For example, if the VM response time exceeds a specified threshold, the location of the GPUs may need to be re-selected; similarly, if GPU usage surpasses 80%, additional GPU must be allocated.

Finally, upon completion of the compute service, the timely and effective release of resources, such as tearing down VMs, deleting containers, and removing storage volumes and network interfaces is essential to ensure the resources can be reused.

If a UE should be able to request IaaS where CN is involved in management, the request needs to specify standard hardware requirements, such as vGPU, vCPU, memory, storage, and operating system images, alongside critical network specific parameters like geographic proximity, strict latency thresholds, and desired network slices. In response, the system provisions virtualized resources and provides the UE with standard access details, including the provisioning status, resource IDs, and authentication credentials (such as SSH keys). If the infrastructure is embedded within the CN or operator managed environment such as SHE, the response may also deliver specialized network connectivity instructions, including the designated DN, internal private IP addresses, and UPF traffic steering rules required for the UE to securely route its data directly to the compute instances without traversing the public internet.

Platform as a Service (PaaS) provides platform resources such as runtime environments, databases, middleware, and API gateways. Similarly, appropriate lifecycle management must address every stage of this process: platform planning based on User Equipment (UE) application requests, environment onboarding, platform management (e.g., UE KPI monitoring and dynamic auto-scaling), and the final release of the platform resources when the service concludes.

During the planning phase, the system evaluates the UE's application requirements, such as expected throughput, database capacity, latency, and runtime dependencies, to select the platform services that fulfill these requirements. For example, if a UE requests to build, train and deploy a specified AI model, the system selects computing sites that provide proper environment for the AI model.

Environment instantiation then involves initializing the specific runtime environments for the AI model, provisioning databases, and configuring the middleware and APIs required for the AI model.

While the AI building, training and deployment services are in use, platform management is responsible for assuring platform performance and monitoring the AI environment usage.

Finally, upon completion of the AI service, the timely and effective release of resources, such as tearing down AI runtime environments, safely archiving or dropping databases, and removing middleware configurations, is essential to ensure the underlying infrastructure capacity can be reused.

If a UE should be able to request PaaS where CN is involved in management, the request needs to specify standard software environment requirements, such as runtime frameworks, managed databases, application payloads, and auto-scaling rules, alongside critical network specific parameters like the UE request for IaaS. In response, the system provisions the requested software platforms and provides the UE with standard access details, including the deployment status, application endpoints (such as API URLs), and authentication credentials (such as access tokens or database connection strings). If the platform is embedded within the CN or operator managed environment such as SHE, the response may also deliver specialized network connectivity instructions, like the response for the IaaS request.

Another open question for solutions where the CN is involved in managing compute resources is how the CN gains access to the management of those resources. CN NFs are, by design, not aware of underlying compute infrastructure, as virtualization and cloudification were introduced to decouple network functions from the infrastructure and to ensure a clear separation of concerns.

Another area requiring clarification concerns the distinction between computing nodes and computing sites. The terminology is used inconsistently across the text, with the two terms appearing interchangeably in some cases, while in others they are described as interacting entities. Clear definitions are needed to avoid ambiguity. For example, when Kubernetes is used as an illustrative deployment model, it should be clarified whether computing nodes are assumed to reside within a computing site, and how the relationship between these concepts is intended to be understood.

# Proposal

It’s proposed that the penholder(s) add the following Editor’s notes where applicable in the new penholder document for SA2#174:

Editor’s note: Each solution where the CN is involved in managing compute resources need to clarify what is meant by compute resources in context of the solution e.g. is it IaaS, PaaS or other concepts.

Editor’s note: Each solution where the CN is involved in managing compute resources need to clarify how the CN is able to access the management of those resources.

Editor’s note: Each solution where the CN is involved in managing compute resources need to clarify the lifecycle management procedure in terms of compute resource planning, instantiation, management and releasing in the context of the specified solution e.g., IaaS, PaaS or other concepts.

Editor’s note: Each solution where the CN is involved in managing compute resources need to clarify what is included in the UE request in the context of the specified solution e.g., IaaS, PaaS or other concepts.

Editor’s note: Each solution where the CN is involved in managing compute resources need to clarify what is included in the response to the UE in the context of the specified solution e.g., IaaS, PaaS or other concepts.

Editor’s note: As hosts of compute resources, the differences between a compute site and a compute node shall be clarified.