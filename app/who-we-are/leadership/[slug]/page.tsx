import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Linkedin } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageCTA } from '@/components/enterprise'
import { HeroVisual } from '@/components/brand/HeroVisual'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { SITE_URL, socialMeta } from '@/lib/seo'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import { people, hasBio } from '@/content/people'

/**
 * Leader bio page. Generated only for people whose `bio` has content;
 * every other slug is a 404 and stays out of the sitemap.
 */
export const dynamicParams = false

const withBio = () => people.filter(hasBio)

export function generateStaticParams() {
  return withBio().map((p) => ({ slug: p.slug }))
}

const find = (slug: string) => withBio().find((p) => p.slug === slug)

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = find((await params).slug)
  if (!p) return {}
  const url = `${SITE_URL}/who-we-are/leadership/${p.slug}`
  const title = `${p.name}, ${p.role} | YatiSphere`
  return {
    title: { absolute: title },
    description: p.summary,
    alternates: { canonical: url },
    ...socialMeta({ title, description: p.summary, url }),
  }
}

const sentenceCase = (role: string) => role.charAt(0) + role.slice(1).toLowerCase().replace(/\b(ceo|cto|chro|coo|cfo)\b/g, (m) => m.toUpperCase())

export default async function LeaderPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = find((await params).slug)
  if (!p) notFound()
  const bio = (p.bio ?? []).filter((x) => x.trim())

  return (
    <SharedLayout>
      <BreadcrumbSchema
        trail={[
          { name: 'Who we are', path: '/who-we-are/about' },
          { name: 'Leadership', path: '/who-we-are/leadership' },
          { name: p.name, path: `/who-we-are/leadership/${p.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: p.name,
            jobTitle: p.role,
            worksFor: { '@id': `${SITE_URL}/#organization` },
            url: `${SITE_URL}/who-we-are/leadership/${p.slug}`,
            ...(p.photo ? { image: `${SITE_URL}${p.photo.src}` } : {}),
            ...(p.linkedinUrl ? { sameAs: [p.linkedinUrl] } : {}),
          }),
        }}
      />

      <section className="ys-ldr-hero">
        <HeroVisual motif="network" seed={p.name} />
        <div className="ys-ldr-container ys-ldr-hero-grid">
          <div className="ys-ldr-hero-text">
            <nav aria-label="Breadcrumb" className="ys-ldr-crumbs">
              <a href="/who-we-are/about">Who we are</a>
              <span aria-hidden="true"> / </span>
              <a href="/who-we-are/leadership">Leadership</a>
            </nav>
            <h1 className="ys-ldr-hero-name">{p.name}</h1>
            <p className="ys-ldr-hero-role">{sentenceCase(p.role)}</p>
          </div>
          {p.photo && (
            <div className={`ys-ldr-hero-photo is-${p.photo.style}`}>
              <Image src={p.photo.src} alt={p.photo.alt} width={p.photo.width} height={p.photo.height} priority sizes="(max-width: 1023px) 320px, 45vw" />
            </div>
          )}
        </div>
      </section>

      <section className="ys-ldr-body">
        <div className="ys-ldr-container ys-ldr-body-grid">
          <div className="ys-ldr-bio">
            {bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            {p.linkedinUrl && (
              <a href={p.linkedinUrl} className="ys-link" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Linkedin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                {p.name} on LinkedIn
              </a>
            )}
          </div>
          {p.pullQuote && (
            <aside className="ys-ldr-quote">
              <p>{p.pullQuote}</p>
            </aside>
          )}
        </div>
      </section>

      <PageCTA
        title="Talk to the people who will do the work"
        body="Tell us what you are working on. A senior member of the team replies within one working day."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: SECONDARY_CTA.label, href: SECONDARY_CTA.href }}
      />
    </SharedLayout>
  )
}
