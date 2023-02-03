
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';
import { useEffect } from 'react'
import reactGA from "react-ga4";

import { globalStyle } from 'stitches.config'

const CookieWarn = dynamic(() => import('components/cookie-warn').then(t => t.CookieWarn), {
  ssr: false
})


export default function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()
    
    if (process.env.NODE_ENV === 'production') {
      reactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string);
    }
  }, [])

  return (
    <>
      <CookieWarn />
      <Component {...pageProps} />
    </>
  )
}
