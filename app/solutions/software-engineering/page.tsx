import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import SoftwareEngineering from './content'

export const metadata: Metadata = metaFor('/solutions/software-engineering')

export default function Page() {
  return <SoftwareEngineering />
}
