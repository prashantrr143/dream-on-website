import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import Home from './content'

export const metadata: Metadata = metaFor('/')

export default function Page() {
  return <Home />
}
