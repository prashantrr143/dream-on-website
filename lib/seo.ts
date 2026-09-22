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
    // 71 characters, over the 60-character guideline. Kept because the
    // brief specifies this exact string; Google will truncate the tail
    // in results. Shortening to "...fix real problems | YatiSphere"
    // would fit in 62.
    title: 'IT services and applied AI that fix real business problems | YatiSphere',
    description:
      'Slow onboarding, systems nobody dares touch, data you cannot get answers from. Tell us the problem and one in-house team delivers the working solution.',
  },

  '/solutions': {
    title: 'Enterprise IT services | YatiSphere',
    description:
      'Software, cloud, data, DevOps, modernisation and security, delivered end to end by the team that scoped the work.',
  },
  '/solutions/cloud': {
    title: 'Cloud and infrastructure | YatiSphere',
    description:
      'Rising cloud costs, unclear ownership and migrations that stall. Secure foundations and a platform your own engineers can run.',
  },
  '/solutions/data': {
    title: 'Data and analytics | YatiSphere',
    description:
      'The data exists but nobody can get an answer from it. One trusted platform, governed pipelines and dashboards people actually use.',
  },
  '/solutions/devops': {
    title: 'DevOps and automation | YatiSphere',
    description:
      'Releases that take days and break things. Automated delivery and infrastructure, without losing engineering control.',
  },
  '/solutions/security': {
    title: 'Enterprise security | YatiSphere',
    description:
      'An audit or client security review is coming. Controls, logging and evidence built into your systems rather than bolted on.',
  },
  '/solutions/consulting': {
    title: 'Legacy modernisation and advisory | YatiSphere',
    description:
      'A core system nobody dares touch. Step-by-step modernisation that keeps the business running while it happens.',
  },

  '/applied-ai': {
    title: 'Applied AI | YatiSphere',
    description:
      'Most AI pilots never leave the sandbox. We own the integration, the governance and the operations, so the work reaches production.',
  },

  '/industries': {
    title: 'Industries we work in | YatiSphere',
    description:
      'Regulated and high-trust environments where a wrong answer has consequences: finance, legal, healthcare, government and technology.',
  },
  '/industries/financial-services': {
    title: 'Financial services technology | YatiSphere',
    description:
      'Onboarding that takes weeks, evidence auditors keep asking for, and core systems that cannot go down.',
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
  '/industries/enterprise-technology': {
    title: 'Enterprise and technology firms | YatiSphere',
    description:
      'Platforms under load, security reviews from your own customers, and the evidence your buyers ask for before they sign.',
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
  '/perspectives': {
    title: 'Perspectives | YatiSphere',
    description:
      'Notes on delivering enterprise software, cloud and applied AI in regulated environments.',
  },
  '/services': {
    title: 'Services | YatiSphere',
    description:
      'What we build, run and advise on across software, cloud, data, security and applied AI.',
  },

  '/responsible-ai': {
    title: 'Responsible AI | YatiSphere',
    description:
      'What we commit to when building AI, what we refuse to build, and how we can be held to it.',
  },
  '/security': {
    title: 'Security | YatiSphere',
    description:
      'How we protect client systems and data: access control, logging, and evidence your auditors can use.',
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
