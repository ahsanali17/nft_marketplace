import type { AppProps } from 'next/app'

import './globals.css'
import RootLayout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <html lang='EN'>
      <>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </>
    </html>
  )
}
