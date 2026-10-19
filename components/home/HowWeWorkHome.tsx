import { ArrowRight } from 'lucide-react'
import { LIFECYCLE } from '@/lib/lifecycle'
import { SECONDARY_CTA } from '@/lib/cta'

/**
 * Home: how we work, in one section. Merges what were three bands
 * ("Five stages. No handovers.", "Dependable, in writing." and the regions
 * strip) so each commitment is said once.
 */

const COMMITMENTS = [
  'Scoped first step',
  'Senior engineers on the work',
  'Your code, your accounts',
  'Your data stays yours',
]


export function HowWeWorkHome() {
  return (
    <section className="ys-section-white" aria-labelledby="home-how">
      <div className="enterprise-container-wide">
        <div className="ys-how-intro">
          <div>
            <p className="ys-eyebrow">How we work</p>
            <h2 id="home-how">Five stages. A clear decision at each one.</h2>
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
            </li>
          ))}
        </ol>

        <div className="ys-how-commit">
          <h3 className="ys-eyebrow">Written into every contract</h3>
          <ul>
            {COMMITMENTS.map((c) => (
              <li key={c}>
                <h4>{c}</h4>
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
        </div>
      </div>
    </section>
  )
}
