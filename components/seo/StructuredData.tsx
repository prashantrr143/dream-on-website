import { Fragment } from 'react'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { SITE_CONTACT } from '@/lib/site-contact'
import { siteConfig } from '@/lib/site.config'
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
  const office = siteConfig.company.registeredOffice
  const linkedin = SITE_CONTACT.linkedin
  const phone = SITE_CONTACT.phone

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
      'IT services and applied AI for growing companies and regulated enterprises worldwide: cloud, software, data, security and consulting from senior engineers, with governed AI built in where it pays.',
    slogan: 'Enterprise IT, built properly. AI where it pays.',
    email: SITE_CONTACT.email,
    foundingDate: '2025-12-22',
    ...(siteConfig.company.cin ? { identifier: { '@type': 'PropertyValue', propertyID: 'CIN', value: siteConfig.company.cin } } : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(linkedin ? { sameAs: [linkedin] } : {}),
    address: {
      '@type': 'PostalAddress',
      addressCountry: office.country,
      ...(office.streetAddress ? { streetAddress: office.streetAddress } : {}),
      ...(office.locality ? { addressLocality: office.locality } : {}),
      ...(office.region ? { addressRegion: office.region } : {}),
      ...(office.postalCode ? { postalCode: office.postalCode } : {}),
    },
    knowsAbout: [
      'Technology strategy and enterprise architecture',
      'Amazon Web Services',
      'Microsoft Azure',
      'Google Cloud',
      'Cloud migration and FinOps',
      'Applied AI and agentic automation',
      'Claude',
      'AI governance',
      'Software and platform engineering',
      'Data and analytics',
      'DevOps and platform engineering',
      'Security and compliance',
      'Legacy modernization',
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
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
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
      {services.map((service) => (
        <Fragment key={service.url}>
          {jsonLd({
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
            { '@type': 'Country', name: 'Saudi Arabia' },
            { '@type': 'Place', name: 'Europe' },
          ],
          })}
        </Fragment>
      ))}
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
