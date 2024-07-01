'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>count is {count}</h3>
      <button onClick={() => setCount(count + 1)} className='btn-primary'>
        Plus Count
      </button>
      <Link href='/' className='mt-5'>
        Go Home
      </Link>
    </>
  );
}
