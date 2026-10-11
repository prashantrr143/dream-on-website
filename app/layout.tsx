import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { socialMeta } from '@/lib/seo'
import { AsyncErrorBoundary } from '@/components/async-error-boundary'
import { MotionProvider } from '@/components/motion-provider'
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from '@/components/analytics/GoogleTagManager'
import { ConsentBanner } from '@/components/analytics/ConsentBanner'
import { LinkTracking } from '@/components/analytics/LinkTracking'
import {
  OrganizationSchema,
  WebSiteSchema,
} from '@/components/seo/StructuredData'

/**
 * Three families, latin only, display: swap.
 *
 * The site previously loaded five families, of which only one was
 * really used, at a cost of ~1MB of font files. Now 284KB.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['500', '600'],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
})

/** Eyebrows, small-caps labels and tags only. */
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

const DEFAULT_TITLE = 'Enterprise AI, consulting and cloud engineering | YatiSphere'
const DEFAULT_DESCRIPTION =
  'We advise, build and run enterprise platforms on AWS, Microsoft Azure and Google Cloud, and bring governed AI into them, with a dedicated Claude practice.'

/**
 * Site-wide defaults. Every route sets its own title, description,
 * canonical and social card (lib/seo.ts metaFor / socialMeta); these
 * apply only where a route sets nothing. No site-wide canonical: a
 * fallback would point every page that forgets its own at the home page.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://yatisphere.com'),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | YatiSphere',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: 'YatiSphere',
  authors: [{ name: 'YatiSphere Technologies Private Limited', url: 'https://yatisphere.com' }],
  creator: 'YatiSphere Technologies Private Limited',
  publisher: 'YatiSphere Technologies Private Limited',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/yatisphere/icon/yatisphere-icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/brand/yatisphere/icon/yatisphere-icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/yatisphere/icon/yatisphere-icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/brand/yatisphere/icon/yatisphere-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/brand/yatisphere/icon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  ...socialMeta({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, url: 'https://yatisphere.com' }),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0B1E3D', // YatiSphere Deep Blue
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        {/* Consent Mode defaults, then GTM. Nothing else goes first. */}
        <GoogleTagManager />
      </head>
      <body className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} min-h-screen bg-background font-sans antialiased`}>
        <GoogleTagManagerNoScript />
        <OrganizationSchema />
        <WebSiteSchema />
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <a
          href="#footer"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-52 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to footer
        </a>
        
        <AsyncErrorBoundary>
          <MotionProvider>
            <div id="main-content" className="relative">
              {children}
            </div>
          </MotionProvider>
          <ConsentBanner />
          <LinkTracking />
        </AsyncErrorBoundary>
      </body>
    </html>
  )
}