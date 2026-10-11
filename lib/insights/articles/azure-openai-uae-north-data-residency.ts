import type { Article } from '../types'

export const article: Article = {
  slug: 'azure-openai-uae-north-data-residency',
  title: 'Azure OpenAI in UAE North: what data residency actually covers',
  summary:
    'A UAE North resource does not keep every prompt in the UAE. What each deployment type does, how abuse monitoring works, and what to configure.',
  category: 'Cloud',
  readTime: '6 min read',
  author: 'YatiSphere team',
  status: 'draft',
  reviewedAt: '2026-10-11',
  sections: [
    {
      paragraphs: [
        'A common assumption in UAE AI projects: we created the Azure OpenAI resource in UAE North, so our data stays in the UAE. That is only partly true. Where a prompt is processed depends on the deployment type you choose for each model, not on where the resource sits. What gets stored, and who can read it, depends on abuse monitoring, the features you turn on, and whether anything you use is in preview.',
        'This article sets out what Microsoft documents, as of October 2026, for Azure OpenAI and other Foundry Models sold by Azure in UAE North. It then looks at what that means under the UAE federal data protection law and the DIFC and ADGM regimes. Availability changes often, so check the linked Microsoft pages before you design anything. This is not legal advice. Your counsel and data protection officer should make the final call on the legal questions.',
      ],
    },
    {
      heading: 'What UAE North offers, as of October 2026',
      paragraphs: [
        'Microsoft offers three groups of deployment types. Global types may process prompts in any Azure region where the model is deployed. Data Zone types process only within a Microsoft-defined zone: the US, the EU or Asia Pacific. Standard (regional) and Regional Provisioned types process prompts and responses within the Azure geography you choose. Microsoft adds that processing may move between regions inside that geography for operational reasons.',
        'Here is what the region availability page showed for UAE North when we checked it in October 2026:',
      ],
      bullets: [
        'Global Standard and Global Provisioned: the broadest choice, including the GPT-4o, GPT-4.1, GPT-5 and GPT-6 families, the o-series reasoning models and the embedding models.',
        'Data Zone Standard, Data Zone Provisioned and Data Zone Batch: listed as not available for the Middle East. There is no Middle East data zone.',
        'Standard (regional, pay per token): only embedding models (text-embedding-3-large, text-embedding-3-small, text-embedding-ada-002) and whisper. No chat or reasoning models.',
        'Regional Provisioned: a shorter list of chat and reasoning models, including gpt-4.1, gpt-4o, gpt-5-mini, gpt-5.1, gpt-6-sol, o1, o3-mini and o4-mini. You pay for reserved capacity (provisioned throughput units).',
        'Global Batch: not listed for UAE North.',
      ],
    },
    {
      heading: 'Where prompts, completions and stored data go',
      paragraphs: [
        'In practice, if you need a chat model and need prompts processed only within the UAE geography, the documented route in UAE North is Regional Provisioned. A Global Standard deployment created in a UAE North resource may process prompts outside the UAE. Microsoft also says new models arrive Global first, then Data Zone, then geography-based, with no guaranteed date for the last. Expect the newest models to be Global-only for some time.',
        'Data at rest is a separate matter. Microsoft states that data stored at rest stays in the customer-designated geography for every deployment type, Global included. That covers files you upload, data kept by the Responses API, Assistants threads and stored completions, and the abuse monitoring data store. This stored data sits in the Foundry resource in your own Azure tenant. It is encrypted with AES-256 by default, you can add a customer-managed key, and you can delete it at any time.',
        'Microsoft also states that your prompts, completions, embeddings and training data are not available to OpenAI or other model providers, and are not used to train foundation models without your permission. There are two caveats to note. Batch processing is a Global deployment type, so batch prompts may be processed in any geography where the model is deployed. Preview features may follow different privacy practices: Microsoft\'s data residency page says preview services typically store customer data in the United States but may store it globally.',
      ],
    },
    {
      heading: 'Abuse monitoring and human review',
      paragraphs: [
        'By default, Microsoft runs abuse monitoring on Foundry Models sold by Azure. Classifiers score prompts and completions for harmful content, and pattern detection looks for repeated or deliberate misuse. Flagged content goes to automated review first, which may use a language model. Content that goes through automated review is not stored. If automated review is not confident, or is not available, authorized Microsoft employees may review the content. They work from secure access workstations with just-in-time approval. Prompts and completions kept for human review are stored in the geography where your Foundry resource is deployed, separated by resource.',
        'For the EEA, Microsoft states that the human reviewers are located in the EEA. We found no equivalent statement about reviewer location for the UAE. If that matters to your risk assessment, ask your Microsoft account team for it in writing.',
        'Customers with highly sensitive data can apply for modified abuse monitoring. If approved, Microsoft does not store prompts and completions for human review, although automated review may still run. Eligibility is limited to customers and partners managed by a Microsoft account team or in an eligible program, and some advanced models have stricter criteria. You apply through Microsoft\'s Limited Access form. Once approved, the resource\'s JSON view (or az cognitiveservices account show) lists a ContentLogging capability set to false.',
      ],
    },
    {
      heading: 'Reading this against the PDPL, DIFC and ADGM',
      paragraphs: [
        'Onshore, Federal Decree-Law No. 45 of 2021 on personal data protection came into force on 2 January 2022. The government portal describes it as applying to processing inside or outside the country and as setting requirements for cross-border transfer and sharing. The UAE Data Office is the federal regulator. A Global deployment that may process prompts outside the UAE should therefore go through your transfer assessment, not be assumed in scope. Health data also has its own federal law (Federal Law No. 2 of 2019 on the use of ICT in health fields), which you should check separately.',
        'The DIFC and ADGM have their own data protection laws and regulators, and both approach the question from their own boundary. Under Article 26 of the DIFC Data Protection Law, data may leave the DIFC only to a jurisdiction recognized as adequate, unless an Article 27 safeguard or exception applies. As of October 2026, onshore UAE is not on the Commissioner\'s adequacy list, and the DIFC publishes its own standard contractual clauses. ADGM guidance is explicit: onshore UAE counts as a non-ADGM jurisdiction, and no de minimis exemption applies.',
        'So a UAE North region does not settle the question for a DIFC or ADGM firm. Ask counsel whether using the service is a transfer under your regime and, if it is, which mechanism covers it. DIFC firms should also look at Regulation 10 on autonomous and semi-autonomous systems. The Commissioner\'s guidance says the deployer and operator of such a system must comply in substantially the same way as a controller and processor, and it places weight on clear notice to the people whose data the system processes.',
      ],
    },
    {
      heading: 'A practical configuration checklist',
      paragraphs: [
        'These are the controls we would expect in a UAE North design:',
      ],
      bullets: [
        'Pick deployment types per model on purpose. Use Regional Provisioned for chat workloads that must stay in the UAE geography, and Standard for embeddings and whisper. Use an Azure Policy assignment to block GlobalStandard and other SKUs you have not approved.',
        'Check the model against Microsoft\'s region availability page and your quota before you commit, and note the date.',
        'Avoid preview features and Global Batch for in-scope data unless your assessment covers them.',
        'Set public network access to Disabled and connect through a private endpoint in a virtual network in the same region. Confirm that DNS resolves to the private IP address from inside the network.',
        'Add a customer-managed key from a Key Vault or Managed HSM in the same region as the Foundry resource, with soft delete and purge protection on.',
        'Turn off key-based access (disableLocalAuth set to true, or the built-in Azure Policy) and call the service with Microsoft Entra ID and managed identities, scoped by role.',
        'Send diagnostic logs to a Log Analytics workspace in the same geography. Decide whether gateway or application logs capture prompt text, and where they live.',
        'If you qualify, apply for modified abuse monitoring, then verify that ContentLogging shows false.',
        'Record the deployment type, region and check date for each model in your record of processing.',
      ],
    },
    {
      heading: 'How we approach it',
      paragraphs: [
        'At YatiSphere we are cloud-neutral and model-agnostic. On Azure we build in the client\'s own tenant, and a person approves consequential actions. We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model. Our Solution Blueprint is where a design like this, and the questions for your counsel, get settled before anything is built.',
      ],
    },
  ],
  sources: [
    {
      title: 'Region availability for Foundry Models sold by Azure',
      url: 'https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure-region-availability',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Understanding deployment types in Microsoft Foundry Models',
      url: 'https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/deployment-types',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Foundry Models sold by Azure',
      url: 'https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Data, privacy, and security for Foundry Models sold by Azure in Microsoft Foundry',
      url: 'https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Foundry Models sold by Azure abuse monitoring',
      url: 'https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/abuse-monitoring',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Limited access to Azure OpenAI in Microsoft Foundry Models',
      url: 'https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/openai/limited-access',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Data residency in Azure',
      url: 'https://azure.microsoft.com/en-us/explore/global-infrastructure/data-residency/',
      publisher: 'Microsoft Azure',
    },
    {
      title: 'Configure customer-managed keys for Microsoft Foundry',
      url: 'https://learn.microsoft.com/en-us/azure/ai-studio/concepts/encryption-keys-portal',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'How to configure network isolation for Microsoft Foundry',
      url: 'https://learn.microsoft.com/en-us/azure/foundry/how-to/configure-private-link',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Disable local authentication in Foundry Tools',
      url: 'https://learn.microsoft.com/en-us/azure/ai-services/disable-local-auth',
      publisher: 'Microsoft Learn',
    },
    {
      title: 'Data protection laws',
      url: 'https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws',
      publisher: 'The UAE Government portal (u.ae)',
    },
    {
      title: 'Data export and sharing: transferring personal data',
      url: 'https://www.difc.com/business/registrars-and-commissioners/commissioner-of-data-protection/data-export-and-sharing',
      publisher: 'DIFC Commissioner of Data Protection',
    },
    {
      title: 'Regulation 10 on personal data processed through autonomous and semi-autonomous systems (guidance)',
      url: 'https://assets.difc.com/v1/media/edge/images/dubaiintern0078-difcexperie96c5-production-3253/media/project/difcexperiences/difc/difcwebsite/documents/registrars-and-commissioners/guidance-and-handbooks/lawful-processing/dp_regulation_10.pdf',
      publisher: 'DIFC Commissioner of Data Protection',
    },
    {
      title: 'Regulation 10',
      url: 'https://www.difc.com/business/registrars-and-commissioners/commissioner-of-data-protection/regulation-10',
      publisher: 'DIFC Commissioner of Data Protection',
    },
    {
      title: 'Guidance on the Data Protection Regulations 2021, Part 6 (international transfers)',
      url: 'https://assets.adgm.com/download/assets/ADGM+DPR+2021+Guidance+Part+6.pdf/e743e728595711ef80b936e29b0f3a63',
      publisher: 'ADGM Office of Data Protection',
    },
  ],
  related: [
    { label: 'Cloud engineering on Azure', href: '/what-we-do/cloud' },
    { label: 'Security and compliance', href: '/what-we-do/services/security-compliance' },
    { label: 'Responsible AI', href: '/who-we-are/responsible-ai' },
  ],
}
