import { Linkedin, Mail } from 'lucide-react'
import { Wordmark } from '@/components/brand/Wordmark'
import { LEGAL_ENTITY_NAME } from '@/lib/legal'
import { CAREERS_URL } from '@/lib/nav'
import { siteConfig } from '@/lib/site.config'
import { hasArticles } from '@/lib/insights/published'
import { SITE_CONTACT } from '@/lib/site-contact'
import { CookieSettingsLink } from '@/components/analytics/CookieSettingsLink'

/**
 * Site footer: dark, restrained, enterprise register.
 *
 * No call to action and no repeated tagline (owner feedback, 2026-10-19):
 * every page already ends with a CTA band, and a second "Talk to us"
 * right under it read as clutter. Brand column (logo, one line,
 * LinkedIn), three link columns, a company-details column. Desktop mega-panels render their
 * links only when opened, so these columns are also how crawlers reach
 * every pillar, industry and Who-we-are page; regional pages are linked
 * from the "Working across regions" strip instead.
 */
const columns = [
  {
    title: 'What we do',
    links: [
      { name: 'IT services', href: '/what-we-do/engineering-data' },
      { name: 'Cloud', href: '/what-we-do/cloud' },
      { name: 'Consulting', href: '/what-we-do/consulting' },
      { name: 'Applied AI', href: '/what-we-do/applied-ai' },
      { name: 'Solution Blueprint', href: '/blueprint' },
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
    title: 'Who we are',
    links: [
      { name: 'About us', href: '/who-we-are/about' },
      { name: 'Leadership', href: '/who-we-are/leadership' },
      { name: 'How we work', href: '/who-we-are/how-we-work' },
      { name: 'Responsible AI', href: '/who-we-are/responsible-ai' },
      { name: 'Trust & security', href: '/who-we-are/trust' },
      ...(hasArticles ? [{ name: 'Insights', href: '/insights' }] : []),
      ...(siteConfig.caseStudies.length > 0 ? [{ name: 'Customer stories', href: '/customer-stories' }] : []),
      ...(CAREERS_URL ? [{ name: 'Careers', href: CAREERS_URL }] : []),
    ],
  },
]

const FooterMinimal = () => {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="ys-ftr">
      <div className="enterprise-container-wide">

        <div className="ys-ftr-main">
          <div className="ys-ftr-brandcol">
            <a href="/" className="ys-ftr-logo" aria-label="YatiSphere home">
              <Wordmark tone="dark" height={44} />
            </a>
            <p className="ys-ftr-line">IT services and applied AI for clients worldwide.</p>
            {SITE_CONTACT.linkedin && (
              <a
                href={SITE_CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ys-ftr-social"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                Follow us on LinkedIn
              </a>
            )}
          </div>

          <nav className="ys-ftr-cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="ys-ftr-heading">{col.title}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="ys-ftr-company">
            <h2 className="ys-ftr-heading">Company</h2>
            <dl>
              <div>
                <dt>Legal name</dt>
                <dd>{LEGAL_ENTITY_NAME}</dd>
              </div>
              {SITE_CONTACT.cin && (
                <div>
                  <dt>CIN</dt>
                  <dd className="ys-ftr-mono">{SITE_CONTACT.cin}</dd>
                </div>
              )}
              {SITE_CONTACT.registeredAddress && (
                <div>
                  <dt>Registered office</dt>
                  <dd>{SITE_CONTACT.registeredAddress}</dd>
                </div>
              )}
              {SITE_CONTACT.offices.map((o) => (
                <div key={o.label}>
                  <dt>{o.label}</dt>
                  <dd>{o.address}</dd>
                </div>
              ))}
            </dl>
            {SITE_CONTACT.email && (
              <a href={`mailto:${SITE_CONTACT.email}`} className="ys-ftr-email">
                <Mail className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                {SITE_CONTACT.email}
              </a>
            )}
          </div>
        </div>

        <div className="ys-ftr-bottom">
          <p className="ys-ftr-copy">
            &copy; {year} {LEGAL_ENTITY_NAME}. All rights reserved.
          </p>
          <div className="ys-ftr-links">
            <a href="/privacy">Privacy</a>
            <a href="/privacy#cookies">Cookies</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/who-we-are/trust#incidents">Security</a>
            <CookieSettingsLink />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterMinimal
