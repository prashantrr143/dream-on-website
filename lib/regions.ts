/**
 * Working across regions (audit H-06).
 *
 * What the company can state truthfully today (no commercial or pricing
 * terms; those belong in the engagement letter). Shown on Home, Contact
 * and How we work from this one list, so the wording never drifts.
 * Nothing here claims a certification, an office or a headcount the
 * company does not have. Contract terms (DPA, SCCs, NDA) are listed once,
 * in components/enterprise/WorkingWithUs.tsx.
 */

export interface RegionPoint {
  title: string
  body: string
}

export const WORKING_ACROSS_REGIONS: RegionPoint[] = [
  {
    title: 'Response time',
    body: 'We reply to every enquiry within one working day and schedule calls at a time that suits your team.',
  },
  {
    title: 'Your cloud, your region',
    body: 'We build in your cloud accounts and your chosen region, so data residency stays under your control rather than ours.',
  },
]
