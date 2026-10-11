import type { Article } from '../types'

export const article: Article = {
  slug: 'taking-an-ai-pilot-to-production',
  title: 'Taking an AI pilot to production in a regulated business',
  summary:
    'What changes between an AI demo and a system a regulated business can run: evaluation, guardrails, approvals, identity, monitoring and ownership.',
  category: 'Applied AI',
  readTime: '6 min read',
  author: 'YatiSphere team',
  status: 'draft',
  reviewedAt: '2026-10-11',
  sections: [
    {
      paragraphs: [
        'Most AI pilots prove one thing: that a model can do the task on a good day, with friendly inputs, in front of people who want it to work. That is worth knowing, but it is not the question a regulated business has to answer. The production question is different. What happens on a bad day, who notices, who is accountable, and can you show an auditor or a regulator what the system did and why?',
        'The gap between those two questions is mostly engineering and operating discipline, not model capability. This article sets out what we think has to change, in roughly the order it should happen.',
      ],
    },
    {
      heading: 'Agree what good looks like before you build',
      paragraphs: [
        'A demo is judged by impression. A production system needs an evaluation set and acceptance thresholds that the business owner, the risk function and the engineering team sign off before the build starts. If the thresholds are set after the results come in, they will be set to match the results.',
        'The evaluation set should be built from real, representative cases, including the awkward ones: incomplete documents, ambiguous requests, out-of-scope questions and inputs that try to make the system misbehave. Each case needs an expected outcome a reviewer can check. Thresholds should be set per failure type, because a wrong answer that a person will catch is not the same as a wrong action that goes straight into a customer record.',
        'This maps neatly onto the NIST AI Risk Management Framework, a voluntary framework published in January 2023. Its MAP function establishes the context needed to frame the risks of a specific system, and its MEASURE function uses quantitative, qualitative or mixed methods to assess them. Writing down the context and the acceptance criteria first is MAP; running the evaluation set on every change is MEASURE.',
      ],
      bullets: [
        'Name the decision the system supports and what a wrong output would cost.',
        'Build the evaluation set from real cases, with expected outcomes, before writing prompts.',
        'Set pass thresholds per failure type and get them signed off.',
        'Re-run the full set on every prompt, model, retrieval or code change.',
      ],
    },
    {
      heading: 'Design for the bad day',
      paragraphs: [
        'Guardrails are not one setting. On Azure, the content filtering system in Microsoft Foundry screens prompts and completions for harmful content, and optional Prompt Shields detect user prompt attacks and indirect attacks, where instructions are hidden inside documents the model reads. Indirect attacks matter most for retrieval and agent systems, because the model is reading text nobody on your team wrote.',
        'Your application still has to handle what the filters do. Microsoft documents that a filtered prompt returns an HTTP 400 error and a filtered completion comes back with a finish_reason of content_filter, so code must check for both. It also documents that if the filtering system is unavailable, the request can complete without filtering, with an error recorded in the content_filter_results field. A production system should treat that as a failure to handle, not a success.',
        'More broadly, every call to a model needs a defined fallback: retry, degrade to a simpler path, or hand the case to a person with the context attached. Silent failure is the one option that should not exist.',
      ],
    },
    {
      heading: 'Keep a person on consequential actions',
      paragraphs: [
        'Drafting, summarizing and classifying are low-stakes when a person reviews the output. Paying, approving, rejecting, sending or changing a record of fact are not. For those, the system should prepare the action and a person should approve it, with the approval, the approver and the evidence the model relied on written to an audit log.',
        'This is how we build: a person approves consequential actions. Approval should be a real decision point with the relevant evidence on screen, not a button people learn to click through. If reviewers approve nearly everything without reading it, that is a signal to revisit the design, not to remove the step.',
      ],
    },
    {
      heading: 'Connect to systems of record under real identities',
      paragraphs: [
        'Pilots often run on exported spreadsheets and a shared API key. Production systems read from and write to the systems of record, so they inherit those systems’ access rules. The AI component should act under a defined identity with the least access it needs, and where it acts on behalf of a user it should be able to see only what that user can see.',
        'On Azure, Microsoft Entra ID lets an application call Azure OpenAI without storing an API key: the code requests a short-lived token for an identity that has been granted a role on the resource. Microsoft’s guidance uses a managed identity for apps hosted in Azure, with no secret to store or rotate, and the Cognitive Services OpenAI User role for inference. That removes a class of leaked-key incidents and puts model access in the same access reviews as everything else.',
        'Write-backs deserve particular care. Use the system of record’s own APIs and validation, make writes idempotent, and record which model version and prompt produced each change.',
      ],
    },
    {
      heading: 'Run it like a service, including the model',
      paragraphs: [
        'Once live, you need to see quality, latency, errors, filter events, human override rates and cost, per use case. Token spend is the cost line most likely to surprise. One option on Azure is the llm-emit-token-metric policy in Azure API Management, which sends token counts, such as prompt, completion and total tokens, to Application Insights with dimensions such as API or subscription, so cost can be attributed and alerted on.',
        'Model change is the part pilots never meet. Microsoft’s published lifecycle policy for Foundry Models gives generally available models a standard 18-month lifecycle, with some publishers on 12 months, after which inference requests return 410 Gone. Retirement notices go out at least 60 days ahead, and Standard deployments can be upgraded automatically unless the versionUpgradeOption setting says otherwise. Either way, the model under your system will change on a schedule you do not control.',
        'The answer is to treat a model version like any other dependency: pin it deliberately, watch the retirement schedule, and run the evaluation set against the replacement well before the date. This is MANAGE in NIST terms: allocating resources to risks you have mapped and measured, on a regular basis.',
      ],
    },
    {
      heading: 'Give it an owner and a runbook',
      paragraphs: [
        'Every production AI system needs a named business owner who decides what it should do and a named technical owner who keeps it running. It needs runbooks for the likely incidents: quality drops, a filter outage, a model retirement, a suspected prompt injection, a cost spike, and a request to switch it off. It needs a tested way to switch it off.',
        'NIST describes GOVERN as a cross-cutting function infused throughout the others, and ISO/IEC 42001:2023 specifies requirements for establishing, implementing, maintaining and continually improving an AI management system. Neither is a checklist for a single project, but both point the same way: AI risk is managed through ongoing ownership and process, not a one-time launch review. If you expect to pursue ISO/IEC 42001 later, building ownership and records in from the start makes that easier.',
        'Our own first step with a client is a Solution Blueprint that sets out these decisions before any build, and the code and infrastructure live in the client’s own accounts so ownership is clear from day one. We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.',
      ],
      bullets: [
        'Evaluation set and thresholds signed off before build.',
        'Filter results and fallbacks handled in code, including filter outages.',
        'Human approval, with an audit trail, on consequential actions.',
        'Keyless, least-privilege identity for every model and data call.',
        'Per-use-case dashboards for quality, cost and overrides.',
        'Model versions pinned, retirement dates tracked, replacements evaluated early.',
        'Named owners, runbooks and a tested off switch.',
      ],
    },
  ],
  sources: [
    {
      title: 'AI Risk Management Framework',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      publisher: 'NIST',
    },
    {
      title: 'AI RMF Core (Section 5): Govern, Map, Measure, Manage',
      url: 'https://airc.nist.gov/airmf-resources/airmf/5-sec-core/',
      publisher: 'NIST Trustworthy and Responsible AI Resource Center',
    },
    {
      title: 'ISO/IEC 42001:2023 Information technology: Artificial intelligence: Management system',
      url: 'https://webstore.iec.ch/publication/90574',
      publisher: 'IEC',
    },
    {
      title: 'Content filtering for Microsoft Foundry Models',
      url: 'https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/content-filter',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'How to configure Azure OpenAI in Microsoft Foundry Models with Microsoft Entra ID authentication',
      url: 'https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/managed-identity',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Azure API Management policy reference: llm-emit-token-metric',
      url: 'https://learn.microsoft.com/en-us/azure/api-management/azure-openai-emit-token-metric-policy',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Foundry Models lifecycle and support policy',
      url: 'https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/model-retirements',
      publisher: 'Microsoft Learn',
    },
  ],
  related: [
    { label: 'Applied AI', href: '/what-we-do/applied-ai' },
    { label: 'Responsible AI', href: '/who-we-are/responsible-ai' },
    { label: 'Solution Blueprint', href: '/blueprint' },
  ],
}
