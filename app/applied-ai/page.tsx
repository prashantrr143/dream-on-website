import type { Metadata } from 'next'
import AppliedAIContent from './content'

export const metadata: Metadata = {
  // absolute: the root layout appends "| Yati Sphere Technologies", which
  // would double the brand in a title that already names it.
  title: { absolute: 'Applied AI | YatiSphere: AI That Ships to Production' },
  description:
    'Agentic workflow automation, enterprise AI platforms and responsible AI governance, integrated into the systems you already run and accountable through production.',
  alternates: {
    canonical: 'https://yatisphere.com/applied-ai',
  },
  openGraph: {
    title: 'Applied AI | YatiSphere: AI That Ships to Production',
    description:
      'Agentic workflow automation, enterprise AI platforms and responsible AI governance, integrated into the systems you already run and accountable through production.',
    url: 'https://yatisphere.com/applied-ai',
  },
  twitter: {
    title: 'Applied AI | YatiSphere: AI That Ships to Production',
    description:
      'Agentic workflow automation, enterprise AI platforms and responsible AI governance, integrated into the systems you already run and accountable through production.',
  },
}

export default function AppliedAIPage() {
  return <AppliedAIContent />
}
