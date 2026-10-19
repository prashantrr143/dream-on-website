import type { Article } from '../types'

export const article: Article = {
  slug: 'eu-ai-act-for-financial-services-operations',
  title: 'The EU AI Act for bank and insurance operations teams',
  summary:
    'Which credit and insurance uses are high-risk, what deployers must do, and the dates that apply after the Digital Omnibus on AI, as of October 2026.',
  category: 'Regulation',
  readTime: '6 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-10-19',
  tags: { industries: ['financial-services'], services: ['applied-ai', 'ai-governance', 'consulting'], clouds: [] },
  reviewedAt: '2026-10-11',
  sections: [
    {
      paragraphs: [
        'Most EU AI Act commentary is written for companies that build AI. Banks and insurers more often buy a scoring model or a chatbot and run it inside processes that already answer to a supervisor. The Act calls that role the deployer, and it carries its own obligations.',
        'This note is for heads of operations, compliance leads and CIOs who need a working view of three things: which financial-services uses the Act treats as high-risk, what a deployer has to do about them, and when. The timeline changed in July 2026, so the dates below are stated as of October 2026. Check the linked sources before relying on them.',
      ],
    },
    {
      heading: 'Which financial-services uses are high-risk',
      paragraphs: [
        'Annex III of the AI Act lists the stand-alone use cases treated as high-risk. Two of them sit squarely in financial services. Point 5(b) covers AI systems intended to evaluate the creditworthiness of natural persons or establish their credit score, with an exception for systems used to detect financial fraud. Point 5(c) covers AI systems intended for risk assessment and pricing in relation to natural persons in life and health insurance.',
        'Recital 58 explains that these systems shape access to financial resources and essential services. It also indicates that systems provided for by Union law to detect fraud in financial services, or to calculate capital requirements for credit institutions and insurers, should not be considered high-risk under this heading.',
        'Article 6(3) lets a provider conclude that an Annex III system is not high-risk when it only performs a narrow procedural task, improves the result of a completed human activity, detects deviations from prior decision patterns without replacing human review, or performs a preparatory task. That route is closed where the system profiles natural persons, which most credit scoring does. The Commission published draft guidelines on high-risk classification on 19 May 2026; check whether a final version has since been adopted.',
        'Corporate lending, market risk, AML monitoring and most back-office automation are not Annex III use cases in their own right, though they stay under your existing governance.',
      ],
    },
    {
      heading: 'Provider or deployer: work out which you are',
      paragraphs: [
        'Most of the heavy obligations for high-risk systems fall on the provider: the risk management system, data governance, technical documentation, conformity assessment and registration. The deployer has a shorter list, but it is the list your operations team will own day to day. The EBA notes that a bank building a system in-house is typically both provider and deployer, while a bank using a third-party system is only a deployer.',
        'The boundary moves. Under Article 25(1), a deployer is treated as the provider of a high-risk system if it puts its own name or trademark on it, makes a substantial modification to it, or changes the intended purpose of a system, including a general-purpose AI system, so that it becomes high-risk. Pointing a general-purpose model at affordability decisions is the kind of change to take to counsel first.',
      ],
    },
    {
      heading: 'What a deployer has to do',
      paragraphs: [
        'For high-risk systems, Article 26 sets the core deployer duties, Article 27 adds a fundamental rights impact assessment that applies specifically to deployers of the Annex III point 5(b) and 5(c) systems, and Article 86 gives affected people a right to an explanation of the role the system played in a decision about them. In practice that becomes a short operating checklist:',
      ],
      bullets: [
        'An AI inventory. List every system in use, its provider, its intended purpose and the process it feeds, including general-purpose tools adopted informally.',
        'Risk classification. Record for each system whether it falls under Annex III, and why, including any Article 6(3) reasoning a provider relies on.',
        'Use within the instructions for use. Article 26(1) requires appropriate technical and organizational measures so the system is used as the provider intended, and Article 26(4) requires input data under your control to be relevant and sufficiently representative.',
        'Human oversight. Article 26(2) requires oversight to be assigned to people with the necessary competence, training, authority and support. Name the role and give it real authority to override.',
        'Logging. Article 26(6) requires automatically generated logs under your control to be kept for a period appropriate to the purpose and at least six months. Financial institutions keep them as part of the documentation already required under financial services law.',
        'Monitoring and incidents. Article 26(5) requires deployers to monitor operation and inform the provider and authorities of risks and serious incidents. For financial institutions subject to internal governance rules, complying with those rules is treated as meeting the monitoring obligation.',
        'Transparency to people. Under Article 26(11), deployers of Annex III systems that make or assist decisions about natural persons must tell them they are subject to the system. Separately, Article 50 requires that people interacting directly with an AI system, such as a service chatbot, are made aware of it.',
        'A fundamental rights impact assessment before first use of a 5(b) or 5(c) system. Where a data protection impact assessment already covers some of the ground, the amended Article 27(4) lets you cross-refer to it.',
        'AI literacy. Article 4 has applied since 2 February 2025. As amended in 2026, it requires providers and deployers to take measures to support the AI literacy of staff and others operating AI systems on their behalf, without guaranteeing any specific level for any individual.',
      ],
    },
    {
      heading: 'The timeline, as of October 2026',
      paragraphs: [
        'The AI Act entered into force on 1 August 2024. Prohibited practices and AI literacy have applied since 2 February 2025, and the general-purpose AI model rules since 2 August 2025.',
        'The high-risk dates have moved, and the change is adopted, not proposed. Regulation (EU) 2026/1744, the Digital Omnibus on AI, was signed on 8 July 2026, published in the Official Journal on 24 July 2026 and, according to the European Commission, entered into force on 27 July 2026. It amends Article 113 so that the high-risk requirements in Chapter III, Sections 1 to 3 apply:',
      ],
      bullets: [
        'From 2 December 2027 for systems classified as high-risk under Article 6(2) and Annex III, which includes credit scoring and life and health insurance pricing.',
        'From 2 August 2028 for systems classified as high-risk under Article 6(1) and Annex I, meaning AI in regulated products.',
        'The Article 50 transparency obligations have applied since 2 August 2026. Providers of generative systems placed on the market before that date have until 2 December 2026 to meet the output-marking requirement in Article 50(2).',
      ],
    },
    {
      heading: 'How it sits alongside DORA and model risk management',
      paragraphs: [
        'The EBA mapped the AI Act against banking and payments law for creditworthiness and credit scoring and reported in November 2025 that it found no significant contradictions. It described the Act as complementary to sectoral law, said firms may need some effort to integrate the two frameworks, and saw no immediate need for new or revised EBA guidelines. DORA, which has applied since 17 January 2025, already governs the ICT risk, incident reporting and third-party arrangements around these systems. Model risk management stays the home for validation and change control.',
        'For insurers, EIOPA published an Opinion on AI governance and risk management on 6 August 2025. It sets no new requirements and expressly excludes systems that are high-risk or prohibited under the AI Act, so life and health pricing models fall under the Act itself, while EIOPA\'s expectations on data governance, fairness, explainability and human oversight apply to the rest of an insurer\'s AI estate.',
        'Supervision also follows existing lines. Under Article 74(6), for high-risk systems used by regulated financial institutions in direct connection with their services, the market surveillance authority is the national authority responsible for their financial supervision.',
      ],
    },
    {
      heading: 'Using the extra time well',
      paragraphs: [
        'December 2027 is not far away for a firm that has not yet built an inventory. A sensible order is to complete the inventory and classification first, settle provider or deployer status with each vendor in the contract, then fold oversight, logging and impact assessments into the governance you already run for DORA and model risk.',
        'When YatiSphere works on AI in regulated processes, the design starts from the same place: a person approves consequential actions, code and infrastructure stay in the client\'s own accounts, and the first step is a Solution Blueprint that maps systems, roles and controls before anything is built. We do not use client data to train or fine-tune models, unless a client asks us to in writing for their own dedicated model.',
      ],
    },
  ],
  sources: [
    {
      title: 'Regulation (EU) 2024/1689 (Artificial Intelligence Act), Official Journal text',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202401689',
      publisher: 'EUR-Lex',
    },
    {
      title: 'Regulation (EU) 2026/1744 (Digital Omnibus on AI)',
      url: 'https://eur-lex.europa.eu/eli/reg/2026/1744/oj?locale=en',
      publisher: 'EUR-Lex',
    },
    {
      title: 'AI Act, Annex III: High-risk AI systems referred to in Article 6(2)',
      url: 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3',
      publisher: 'European Commission, AI Act Service Desk',
    },
    {
      title: 'AI Act: regulatory framework and application timeline',
      url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
      publisher: 'European Commission',
    },
    {
      title: 'Draft Commission guidelines on the classification of high-risk AI systems',
      url: 'https://digital-strategy.ec.europa.eu/en/library/draft-commission-guidelines-classification-high-risk-ai-systems',
      publisher: 'European Commission',
    },
    {
      title: 'AI Act: implications for the EU banking and payments sector',
      url: 'https://www.eba.europa.eu/sites/default/files/2025-11/d8b999ce-a1d9-4964-9606-971bbc2aaf89/AI%20Act%20implications%20for%20the%20EU%20banking%20sector.pdf',
      publisher: 'European Banking Authority',
    },
    {
      title: 'EIOPA publishes Opinion on AI governance and risk management',
      url: 'https://www.eiopa.europa.eu/eiopa-publishes-opinion-ai-governance-and-risk-management-2025-08-06_en',
      publisher: 'EIOPA',
    },
    {
      title: 'Digital Operational Resilience Act (DORA)',
      url: 'https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en',
      publisher: 'EIOPA',
    },
  ],
  related: [
    { label: 'Responsible AI', href: '/who-we-are/responsible-ai' },
    { label: 'Financial services', href: '/what-we-do/industries/financial-services' },
    { label: 'Solution Blueprint', href: '/blueprint' },
  ],
}
