import Providers from '../pages/providers'

import { Navbar, Footer } from '../components'
import Head from './head'

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        <Providers>
          <Navbar />
          <div className="pt-65">{children}</div>
          <Footer />
        </Providers>
      </body>
    </>
  )
}

export default RootLayout
