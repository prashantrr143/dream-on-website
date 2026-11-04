import { ArrowUpRight, Linkedin, Mail } from 'lucide-react'
import { Wordmark } from '@/components/brand/Wordmark'
import { LEGAL_ENTITY_NAME } from '@/lib/legal'
import { CAREERS_URL } from '@/lib/nav'
import { siteConfig } from '@/lib/site.config'
import { hasArticles } from '@/lib/insights/published'
import { SITE_CONTACT } from '@/lib/site-contact'
import { CookieSettingsLink } from '@/components/analytics/CookieSettingsLink'

/**
 * Site footer (modernized 2026-11-01).
 *
 * Light (grey-50) under the navy CTA band, so the footer reads as its own
 * section at a glance; navy text, brand-blue links, amber accents, and the
 * clean header lockup in its light-surface version (2026-11-01).
 * Order: brand + positioning + the mission (Ideas, Intelligence, Impact in
 * the brand-mark colours), then link columns led by Applied AI, then
 * company details. Still no call to action (owner feedback, 2026-10-19):
 * every page already ends with one. The columns double as the crawl path
 * to every service, industry and Who-we-are page.
 */
const columns = [
  {
    title: 'What we do',
    links: [
      { name: 'AI pilot to production', href: '/what-we-do/applied-ai' },
      { name: 'Agentic automation', href: '/what-we-do/applied-ai/agentic-automation' },
      { name: 'AI governance', href: '/what-we-do/applied-ai/ai-governance' },
      { name: 'Claude practice', href: '/what-we-do/applied-ai/claude' },
      { name: 'Cloud foundations', href: '/what-we-do/cloud' },
      { name: 'Software and data', href: '/what-we-do/engineering-data' },
      { name: 'Security and compliance', href: '/what-we-do/services/security-compliance' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Financial services', href: '/what-we-do/industries/financial-services' },
      { name: 'Legal & professional services', href: '/what-we-do/industries/legal-professional-services' },
      { name: 'Software & SaaS', href: '/what-we-do/industries/software-saas' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About us', href: '/who-we-are/about' },
      { name: 'Leadership', href: '/who-we-are/leadership' },
      { name: 'How we work', href: '/who-we-are/how-we-work' },
      { name: 'Solution Blueprint', href: '/blueprint' },
      { name: 'Responsible AI', href: '/who-we-are/responsible-ai' },
      { name: 'Trust center', href: '/who-we-are/trust' },
      ...(hasArticles ? [{ name: 'Insights', href: '/insights' }] : []),
      ...(siteConfig.caseStudies.length > 0 ? [{ name: 'Customer stories', href: '/customer-stories' }] : []),
      ...(CAREERS_URL ? [{ name: 'Careers', href: CAREERS_URL }] : []),
      { name: 'Contact', href: '/contact-us' },
    ],
  },
]

const MISSION = [
  { word: 'Ideas', c: '#0B7FA6' },
  { word: 'Intelligence', c: '#1F4FBF' },
  { word: 'Impact', c: '#B7791F' },
]

const FooterMinimal = () => {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="ys-ft2">
      <div className="ys-ft2-rule" aria-hidden="true" />
      <div className="enterprise-container-wide">
        <div className="ys-ft2-main">
          <div className="ys-ft2-brand">
            <a href="/" className="ys-ft2-logo" aria-label="YatiSphere home">
              <Wordmark tone="light" height={46} compact />
            </a>
            <p className="ys-ft2-line">Cloud, software, data and AI that make it into production.</p>
            <p className="ys-ft2-mission" aria-label="Our mission: ideas, intelligence, impact">
              {MISSION.map((m, i) => (
                <span key={m.word} style={{ ['--c' as string]: m.c }}>
                  {i > 0 && <i aria-hidden="true" />}
                  {m.word}
                </span>
              ))}
            </p>
            <div className="ys-ft2-social">
              {SITE_CONTACT.linkedin && (
                <a href={SITE_CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="YatiSphere on LinkedIn (opens in a new tab)">
                  <Linkedin className="w-[18px] h-[18px]" strokeWidth={1.8} aria-hidden="true" />
                </a>
              )}
              {SITE_CONTACT.email && (
                <a href={`mailto:${SITE_CONTACT.email}`} aria-label={`Email ${SITE_CONTACT.email}`}>
                  <Mail className="w-[18px] h-[18px]" strokeWidth={1.8} aria-hidden="true" />
                </a>
              )}
              {SITE_CONTACT.email && <a href={`mailto:${SITE_CONTACT.email}`} className="ys-ft2-email">{SITE_CONTACT.email}</a>}
            </div>
          </div>

          <nav className="ys-ft2-cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="ys-ft2-heading">{col.title}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>
                        <span>{l.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="ys-ft2-company">
          <dl>
            <div><dt>Legal name</dt><dd>{LEGAL_ENTITY_NAME}</dd></div>
            {SITE_CONTACT.cin && <div><dt>CIN</dt><dd className="ys-ft2-mono">{SITE_CONTACT.cin}</dd></div>}
            {SITE_CONTACT.registeredAddress && <div><dt>Registered office</dt><dd>{SITE_CONTACT.registeredAddress}</dd></div>}
            {SITE_CONTACT.offices.map((o) => (
              <div key={o.label}><dt>{o.label}</dt><dd>{o.address}</dd></div>
            ))}
          </dl>
        </div>

        <div className="ys-ft2-bottom">
          <p>&copy; {year} {LEGAL_ENTITY_NAME}. All rights reserved.</p>
          <div className="ys-ft2-legal">
            <a href="/privacy">Privacy</a>
            <a href="/privacy#cookies">Cookies</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/who-we-are/trust#incidents">Security</a>
            <CookieSettingsLink />
          </div>
        </div>
      </div>

      <p className="ys-ft2-giant" aria-hidden="true">YatiSphere</p>
    </footer>
  )
}

export default FooterMinimal
