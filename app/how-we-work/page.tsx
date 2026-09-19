import type { Metadata } from 'next'
import HowWeWorkContent from './content'

const TITLE = 'How We Work | YatiSphere: Five Stages, One In-House Team'
const DESCRIPTION =
  'Discover, design, build, launch and run. How YatiSphere delivers software, cloud, data and AI projects with one accountable in-house team.'

export const metadata: Metadata = {
  // absolute: the root layout appends "| Yati Sphere Technologies", which
  // would double the brand in a title that already names it.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://yatisphere.com/how-we-work',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://yatisphere.com/how-we-work',
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function HowWeWorkPage() {
  return <HowWeWorkContent />
}
