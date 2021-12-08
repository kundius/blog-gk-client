import React, { useEffect } from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from '@components/ThemeContext'
import { PreloadContext } from '@components/PreloadContext'
import '@components/ThemeContext/globals.css'
import '@components/Pagination/styles.css'
import 'react-image-lightbox/style.css'

export default function App ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('webfontloader').then(({ default: WebFont }) => {
        WebFont.load({
          custom: {
            families: ['Gilroy:n4,i4,n6,n7'],
            urls: ['/fonts/Gilroy/stylesheet.css']
          }
        })
      })
    }
  }, [])

  return (
    <PreloadContext.Provider value={pageProps.preloadData || {}}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </PreloadContext.Provider>
  )
}
