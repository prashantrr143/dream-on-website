import type { Article } from '../types'

export const article: Article = {
  slug: 'kyc-automation-without-black-boxes',
  title: 'KYC automation without black boxes',
  summary:
    'How to automate document checks, sanctions and PEP screening and adverse media while keeping every onboarding decision explainable and auditable.',
  category: 'Financial services',
  readTime: '6 min read',
  author: 'YatiSphere team',
  status: 'draft',
  reviewedAt: '2026-10-11',
  sections: [
    {
      paragraphs: [
        'Most onboarding teams do not need to be convinced that KYC can be automated. Document capture, liveness checks, sanctions and PEP screening and adverse media searches are all available as services, and plenty of them now include machine learning. The harder question is what happens when a regulator, an auditor or a customer asks why a particular decision was made. If the honest answer is "the vendor score was 0.82", the automation has created a problem rather than solved one.',
        'This article sets out a practical pattern for automating onboarding checks while keeping decisions explainable: deterministic rules where they will do, model outputs that carry their reasons, people on every potential match, and a case file that records all of it. It also covers what the main model risk management guidance in the US and UK actually says, because its scope has changed in 2026 and is often misquoted. It is general industry practice, not legal advice.',
      ],
    },
    {
      heading: 'Break onboarding into decisions you can name',
      paragraphs: [
        'A black box usually starts as a single "onboarding risk" score that blends identity, screening and risk factors into one number. Start instead by listing the separate decisions the journey makes, each with its own owner, inputs and possible outcomes. That list becomes the backbone of the design, the procedures and the audit trail.',
      ],
      bullets: [
        'Identity: is the document genuine, does it belong to the person presenting it, and is the data extracted from it correct?',
        'Screening: does the customer, director or beneficial owner potentially match a sanctions or PEP list entry, and is that match true or false?',
        'Adverse media: is there credible, relevant negative information about this person or entity?',
        'Risk rating: given everything above, which due diligence level applies?',
        'Relationship: do we onboard, onboard with conditions, escalate, or decline?',
      ],
    },
    {
      heading: 'Rules first, models where they earn their place',
      paragraphs: [
        'Much of KYC is deterministic: a document is expired or it is not, a required field is present or it is not, a country is on the firm\'s high-risk list or it is not. Write these as explicit, versioned rules. They are easy to test, easy to explain, and a reviewer can read them. The US guidance discussed below excludes deterministic rule-based processes from its definition of a model, and the PRA expects deterministic methods not classified as models to be subject to sound and clearly documented controls. Rules are not free of governance, but they are far cheaper to govern than models.',
        'Use models where the input is genuinely unstructured or probabilistic: reading a document image, comparing a selfie with a photo, ranking fuzzy name matches, or classifying whether a news article is about the right person and is actually negative. For each model, require an output that a reviewer can check: the extracted fields with confidence, the list entry and the attributes that matched or did not, the article passage that triggered the flag. A score with no reasons should never be the only thing a reviewer sees.',
        'Large language models can help summarize adverse media or draft case notes, but treat them as drafting aids. Store the source material they summarized next to the summary, so the reviewer and any later auditor judge the evidence, not the paraphrase.',
      ],
    },
    {
      heading: 'Screening: people decide on potential matches',
      paragraphs: [
        'Automated screening produces potential matches, not conclusions. The UK FCA\'s Financial Crime Guide lists, among examples of poor practice, a firm that does not understand how to calibrate its automated systems, does not check whether the number of hits is unexpectedly high or low, has limited understanding of how a third-party tool is calibrated and when its lists are updated, and keeps no audit trail of decisions where potential matches are judged to be false positives. Each of those is a design requirement in disguise.',
      ],
      bullets: [
        'Record the matching configuration (thresholds, transliteration and fuzzy rules) as versioned settings, and log which version produced each alert.',
        'Record the list source and list version used for every screen, and rescreen the existing book when lists change.',
        'Route every potential match to a reviewer, with the matching and non-matching attributes laid out side by side.',
        'Require a reason code and free-text rationale for each discount or escalation, and sample closed alerts for quality review.',
        'Track alert volumes over time so that a sudden rise or fall is investigated rather than absorbed.',
      ],
    },
    {
      heading: 'The case file is the product',
      paragraphs: [
        'Explainability in KYC is less about model internals and more about whether a complete, time-stamped record exists for each customer: what was collected, which checks ran, which rule and model versions were used, what each returned, who reviewed what, and what they decided and why. If a case management system cannot reproduce that chain months later, the automation upstream does not matter.',
        'In the EU, this is becoming explicit. The Anti-Money Laundering Regulation, (EU) 2024/1624, applies from 10 July 2027 for most obliged entities (as of October 2026). Article 76(5) allows decisions resulting from automated processes, including AI systems, provided that decisions to enter into, maintain or refuse a business relationship, or to change the extent of due diligence, are subject to meaningful human intervention, and that the customer can obtain an explanation of the decision and challenge it. Article 77 requires firms to retain the due diligence documents and information they obtain, including information obtained through electronic identification means.',
        'FATF\'s 2020 guidance on digital identity points the same way. It is non-binding, but it says that non-face-to-face identification relying on reliable, independent digital ID systems with appropriate risk mitigation may be standard risk, and may even be lower risk. That conclusion depends on the firm understanding the assurance levels of the digital ID system it relies on and recording that assessment, and the guidance notes that record-keeping requirements apply equally to digital and documentary evidence.',
      ],
    },
    {
      heading: 'What model risk guidance actually covers',
      paragraphs: [
        'Many teams still cite SR 11-7. As of October 2026 it has been superseded: on April 17, 2026 the Federal Reserve, OCC and FDIC issued SR 26-2, revised guidance on model risk management, which replaces both SR 11-7 and SR 21-8, the 2021 interagency statement on model risk management for bank systems supporting BSA/AML compliance. SR 26-2 is risk-based, says it is expected to be most relevant to banking organizations with over $30 billion in total assets, and states that it does not set enforceable standards. It excludes generative and agentic AI models from its scope while saying a bank\'s risk management and governance practices should still determine controls for them. It keeps the concept of effective challenge and expects vendor models to be understood, validated, and monitored for whether they remain fit for purpose.',
        'In the UK, the PRA\'s SS1/23 took effect on May 17, 2024 and was updated in April 2026. Its expectations apply to UK-incorporated banks, building societies and PRA-designated investment firms with internal model approval to calculate regulatory capital. Firms without that approval, and third-country branches, are out of scope but are welcome to consider the principles; credit unions, insurers and reinsurers are out of scope. Its model definition covers models used to inform business decisions, including vendor models, and its tiering principle names interpretability, explainability, transparency and potential bias as factors in assessing complexity.',
        'For a KYC stack, the practical reading is the same either way: keep an inventory of the models in the onboarding journey, including vendor ones; tier them by how much they drive decisions; validate the material ones independently; monitor outcomes such as false-positive rates and reviewer overrides; and document the rules that sit around them.',
      ],
    },
    {
      heading: 'Where to start',
      paragraphs: [
        'Pick one decision, usually sanctions and PEP potential-match review, and map it end to end: inputs, rules, model calls, reviewer screens, reason codes and the record left behind. Gaps in that map are the backlog. At YatiSphere this kind of mapping is what a Solution Blueprint covers before any build. We are cloud-neutral and model-agnostic, and code and infrastructure live in the client\'s own accounts. A person approves consequential actions, which in KYC means every decision to onboard, decline or escalate.',
      ],
    },
  ],
  sources: [
    {
      title: 'SR 26-2: Revised Guidance on Model Risk Management',
      url: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm',
      publisher: 'Board of Governors of the Federal Reserve System',
    },
    {
      title: 'SR 26-2 attachment: Supervisory Guidance on Model Risk Management (April 17, 2026)',
      url: 'https://www.federalreserve.gov/supervisionreg/srletters/SR2602a1.pdf',
      publisher: 'Federal Reserve, FDIC and OCC',
    },
    {
      title: 'SS1/23 – Model risk management principles for banks',
      url: 'https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss',
      publisher: 'Bank of England, Prudential Regulation Authority',
    },
    {
      title: 'SS1/23 Model risk management principles for banks (April 2026 version)',
      url: 'https://www.bankofengland.co.uk/-/media/boe/files/prudential-regulation/supervisory-statement/2026/liaf0126app5.pdf',
      publisher: 'Bank of England, Prudential Regulation Authority',
    },
    {
      title: 'FCG 7.2 Themes (Financial Crime Guide: sanctions and asset freezes)',
      url: 'https://www.handbook.fca.org.uk/handbook/FCG/7/2.html',
      publisher: 'Financial Conduct Authority',
    },
    {
      title: 'Regulation (EU) 2024/1624 on the prevention of the use of the financial system for money laundering or terrorist financing',
      url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32024R1624',
      publisher: 'EUR-Lex, Publications Office of the European Union',
    },
    {
      title: 'Guidance on Digital Identity (March 2020), copy published by Labuan FSA',
      url: 'https://www.labuanfsa.gov.my/clients/asset_120A5FB8-61B6-45E8-93F0-3F79F86455C8/contentms/img/documents/AML_CFT/Guidelines_directives/2020/Appendix%20II%20-%20Guidance%20on%20Digital%20Identity_09122020.pdf',
      publisher: 'Financial Action Task Force (FATF)',
    },
  ],
  related: [
    { label: 'Financial services', href: '/what-we-do/industries/financial-services' },
    { label: 'Responsible AI', href: '/who-we-are/responsible-ai' },
    { label: 'Solution Blueprint', href: '/blueprint' },
  ],
}
