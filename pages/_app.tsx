
import { CookieWarn } from 'components/cookie-warn';
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import reactGA from "react-ga4";

import { globalStyle } from 'stitches.config'


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
