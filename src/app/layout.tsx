import './globals.css';
import Providers from './providers';
import { Navbar, Footer } from '../components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
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
          <div className="pt-65">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}