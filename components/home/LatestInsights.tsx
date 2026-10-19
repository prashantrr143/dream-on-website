import { ArrowRight } from 'lucide-react'
import { publishedArticles } from '@/lib/insights'

/**
 * Home: three Insights articles, as evidence of how we think. Server
 * component, so only titles and summaries reach the page, not article text.
 * Picked to show both practices; falls back to the newest three.
 */
const PICKS = ['soc-2-evidence-from-pipelines', 'kyc-automation-without-black-boxes', 'taking-an-ai-pilot-to-production']

export function LatestInsights() {
  const picked = PICKS.map((s) => publishedArticles.find((a) => a.slug === s)).filter((a) => a !== undefined)
  const items = (picked.length === 3 ? picked : publishedArticles).slice(0, 3)
  if (items.length === 0) return null

  return (
    <section className="ys-section-light" aria-labelledby="home-insights">
      <div className="enterprise-container-wide">
        <div className="ys-how-intro">
          <div>
            <p className="ys-eyebrow">Insights</p>
            <h2 id="home-insights">How we think about the work.</h2>
          </div>
          <a href="/insights" className="ys-link ys-how-link">
            All insights
            <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
        <ul className="ys-insight-grid">
          {items.map((a) => (
            <li key={a.slug}>
              <a href={`/insights/${a.slug}`} className="ys-insight-card">
                <span className="ys-insight-meta">{a.category} · {a.readTime}</span>
                <span className="ys-insight-title">{a.title}</span>
                <span className="ys-insight-summary">{a.summary}</span>
                <span className="ys-card-more" aria-hidden="true">
                  Read the article <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
