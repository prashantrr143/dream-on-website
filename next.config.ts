import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Enhanced image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [], // Add your image domains here
    remotePatterns: [
      // Add patterns for external images
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      //   port: '',
      //   pathname: '/images/**',
      // },
    ],
    unoptimized: false,
    loader: 'default',
    loaderFile: '',
  },

  // Compression and headers
  compress: true,
  poweredByHeader: false,
  
  // Bundle analyzer (only in development)
  ...(process.env['ANALYZE'] === 'true' && {
    webpack: (config: any) => {
      config.plugins.push(
        new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)()
      );
      return config;
    },
  }),

  // The Applied AI page moved from /solutions/ai-ml to /applied-ai, so it
  // reads as the second company pillar rather than one service among six.
  // Permanent, so search engines transfer the old URL's standing.
  async redirects() {
    return [
      // Canonical host: www -> apex, permanently. Vercel terminates TLS
      // and upgrades http itself, so only the host needs handling here.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.yatisphere.com' }],
        destination: 'https://yatisphere.com/:path*',
        permanent: true,
      },
      {
        source: '/solutions/ai-ml',
        destination: '/applied-ai',
        permanent: true,
      },
      // /policy was a second, duplicate privacy policy. There is now one
      // canonical policy at /privacy; the cookies content is a section of it.
      {
        source: '/policy',
        destination: '/privacy#cookies',
        permanent: true,
      },
      // Terms of Service was withdrawn pending legal review of the
      // governing-law and dispute-resolution clauses.
      {
        source: '/terms',
        destination: '/privacy',
        permanent: true,
      },
    ];
  },

  // Enhanced security and performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Performance headers
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
