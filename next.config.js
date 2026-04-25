/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  compress: true,
  
  // Image optimization
  images: {
    domains: ['pangestuservice.vercel.app'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    return []
  },

  // Rewrites
  async rewrites() {
    return {
      beforeFiles: [],
    }
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },

  // PWA support
  swcMinify: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig