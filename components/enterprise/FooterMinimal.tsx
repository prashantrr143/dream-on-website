import { ArrowRight, Linkedin, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { LOGO_ASSETS } from '@/components/brand/YatiSphereLogo'
import { hasArticles } from '@/lib/perspectives'
import { SITE_CONTACT } from '@/lib/site-contact'
import { CookieSettingsLink } from '@/components/analytics/CookieSettingsLink'

/**
 * Four link columns mirroring the header IA. The former "Legal" column
 * is gone: its three policy links live in the bottom bar, and Security
 * moved into Company.
 */
const footerColumns = [
  {
    title: 'IT Services',
    links: [
      { name: 'All IT Services', href: '/solutions' },
      { name: 'Cloud & Infrastructure', href: '/solutions/cloud' },
      { name: 'DevOps & Automation', href: '/solutions/devops' },
      { name: 'Data & Analytics', href: '/solutions/data' },
      { name: 'Enterprise Security', href: '/solutions/security' },
      { name: 'Legacy Modernisation', href: '/solutions/consulting' },
    ],
  },
  {
    title: 'Applied AI',
    links: [
      { name: 'AI Architecture', href: '/applied-ai#architecture' },
      { name: 'Agentic Automation', href: '/applied-ai#agentic' },
      { name: 'AI Platforms', href: '/applied-ai#platforms' },
      { name: 'Responsible AI', href: '/responsible-ai' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Financial Services', href: '/industries/financial-services' },
      { name: 'Legal & Professional', href: '/industries/legal-professional-services' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Government', href: '/industries/government-public-sector' },
      { name: 'Enterprise & Technology', href: '/industries/enterprise-technology' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about-us' },
      { name: 'How We Work', href: '/how-we-work' },
      // Shown only while there is at least one real article to link to.
      ...(hasArticles ? [{ name: 'Perspectives', href: '/perspectives' }] : []),
      { name: 'Security', href: '/security' },
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
          {/* Brand block. The supplied lockups all bake in "Technologies
              Private Limited" and the retired tagline as raster artwork,
              so the compact mark is set as the icon plus live text. */}
          <div className="ys-footer-brand">
            <a href="/" className="ys-footer-lockup" aria-label="YatiSphere home">
              <Image
                src={LOGO_ASSETS.primary.src}
                alt="YatiSphere Technologies Private Limited"
                width={LOGO_ASSETS.primary.width}
                height={LOGO_ASSETS.primary.height}
                loading="lazy"
                sizes="280px"
                className="ys-footer-logo"
              />
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
              &copy; {year} YatiSphere Technologies Private Limited
              {SITE_CONTACT.cin && <> &middot; CIN {SITE_CONTACT.cin}</>}
            </p>
            {SITE_CONTACT.registeredAddress && (
              <p className="ys-footer-address">{SITE_CONTACT.registeredAddress}</p>
            )}
          </div>

          {/* Verifiable government credential — certificate DIPP260262,
              issued by DPIIT, Ministry of Commerce & Industry. */}
          <p className="ys-footer-recognition">
            <ShieldCheck className="w-4 h-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            DPIIT-Recognised Startup &middot; Certificate DIPP260262
          </p>

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
