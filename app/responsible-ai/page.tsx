import type { Metadata } from 'next'
import ResponsibleAIContent from './content'

const TITLE = 'Responsible AI | YatiSphere'
const DESCRIPTION =
  'YatiSphere\u2019s Responsible AI policy: human oversight, data boundaries, third-party model handling, evaluation before go-live, and the AI work we decline.'

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
