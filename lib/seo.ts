import type { Metadata } from 'next'

/**
 * Per-route metadata, in one place.
 *
 * Most pages are client components and cannot export `metadata`
 * themselves, so each has a thin server shell that reads from here. One
 * table also makes it possible to check the whole site's titles and
 * descriptions against their length limits in a single pass.
 *
 * Constraints: title <= 60 characters including the suffix, description
 * <= 155. Descriptions state the problem solved rather than naming the
 * service.
 */

export const SITE_URL = 'https://yatisphere.com'
export const SITE_NAME = 'YatiSphere'

interface RouteMeta {
  /** Full <title>. The brand suffix is already included. */
  title: string
  description: string
  /** Legal and utility pages are kept out of the index. */
  noindex?: boolean
}

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Azure engineering and applied AI | YatiSphere',
    description:
      'A senior, in-house team that modernizes core platforms and puts governed AI into production for regulated businesses. Fixed price to start.',
  },

  '/solutions': {
    title: 'Enterprise IT services | YatiSphere',
    description:
      'Modernize, migrate, secure and run the platforms your business depends on. Azure-first IT services, delivered end to end by one senior team.',
  },
  '/solutions/software-engineering': {
    title: 'Software and platform engineering | YatiSphere',
    description:
      'Platform blocking the next product? APIs, integration, core platform builds and Java or .NET modernization on Azure, from engineers who support it.',
  },
  '/solutions/cloud': {
    title: 'Cloud and infrastructure | YatiSphere',
    description:
      'Cloud costs rising, migration slipping, controls behind? Azure landing zones, migration, FinOps and resilience, built by the team that supports it.',
  },
  '/solutions/data': {
    title: 'Data and analytics | YatiSphere',
    description:
      'Same question, three different numbers? Microsoft Fabric, Databricks and Purview on Azure, so your figures hold up for decisions, regulators and clients.',
  },
  '/solutions/devops': {
    title: 'DevOps and platform automation | YatiSphere',
    description:
      'Releases that depend on one person\u2019s checklist? CI/CD, infrastructure as code and observability on Azure, so every change takes the same tested path.',
  },
  '/solutions/security': {
    title: 'Security and compliance | YatiSphere',
    description:
      'An audit or client security review coming? Identity, zero trust, data protection and audit evidence on Azure, designed against the frameworks you face.',
  },
  '/solutions/modernization': {
    title: 'Modernization and advisory | YatiSphere',
    description:
      'Core system too old to touch? Architecture reviews, legacy re-platforming and costed roadmaps on Azure, delivered in reversible steps.',
  },

  '/applied-ai': {
    title: 'Applied AI | YatiSphere',
    description:
      'AI that moves from pilot to production, with integration, governance and operations owned by one team. Azure-first and model-agnostic.',
  },

  '/industries': {
    title: 'Industries we build for | YatiSphere',
    description:
      'Systems for financial services, legal and professional services, and software and SaaS companies, where a wrong answer has consequences.',
  },
  '/industries/financial-services': {
    title: 'Financial services technology | YatiSphere',
    description:
      'Onboarding, settlement and compliance systems for banks, insurers, wealth and asset managers, and fintechs, built for the regimes you answer to.',
  },
  '/industries/legal-professional-services': {
    title: 'Legal and professional services | YatiSphere',
    description:
      'Matters waiting on conflict checks nobody can see, and client files handled by hand. Intake and clearance you can reconstruct later.',
  },
  '/industries/healthcare': {
    title: 'Healthcare technology | YatiSphere',
    description:
      'Records, imaging and scheduling that each hold part of the picture. Systems that exchange data safely and prove they did.',
  },
  '/industries/government-public-sector': {
    title: 'Government and public sector | YatiSphere',
    description:
      'Citizen services that must be accessible, auditable and resilient, built against the constraints that actually apply.',
  },
  '/industries/software-saas': {
    title: 'Software and SaaS | YatiSphere',
    description:
      'Multi-tenant architecture, release controls and safe AI features for software companies answering enterprise customers\u2019 security reviews.',
  },

  '/how-we-work': {
    title: 'How we work | YatiSphere',
    description:
      'Discover, design, build, launch and run. Five stages, one in-house team, and a fixed price before any build begins.',
  },
  '/about-us': {
    title: 'About us | YatiSphere',
    description:
      'Who we are, how we got here, and why the people who scope your solution are the people who build and run it.',
  },
  '/contact-us': {
    title: 'Contact us | YatiSphere',
    description:
      'Describe the problem in a few lines. A founder replies within one working day with an honest view on whether we can help.',
  },
  '/blueprint': {
    title: 'Fixed-price Blueprint | YatiSphere',
    description:
      'A solution blueprint, a fixed costed delivery plan and a risk register in two to four weeks, before you commit to any build.',
  },
  '/case-studies': {
    title: 'Case studies | YatiSphere',
    description:
      'Problems we have solved for regulated businesses, what stood in the way, and the measured result.',
  },
  '/perspectives': {
    title: 'Perspectives | YatiSphere',
    description:
      'Notes on delivering enterprise software, cloud and applied AI in regulated environments.',
  },

  '/responsible-ai': {
    title: 'Responsible AI | YatiSphere',
    description:
      'What we commit to when building AI, what we refuse to build, and how we can be held to it.',
  },
  '/trust': {
    title: 'Trust center | YatiSphere',
    description:
      'How we protect client systems and data, who processes data for us, our certification status, and how to request an NDA and security pack.',
  },

  // Legal pages carry no search value and are kept out of the index.
  '/privacy': {
    title: 'Privacy Policy | YatiSphere',
    description:
      'How we collect, use and protect personal information, the rights you have over it, and how to exercise them.',
    noindex: true,
  },
}

/** Builds the Metadata object for a route, including canonical and robots. */
export function metaFor(route: string): Metadata {
  const meta = ROUTE_META[route]
  if (!meta) {
    throw new Error(`No metadata defined for route "${route}" in lib/seo.ts`)
  }

  const url = `${SITE_URL}${route === '/' ? '' : route}`

  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: url },
    ...(meta.noindex
      ? { robots: { index: false, follow: true } }
      : {}),
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: meta.title,
      description: meta.description,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  }
}

/** Routes that belong in the sitemap: everything public. */
export function indexableRoutes(): string[] {
  return Object.entries(ROUTE_META)
    .filter(([, m]) => !m.noindex)
    .map(([route]) => route)
}
