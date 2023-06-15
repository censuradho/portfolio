import { Roboto_Serif } from 'next/font/google'

import './globals.css'

const robotoSerif = Roboto_Serif({
  display: 'swap',
  weight: ['400', '500'],
  subsets: ['latin'],
})

export default function Root({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={robotoSerif.className}>{children}</body>
    </html>
  )
}