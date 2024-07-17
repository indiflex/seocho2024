import Book from '@/components/Book';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import { Book as BookType } from '@/types';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  if (!session || !session.user) redirect('/api/auth/signin');

  const res = await fetch(`/api/books?userId=${session.user.id}`);
  const books: BookType[] = await res.json();

  console.log('🚀  res:', res);

  const saveBook = async (book: BookType) => {
    const res = await fetch('/api/books', {
      method: book.id ? 'PATCH' : 'POST',
      body: JSON.stringify({
        ...book,
      }),
    });
    console.log('🚀  res:', res);
  };

  return (
    <div className='h-[90vh] flex gap-3x overflow-x-auto border-2 p-1'>
      {books?.map((book) => (
        <Book key={book.id} book={book} saveBook={saveBook} />
      ))}
      <Button>+ Add Book</Button>
    </div>
  );
}
