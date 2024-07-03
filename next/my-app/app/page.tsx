import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <Link href='/hello'>Hello</Link>
      <Link href='/hi'>Hi~</Link>
      <Link href='/about'>About</Link>
      <Image
        src='/vercel.svg'
        alt='Vercel Logo'
        className='dark:invert'
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
