import { ArrowRight, Linkedin } from 'lucide-react'
import { Wordmark } from '@/components/brand/Wordmark'
import { LEGAL_ENTITY_NAME } from '@/lib/legal'
import { CAREERS_URL } from '@/lib/nav'
import { siteConfig } from '@/lib/site.config'
import { hasArticles } from '@/lib/insights'
import { SITE_CONTACT } from '@/lib/site-contact'
import { CookieSettingsLink } from '@/components/analytics/CookieSettingsLink'

/**
 * Site footer: dark, restrained, enterprise register.
 *
 * Three link columns and one action. Desktop mega-panels render their
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
          <a href="/" className="ys-ftr-logo" aria-label="YatiSphere home">
            <Wordmark tone="dark" height={60} />
          </a>
          <a href="/contact-us" className="ys-ftr-cta">
            Contact us
            <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
          </a>
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

        <div className="ys-ftr-bottom">
          <div className="ys-ftr-legal">
            <p>
              &copy; {year} {LEGAL_ENTITY_NAME}
              {SITE_CONTACT.cin && <> &middot; CIN {SITE_CONTACT.cin}</>}
            </p>
            {SITE_CONTACT.registeredAddress && <p>Registered office: {SITE_CONTACT.registeredAddress}</p>}
            {SITE_CONTACT.offices.map((o) => (
              <p key={o.label}>
                {o.label}: {o.address}
              </p>
            ))}
          </div>
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

        <p className="ys-ftr-tm">
          AWS, Microsoft Azure, Google Cloud, Claude and Anthropic are trademarks of their respective owners. YatiSphere is
          an independent company.
        </p>
      </div>
    </footer>
  )
}

export default FooterMinimal
