import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import './globals.css'
import { appSettings } from '@/config/app'

const robotoSerif = Poppins({
  display: 'swap',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export default function Root({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      {process.env.NODE_ENV !== 'development' && (
        <GoogleAnalytics gaId={appSettings.analytics} />
      )}
      <body className={robotoSerif.className}>{children}</body>
    </html>
  )
}