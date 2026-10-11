/**
 * The two calls to action used site-wide (audit G-17).
 *
 * Every page uses these labels and no others. While no booking URL is
 * configured, the primary CTA lands on the contact form; once
 * siteConfig.bookingUrl is set, the contact page shows the calendar at
 * the same #book anchor, so no link needs to change.
 */

export const PRIMARY_CTA = {
  label: 'Book a 30-minute call',
  href: '/contact-us#book',
} as const

export const SECONDARY_CTA = {
  label: 'Get a fixed-price Blueprint',
  href: '/blueprint',
} as const
