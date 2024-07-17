import Book from '@/components/Book';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import { execute, query } from '@/lib/db';
import { Book as BookType } from '@/types';
import { RowDataPacket } from 'mysql2';

const CreateSql = 'insert into Book(title, owner, clickdel) values(?,?,?)';

export default async function Home() {
  // const res = await fetch(`/api/books`);
  // const books: BookType[] = await res.json();
  // const books: BookType[] = [];
  const session = await auth();

  const books = await query<BookType & RowDataPacket>(
    'select b.* from Book b inner join User u on b.owner = u.id where u.email = ?',
    [session?.user?.email]
  );
  console.log('🚀  books:', books);

  const saveBook = async (book: BookType) => {
    'use server';
    const rsh = await execute(CreateSql, [
      book.title,
      book.owner,
      book.clickdel,
    ]);
    console.log('🚀  rsh:', rsh);
    console.log('🚀  book:', book);
  };

  const add = async () => {
    'use server';
    console.log('add');
    // books.push({ title: '', owner: 13, clickdel: false });
    saveBook({ id: 0, title: '', owner: 13, clickdel: false });
  };

  return (
    <div className='h-[90vh] flex gap-3x overflow-x-auto border-2 p-1'>
      {books?.map((book) => (
        <Book key={book.id} book={book} saveBook={saveBook} />
      ))}
      <form action={add}>
        <Button>+ Add Book</Button>
      </form>
    </div>
  );
}
