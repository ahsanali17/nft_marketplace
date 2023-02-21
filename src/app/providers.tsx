'use client';

import { ThemeProvider } from "next-themes";
import Script from "next/script";

export default function Providers({ children }: any) {

 return (
  <ThemeProvider attribute="class">
   <div className="dark:bg-nft-dark bg-white min-h-screen">
    {children}
   </div>
   <Script src="https://kit.fontawesome.com/be932b9d11.js" crossOrigin="anonymous" />

  </ThemeProvider>
 )
}