import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import HowWeWorkContent from './content'


export const metadata: Metadata = metaFor('/who-we-are/how-we-work')

export default function HowWeWorkPage() {
  return <HowWeWorkContent />
}
