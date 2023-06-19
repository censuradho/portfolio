export const appSettings = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || '@procergs-concurso-2023',
  siteUrl: process.env.NEXT_PUBLIC_API_URL || (process.env.VERCEL_URL && process.env.VERCEL_URL) || process.env.URL || 'http://localhost:3000',
  analytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  env: process.env.NODE_ENV,
  madeBy: {
    link: process.env.NEXT_PUBLIC_MADE_BY_LINK,
    label: process.env.NEXT_PUBLIC_MADE_BY_LABEL,
  },
  mailChimp: {
    apiKey: process.env.MAILCHIMP_API_KEY
  }
} 

export const isDevMode = appSettings.env && appSettings.env === 'development'