import { notFound, redirect } from 'next/navigation';
import { TIMES } from '@/lib/route-utils';

type Params = {
  params: {
    time: string;
  };
};

// afternoon ==> Afternoon
const toUpperFirstChar = (s: string) => `${s[0].toUpperCase()}${s.slice(1)}`;

// server static html generating
export async function generateStaticParams() {
  return TIMES.map((time) => ({
    time,
  }));
  // return [{ time: 'morning' }, { time: 'afternoon' }, { time: 'evening' }];
}

export default function Time({ params }: Params) {
  const { time } = params;
  console.log('🚀  time:', time, !TIMES.includes(time));
  if (!TIMES.includes(time)) {
    redirect('/hi');
    return notFound();
  }

  return <h3 className='text-3xl'>Good {toUpperFirstChar(time)}!</h3>;
}
