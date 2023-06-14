import { i18n } from "@/config/i18n"
import { Roboto_Serif } from 'next/font/google'

import '../globals.css'

const robotoSerif = Roboto_Serif({
  display: 'swap',
  weight: ['400', '500'],
  subsets: ['latin'],
})

export async function generateStaticParams () {
  return i18n.locales.map(locale => ({
    lang: locale
  }))
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={robotoSerif.className}>{children}</body>
    </html>
  )
}