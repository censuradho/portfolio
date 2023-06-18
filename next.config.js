/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  productionBrowserSourceMaps: true,
  images: {
    domains: [
      'github.com',
      'agile-planning-poker.vercel.app',
      'static-public.klickpages.com.br',
      'digitalpress.fra1.cdn.digitaloceanspaces.com',
      'res.cloudinary.com'
    ]
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
