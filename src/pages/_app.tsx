import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
// import { ApolloProvider } from '@apollo/client'

import { ThemeProvider } from '@components/ThemeContext'
import { PreloadContext } from '@components/PreloadContext'
// import { useApollo } from '@app/lib/apolloClient'
import { GlobalStyle } from '@components/GlobalStyle'
import '@components/GlobalStyle/globals.css'
import '@components/Pagination/styles.css'

export default function App ({ Component, pageProps }: AppProps) {
  // const apolloClient = useApollo({
  //   initialState: pageProps.initialApolloState
  // })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('webfontloader').then(({ default: WebFont }) => {
        WebFont.load({
          // google: {
          //   families: [
          //     'Lato:300,400,400i,600,700&amp;subset=cyrillic'
          //   ]
          // },
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
        {/* <ApolloProvider client={apolloClient}> */}
          <GlobalStyle />
          <Component {...pageProps} />
        {/* </ApolloProvider> */}
      </ThemeProvider>
    </PreloadContext.Provider>
  )
}
