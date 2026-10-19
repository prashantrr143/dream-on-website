import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
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
 * One family for everything: IBM Plex Sans, latin only, display: swap
 * (next/font adds a size-adjusted local fallback, so the swap does not
 * shift layout). Plex Mono is loaded for code snippets and labels inside
 * technical diagrams only.
 *
 * Self-hosted from app/fonts (Fontsource 5.3.0, SIL Open Font License).
 * next/font/google downloads the files at build time, and a failed
 * download from Google failed the whole Vercel build (2026-10-19), so the
 * build no longer depends on the network.
 */
const ibmPlexSans = localFont({
  src: [
    { path: './fonts/ibm-plex-sans-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
})

const ibmPlexMono = localFont({
  src: [{ path: './fonts/ibm-plex-mono-latin-400-normal.woff2', weight: '400', style: 'normal' }],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
  fallback: ['ui-monospace', 'Menlo', 'Consolas', 'monospace'],
})

// Same positioning as the home page (lib/seo.ts '/').
const DEFAULT_TITLE = 'IT services and applied AI, built properly | YatiSphere'
const DEFAULT_DESCRIPTION =
  'Cloud, software, data and security for growing companies and regulated enterprises, built and run by senior engineers, with governed AI where it pays.'

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
  themeColor: '#0A1628', // --navy-950
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
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} min-h-screen bg-background font-sans antialiased`}>
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