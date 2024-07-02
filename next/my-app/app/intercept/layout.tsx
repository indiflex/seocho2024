import Link from 'next/link';
import { ReactNode } from 'react';

export default function InterceptLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}

      <ul>
        <li className='flex gap-5'>
          <Link href='/intercept/ic1'>IC1</Link>
          <Link href='/intercept/ic2'>IC2</Link>
          <Link href='/intercept/ic3'>IC3</Link>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </>
  );
}
