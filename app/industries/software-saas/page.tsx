import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import EnterpriseTechnology from './content'

export const metadata: Metadata = metaFor('/industries/software-saas')

export default function Page() {
  return <EnterpriseTechnology />
}
