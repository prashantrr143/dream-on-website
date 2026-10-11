/**
 * Working across regions (audit H-06).
 *
 * What the company can state truthfully today (no commercial or pricing
 * terms; those belong in the engagement letter). Shown on Home, Contact
 * and How we work from this one list, so the wording never drifts.
 * Nothing here claims a certification, an office or a headcount the
 * company does not have.
 */

export interface RegionPoint {
  title: string
  body: string
}

export const WORKING_ACROSS_REGIONS: RegionPoint[] = [
  {
    title: 'Overlapping working hours',
    body: 'Our day overlaps UK, European and Gulf business hours in full, and US East Coast mornings by arrangement.',
  },
  {
    title: 'Your cloud, your region',
    body: 'We build in your cloud accounts and your chosen region, so data residency stays under your control rather than ours.',
  },
  {
    title: 'DPA and SCCs as standard',
    body: 'We sign a data processing agreement, and use standard contractual clauses where personal data crosses a border.',
  },
]
