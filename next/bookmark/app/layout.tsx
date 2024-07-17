/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BookMark',
  description: '나만의 북마크',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <header className='shadow'>
            <Nav />
          </header>
          <main className='w-full overflow-y-hidden'>{children}</main>
          <footer className='mt-auto text-center text-gray-500'>
            &#169; Indiflex - Seocho 2024
          </footer>
        </div>
      </body>
    </html>
  );
}
