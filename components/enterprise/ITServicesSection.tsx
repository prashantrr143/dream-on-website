import { ArrowRight, CodeXml, Landmark, Scale } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Home: the three sectors we focus on (2026-11-01). Sectors only, no use
 * cases: each card names the sector, says what it buys in one line and
 * links to its page, where the detail lives.
 */

const SECTORS: { href: string; name: string; line: string; Icon: LucideIcon }[] = [
  {
    href: '/what-we-do/industries/legal-professional-services',
    name: 'Legal & professional services',
    line: 'Agents for intake and conflict checks, with a partner approving every clearance.',
    Icon: Scale,
  },
  {
    href: '/what-we-do/industries/financial-services',
    name: 'Financial services',
    line: 'Agents for onboarding, KYC and claims, with an examiner-ready trail.',
    Icon: Landmark,
  },
  {
    href: '/what-we-do/industries/software-saas',
    name: 'Software & SaaS',
    line: 'AI features and delivery evidence that pass your customers’ security reviews.',
    Icon: CodeXml,
  },
]

const ITServicesSection = () => (
  <section id="services" className="ys-section-white" aria-labelledby="home-industries">
    <div className="enterprise-container-wide">
      <div className="ys-sec-intro">
        <p className="ys-kicker">Industries</p>
        <h2 id="home-industries">Built for law firms, banks and SaaS companies</h2>
      </div>
      <ul className="ys-sec-grid">
        {SECTORS.map((s) => (
          <li key={s.href}>
            <a href={s.href} className="ys-sec-card">
              <span className="ys-sec-icon"><s.Icon className="w-6 h-6" strokeWidth={1.7} aria-hidden="true" /></span>
              <span className="ys-sec-name">{s.name}</span>
              <span className="ys-sec-line">{s.line}</span>
              <span className="ys-sec-more">
                Explore
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default ITServicesSection
