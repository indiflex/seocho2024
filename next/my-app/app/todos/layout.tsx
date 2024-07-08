import Link from 'next/link';
import { ReactNode } from 'react';
import { getTodos } from '@/lib/placeholder';

export default async function TodosLayout({
  children,
}: {
  children: ReactNode;
}) {
  const todos = await getTodos(1);
  return (
    <>
      <div className='flex justify-between w-screen gap-5'>
        <div className='w-1/2 text-right mt-1'>
          <h1 className='text-2xl'>List</h1>
          <ul>
            {todos?.map(({ id, title }) => (
              <li key={id}>
                <Link
                  href={`/todos/${id}`}
                  className='text-blue-400 hover:text-blue-700'
                >
                  <small className='text-gray-300'>{id}. </small>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-1/2 text-left'>{children}</div>
      </div>
    </>
  );
}
