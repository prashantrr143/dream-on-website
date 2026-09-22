import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import ModernisationAdvisory from './content'

export const metadata: Metadata = metaFor('/solutions/consulting')

export default function Page() {
  return <ModernisationAdvisory />
}
