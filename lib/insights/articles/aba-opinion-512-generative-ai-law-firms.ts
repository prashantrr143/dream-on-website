import type { Article } from '../types'

/**
 * DRAFT (2026-11-01). US-led article for the legal wedge. Facts are taken
 * only from the sources listed; a lawyer should review it before it is
 * published, and state-bar guidance should be checked for the firms you
 * target. To publish: add the slug to lib/insights/published.ts, set
 * status 'published' and publishedAt.
 */
export const article: Article = {
  slug: 'aba-opinion-512-generative-ai-law-firms',
  title: 'Generative AI in a law firm: what ABA Formal Opinion 512 asks of you',
  seoTitle: 'ABA Formal Opinion 512 and generative AI in law firms',
  summary:
    'How the ABA’s first generative AI opinion applies competence, confidentiality, communication and fee duties to the AI tools a law firm rolls out.',
  category: 'Regulation',
  readTime: '5 min read',
  author: 'YatiSphere team',
  status: 'draft',
  tags: { industries: ['legal-professional-services'], services: ['applied-ai', 'ai-governance'], clouds: [] },
  reviewedAt: '2026-11-01',
  sections: [
    {
      paragraphs: [
        'On July 29, 2024 the American Bar Association’s Standing Committee on Ethics and Professional Responsibility issued Formal Opinion 512, its first formal opinion on lawyers’ use of generative AI tools. It does not create new rules. It explains how existing Model Rules apply, principally competence (Rule 1.1), confidentiality (Rule 1.6), communication with clients (Rule 1.4) and fees (Rule 1.5).',
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
        'Rule 1.6 protects all information relating to a representation, whatever its source. The opinion treats putting that information into a generative AI tool as a confidentiality question, and points to informed consent where client information would be exposed to risk, for example through a tool that keeps or learns from inputs.',
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
        'Rule 1.4 requires lawyers to reasonably consult clients about how their objectives will be pursued. The opinion discusses when that includes telling a client that generative AI will be used, especially where it affects the representation or the fee. Many firms now address this in engagement letters rather than matter by matter.',
      ],
    },
    {
      heading: 'Fees: bill the work, not the learning',
      paragraphs: [
        'Rule 1.5 requires fees and expenses to be reasonable. The opinion says a lawyer billing by the hour may bill the time actually spent, including time to prompt a tool and to review its output, but in most cases may not bill a client for time spent learning to use the tool. If a tool makes a task faster, the time billed should reflect the time actually taken.',
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
        'Engagement-letter language on AI use, agreed with the firm’s general counsel',
        'Short training for fee earners on the tool’s limits and the review step',
        'A record of which matters used which tool, so questions can be answered later',
      ],
    },
    {
      heading: 'Check your state bar as well',
      paragraphs: [
        'The ABA Model Rules are a model. Each state adopts its own rules, and several state bars have issued their own guidance on generative AI. The opinion itself expects further guidance as tools develop. Before a rollout, check the guidance from the bars where the firm’s lawyers are admitted.',
      ],
    },
  ],
  sources: [
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
