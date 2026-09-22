import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import DevOpsAutomation from './content'

export const metadata: Metadata = metaFor('/solutions/devops')

export default function Page() {
  return <DevOpsAutomation />
}
