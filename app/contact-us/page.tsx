import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import ContactPage from './content'

export const metadata: Metadata = metaFor('/contact-us')

export default function Page() {
  return <ContactPage />
}
