'use client';
import { FormEvent, useEffect, useReducer, useRef } from 'react';
import Mark from './Mark';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Book as BookType } from '@/types';

type SaveBook = (book: BookType) => Promise<void>;
type Props = {
  book: BookType;
  saveBook: SaveBook;
  f: (i: number) => string;
};

export default function Book({ book, saveBook }: Props) {
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  const titleRef = useRef<HTMLInputElement>(null);

  const save = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    book.title = titleRef.current?.value || '';
    saveBook(book);
  };

  useEffect(() => {
    if (isEditing && titleRef.current) {
      titleRef.current.value = '';
      titleRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className='w-64 bg-gray-200 mr-3 rounded p-1'>
      {isEditing ? (
        <form onSubmit={save} className='border-2 border-blue-300 p-2'>
          <Input ref={titleRef} type='text' placeholder='book title...' />
          <div className='flex justify-end gap-5 mt-2'>
            <Button variant='outline' size='sm' className=''>
              Cancel
            </Button>
            <Button variant='secondary' size='sm'>
              Save
            </Button>
          </div>
        </form>
      ) : (
        <Button
          onClick={() => toggleEditing()}
          variant='ghost'
          className='w-full text-xl font-semibold mb-1'
        >
          <div className='w-full truncate'>
            Title Title Title Title Title Title Title Title Title
          </div>
        </Button>
      )}

      <Mark />
    </div>
  );
}
