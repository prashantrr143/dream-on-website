import { siteConfig } from '@/lib/site.config'
import { SITE_CONTACT } from '@/lib/site-contact'

/**
 * Small "Company details" block for the foot of About (audit AB-02,
 * G-05). Registration facts live here rather than up front: useful to a
 * buyer verifying the entity, without leading the page.
 */
export function CompanyDetails() {
  const rows: [string, string][] = [
    ['Registered entity', siteConfig.company.legalName],
    ['CIN', siteConfig.company.cin],
    ['Registered office', SITE_CONTACT.registeredAddress],
    ['Incorporated', 'December 22, 2025'],
    ['Startup India', 'DPIIT-recognized startup, certificate DIPP260262'],
  ]
  const shown = rows.filter(([, v]) => v)

  return (
    <section className="ys-section-white" aria-labelledby="company-details-heading" style={{ paddingBlock: 'clamp(32px, 4vw, 48px)' }}>
      <div className="enterprise-container-wide">
        <h2 id="company-details-heading" className="ys-eyebrow" style={{ marginBottom: 16 }}>
          Company details
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '14px 32px', fontSize: 14, lineHeight: 1.55 }}>
          {shown.map(([label, value]) => (
            <div key={label} style={{ minWidth: 0 }}>
              <dt style={{ color: 'var(--ink-600)' }}>{label}</dt>
              <dd style={{ color: 'var(--ink-900)' }}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
