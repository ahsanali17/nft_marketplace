import './globals.css';
import Providers from './providers';
import { Navbar, Footer } from '../components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
        <body>
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </body>
    </html>
  )
}
