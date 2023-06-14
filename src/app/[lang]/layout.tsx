import { i18n } from "@/config/i18n"

import '../globals.css'

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
      <body>{children}</body>
    </html>
  )
}