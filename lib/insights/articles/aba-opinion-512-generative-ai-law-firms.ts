import type { Article } from '../types'

/**
 * Published 2026-11-08. US-led article for the legal wedge. Facts are taken
 * only from the sources listed and were re-checked on 2026-11-08: added the
 * supervision and candor sections, corrected the engagement-letter advice
 * (the opinion says boilerplate consent is not enough) and the fee
 * treatment of tool costs. General information, not legal advice.
 */
export const article: Article = {
  slug: 'aba-opinion-512-generative-ai-law-firms',
  title: 'Generative AI in a law firm: what ABA Formal Opinion 512 asks of you',
  seoTitle: 'ABA Formal Opinion 512 and generative AI in law firms',
  summary:
    'How the ABA’s first generative AI opinion applies competence, confidentiality, communication and fee duties to the AI tools a law firm rolls out.',
  category: 'Regulation',
  readTime: '6 min read',
  author: 'YatiSphere team',
  status: 'published',
  publishedAt: '2026-11-08',
  tags: { industries: ['legal-professional-services'], services: ['applied-ai', 'ai-governance'], clouds: [] },
  reviewedAt: '2026-11-08',
  sections: [
    {
      paragraphs: [
        'On July 29, 2024 the American Bar Association’s Standing Committee on Ethics and Professional Responsibility issued Formal Opinion 512, its first formal opinion on lawyers’ use of generative AI tools. It does not create new rules. It explains how existing Model Rules apply: competence (Rule 1.1), confidentiality (Rule 1.6), communication with clients (Rule 1.4), candor and meritorious claims (Rules 3.1, 3.3 and 8.4(c)), supervision (Rules 5.1 and 5.3) and fees (Rule 1.5).',
        'For a firm deciding which AI tools to allow, the opinion is less about whether to use them and more about the controls that have to sit around them. This note sets out what each duty means in practice and what a firm can put in place before a tool reaches fee earners.',
      ],
    },
    {
      heading: 'Competence: know what the tool does and where it fails',
      paragraphs: [
        'Rule 1.1 already requires the knowledge, skill and preparation a matter reasonably needs. The opinion applies that to generative AI: lawyers should understand the benefits and risks of the tools they use, including that output can be wrong and has to be checked.',
        'In practice that means a firm should know, for each approved tool, what it is good at, what it is not, and how its output is reviewed before it reaches a client or a court.',
      ],
    },
    {
      heading: 'Confidentiality: informed consent before client information goes in',
      paragraphs: [
        'Rule 1.6 protects all information relating to a representation, whatever its source. Before information relating to a representation goes into a self-learning tool, one that may keep or learn from what it is given, the opinion expects the lawyer to assess the risk of disclosure and obtain the client’s informed consent. It is explicit that boilerplate consent in an engagement letter is not adequate: the client needs to understand the specific tool, the information involved and the risks.',
        'The technical answer is to know exactly where data goes. A firm should be able to say, for each tool, whether prompts and documents are stored, for how long, who at the provider can access them, and whether they are used for training.',
      ],
      bullets: [
        'Prefer deployments where inputs are not used for training and retention is set by the firm',
        'Limit what each user can retrieve to the matters they can already see',
        'Log prompts and outputs in the firm’s own environment, not only at the provider',
      ],
    },
    {
      heading: 'Communication: tell clients when it matters',
      paragraphs: [
        'Rule 1.4 requires lawyers to reasonably consult clients about how their objectives will be pursued. Under the opinion, whether to tell a client about generative AI use depends on the facts. Disclosure is called for when the client asks, when the engagement terms require it, when informed consent is needed under Rule 1.6, when it affects the fee, or when the output will influence a significant decision in the matter.',
      ],
    },
    {
      heading: 'Candor: check every citation before it reaches a court',
      paragraphs: [
        'Rules 3.1 and 3.3 require claims to be meritorious and statements to a tribunal to be true, and Rule 8.4(c) prohibits misrepresentation. The opinion warns that generative AI output can contain false statements of law or fact, including citations to decisions that do not exist, and that even an unintentional misstatement to a court can be a misrepresentation. Output has to be reviewed, citations included, before it is filed. The opinion reads “tribunal” broadly, to include arbitrators and administrative agencies.',
      ],
    },
    {
      heading: 'Supervision: firm policy, training and vendor oversight',
      paragraphs: [
        'Rules 5.1 and 5.3 make managerial and supervisory lawyers responsible for reasonable measures that keep lawyers, staff and outside providers within the rules. Applied to generative AI, the opinion expects clear firm policies on permitted use, training for lawyers and nonlawyer staff, and the same due diligence on a generative AI provider that a firm would apply to any outside vendor handling client information.',
      ],
    },
    {
      heading: 'Fees: bill the work, not the learning',
      paragraphs: [
        'Rule 1.5 requires fees and expenses to be reasonable. A lawyer billing by the hour may bill only the time actually spent, so if a tool makes a task faster, the bill should reflect the time actually taken. Lawyers generally may not bill a client for time spent learning a tool they will use across their practice; the exception is where the client asks for a particular tool.',
        'On costs, a general-purpose tool is normally office overhead. The opinion allows reasonable charges for a specific tool used on a matter, such as per-use costs, provided the basis is explained to the client in advance.',
      ],
    },
    {
      heading: 'What a firm can put in place first',
      paragraphs: [
        'None of this needs a large program. Most firms can cover the opinion with a short list of controls, agreed before the first tool is rolled out widely.',
      ],
      bullets: [
        'A list of approved tools, with what each may and may not be used for',
        'A written data boundary for each tool: storage, retention, training and access',
        'A review step for any AI-assisted work product before it leaves the firm',
        'A consent process for client information in self-learning tools, specific to the tool, not boilerplate',
        'Training for lawyers and staff on each tool’s limits, the review step and citation checks',
        'Vendor due diligence on each provider, as for any outside service handling client data',
        'A record of which matters used which tool, so questions can be answered later',
      ],
    },
    {
      heading: 'Check your state bar as well',
      paragraphs: [
        'The ABA Model Rules are a model. Each state adopts its own rules, and several state bars have issued their own guidance on generative AI. The opinion itself expects further guidance as tools develop. Before a rollout, check the guidance from the bars where the firm’s lawyers are admitted.',
        'This article is general information, not legal advice. Your firm’s general counsel or ethics counsel should confirm how these duties apply to your practice.',
      ],
    },
  ],
  faq: [
    {
      q: 'What is ABA Formal Opinion 512?',
      a: 'The American Bar Association’s first formal ethics opinion on lawyers’ use of generative AI, issued on July 29, 2024. It creates no new rules; it explains how existing Model Rules on competence, confidentiality, communication, candor, supervision and fees apply to generative AI tools.',
    },
    {
      q: 'Is engagement-letter language enough for client consent?',
      a: 'No. Before client information goes into a self-learning tool, the opinion expects informed consent and says boilerplate consent in an engagement letter is not adequate. The client needs to understand the tool, the information involved and the risks.',
    },
    {
      q: 'Can a law firm bill clients for time spent learning an AI tool?',
      a: 'Generally not, for a tool the lawyer will use across their practice. The exception is where the client asks for a particular tool. Hourly billing must reflect the time actually spent, including when a tool makes the work faster.',
    },
    {
      q: 'Does Opinion 512 override state bar rules?',
      a: 'No. The Model Rules are a model and each state adopts its own. Several state bars have issued their own generative AI guidance, so check the bars where the firm’s lawyers are admitted.',
    },
  ],
  sources: [
    {
      title: 'ABA Formal Opinion 512: Generative Artificial Intelligence Tools',
      url: 'https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf',
      publisher: 'American Bar Association',
    },
    {
      title: 'ABA Ethics Opinion on Generative AI Offers Useful Framework',
      url: 'https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-october/aba-ethics-opinion-generative-ai-offers-useful-framework/',
      publisher: 'American Bar Association, Business Law Today',
    },
    {
      title: 'ABA issues first ethics guidance on a lawyer’s use of AI tools',
      url: 'https://www.americanbar.org/news/abanews/aba-news-archives/2024/07/aba-issues-first-ethics-guidance-ai-tools/',
      publisher: 'American Bar Association',
    },
    {
      title: 'ABA issues first ethics guidance on a lawyer’s use of AI tools',
      url: 'https://www.floridabar.org/the-florida-bar-news/aba-issues-first-ethics-guidance-on-a-lawyers-use-of-ai-tools/',
      publisher: 'The Florida Bar News',
    },
  ],
  related: [
    { label: 'Legal & professional services', href: '/what-we-do/industries/legal-professional-services' },
    { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance' },
    { label: 'Solution Blueprint', href: '/blueprint' },
  ],
}
