import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection } from '@/components/enterprise'
import { PRIMARY_CTA } from '@/lib/cta'

export const metadata: Metadata = {
  title: { absolute: 'Page not found | YatiSphere' },
  robots: { index: false, follow: true },
}

const LINKS = [
  { label: 'Home', href: '/', descriptor: 'Start from the beginning' },
  { label: 'What we do', href: '/what-we-do', descriptor: 'Cloud, software, data, security and applied AI' },
  { label: 'Solution Blueprint', href: '/blueprint', descriptor: 'Know what it will take before you build' },
  { label: 'Insights', href: '/insights', descriptor: 'How we think about IT and applied AI' },
  { label: 'Who we are', href: '/who-we-are/about', descriptor: 'Our principles and people' },
  { label: 'Search', href: '/search', descriptor: 'Find a page by topic' },
  { label: 'Contact us', href: '/contact-us', descriptor: 'Tell us what you were looking for' },
]

/** Site-wide 404 (also used by routes that call notFound()). */
export default function NotFound() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="404"
        title="We couldn't find that page"
        lede="It may have moved when we reorganized the site. These are the places most people are looking for."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        visual="network"
      />
      <PageSection tone="white">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '4px 28px', listStyle: 'none', margin: 0, padding: 0 }}>
          {LINKS.map((l) => (
            <li key={l.href} style={{ borderBottom: '1px solid var(--grey-200)' }}>
              <a href={l.href} className="ys-link-row">
                <span>
                  <span className="ys-link-row-label">{l.label}</span>
                  <span className="ys-link-row-desc">{l.descriptor}</span>
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </PageSection>
    </SharedLayout>
  )
}
