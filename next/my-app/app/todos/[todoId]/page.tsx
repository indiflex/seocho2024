import { getTodo } from '@/lib/placeholder';

export default async function Todo({
  params: { todoId },
}: {
  params: { todoId: string };
}) {
  const todo = await getTodo(+todoId);
  return (
    <>
      <h1 className='text-2xl'>ID: {todoId}</h1>
      <h3 className='text-xl'>{todo.title}</h3>
    </>
  );
}
