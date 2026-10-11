import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import ModernizationAdvisory from './content'

export const metadata: Metadata = metaFor('/solutions/modernization')

export default function Page() {
  return <ModernizationAdvisory />
}
