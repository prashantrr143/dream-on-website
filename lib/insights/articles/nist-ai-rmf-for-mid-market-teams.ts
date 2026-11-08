import type { Article } from '../types'

/**
 * Published 2026-11-08. US-led article on the NIST AI RMF for firms without
 * a large compliance function. Facts are taken only from the sources listed.
 * Revision status re-checked 2026-11-08: AI RMF 1.0 is still the current
 * version; NIST says it is being revised under the July 2025 AI Action Plan.
 * Re-check that sentence when NIST publishes a new version.
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
  status: 'published',
  publishedAt: '2026-11-08',
  tags: { industries: ['financial-services', 'software-saas'], services: ['applied-ai', 'ai-governance'], clouds: [] },
  reviewedAt: '2026-11-08',
  sections: [
    {
      paragraphs: [
        'NIST published the AI Risk Management Framework (AI RMF 1.0, NIST AI 100-1) on January 26, 2023. It is voluntary guidance, not law, and there is no NIST certification attached to it. On July 26, 2024 NIST added a Generative AI Profile (NIST AI 600-1) that applies the framework to generative AI and lists twelve risks specific to it, from confabulation to information security and value-chain integration.',
        'For a mid-sized company the framework can look like a program for a bank. It does not have to be. Applied to one AI system at a time, its four functions turn into a short set of documents and checks that a security reviewer or a customer will recognize.',
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
        'Pick the AI system closest to production and produce the four items above for it. That gives a reviewer something concrete to read, and gives the team a template for the next system.',
      ],
    },
    {
      heading: 'Which version to cite',
      paragraphs: [
        'As of November 2026, AI RMF 1.0 is still the current version. NIST says it is being revised as part of the White House AI Action Plan of July 2025 and has not published a successor or a date. In policies and customer answers, name the version you align to, for example “aligned with NIST AI RMF 1.0 (NIST AI 100-1) and the Generative AI Profile (NIST AI 600-1)”, and check nist.gov when you review the policy.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the NIST AI RMF mandatory?',
      a: 'No. NIST describes it as voluntary guidance, and there is no NIST certification for it. Customers, regulators and auditors often use it as a reference for what good AI risk management looks like.',
    },
    {
      q: 'What is the NIST Generative AI Profile?',
      a: 'NIST AI 600-1, published on July 26, 2024. It applies the AI RMF to generative AI, lists twelve risks specific to it, such as confabulation, data privacy and information security, and suggests actions for each.',
    },
    {
      q: 'Is there a NIST AI RMF 2.0?',
      a: 'Not as of November 2026. AI RMF 1.0 is the current version. NIST says it is being revised under the July 2025 AI Action Plan but has not published a new version or a date.',
    },
    {
      q: 'What is the minimum a small team can do?',
      a: 'For one AI system: a named owner and a one-page policy (Govern), a note on context and applicable risks (Map), a test set with agreed thresholds and results (Measure), and monitoring, a rollback trigger and a supplier review (Manage).',
    },
  ],
  sources: [
    {
      title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1',
      url: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf',
      publisher: 'NIST',
    },
    {
      title: 'Generative Artificial Intelligence Profile, NIST AI 600-1',
      url: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf',
      publisher: 'NIST',
    },
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
