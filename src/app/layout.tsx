import { Poppins } from 'next/font/google'

import './globals.css'
import { GoogleAnalytics } from '@/components'

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
      <GoogleAnalytics />
      <body className={robotoSerif.className}>{children}</body>
    </html>
  )
}