/**
 * Shared calls to action.
 *
 * Defined once so the wording stays identical wherever a primary or
 * secondary action appears.
 */

export const PRIMARY_CTA = {
  label: 'Tell us the problem',
  href: '/contact-us',
} as const

export const SECONDARY_CTA = {
  label: 'See how we deliver',
  href: '/how-we-work',
} as const
