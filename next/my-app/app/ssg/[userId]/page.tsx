import clsx from 'clsx';
import Link from 'next/link';
import { getTodos } from '@/lib/placeholder';

// todos for each user
export default async function Todos({
  params: { userId },
}: {
  params: { userId: number };
}) {
  const todos = await getTodos(userId);
  return (
    <>
      <Link href='/csr'>Go User List</Link>
      <h1 className='text-2xl'>Todos UserId: {userId}</h1>
      <hr className='w-48 mt-3' />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={clsx({ 'line-through': todo.completed })}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
