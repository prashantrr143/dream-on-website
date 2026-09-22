import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import DataEngineeringAnalytics from './content'

export const metadata: Metadata = metaFor('/solutions/data')

export default function Page() {
  return <DataEngineeringAnalytics />
}
