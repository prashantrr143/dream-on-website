import type { Metadata } from 'next'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { metaFor } from '@/lib/seo'
import { people } from '@/content/people'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'

export const metadata: Metadata = metaFor('/who-we-are/leadership')

/** Leadership grid from content/people.ts: the only people the site names. */
export default function LeadershipPage() {
  return (
    <SharedLayout>
      <BreadcrumbSchema trail={[{ name: 'Who we are', path: '/who-we-are/about' }, { name: 'Leadership', path: '/who-we-are/leadership' }]} />
      <PageHero
        eyebrow="WHO WE ARE / LEADERSHIP"
        title="The people accountable for your work"
        lede="A small, senior team. The people who advise you are the people who build and run what we deliver."
        breadcrumbs={[{ name: 'Who we are', path: '/who-we-are/about' }]}
        visual="network"
      />
      <PageSection tone="white" eyebrow="Leadership" title="Who leads YatiSphere">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 28, listStyle: 'none', margin: 0, padding: 0 }}>
          {people.map((p) => (
            <li key={p.name} style={{ minWidth: 0 }}>
              {p.photo && (
                <div style={{ position: 'relative', aspectRatio: '3 / 4', borderRadius: 12, overflow: 'hidden', background: 'var(--navy-900)' }}>
                  <Image src={p.photo} alt={`${p.name}, ${p.role}`} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
                </div>
              )}
              <h2 style={{ marginTop: 16, fontSize: 20, lineHeight: 1.3, color: 'var(--ink)' }}>{p.name}</h2>
              <p style={{ marginTop: 4, fontSize: 14, color: 'var(--ink-muted)' }}>{p.role}</p>
              <p style={{ marginTop: 10, fontSize: 15, lineHeight: 1.6, color: 'var(--ink)' }}>{p.bio}</p>
              {p.linkedinUrl && (
                <a href={p.linkedinUrl} target="_blank" rel="noopener noreferrer" className="ys-link" style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Linkedin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                  {p.name} on LinkedIn
                </a>
              )}
            </li>
          ))}
        </ul>
      </PageSection>
      <PageCTA
        title="Talk to the people who will do the work"
        body="Tell us what you are working on. A senior member of the team replies within one working day."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
