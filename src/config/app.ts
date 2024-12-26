export const appSettings = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || '@procergs-concurso-2023',
  siteUrl: process.env.NEXT_PUBLIC_API_URL || (process.env.VERCEL_URL && process.env.VERCEL_URL) || process.env.URL || 'http://localhost:3000',
  analytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '',
  env: process.env.NODE_ENV,
  madeBy: {
    link: process.env.NEXT_PUBLIC_MADE_BY_LINK,
    label: process.env.NEXT_PUBLIC_MADE_BY_LABEL,
  },
  mailChimp: {
    apiKey: process.env.MAILCHIMP_API_KEY,
    marketingBaseUrl: process.env.MAILCHIMP_MARKETING_BASE_URL,
    transactionalBaseUrl: process.env.MAILCHIMP_TRANSACTIONAL_BASE_URL
  },
  nodemailer: {
    host: process.env.NODE_MAILER_HOST,
    port: process.env.NODE_MAILER_PORT,
    auth: {
      user: process.env.NODE_MAILER_USER,
      password: process.env.NODE_MAILER_PASSWORD,
    }
  },
  ghost: {
    url: process.env.GHOST_URL || '',
    key: process.env.GHOST_KEY || '',
  },
  contentful: {
    space: process.env.CONTENTFUL_SPACE || '',
    token: process.env.CONTENTFUL_TOKEN || '',
    host: process.env.CONTENTFUL_HOST || '',
  }
} 

export const isDevMode = appSettings.env && appSettings.env === 'development'