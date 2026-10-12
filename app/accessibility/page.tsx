import type { Metadata } from 'next'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection } from '@/components/enterprise'
import { metaFor } from '@/lib/seo'
import { SITE_CONTACT } from '@/lib/site-contact'
import { LEGAL_LAST_UPDATED } from '@/lib/legal'

export const metadata: Metadata = metaFor('/accessibility')

/**
 * Accessibility statement. States the target and what we test, without
 * claiming a formal conformance audit (none has been done).
 */
export default function AccessibilityPage() {
  return (
    <SharedLayout>
      <PageHero eyebrow="ACCESSIBILITY" title="Accessibility statement" lede="We want everyone to be able to use this website, including people who use assistive technology." visual="network" />
      <PageSection tone="white">
        <div className="ys-prose" style={{ maxWidth: '70ch', display: 'grid', gap: 18, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-900)' }}>
          <h2 style={{ fontSize: 22 }}>Our target</h2>
          <p>
            We build this website to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA. Pages are designed to
            work with a keyboard alone, with screen readers, at 200% zoom and with reduced motion switched on.
          </p>
          <h2 style={{ fontSize: 22 }}>How we check</h2>
          <p>
            Every release runs automated accessibility tests (axe) on the navigation, search, menus and forms, and we test
            keyboard operation of every interactive component. This website has not yet had an independent accessibility audit.
          </p>
          <h2 style={{ fontSize: 22 }}>Tell us about a barrier</h2>
          <p>
            If something on this website is hard to use, email{' '}
            <a href={`mailto:${SITE_CONTACT.email}`} className="ys-link">{SITE_CONTACT.email}</a> with the page address and what
            happened. We will reply within one working day and tell you what we will do about it.
          </p>
          <p style={{ fontSize: 14, color: 'var(--ink-600)' }}>Last updated {LEGAL_LAST_UPDATED}.</p>
        </div>
      </PageSection>
    </SharedLayout>
  )
}
