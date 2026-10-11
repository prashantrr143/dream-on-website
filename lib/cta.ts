/**
 * The two calls to action used site-wide.
 *
 * Primary: "Talk to our experts" (revamp brief). It opens the contact
 * overlay where JavaScript runs, and falls back to /contact-us. Pass an
 * interest to preset the form, e.g. contactHref('Claude').
 * Secondary: the Blueprint, a short discovery engagement.
 */

export const PRIMARY_CTA = {
  label: 'Talk to our experts',
  href: '/contact-us',
} as const

export const SECONDARY_CTA = {
  label: 'Start with a Blueprint',
  href: '/blueprint',
} as const

export function contactHref(interest?: string): string {
  return interest ? `/contact-us?interest=${encodeURIComponent(interest)}` : PRIMARY_CTA.href
}
