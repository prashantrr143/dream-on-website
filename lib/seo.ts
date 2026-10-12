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
  alt: 'YatiSphere: Enterprise AI, engineered to be trusted.',
}

/** openGraph + twitter for one page, with the shared image and locale. */
export function socialMeta(opts: {
  title: string
  description: string
  url: string
  type?: 'website' | 'article'
  publishedTime?: string
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      type: opts.type ?? 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      title: opts.title,
      description: opts.description,
      url: opts.url,
      images: [OG_IMAGE],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [OG_IMAGE.url],
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
    title: 'Enterprise AI, consulting and cloud engineering | YatiSphere',
    description:
      'We advise, build and run enterprise platforms on AWS, Microsoft Azure and Google Cloud, and bring governed AI into them, with a dedicated Claude practice.',
  },

  '/who-we-are/how-we-work': {
    title: 'How we work | YatiSphere',
    description:
      'Discover, design, build, launch and run. Five stages, one in-house team, and an agreed plan before any build begins.',
  },
  '/who-we-are/about': {
    title: 'About YatiSphere: our vision, principles and people',
    description:
      'Senior consultants and engineers who have built and run systems for global banks, consultancies and governments. Our vision, principles and people.',
  },
  '/contact-us': {
    title: 'Contact us | YatiSphere',
    description:
      'Tell us the problem. A senior member of the team replies within one working day with an honest view on whether we are the right team.',
  },
  '/blueprint': {
    title: 'Solution Blueprint | YatiSphere',
    description:
      'A solution blueprint, a delivery plan and a risk register in two to four weeks, before you commit to any build.',
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
    title: 'Responsible AI | YatiSphere',
    description:
      'What we commit to when building AI, what we refuse to build, and how we can be held to it.',
  },
  '/who-we-are/trust': {
    title: 'Trust center | YatiSphere',
    description:
      'How we protect client systems and data, who processes data for us, our certification status, and how to request an NDA and security pack.',
  },

  '/who-we-are/leadership': {
    title: 'Leadership | YatiSphere',
    description:
      'The people who lead YatiSphere: senior consultants and engineers who design, build and run systems for regulated businesses.',
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
    ...socialMeta({ title: meta.title, description: meta.description, url }),
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
