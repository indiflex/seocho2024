'use client';

import Book from '@/components/Book';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import { execute, query } from '@/lib/db';
import { Book as BookType } from '@/types';
import { RowDataPacket } from 'mysql2';
import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState<BookType[]>([]);

  // console.log('🚀  books:', books);

  const saveBook = async (book: BookType) => {};

  const add = async () => {};

  useEffect(() => {
    (async function () {
      const res = await fetch('/api/books');
      const data = await res.json();
      setBooks(data.books);
    })();
  }, []);

  return (
    <div className='h-[90vh] flex gap-3x overflow-x-auto border-2 p-1'>
      {books.map((book) => (
        <Book key={book.id} book={book} saveBook={saveBook} />
      ))}
      <form action={add}>
        <Button>+ Add Book ({books.length})</Button>
      </form>
    </div>
  );
}
