import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Playfair_Display, Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { AsyncErrorBoundary } from '@/components/async-error-boundary'
import { MotionProvider } from '@/components/motion-provider'

// YatiSphere approved brand typeface
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-brand',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yatisphere.com'),
  title: {
    default: 'Yati Sphere Technologies — Enterprise IT Services & Applied AI',
    template: '%s | Yati Sphere Technologies'
  },
  description: 'Yati Sphere builds, modernises and runs enterprise software, cloud and data platforms — and brings applied AI into them with the governance regulated businesses require.',
  keywords: [
    'enterprise technology', 'cloud infrastructure', 'AI solutions', 'DevOps automation', 
    'data analytics', 'IT consulting', 'digital transformation', 'cloud migration',
    'machine learning', 'enterprise software', 'technology consulting', 'cloud services'
  ],
  authors: [{ name: 'Yati Sphere Technologies', url: 'https://yatisphere.com' }],
  creator: 'Yati Sphere Technologies',
  publisher: 'Yati Sphere Technologies',
  applicationName: 'Yati Sphere Technologies',
  category: 'Technology',
  classification: 'Business',
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://yatisphere.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/brand/yatisphere/icon/yatisphere-icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/brand/yatisphere/icon/yatisphere-icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/yatisphere/icon/yatisphere-icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/brand/yatisphere/icon/yatisphere-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/brand/yatisphere/icon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yatisphere.com',
    title: 'Yati Sphere Technologies — Enterprise IT Services & Applied AI',
    description: 'Yati Sphere builds, modernises and runs enterprise software, cloud and data platforms — and brings applied AI into them with the governance regulated businesses require.',
    siteName: 'Yati Sphere Technologies',
    images: [
      {
        url: '/brand/yatisphere/social/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yati Sphere Technologies - Enterprise Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@YatiSphere',
    creator: '@YatiSphere',
    title: 'Yati Sphere Technologies — Enterprise IT Services & Applied AI',
    description: 'Yati Sphere builds, modernises and runs enterprise software, cloud and data platforms — and brings applied AI into them with the governance regulated businesses require.',
    images: ['/brand/yatisphere/social/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nositelinkssearchbox: false,
    notranslate: false,
    indexifembedded: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        {/*
          Runs before paint: drops `.no-js` so the scroll-reveal
          animations take over. If JS never runs the class stays and
          the CSS fallback in globals.css keeps all content visible.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>
        
        <AsyncErrorBoundary>
          <MotionProvider>
            <div id="main-content" className="relative">
              {children}
            </div>
          </MotionProvider>
        </AsyncErrorBoundary>
      </body>
    </html>
  )
}