import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import EnterpriseSecurity from './content'

export const metadata: Metadata = metaFor('/solutions/security')

export default function Page() {
  return <EnterpriseSecurity />
}
