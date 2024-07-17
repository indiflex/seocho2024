/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BookMarkedIcon } from 'lucide-react';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
  const session = await auth();
  console.log('🚀  session:', session);

  let name;
  let image;

  if (session && session.user) {
    name = session.user.name;
    image = session.user.image;
  }

  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='h-screen w-full '>
          <header>
            <nav className='flex items-center justify-between p-3'>
              <h1 className='text-2xl flex font-bold text-green-500'>
                <BookMarkedIcon className='mt-1' />
                BookMark
              </h1>
              <div>
                {name ? (
                  <Link href='/my'>
                    <img
                      src={image || ''}
                      alt={name || ''}
                      width={32}
                      height={32}
                      title='my'
                      className='hover:opacity-80  rounded-full'
                    />
                  </Link>
                ) : (
                  <div>
                    <Link href='/regist'>
                      <Button variant='link'>SignUp</Button>
                    </Link>
                    |
                    <Link href='/api/auth/signin'>
                      <Button variant='link'>SignIn</Button>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer>footer</footer>
        </div>
      </body>
    </html>
  );
}
