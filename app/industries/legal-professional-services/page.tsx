import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import LegalProfessionalServices from './content'

export const metadata: Metadata = metaFor('/industries/legal-professional-services')

export default function Page() {
  return <LegalProfessionalServices />
}
