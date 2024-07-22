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

  const saveBook = async (book: BookType) => {
    const res = await fetch(`/api/books/${book.id ? book.id : ''}`, {
      method: book.id ? 'PATCH' : 'POST',
      body: JSON.stringify({ ...book }),
    });

    const data = await res.json();
    console.log('🚀  data:', data);
    setBooks(books.map((_book) => (_book.id === book.id ? data.book : _book)));
  };

  const removeBook = async (bookId: number) => {
    if (bookId) await fetch(`/api/books/${bookId}`, { method: 'DELETE' });
    setBooks(books.filter((_book) => _book.id !== bookId));
  };

  const add = () => {
    const book = { id: 0, owner: 0, title: 'New Book..', clickdel: false };
    setBooks([...books, book]);
  };

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
        <Book
          key={book.id}
          book={book}
          saveBook={saveBook}
          removeBook={removeBook}
        />
      ))}

      {!books.find((_book) => _book.id === 0) && (
        <Button onClick={add}>+ Add Book ({books.length})</Button>
      )}
    </div>
  );
}
