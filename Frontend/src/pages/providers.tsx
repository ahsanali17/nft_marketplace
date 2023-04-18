import type { Provider } from 'react'
import { WagmiConfig } from 'wagmi'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script'
import { client } from './wagmiClient'

import { NFTProvider } from '../../context/NFTContext'

const Providers = ({ children }: Provider<JSX.Element> | any | undefined): JSX.Element => {
  return (
    <WagmiConfig client={client}>
      <SessionProvider refetchInterval={0}>
        <NFTProvider>
          <ThemeProvider attribute='class'>
            <div className='dark:bg-nft-dark bg-white min-h-screen'>
              {children}
            </div>
            <Script
              src='https://kit.fontawesome.com/be932b9d11.js'
              crossOrigin='anonymous'
            />
          </ThemeProvider>
        </NFTProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}

export default Providers
