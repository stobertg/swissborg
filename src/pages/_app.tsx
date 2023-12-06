import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { globalStyles, lightTheme, darkTheme } from '@theme'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => { globalStyles() }, [])

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      defaultTheme="light"
    > 
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp