import type { Metadata } from 'next'
import ResponsibleAIContent from './content'

const TITLE = 'Responsible AI | YatiSphere'
const DESCRIPTION =
  'How YatiSphere approaches AI development: human oversight, explainability, explicit data boundaries and risk-appropriate design.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: 'https://yatisphere.com/responsible-ai' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://yatisphere.com/responsible-ai',
  },
  twitter: { title: TITLE, description: DESCRIPTION },
}

export default function ResponsibleAIPage() {
  return <ResponsibleAIContent />
}
