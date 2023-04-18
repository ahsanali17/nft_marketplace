import type { AppProps } from 'next/app'

import './globals.css'
import RootLayout from './layout'

const App = ({ Component, pageProps }: AppProps) => {
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

export default App
