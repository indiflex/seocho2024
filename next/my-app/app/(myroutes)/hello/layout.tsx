'use client';

import Link from 'next/link';
import {
  redirect,
  useParams,
  usePathname,
  useRouter, // useSearchParams,
} from 'next/navigation';

const TIMES = ['morning', 'afternoon', 'evening'];

export default function HelloLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const id = searchParams.get('id');
  // const pw = searchParams.get('pw');
  // console.log('🚀  id pw:', id, pw, searchParams.toString());

  const params = useParams<{ id: string; pw: string }>();
  console.log('🚀  params:', params);

  const pathname = usePathname(); // /hello/evening
  console.log('🚀  pathname:', pathname);
  if (pathname.endsWith('evening')) {
    // router.push('/hello/morning'); // client에서 전환
    redirect('/hello'); // server에서 전환
  }

  const go = (target: string) => {
    console.log('🚀 target:', target);
    router.push(target);
  };

  // const setSearchParam = (name: string, value: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   console.log('🚀  params:', params.toString());
  //   params.set(name, value); // id 999
  //   params.set('x', '888'); // id 999

  //   if (router && pathname) {
  //     return router.push(`${pathname}?${params.toString()}`);
  //   }
  //   return params.toString();
  // };

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
          <span key={time}>
            <Link href={`/hello/${time}`}>{time.toUpperCase()}</Link>
            <span className='mx-2 text-slate-500'>|</span>
          </span>
        ))}

        <Link href='/hello'>Hello</Link>
        <button onClick={() => go('/hello')} className='btn-primary'>
          Go Hello
        </button>
        <button
          // onClick={() => setSearchParam('id', '999')}
          className='btn-danger'
        >
          Search Hello
        </button>
      </div>

      <div className='my-5'>{children}</div>
    </>
  );
}
