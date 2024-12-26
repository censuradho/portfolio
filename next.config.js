/** @type {import('next').NextConfig} */

const nextConfig = {
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

module.exports = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
