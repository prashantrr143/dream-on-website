/**
 * Which Insights articles are live. This is the publishing switch, kept in
 * its own tiny module so the header and footer (browser code) can check
 * "is there anything to link to?" without importing the article text.
 *
 * To publish an article: add its slug here and set status: 'published'
 * and publishedAt in its file under lib/insights/articles/. A test
 * (tests/content.spec.ts) fails if the two ever disagree.
 */
export const PUBLISHED_INSIGHT_SLUGS: string[] = [
  'aba-opinion-512-generative-ai-law-firms',
  'ai-agent-kill-switches-approvals-audit-logs',
  'anatomy-of-mcp',
  'mcp-anti-patterns',
  'azure-finops-quick-wins',
  'azure-openai-uae-north-data-residency',
  'enterprise-ai-governance-operating-model',
  'sr-26-2-ai-agents-bank-supervisors',
  'ai-agent-identity-access-delegation',
  'testing-ai-agents-before-production',
  'eu-ai-act-for-financial-services-operations',
  'kyc-automation-without-black-boxes',
  'mcp-governance-for-regulated-firms',
  'nist-ai-rmf-for-mid-market-teams',
  'soc-2-evidence-from-pipelines',
  'taking-an-ai-pilot-to-production',
]

/** True once at least one article is published (drives nav, footer, sitemap). */
export const hasArticles = PUBLISHED_INSIGHT_SLUGS.length > 0
