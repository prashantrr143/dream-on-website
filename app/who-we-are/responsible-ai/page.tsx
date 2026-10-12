import type { Metadata } from 'next'
import { metaFor } from '@/lib/seo'
import ResponsibleAIContent from './content'


export const metadata: Metadata = metaFor('/who-we-are/responsible-ai')

export default function ResponsibleAIPage() {
  return <ResponsibleAIContent />
}
