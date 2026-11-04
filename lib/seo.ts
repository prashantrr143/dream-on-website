import type { Metadata } from 'next'
import { CONTENT_PAGES } from '@/content/pages'

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

/**
 * The share card (app/opengraph-image.tsx). Routes that set their own
 * openGraph replace the root one wholesale in Next.js, so every route
 * must re-attach the image, locale and site name: use socialMeta().
 */
export const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'YatiSphere: Cloud and AI that make it into production.',
}

/** openGraph + twitter for one page, with the shared image and locale. */
export function socialMeta(opts: {
  title: string
  description: string
  url: string
  type?: 'website' | 'article'
  publishedTime?: string
  /** Per-page card: drawn by app/og/route.tsx. Omit for the default card. */
  card?: { title: string; kicker: string }
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  const image = opts.card
    ? { url: `/og?${new URLSearchParams({ t: opts.card.title, k: opts.card.kicker }).toString()}`, width: 1200, height: 630, alt: opts.card.title }
    : OG_IMAGE
  return {
    openGraph: {
      type: opts.type ?? 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
      url: opts.url,
      images: [image],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [image.url],
    },
  }
}

interface RouteMeta {
  /** Full <title>. The brand suffix is already included. */
  title: string
  description: string
  /** Legal and utility pages are kept out of the index. */
  noindex?: boolean
}

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'YatiSphere | Cloud and AI for banks, law firms and SaaS',
    description:
      'YatiSphere designs, builds and runs cloud, software, data and AI for banks, law firms and SaaS companies, starting with a fixed-fee plan.',
  },

  '/who-we-are/how-we-work': {
    title: 'How we take AI from pilot to production | YatiSphere',
    description:
      'Discover, design, build, launch and run. Five stages, a decision point after each, and an agreed plan before any build begins.',
  },
  '/who-we-are/about': {
    title: 'About YatiSphere: our vision, principles and people',
    description:
      'A focused firm for systems that have to be trusted in regulated businesses: our vision, the principles we work to, and the people accountable for it.',
  },
  '/contact-us': {
    title: 'Contact us | YatiSphere',
    description:
      'Contact YatiSphere about cloud, software, data or AI work. We reply within one working day and tell you plainly whether we are the right team.',
  },
  '/blueprint': {
    title: 'Fixed-fee AI readiness assessment: Blueprint | YatiSphere',
    description:
      'A fixed-fee Solution Blueprint: a solution design, delivery plan and risk register in two to four weeks, before you commit to any build.',
  },
  '/customer-stories': {
    title: 'Customer stories | YatiSphere',
    description:
      'Problems we have solved for regulated businesses, what stood in the way, and the measured result.',
  },
  '/insights': {
    title: 'Insights | YatiSphere',
    description:
      'Practical notes on Azure, applied AI, security and regulation for teams in regulated businesses, from the engineers who build the systems.',
  },

  '/who-we-are/responsible-ai': {
    title: 'Responsible AI: human approval, audit trails | YatiSphere',
    description:
      'How YatiSphere builds AI: human review steps, evaluation on your data, audit trails, what we refuse to build, and how to hold us to it.',
  },
  '/who-we-are/trust': {
    title: 'Trust center: security, data and NDAs | YatiSphere',
    description:
      'How we protect client systems and data, who processes data for us, our certification status, and how to request an NDA and security pack.',
  },

  '/who-we-are/leadership': {
    title: 'Leadership | YatiSphere',
    description:
      'Meet the people who lead YatiSphere and are accountable for the cloud, software, data and AI systems we design, build and run for regulated businesses.',
  },
  '/accessibility': {
    title: 'Accessibility statement | YatiSphere',
    description:
      'How we build this website to WCAG 2.2 AA, what we know does not yet meet it, and how to tell us about a barrier you hit.',
  },
  '/search': {
    title: 'Search | YatiSphere',
    description: 'Search the YatiSphere site.',
    noindex: true,
  },

  // Legal pages carry no search value and are kept out of the index.
  '/privacy': {
    title: 'Privacy Policy | YatiSphere',
    description:
      'How YatiSphere collects, uses and protects personal information, who we share it with, the rights you have over it, and how to exercise them.',
    noindex: true,
  },
}

/** Section label for a page's share card, from its path. */
export function cardKicker(path: string): string {
  if (path.startsWith('/insights/')) return 'Insights'
  if (path.startsWith('/insights')) return 'Insights'
  if (path.startsWith('/what-we-do/industries')) return 'Industries'
  if (path.startsWith('/what-we-do/applied-ai')) return 'Applied AI'
  if (path.startsWith('/what-we-do/cloud')) return 'Cloud'
  if (path.startsWith('/what-we-do/consulting')) return 'Consulting'
  if (path.startsWith('/what-we-do')) return 'Services'
  if (path.startsWith('/blueprint')) return 'Solution Blueprint'
  if (path.startsWith('/contact-us')) return 'Contact'
  if (path.startsWith('/who-we-are')) return 'Company'
  return 'YatiSphere'
}

/** A page title without the brand suffix, for the share card. */
export const cardTitle = (title: string) => title.replace(/\s*\|\s*YatiSphere\s*$/, '')

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
    ...socialMeta({
      title: meta.title,
      description: meta.description,
      url,
      ...(route === '/' ? {} : { card: { title: cardTitle(meta.title), kicker: cardKicker(route) } }),
    }),
  }
}

/** Routes that belong in the sitemap: everything public. */
export function indexableRoutes(): string[] {
  return [
    ...Object.entries(ROUTE_META)
      .filter(([, m]) => !m.noindex)
      .map(([route]) => route),
    ...CONTENT_PAGES.map((p) => p.path),
  ]
}
