import type { Article } from '../types'

/**
 * DRAFT (2026-11-01). US-led article on the NIST AI RMF for firms without a
 * large compliance function. Facts are taken only from the sources listed;
 * confirm the current revision status on nist.gov before publishing. To
 * publish: add the slug to lib/insights/published.ts, set status
 * 'published' and publishedAt.
 */
export const article: Article = {
  slug: 'nist-ai-rmf-for-mid-market-teams',
  title: 'Using the NIST AI RMF without a large compliance team',
  seoTitle: 'NIST AI RMF for mid-market teams',
  summary:
    'A practical way to apply the voluntary NIST AI RMF and its Generative AI Profile to one AI system, without a large compliance team.',
  category: 'Applied AI',
  readTime: '5 min read',
  author: 'YatiSphere team',
  status: 'draft',
  tags: { industries: ['financial-services', 'software-saas'], services: ['applied-ai', 'ai-governance'], clouds: [] },
  reviewedAt: '2026-11-01',
  sections: [
    {
      paragraphs: [
        'NIST published the AI Risk Management Framework (AI RMF 1.0, NIST AI 100-1) in January 2023. It is voluntary guidance, not law. In July 2024 NIST added a Generative AI Profile (NIST AI 600-1) that applies the framework to generative AI and lists twelve risks specific to it, from confabulation to information security and value-chain integration.',
        'For a mid-sized company the framework can look like a program for a bank. It does not have to be. Applied to one AI system at a time, its four functions turn into a short set of documents and checks that a security reviewer or a customer will recognise.',
      ],
    },
    {
      heading: 'Govern: name an owner and write down the rules',
      paragraphs: [
        'Govern is about accountability. For one system, that means a named business owner, a short policy on what the system may and may not do, and an inventory entry: what it is, which model and provider it uses, and what data it touches.',
      ],
    },
    {
      heading: 'Map: describe the context before you build',
      paragraphs: [
        'Map covers the context of the system and its impacts. Write down the decision the system supports, who is affected, what a wrong output would cost, and which of the Generative AI Profile risks apply. Confabulation and data privacy apply to almost every assistant; others, such as intellectual property, depend on the use case.',
      ],
    },
    {
      heading: 'Measure: test against thresholds agreed in advance',
      paragraphs: [
        'Measure is evaluation. Build a test set from real, representative cases, including awkward ones, and agree pass thresholds with the business owner before the build starts. Run the same tests after every change to the model, the prompts or the data it retrieves.',
      ],
    },
    {
      heading: 'Manage: monitor, respond and review suppliers',
      paragraphs: [
        'Manage covers what happens once the system is live, including risks from third parties such as the model provider. Monitor quality and cost, decide in advance what triggers a rollback, keep a person on consequential actions, and review the provider’s terms on retention and training.',
      ],
      bullets: [
        'An owner and a one-page policy (Govern)',
        'A context note listing the risks that apply (Map)',
        'A test set, thresholds and results for each release (Measure)',
        'Monitoring, a rollback trigger and a supplier review (Manage)',
      ],
    },
    {
      heading: 'Where to start',
      paragraphs: [
        'Pick the AI system closest to production and produce the four items above for it. That gives a reviewer something concrete to read, and gives the team a template for the next system. NIST has said the framework is being revised, so check the current version on nist.gov when you write your policy.',
      ],
    },
  ],
  sources: [
    {
      title: 'NIST AI Risk Management Framework and Generative AI Profile (summary)',
      url: 'https://docs.modulos.ai/frameworks/nist-ai-rmf/generative-ai-profile',
      publisher: 'Modulos documentation',
    },
    {
      title: 'AI Risk Management Framework',
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      publisher: 'NIST',
    },
  ],
  related: [
    { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance' },
    { label: 'AI pilot to production', href: '/what-we-do/applied-ai' },
    { label: 'Responsible AI', href: '/who-we-are/responsible-ai' },
  ],
}
