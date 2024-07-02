import Link from 'next/link';
import { ReactNode } from 'react';

export default function ParallelLayout({
  profile,
  login,
  children,
}: {
  profile: ReactNode;
  login: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <ul className='flex gap-5 border px-3 mb-3'>
        <li>
          <Link href='/parallel'>/Parallel</Link>
        </li>
        <li>
          <Link href='/parallel/aaa'>/Parallel/AAA</Link>
        </li>
        <li>
          <Link href='/parallel/bbb'>/Parallel/BBB</Link>
        </li>
      </ul>

      {children}
      <div className='flex justify-center gap-7 mt-5'>
        <div className='border-2 border-red-300 p-5'>{profile}</div>
        <div className='border-2 border-blue-300 p-5'>{login}</div>
      </div>
      {/* <hr className='w-24' /> */}
    </>
  );
}
