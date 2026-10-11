import type { ArticleSource } from './insights/types'

/** Content for a /regions/{slug} page. Facts only; every one traceable to `sources`. */
export interface RegionPage {
  /** Must match a slug in lib/region.ts REGIONS. */
  slug: 'uk' | 'middle-east'
  name: string
  /** H1. */
  title: string
  lede: string
  /** <= 60 characters including " | YatiSphere". */
  metaTitle: string
  /** <= 155 characters. */
  metaDescription: string
  /** ISO date the facts were last checked. */
  reviewedAt: string
  /** Financial-services and sector regulators whose rules we design for. */
  regulators: { name: string; scope: string }[]
  /** Data-protection laws that apply to clients in the region. */
  privacy: { name: string; note: string }[]
  /** Azure regions relevant to data residency, and what they mean in practice. */
  residency: { region: string; note: string }[]
  /** Working arrangements: hours, data terms, delivery. No pricing or invoicing terms. */
  commercial: { title: string; body: string }[]
  /** Honest statement about local presence (no office claimed unless one exists). */
  presence: string
  sources: ArticleSource[]
}
