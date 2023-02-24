'use client';

import { WagmiConfig } from 'wagmi';
import { ThemeProvider } from "next-themes";
import { SessionProvider } from 'next-auth/react';
import Script from "next/script";

import { client } from './wagmiClient';
import { NFTProvider } from "context/NFTContext";

export default function Providers({ children }: any) {

 return (
  <WagmiConfig client={client}>
   <SessionProvider refetchInterval={0}>
    <NFTProvider>
     <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
       {children}
      </div>
      <Script src="https://kit.fontawesome.com/be932b9d11.js" crossOrigin="anonymous" />
     </ThemeProvider>
    </NFTProvider>
   </SessionProvider>
  </WagmiConfig>
 )
}