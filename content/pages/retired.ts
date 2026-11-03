/**
 * Retired /what-we-do pages and where each one now lives.
 *
 * SEO consolidation, 2026-11-01: a young domain spread over ~50 similar
 * pages concentrates no authority anywhere, so the site keeps about 20
 * deeper pages. Each retired path 308-redirects in ONE hop (proxy.ts) to
 * the page that absorbed it, and every internal link to it is rewritten
 * at build time (content/pages/index.ts), so nothing links to a redirect.
 *
 * Kept tiny and import-free: proxy.ts runs on the edge and imports it.
 * The page data stays in content/pages/*.ts; delete a line here to bring
 * a page back.
 */
const W = '/what-we-do'

export const RETIRED: Record<string, string> = {
  // Earlier refresh (2026-10-19)
  [`${W}/cloud/google-cloud`]: `${W}/cloud`,
  [`${W}/industries/healthcare`]: W,
  [`${W}/industries/public-sector`]: W,

  // Consulting folds into the fixed-fee Solution Blueprint
  [`${W}/consulting`]: '/blueprint',
  [`${W}/consulting/technology-strategy`]: '/blueprint',
  // /consulting/enterprise-architecture is live again (2026-11-03).
  [`${W}/consulting/modernization-roadmaps`]: '/blueprint',
  [`${W}/consulting/due-diligence`]: '/blueprint',
  [`${W}/consulting/ai-strategy`]: `${W}/applied-ai`,
  [`${W}/consulting/cloud-strategy-finops`]: `${W}/cloud`,

  // Cloud: one foundations page plus migration
  [`${W}/cloud/aws`]: `${W}/cloud`,
  [`${W}/cloud/microsoft-azure`]: `${W}/cloud`,
  [`${W}/cloud/landing-zones`]: `${W}/cloud`,
  [`${W}/cloud/finops`]: `${W}/cloud`,
  [`${W}/cloud/managed-operations`]: `${W}/cloud`,
  [`${W}/cloud/resilience`]: `${W}/cloud`,

  // Applied AI: platforms and knowledge assistants live under agentic automation
  [`${W}/applied-ai/ai-platforms`]: `${W}/applied-ai/agentic-automation`,
  [`${W}/applied-ai/knowledge-assistants`]: `${W}/applied-ai/agentic-automation`,

  // Engineering & data: one page; security & compliance stays (secondary offer)
  [`${W}/services/software-engineering`]: `${W}/engineering-data`,
  [`${W}/services/data-analytics`]: `${W}/engineering-data`,
  [`${W}/services/devops-platform-engineering`]: `${W}/engineering-data`,
  [`${W}/services/modernization`]: `${W}/engineering-data`,
}

/** An internal href with any retired path swapped for its new home (hash kept only if the page is unchanged). */
export function liveHref(href: string): string {
  const [path = '', hash] = href.split('#')
  const target = RETIRED[path]
  if (target) return target
  return hash !== undefined ? `${path}#${hash}` : path
}
