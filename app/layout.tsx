import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Playfair_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { AsyncErrorBoundary } from '@/components/async-error-boundary'

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
    default: 'Yati Sphere Technologies - Enterprise Technology Solutions',
    template: '%s | Yati Sphere Technologies'
  },
  description: 'Leading enterprise technology consulting company specializing in cloud infrastructure, AI solutions, DevOps automation, data analytics, and digital transformation services.',
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yatisphere.com',
    title: 'Yati Sphere Technologies - Enterprise Technology Solutions',
    description: 'Leading enterprise technology consulting company specializing in cloud infrastructure, AI solutions, DevOps automation, and digital transformation services.',
    siteName: 'Yati Sphere Technologies',
    images: [
      {
        url: '/og-image.png',
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
    title: 'Yati Sphere Technologies - Enterprise Technology Solutions',
    description: 'Leading enterprise technology consulting company specializing in cloud infrastructure, AI solutions, DevOps automation, and digital transformation services.',
    images: ['/twitter-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'oklch(1 0 0)' },
    { media: '(prefers-color-scheme: dark)', color: 'oklch(0.145 0 0)' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable} min-h-screen bg-background font-sans antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>
        
        <AsyncErrorBoundary>
          <div id="main-content" className="relative">
            {children}
          </div>
        </AsyncErrorBoundary>
      </body>
    </html>
  )
}