import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hello Next.js',
  description: 'Hello Next.js',
};

const TIMES = ['morning', 'afternoon', 'evening'];

export default function HelloLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className='text-xl'>Hello Layout</h1>
      <div>
        <Link href='/'>Home</Link>
        <span className='mx-2 text-slate-500'>|</span>
        {/* <Link href='/hello/morning'>Morning</Link>
        <span className='mx-2 text-slate-500'>|</span>
        <Link href='/hello/afternoon'>Afternoon</Link>
        <span className='mx-2 text-slate-500'>|</span>
        <Link scroll={false} href='/hello/evening'>
          Evening
        </Link> */}
        {TIMES.map((time) => (
          <>
            <Link href={`/hello/${time}`}>{time.toUpperCase()}</Link>
            <span className='mx-2 text-slate-500'>|</span>
          </>
        ))}

        <Link scroll={true} replace={true} href='/hello'>
          Hello
        </Link>
      </div>

      <div className='my-5'>{children}</div>
    </>
  );
}
