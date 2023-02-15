const env = process.env

export const environments = {
  siteUrl: env.SITE_URL || (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) || process.env.URL || 'http://localhost:3000',
  ghost: {
    url: env.GHOST_URL as string,
    key: env.GHOST_KEY as string
  },
  revalidate: process.env.REVALIDATE_KEY
}