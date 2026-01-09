import type { NextConfig } from 'next'

const settings: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
        protocol: 'https',
      },
      {
        hostname: 'static-public.klickpages.com.br',
        protocol: 'https',
      },
      {
        hostname: 'agile-planning-poker.vercel.app',
        protocol: 'https',
      },
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https',
      }
    ],
  }
}

 
// Next.js 16 - turbopack at the top level of nextConfig
const nextConfig: NextConfig = {
  ...settings,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}
 
export default nextConfig
