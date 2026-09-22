import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import CloudInfrastructure from './content'

export const metadata: Metadata = metaFor('/solutions/cloud')

export default function Page() {
  return <CloudInfrastructure />
}
