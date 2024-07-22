/* eslint-disable @next/next/no-img-element */
import { BookMarkedIcon } from 'lucide-react';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function Nav() {
  const session = await auth();
  // console.log('🚀  session:', session);

  let name;
  let image;
  let email;

  if (session && session.user) {
    name = session.user.name;
    image = session.user.image;
    email = encodeURI(session.user.email || '');

    // const res = await fetch(`http://localhost:3000/api/regist`);
    // const res = await fetch(`/api/regist`);
    // console.log('🚀  res:', res);
    // const user = await res.json();
    // console.log('🚀  user:', user);
  }

  return (
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
      <div className='flex'>
        <Link
          href='https://github.com/indiflex/seocho2024/tree/master/next'
          target='_blank'
          className='mt-3 mx-5 hover:text-blue-500'
        >
          Github Repo.
        </Link>
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
  );
}
