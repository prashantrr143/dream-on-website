import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import FinancialServices from './content'

export const metadata: Metadata = metaFor('/industries/financial-services')

export default function Page() {
  return <FinancialServices />
}
