/**
 * Content model for the revamp (TCS-style IA; multi-cloud, Claude and
 * consulting positioning).
 *
 * Rule: every content-heavy module reads from these collections and
 * renders nothing while its data is empty. Collections default to [].
 * Nothing here may hold an invented fact: no client, metric, award,
 * office, headcount, price or person that isn't real.
 */

export type Cloud = 'aws' | 'microsoft-azure' | 'google-cloud'

export type IndustrySlug =
  | 'financial-services'
  | 'legal-professional-services'
  | 'software-saas'
  | 'healthcare'
  | 'public-sector'

export type RegionSlug = 'global' | 'uk' | 'middle-east' | 'europe' | 'us' | 'india'

/** Shared shape for stories, insights, news, events and recognitions. */
export interface CollectionItem {
  slug: string
  title: string
  summary: string
  /** Path under /public. Without one, the card uses an ImageSlot placeholder. */
  image?: string
  imageAlt?: string
  /** ISO date. */
  date?: string
  industries: IndustrySlug[]
  /** Service or pillar slugs, e.g. 'data-analytics', 'claude'. */
  services: string[]
  clouds: Cloud[]
  region?: RegionSlug
  href: string
}

export interface Person {
  name: string
  role: string
  /** e.g. 'consulting', 'cloud', 'applied-ai', 'engineering-data', 'leadership'. */
  practice: string
  /** Path under /public, 3:4 portrait. Empty until a professional headshot exists. */
  photo: string
  bio: string
  linkedinUrl: string
}

export interface Partner {
  /** e.g. 'AWS', 'Microsoft', 'Google Cloud', 'Anthropic'. */
  name: string
  /** The programme's official name. */
  programme: string
  /**
   * Only 'member' allows a badge or any "partner" wording anywhere on the
   * site, and only with an official badge file supplied by the owner.
   */
  status: 'none' | 'applied' | 'member'
  badgeSrc?: string
}

export interface Certification {
  /** e.g. 'AWS Certified Solutions Architect – Professional'. */
  name: string
  /** Number of people holding it, if stated. */
  count?: number
}

/** True when at least one programme is a confirmed membership. */
export const hasMembership = (partners: Partner[]) => partners.some((p) => p.status === 'member')
