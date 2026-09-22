import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { SITE_CONTACT } from '@/lib/site-contact'
import { LEGAL_ENTITY_NAME } from '@/lib/legal'

/**
 * Server-rendered JSON-LD.
 *
 * Fields that depend on facts the company has not yet supplied —
 * `sameAs` from SITE_CONTACT.linkedin, and the postal address — are
 * emitted only when those values are set. An empty string would produce
 * invalid structured data, and inventing a value would be worse.
 */

const ORG_ID = `${SITE_URL}/#organization`

function jsonLd(data: unknown) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationSchema() {
  const address = SITE_CONTACT.registeredAddress
  const linkedin = SITE_CONTACT.linkedin

  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: LEGAL_ENTITY_NAME,
    alternateName: [SITE_NAME, 'Yati Sphere', 'YatiSphere Technologies'],
    url: SITE_URL,
    logo: `${SITE_URL}/brand/yatisphere/icon/yatisphere-icon-512.png`,
    image: `${SITE_URL}/brand/yatisphere/social/og-image.jpg`,
    description:
      'Enterprise IT services and applied AI, delivered end to end by one in-house team.',
    email: SITE_CONTACT.email,
    foundingDate: '2025-12',
    ...(linkedin ? { sameAs: [linkedin] } : {}),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      ...(address ? { streetAddress: address } : {}),
    },
    knowsAbout: [
      'Enterprise software development',
      'Cloud infrastructure',
      'Data and analytics',
      'DevOps automation',
      'Legacy modernisation',
      'Enterprise security',
      'Applied AI',
    ],
  })
}

export function WebSiteSchema() {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@id': ORG_ID },
  })
}

interface ServiceDef {
  name: string
  description: string
  url: string
}

/** Service offerings, with the Organization as provider. */
export function ServiceSchema({ services }: { services: ServiceDef[] }) {
  return (
    <>
      {services.map((service) =>
        jsonLd({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          description: service.description,
          url: service.url,
          provider: { '@id': ORG_ID },
          areaServed: [
            { '@type': 'Country', name: 'United Kingdom' },
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'India' },
            { '@type': 'Country', name: 'United Arab Emirates' },
          ],
        })
      )}
    </>
  )
}

/** Trail for an inner page. Pass the ancestors, excluding the home item. */
export function BreadcrumbSchema({
  trail,
}: {
  trail: Array<{ name: string; path: string }>
}) {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...trail.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`,
      })),
    ],
  })
}
