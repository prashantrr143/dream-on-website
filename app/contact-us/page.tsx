import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import ContactPage from './content'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'

export const metadata: Metadata = metaFor('/contact-us')

export default function Page() {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: 'Contact', path: '/contact-us' }]} />
      <ContactPage />
    </>
  )
}
