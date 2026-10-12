import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import AboutUs from './content'

export const metadata: Metadata = metaFor('/who-we-are/about')

export default function Page() {
  return <AboutUs />
}
