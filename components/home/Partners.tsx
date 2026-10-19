import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site.config'

/**
 * Home: delivery partners (owner request, 2026-10-19). Data lives in
 * siteConfig.alliances; renders nothing when the list is empty.
 *
 * Intro on the left, partner cards on the right, so one partner fills the
 * space and more stack without a redesign. Cards use the insight-card
 * hover language. Logos sit in greyscale and take their own color on
 * hover, so a partner's palette never competes with ours.
 */
export function Partners() {
  const list = siteConfig.alliances
  if (list.length === 0) return null

  return (
    <section className="ys-section-white" aria-labelledby="home-partners">
      <div className="enterprise-container-wide ys-partners">
        <div className="ys-partners-intro">
          <h2 id="home-partners">Firms we deliver with</h2>
          <p>When a project needs specialist operations or coverage we don’t have in-house, we bring in a partner we already work with, and we stay accountable for the result.</p>
        </div>

        <ul className="ys-partners-list">
          {list.map((p) => (
            <li key={p.name}>
              <a href={p.url} className="ys-partner-card" target="_blank" rel="noopener">
                <span className="ys-partner-logo">
                  <Image src={p.logo.src} alt={p.name} width={p.logo.width} height={p.logo.height} sizes="200px" />
                </span>
                <span className="ys-partner-body">
                  <span className="ys-insight-meta">{p.regions}</span>
                  <span className="ys-partner-name">{p.name}</span>
                  <span className="ys-partner-summary">{p.summary}</span>
                  <span className="ys-partner-tags">
                    {p.focus.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </span>
                  <span className="ys-card-more">
                    Visit {new URL(p.url).hostname.replace(/^www\./, '')}
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
