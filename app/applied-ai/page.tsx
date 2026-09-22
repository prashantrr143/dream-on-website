import type { Metadata } from 'next'
import { metaFor, SITE_URL } from '@/lib/seo'
import {
  ServiceSchema,
  BreadcrumbSchema,
} from '@/components/seo/StructuredData'
import AppliedAIContent from './content'

export const metadata: Metadata = metaFor('/applied-ai')

export default function AppliedAIPage() {
  return (
    <>
      <ServiceSchema
        services={[
          {
            name: 'Applied AI',
            description:
              'Agentic workflow automation, enterprise AI platforms and responsible AI governance, integrated into the systems you already run.',
            url: `${SITE_URL}/applied-ai`,
          },
        ]}
      />
      <BreadcrumbSchema trail={[{ name: 'Applied AI', path: '/applied-ai' }]} />
      <AppliedAIContent />
    </>
  )
}
