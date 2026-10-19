import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CONTENT_PAGES, getContentPage } from '@/content/pages'
import { ContentPageView } from '@/components/page/ContentPageView'
import { IndustriesHub, IndustryView } from '@/components/industries/IndustryView'
import { SITE_URL, socialMeta } from '@/lib/seo'

/** Every /what-we-do page is data in content/pages/; unknown paths 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return CONTENT_PAGES.map((p) => ({ slug: p.path.split('/').slice(2) }))
}

const pathFor = (slug?: string[]) => ['/what-we-do', ...(slug ?? [])].join('/')

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const page = getContentPage(pathFor((await params).slug))
  if (!page) return {}
  const url = `${SITE_URL}${page.path}`
  return {
    title: { absolute: page.meta.title },
    description: page.meta.description,
    alternates: { canonical: url },
    ...socialMeta({ title: page.meta.title, description: page.meta.description, url }),
  }
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const page = getContentPage(pathFor((await params).slug))
  if (!page) notFound()
  if (page.hub === 'industries') return <IndustriesHub page={page} />
  if (page.industry) return <IndustryView page={page} d={page.industry} />
  return <ContentPageView page={page} />
}
