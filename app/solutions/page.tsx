import type { Metadata } from 'next'
import { metaFor, SITE_URL } from '@/lib/seo'
import {
  ServiceSchema,
  BreadcrumbSchema,
} from '@/components/seo/StructuredData'
import SolutionsPage from './content'

export const metadata: Metadata = metaFor('/solutions')

export default function Page() {
  return (
    <>
      <ServiceSchema
        services={[
          {
            name: 'Enterprise IT Services',
            description:
              'Software, cloud, data, DevOps, modernisation and security: the systems your business runs on.',
            url: `${SITE_URL}/solutions`,
          },
          {
            name: 'Applied AI',
            description:
              'Production-grade AI inside the systems you already run, governed from day one.',
            url: `${SITE_URL}/applied-ai`,
          },
        ]}
      />
      <BreadcrumbSchema trail={[{ name: 'Solutions', path: '/solutions' }]} />
      <SolutionsPage />
    </>
  )
}
