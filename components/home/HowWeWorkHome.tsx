import { ArrowRight } from 'lucide-react'
import { LIFECYCLE } from '@/lib/lifecycle'
import { SECONDARY_CTA } from '@/lib/cta'

/**
 * Home: how we work, in one section. Merges what were three bands
 * ("Five stages. No handovers.", "Dependable, in writing." and the regions
 * strip) so each commitment is said once.
 */

const COMMITMENTS = [
  { title: 'A scoped first step', body: 'A short Blueprint agrees the problem, the design and the plan before any build begins.' },
  { title: 'One in-house team', body: 'No subcontracting and no rotating strangers. The people who scope the work build it.' },
  { title: 'Your code in your accounts', body: 'Repositories and infrastructure are yours from day one, not handed over at the end.' },
  { title: 'Your data stays yours', body: 'We never use client data to train models unless you ask us to, in writing, for your own model.' },
]

const GLOBAL = [
  { title: 'Working hours that overlap yours', body: 'Full overlap with UK, European and Gulf hours; US East Coast mornings by arrangement.' },
  { title: 'Your cloud, your region', body: 'We build in your accounts and your chosen region, so data residency stays under your control.' },
  { title: 'Data terms as standard', body: 'A data processing agreement on every engagement, with standard contractual clauses for cross-border data.' },
]

export function HowWeWorkHome() {
  return (
    <section className="ys-section-white" aria-labelledby="home-how">
      <div className="enterprise-container-wide">
        <div className="ys-how-intro">
          <div>
            <p className="ys-eyebrow">How we work</p>
            <h2 id="home-how">From first conversation to running system, with no handovers.</h2>
          </div>
          <a href="/who-we-are/how-we-work" className="ys-link ys-how-link">
            See our delivery model
            <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <ol className="ys-stage-grid">
          {LIFECYCLE.map((stage) => (
            <li key={stage.n} className="ys-stage-item">
              <span className="ys-stage-n" aria-hidden="true">{stage.n}</span>
              <h3 className="ys-stage-title">{stage.name}</h3>
              <p className="ys-stage-line">{stage.line}</p>
            </li>
          ))}
        </ol>

        <div className="ys-how-commit">
          <h3 className="ys-eyebrow">In the engagement letter, not just on this page</h3>
          <ul>
            {COMMITMENTS.map((c) => (
              <li key={c.title}>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="ys-how-global">
          <div className="ys-how-global-head">
            <h3>Built for clients in the US, UK, Europe, the Middle East and India.</h3>
            <a href={SECONDARY_CTA.href} className="ys-link">
              {SECONDARY_CTA.label}
              <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
          <ul>
            {GLOBAL.map((g) => (
              <li key={g.title}>
                <h4>{g.title}</h4>
                <p>{g.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
