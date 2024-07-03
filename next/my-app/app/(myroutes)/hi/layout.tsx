'use client';

import Link from 'next/link';
import { TIMES } from '@/lib/route-utils';

export default function HiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className='text-xl'>Hi Layout</h1>
      <div>
        <Link href='/'>Home</Link>
        <span className='mx-2 text-slate-500'>|</span>
        {TIMES.map((time) => (
          <span key={time}>
            <Link href={`/hi/${time}`}>{time.toUpperCase()}</Link>
            <span className='mx-2 text-slate-500'>|</span>
          </span>
        ))}
        <Link href='/hi'>Hi</Link>
      </div>

      <div className='my-5'>{children}</div>
    </>
  );
}
