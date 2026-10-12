import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Linkedin } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageCTA } from '@/components/enterprise'
import { HeroVisual } from '@/components/brand/HeroVisual'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'
import { metaFor } from '@/lib/seo'
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/cta'
import { peopleIn, hasBio } from '@/content/people'
import type { Leader } from '@/content/types'

export const metadata: Metadata = metaFor('/who-we-are/leadership')

/**
 * Leadership listing: one full-width row per person, alternating sides
 * on wide screens (photo-first single column below 1024px). People come
 * from content/people.ts; a group renders only if it has people.
 */

const GROUPS: { id: Leader['group']; kicker: string }[] = [
  { id: 'leadership', kicker: 'Leadership team' },
  { id: 'advisors', kicker: 'Advisors' },
]

function PersonRow({ person, index, eager }: { person: Leader; index: number; eager: boolean }) {
  const photo = person.photo
  const flipped = index % 2 === 1
  return (
    <article
      className={`ys-ldr-row${flipped ? ' is-flipped' : ''}${photo ? '' : ' no-photo'}`}
      aria-labelledby={`ldr-${person.slug}`}
    >
      <div className="ys-ldr-text">
        <p className="ys-ldr-role">{person.role}</p>
        <h3 id={`ldr-${person.slug}`} className="ys-ldr-name">
          {person.name}
        </h3>
        <p className="ys-ldr-summary">{person.summary}</p>
        {hasBio(person) ? (
          <a href={`/who-we-are/leadership/${person.slug}`} className="ys-ldr-more" aria-label={`Read more about ${person.name}`}>
            <span aria-hidden="true">Read more</span>
            <span className="ys-ldr-more-btn" aria-hidden="true">
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </span>
          </a>
        ) : person.linkedinUrl ? (
          <a href={person.linkedinUrl} className="ys-ldr-more" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            {person.name} on LinkedIn
          </a>
        ) : null}
      </div>

      {photo && (
        <div className={`ys-ldr-photo is-${photo.style}`}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 1023px) 420px, 513px"
            {...(eager ? { priority: true } : { loading: 'lazy' as const })}
          />
        </div>
      )}
    </article>
  )
}

export default function LeadershipPage() {
  let rowIndex = 0
  return (
    <SharedLayout>
      <BreadcrumbSchema
        trail={[
          { name: 'Who we are', path: '/who-we-are/about' },
          { name: 'Leadership', path: '/who-we-are/leadership' },
        ]}
      />
      <PageHero
        eyebrow="WHO WE ARE"
        title="Leadership"
        lede="The people accountable for your work."
        visual="network"
      />

      <section className="ys-ldr" aria-label="Leadership">
        <div className="ys-ldr-container">
          {GROUPS.map((g) => {
            const list = peopleIn(g.id)
            if (list.length === 0) return null
            return (
              <div key={g.id} className="ys-ldr-group">
                <h2 className="ys-ldr-kicker">{g.kicker}</h2>
                {list.map((person) => {
                  const i = rowIndex++
                  return <PersonRow key={person.slug} person={person} index={i} eager={i === 0} />
                })}
              </div>
            )
          })}
        </div>
      </section>

      {/* Split teaser: How we work */}
      <section className="ys-ldr-teaser" aria-labelledby="ldr-teaser-title">
        <div className="ys-ldr-container ys-ldr-teaser-grid">
          <div className="ys-ldr-teaser-media" aria-hidden="true">
            <HeroVisual motif="lanes" seed="how-we-work-teaser" />
          </div>
          <div>
            <p className="ys-ldr-kicker" style={{ marginBottom: 12 }}>How we work</p>
            <h2 id="ldr-teaser-title" className="ys-ldr-teaser-title">
              One accountable team, from advice to operations
            </h2>
            <p className="ys-ldr-summary">
              The people who advise you are the people who build and run what we deliver.
            </p>
            <a href="/who-we-are/how-we-work" className="ys-ldr-more" aria-label="Read more about how we work">
              <span aria-hidden="true">Read more</span>
              <span className="ys-ldr-more-btn" aria-hidden="true">
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </span>
            </a>
          </div>
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
