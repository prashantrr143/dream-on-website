import { ArrowRight, Clock, Cloud } from 'lucide-react'
import SharedLayout from '@/components/shared-layout'
import { PageHero, PageSection, PageCTA } from '@/components/enterprise'
import { StageJourney } from '@/components/how-we-work/StageJourney'
import { WorkingWithUs } from '@/components/enterprise/WorkingWithUs'
import { PRIMARY_CTA } from '@/lib/cta'
import { WORKING_ACROSS_REGIONS } from '@/lib/regions'

/**
 * How we work (redesign, 2026-10-19). Order: the path and its decisions,
 * what never changes (the page's one navy feature band), how to buy it,
 * and the practicalities of working across regions.
 */

const PRINCIPLES = [
  {
    title: 'Design before code',
    body: 'Decisions that are expensive to reverse are made deliberately, before build begins.',
  },
  {
    title: 'Security by design',
    body: 'Security, compliance and auditability are part of the first sprint’s definition of done.',
  },
  {
    title: 'Clear ownership',
    body: 'Every deliverable has an owner. Every decision has a trail.',
  },
  {
    title: 'Working software every two weeks',
    body: 'Incremental delivery, never a big reveal at the end.',
  },
]

const MODELS = [
  {
    title: 'Solution Blueprint',
    fit: '2–4 weeks · discovery',
    body: 'Discovery for one named problem: solution design, delivery plan and risks.',
    best: 'You have a problem and need a plan you can trust.',
    featured: true,
  },
  {
    title: 'Project delivery',
    fit: 'Defined outcome · milestones',
    body: 'A defined outcome, delivered end to end against agreed milestones.',
    best: 'The outcome is clear and the scope can be fixed.',
  },
  {
    title: 'Dedicated teams',
    fit: 'Embedded · scales with you',
    body: 'Engineers and delivery leads in your team, on your priorities, with our delivery discipline.',
    best: 'The roadmap is yours and you need senior capacity.',
  },
  {
    title: 'Managed services',
    fit: 'Ongoing · run and improve',
    body: 'We run and improve what we, or others, built: cloud, platforms, data pipelines and AI workloads.',
    best: 'The system is live and has to stay healthy.',
  },
]

const REGION_ICONS = [Clock, Cloud]

const FRAMEWORKS = ['GDPR', 'SOC 2', 'ISO/IEC 27001', 'HIPAA', 'PCI DSS', 'DPDP Act']

export default function HowWeWorkContent() {
  return (
    <SharedLayout>
      <PageHero
        eyebrow="How we work"
        title="From first conversation to running system."
        lede="Senior engineers lead every stage. You decide at each step whether to continue with us or take it in-house."
        visual="lanes"
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
        secondaryCta={{ label: 'Start with a Blueprint', href: '/blueprint' }}
      />

      <PageSection
        id="delivery"
        tone="light"
        eyebrow="Delivery model"
        title="Five stages, and a decision for you at the end of each"
        lede="The depth of each stage changes with the size and risk of the work. The order does not."
      >
        <StageJourney />
      </PageSection>

      {/* Editorial pull quote: the page's central promise, said once, large. */}
      <section className="ys-section-white ys-pullquote-wrap" aria-label="Our commitment">
        <div className="enterprise-container-wide">
          <figure className="ys-pullquote">
            <blockquote>
              <p>
                At the end of every stage you can carry on with us, change course, or take the work in-house. The
                blueprint, the code and the run guide belong to you from day one.
              </p>
            </blockquote>
            <figcaption>The YatiSphere engagement model</figcaption>
          </figure>
        </div>
      </section>

      {/* The page's one navy feature band. */}
      <section id="principles" className="ys-hww-band" aria-labelledby="hww-principles">
        <div className="enterprise-container-wide">
          <h2 id="hww-principles">What we do the same way on every engagement</h2>
          <ol className="ys-hww-principles">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title}>
                <span className="ys-hww-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageSection
        id="engagement"
        tone="white"
        eyebrow="Engagement models"
        title="Work with us the way your organization buys."
      >
        <ul className="ys-hww-models">
          {MODELS.map((m) => (
            <li key={m.title} className={m.featured ? 'is-featured' : ''}>
              {m.featured && <p className="ys-hww-badge">Start here</p>}
              <h3>{m.title}</h3>
              <p className="ys-hww-fit">{m.fit}</p>
              <p className="ys-hww-body">{m.body}</p>
              <p className="ys-hww-best">
                <span>Best when</span>
                {m.best}
              </p>
              {m.featured && (
                <a href="/blueprint" className="ys-hww-more">
                  How the Blueprint works
                  <ArrowRight className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </PageSection>

      {/* Every line here is something the company can do today. No
          certifications are claimed, because none are held. */}
      <WorkingWithUs tone="light" />

      <PageSection
        id="international"
        tone="white"
        eyebrow="Working across regions"
        title="Based in India, working with clients in five regions"
        lede="For clients in the UK, Europe, the Middle East, the US and India."
      >
        <ul className="ys-hww-regions">
          {WORKING_ACROSS_REGIONS.map((item, i) => {
            const Icon = REGION_ICONS[i] ?? Clock
            return (
              <li key={item.title}>
                <span className="ys-hww-icon is-light" aria-hidden="true"><Icon strokeWidth={1.75} /></span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            )
          })}
        </ul>
        <div className="ys-hww-frameworks">
          <p>We design controls for</p>
          <ul>
            {FRAMEWORKS.map((f) => <li key={f}>{f}</li>)}
            <li>and regional equivalents</li>
          </ul>
          <p className="ys-hww-frameworks-note">The certifications stay yours.</p>
        </div>
      </PageSection>

      <PageCTA
        title={'What’s the problem you’d fix first?'}
        body="Describe it in a few lines. A senior member of the team replies within one working day, with an honest view on whether we can help."
        primaryCta={{ label: PRIMARY_CTA.label, href: PRIMARY_CTA.href }}
      />
    </SharedLayout>
  )
}
