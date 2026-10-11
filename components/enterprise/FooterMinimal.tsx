import { ArrowRight, Linkedin } from 'lucide-react'
import { Wordmark } from '@/components/brand/Wordmark'
import { IT_SERVICES, AI_SERVICES, FEATURED_INDUSTRIES, OTHER_INDUSTRIES } from '@/lib/services'
import { LEGAL_ENTITY_NAME } from '@/lib/legal'
import { hasArticles } from '@/lib/perspectives'
import { SITE_CONTACT } from '@/lib/site-contact'
import { CookieSettingsLink } from '@/components/analytics/CookieSettingsLink'

/**
 * Four link columns mirroring the header IA, built from lib/services.ts
 * so every service is named the same way everywhere (audit S-02).
 */
const footerColumns = [
  {
    title: 'Services',
    links: [
      { name: 'All services', href: '/solutions' },
      ...IT_SERVICES.map((s) => ({ name: s.name, href: s.href })),
    ],
  },
  {
    title: 'Applied AI',
    links: [
      { name: 'Applied AI overview', href: '/applied-ai' },
      ...AI_SERVICES.map((s) => ({ name: s.name, href: s.href })),
    ],
  },
  {
    title: 'Industries',
    links: [...FEATURED_INDUSTRIES, ...OTHER_INDUSTRIES].map((i) => ({ name: i.name, href: i.href })),
  },
  {
    title: 'Company',
    links: [
      { name: 'About us', href: '/about-us' },
      { name: 'How we work', href: '/how-we-work' },
      // Shown only while there is at least one real article to link to.
      ...(hasArticles ? [{ name: 'Perspectives', href: '/perspectives' }] : []),
      { name: 'Trust center', href: '/trust' },
      { name: 'Contact', href: '/contact-us' },
    ],
  },
]

const FooterMinimal = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="ys-footer">
      <div className="enterprise-container-wide ys-footer-inner">
        <div className="ys-footer-grid">
          {/* Brand block. Wordmark only; the legal name is in the bottom bar. */}
          <div className="ys-footer-brand">
            <a href="/" className="ys-footer-lockup" aria-label="YatiSphere home">
              <Wordmark tone="light" size={26} />
            </a>

            <p className="ys-footer-blurb">
              IT services and applied AI, delivered end to end by one in-house team.
            </p>

            <div className="ys-footer-contact">
              {SITE_CONTACT.email && (
                <a href={`mailto:${SITE_CONTACT.email}`} className="ys-footer-email">
                  {SITE_CONTACT.email}
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}

              {SITE_CONTACT.phone && (
                <a href={`tel:${SITE_CONTACT.phone.replace(/\s+/g, '')}`} className="ys-footer-email">
                  {SITE_CONTACT.phone}
                </a>
              )}

              {SITE_CONTACT.linkedin && (
                <a
                  href={SITE_CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YatiSphere on LinkedIn"
                  className="ys-footer-social"
                >
                  <Linkedin className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Link columns */}
          <nav className="ys-footer-nav" aria-label="Footer">
            {footerColumns.map((column) => (
              <div key={column.title} className="ys-footer-col">
                <h2 className="ys-footer-heading">{column.title}</h2>
                <ul className="ys-footer-links">
                  {column.links.map((link) => (
                    <li key={link.name + link.href}>
                      <a href={link.href} className="ys-footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="ys-footer-bottom">
          <div className="ys-footer-copy">
            <p>
              &copy; {year} {LEGAL_ENTITY_NAME}
              {SITE_CONTACT.cin && <> &middot; CIN {SITE_CONTACT.cin}</>}
            </p>
            {SITE_CONTACT.registeredAddress && (
              <p className="ys-footer-address">
                Registered office: {SITE_CONTACT.registeredAddress}
              </p>
            )}
            {SITE_CONTACT.offices.map((office) => (
              <p key={office.label} className="ys-footer-address">
                {office.label}: {office.address}
              </p>
            ))}
          </div>

          <div className="ys-footer-bottom-links">
            <a href="/privacy">Privacy</a>
            <a href="/privacy#cookies">Cookies</a>
            <CookieSettingsLink />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterMinimal
