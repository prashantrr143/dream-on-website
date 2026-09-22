import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import IndustriesPage from './content'

export const metadata: Metadata = metaFor('/industries')

export default function Page() {
  return <IndustriesPage />
}
