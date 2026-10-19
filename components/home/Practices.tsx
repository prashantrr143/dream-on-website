import { ArrowRight } from 'lucide-react'

/**
 * Home: the two practices. Enterprise IT services is the core business and
 * gets the wider column; Applied AI is the second practice (owner decision,
 * 2026-09, reaffirmed 2026-10-19). Replaces the tabbed "What we do" panel
 * and the "Every cloud. Every model." band, which repeated the menu.
 */

interface Practice {
  eyebrow: string
  title: string
  line: string
  links: { label: string; href: string }[]
  foot: string
  /** Optional chips under the links (the clouds we build on). */
  chips?: { label: string; href: string }[]
  cta: { label: string; href: string }
  tone: 'light' | 'dark'
}

const PRACTICES: Practice[] = [
  {
    eyebrow: 'Practice 01',
    title: 'Enterprise IT services',
    line: 'The systems your business runs on.',
    links: [
      { label: 'Cloud and infrastructure', href: '/what-we-do/cloud' },
      { label: 'Software engineering', href: '/what-we-do/services/software-engineering' },
      { label: 'Data and analytics', href: '/what-we-do/services/data-analytics' },
      { label: 'DevOps and platform engineering', href: '/what-we-do/services/devops-platform-engineering' },
      { label: 'Security and compliance', href: '/what-we-do/services/security-compliance' },
      { label: 'Application modernization', href: '/what-we-do/services/modernization' },
      { label: 'Technology consulting', href: '/what-we-do/consulting' },
    ],
    chips: [
      { label: 'AWS', href: '/what-we-do/cloud/aws' },
      { label: 'Microsoft Azure', href: '/what-we-do/cloud/microsoft-azure' },
    ],
    foot: '',
    cta: { label: 'Explore IT services', href: '/what-we-do/engineering-data' },
    tone: 'light',
  },
  {
    eyebrow: 'Practice 02',
    title: 'Applied AI',
    line: 'Governed AI inside those systems.',
    links: [
      { label: 'Agentic automation', href: '/what-we-do/applied-ai/agentic-automation' },
      { label: 'Knowledge assistants', href: '/what-we-do/applied-ai/knowledge-assistants' },
      { label: 'Enterprise AI platforms', href: '/what-we-do/applied-ai/ai-platforms' },
      { label: 'AI governance', href: '/what-we-do/applied-ai/ai-governance' },
      { label: 'Building with Claude', href: '/what-we-do/applied-ai/claude' },
    ],
    foot: 'Claude, OpenAI or open-weight models.',
    cta: { label: 'Explore applied AI', href: '/what-we-do/applied-ai' },
    tone: 'dark',
  },
]

export function Practices() {
  return (
    <section className="ys-section-light" aria-labelledby="home-practices">
      <div className="enterprise-container-wide">
        <div className="ys-practices-intro">
          <p className="ys-eyebrow">What we do</p>
          <h2 id="home-practices">Two practices. One accountable team.</h2>
        </div>

        <div className="ys-practices-grid">
          {PRACTICES.map((p) => (
            <article key={p.title} className={`ys-practice ys-practice-${p.tone}`}>
              <p className="ys-practice-eyebrow">{p.eyebrow}</p>
              <h3 className="ys-practice-title">{p.title}</h3>
              <p className="ys-practice-line">{p.line}</p>
              <ul className="ys-practice-links">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>
                      <span>{l.label}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              {p.chips && (
                <div className="ys-practice-chips">
                  <span>We build on</span>
                  {p.chips.map((c) => (
                    <a key={c.href} href={c.href}>{c.label}</a>
                  ))}
                </div>
              )}
              <div className="ys-practice-foot">
                {p.foot && <p>{p.foot}</p>}
                <a href={p.cta.href} className="ys-practice-cta">
                  {p.cta.label}
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
