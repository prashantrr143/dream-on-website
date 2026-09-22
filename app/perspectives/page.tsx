import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import PerspectivesPage from './content'

export const metadata: Metadata = metaFor('/perspectives')

export default function Page() {
  return <PerspectivesPage />
}
