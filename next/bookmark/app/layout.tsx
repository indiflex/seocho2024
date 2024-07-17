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
        <div className='flex flex-col min-h-screen'>
          <header className='shadow'>
            <nav className='flex items-center justify-between p-3 h-[7vh]'>
              <Link href='/'>
                <Button
                  variant='secondary'
                  className='text-2xl flex font-bold text-green-500'
                >
                  <BookMarkedIcon className='' />
                  BookMark
                </Button>
              </Link>
              <div>
                {name ? (
                  <Link href='/my'>
                    <img
                      src={image || ''}
                      alt={name || ''}
                      width={40}
                      height={40}
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
          <main className='w-full overflow-y-hidden'>{children}</main>
          <footer className='mt-auto text-center text-gray-500'>
            &#169; Indiflex - Seocho 2024
          </footer>
        </div>
      </body>
    </html>
  );
}
