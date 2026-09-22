import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import GovernmentPublicSector from './content'

export const metadata: Metadata = metaFor('/industries/government-public-sector')

export default function Page() {
  return <GovernmentPublicSector />
}
