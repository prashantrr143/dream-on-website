import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site.config'

/**
 * Case-study cards with a measured headline (audit H-05, G-09).
 * Reads siteConfig.caseStudies and renders nothing while it is empty.
 */
export function CaseStudyCards({ limit = 3, title = 'Recent work' }: { limit?: number; title?: string }) {
  const studies = siteConfig.caseStudies.slice(0, limit)
  if (studies.length === 0) return null

  return (
    <section className="ys-section-light" aria-labelledby="case-studies-heading">
      <div className="enterprise-container-wide">
        <p className="ys-eyebrow">Case studies</p>
        <h2 id="case-studies-heading" style={{ marginBottom: 'clamp(24px, 3vw, 36px)' }}>
          {title}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
          {studies.map((cs) => {
            const lead = cs.outcomes[0]
            return (
              <li key={cs.slug} style={{ minWidth: 0 }}>
                <a href={`/case-studies/${cs.slug}`} className="ys-card-light group" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 26 }}>
                  {lead && (
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: 30, fontWeight: 600, lineHeight: 1.1, color: 'var(--ink)' }}>
                      {lead.value}
                      <span style={{ display: 'block', marginTop: 6, fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 400, color: 'var(--ink-muted)' }}>
                        {lead.label}
                      </span>
                    </p>
                  )}
                  <h3 style={{ marginTop: 18, fontSize: 17, fontWeight: 600, lineHeight: 1.35, color: 'var(--ink)' }}>{cs.title}</h3>
                  <p style={{ marginTop: 8, fontSize: 13, color: 'var(--ink-muted)' }}>
                    {cs.industry} · {cs.region}
                  </p>
                  <span className="ys-link" style={{ marginTop: 'auto', paddingTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Read the case study
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
