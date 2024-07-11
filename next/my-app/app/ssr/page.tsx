import { getTodo } from '@/lib/placeholder';
import { goUserTodos } from '@/lib/route-utils';

export const dynamic = 'force-dynamic';

export default async function SSR() {
  const todo = await getTodo(300);
  // if (!todo.id) throw new Error('xxxxxxxx');
  return (
    <>
      <h1 className='text-2xl'>SSR</h1>

      <form action={goUserTodos}>
        ID: <input type='text' name='userId' className='border rounded-lg' />
      </form>

      <p>{todo.title}</p>
      <p>{Math.random()}</p>
      <p>{new Date().toString()}</p>
    </>
  );
}
