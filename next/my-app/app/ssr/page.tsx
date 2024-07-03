import { goUserTodos } from '@/lib/route-utils';

export const dynamic = 'force-dynamic';

export default function SSR() {
  return (
    <>
      <h1 className='text-2xl'>SSR</h1>

      <form action={goUserTodos}>
        ID: <input type='text' name='userId' className='border rounded-lg' />
      </form>

      <p>{Math.random()}</p>
      <p>{new Date().toString()}</p>
    </>
  );
}
