import Image from 'next/image'
import { ArrowRight, Linkedin, Mail } from 'lucide-react'
import { LEGAL_ENTITY_NAME } from '@/lib/legal'
import { CAREERS_URL } from '@/lib/nav'
import { siteConfig } from '@/lib/site.config'
import { hasArticles } from '@/lib/insights/published'
import { SITE_CONTACT } from '@/lib/site-contact'
import { CookieSettingsLink } from '@/components/analytics/CookieSettingsLink'

/**
 * Site footer: dark, restrained, enterprise register.
 *
 * The header already carries the full lockup, so the footer signs off
 * with the Y mark and the brand line rather than repeating the logo.
 * Three link columns, a company-details column, one action. Desktop mega-panels render their
 * links only when opened, so these columns are also how crawlers reach
 * every pillar, industry and Who-we-are page; regional pages are linked
 * from the "Working across regions" strip instead.
 */
const columns = [
  {
    title: 'What we do',
    links: [
      { name: 'Consulting', href: '/what-we-do/consulting' },
      { name: 'Cloud', href: '/what-we-do/cloud' },
      { name: 'Applied AI', href: '/what-we-do/applied-ai' },
      { name: 'Claude practice', href: '/what-we-do/applied-ai/claude' },
      { name: 'Engineering & data', href: '/what-we-do/engineering-data' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Financial services', href: '/what-we-do/industries/financial-services' },
      { name: 'Legal & professional services', href: '/what-we-do/industries/legal-professional-services' },
      { name: 'Software & SaaS', href: '/what-we-do/industries/software-saas' },
      { name: 'Healthcare', href: '/what-we-do/industries/healthcare' },
      { name: 'Public sector', href: '/what-we-do/industries/public-sector' },
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
        <div className="ys-ftr-top">
          <a href="/" className="ys-ftr-brand" aria-label="YatiSphere home">
            <Image
              src="/brand/yatisphere/icon/yatisphere-icon-192.png"
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
              sizes="48px"
              className="ys-ftr-mark"
            />
            <span className="ys-ftr-statement">
              Enterprise AI, engineered
              <br />
              to be <span className="ys-ftr-accent">trusted</span>.
            </span>
          </a>
          <a href="/contact-us" className="ys-ftr-cta">
            Contact us
            <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <div className="ys-ftr-main">
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
            {SITE_CONTACT.linkedin && (
              <a
                href={SITE_CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YatiSphere on LinkedIn"
                className="ys-ftr-social"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterMinimal
