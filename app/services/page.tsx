import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import ServicesPage from './content'

export const metadata: Metadata = metaFor('/services')

export default function Page() {
  return <ServicesPage />
}
