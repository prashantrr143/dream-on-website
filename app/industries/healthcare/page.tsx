import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import Healthcare from './content'

export const metadata: Metadata = metaFor('/industries/healthcare')

export default function Page() {
  return <Healthcare />
}
