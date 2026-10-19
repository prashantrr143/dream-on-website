/**
 * Facts the site may publish, in one place (content/site.ts; lib/site.config.ts
 * re-exports it for existing imports).
 *
 * Every field is empty by default. A component that reads from here
 * renders nothing while its value is empty, so a fact appears on the
 * site only once someone has filled it in with something true. Never
 * put placeholder text ("TBD", "[Client]", sample figures) in this file.
 */

export interface ProofMetric {
  value: string
  label: string
}

export interface ProofBadge {
  name: string
  imageSrc: string
  href: string
}

export interface TeamMember {
  name: string
  role: string
  /** Path under /public, 3:4 portrait. */
  photo: string
  /** Two lines at most. */
  bio: string
  linkedinUrl: string
  /** Matches a service practice, e.g. "cloud", for "Who you'll work with". */
  practice: string
}

/**
 * A delivered engagement. Real ones only: anonymize the client if needed
 * ("a UK wealth manager"), but every outcome must be measured, and an
 * engagement delivered by team members before YatiSphere existed must
 * say so in `context` rather than imply it was a company client.
 */
export interface CaseStudy {
  slug: string
  title: string
  industry: string
  services: string[]
  region: string
  summary: string
  context: string
  constraint: string
  approach: string
  /** Measured results only, e.g. { value: "38%", label: "lower monthly Azure spend" }. */
  outcomes: ProofMetric[]
  /** Path under /public. */
  architectureImage?: string
  stack: string[]
  quote?: { text: string; name: string; role: string }
}

export interface Subprocessor {
  name: string
  purpose: string
  location: string
}

export interface TrustDocument {
  title: string
  href: string
}

export interface PostalAddress {
  /** Building, street and sector, e.g. "A-12, Sector 63". */
  streetAddress: string
  locality: string
  region: string
  postalCode: string
  /** ISO 3166-1 alpha-2, e.g. "IN", "AE". */
  country: string
}

export interface Office {
  /** Shown before the address, e.g. "Dubai". */
  label: string
  address: PostalAddress
}

import type { Certification, Partner } from './types'

export interface SiteConfig {
  company: {
    legalName: string
    /** Corporate Identification Number. */
    cin: string
    /**
     * Registered office. The footer prints it only once streetAddress
     * and postalCode are set; a city on its own reads as a gap.
     */
    registeredOffice: PostalAddress
    /**
     * Further offices (e.g. UAE). Add one only once it genuinely exists:
     * a signed lease or a registered branch, not a plan.
     */
    offices: Office[]
    /** International format with country code, e.g. "+91 120 123 4567". */
    phone: string
    email: string
    linkedinUrl: string
    regionsServed: string[]
  }
  /** Full profile URLs. Each renders only when set. */
  social: { linkedin?: string; x?: string; youtube?: string }
  /**
   * Cloud and AI programmes. Vendor logos and any "partner" wording are
   * allowed only for entries with status 'member' (see content/types.ts).
   */
  partners: Partner[]
  /** Team certifications, as held. */
  certifications: Certification[]
  /** Microsoft Bookings or Calendly embed URL. */
  bookingUrl: string
  proof: {
    metrics: ProofMetric[]
    badges: ProofBadge[]
  }
  team: TeamMember[]
  caseStudies: CaseStudy[]
  blueprint: {
    /** Path under /public. */
    sampleDeliverablePdf?: string
  }
  trust: {
    subprocessors: Subprocessor[]
    documents: TrustDocument[]
    certificationsRoadmap: string[]
  }
}

export const siteConfig: SiteConfig = {
  company: {
    // Already published on the site and in the privacy policy.
    legalName: 'YatiSphere Technologies Private Limited',
    // From the MCA registration record (incorporated 22 Dec 2025, ROC Kanpur).
    cin: 'U62013UP2025PTC239315',
    registeredOffice: {
      // Sector only, by choice; the full address is on the MCA record.
      streetAddress: 'Sector 100',
      locality: 'Noida',
      region: 'Uttar Pradesh',
      postalCode: '201301',
      country: 'IN',
    },
    offices: [],
    phone: '',
    email: 'sales@yatisphere.com',
    linkedinUrl: 'https://www.linkedin.com/company/145293614/',
    regionsServed: [],
  },
  social: {},
  partners: [],
  certifications: [],
  bookingUrl: '',
  proof: {
    metrics: [],
    badges: [],
  },
  team: [],
  caseStudies: [],
  blueprint: {},
  trust: {
    subprocessors: [],
    documents: [],
    // Confirmed by the owner on 2026-10-11. Planned, not held.
    certificationsRoadmap: [
      'UK Cyber Essentials: in progress now',
      'ISO/IEC 27001: planned within about 12 months',
    ],
  },
}

const COUNTRY_NAMES: Record<string, string> = {
  IN: 'India',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  US: 'United States',
}

/** True once an address has enough detail to publish. */
export function isCompleteAddress(a: PostalAddress): boolean {
  return Boolean(a.streetAddress && a.locality && a.postalCode && a.country)
}

/** One-line form for display, e.g. "A-12, Sector 63, Noida, Uttar Pradesh 201301, India". */
export function formatAddress(a: PostalAddress): string {
  const regionLine = [a.region, a.postalCode].filter(Boolean).join(' ')
  return [a.streetAddress, a.locality, regionLine, COUNTRY_NAMES[a.country] ?? a.country]
    .filter(Boolean)
    .join(', ')
}

/** The revamp's name for the same object. */
export const site = siteConfig
