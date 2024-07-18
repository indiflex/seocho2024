'use client';
import { FormEvent, useEffect, useReducer, useRef, useState } from 'react';
import Mark from './Mark';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Book as BookType, Mark as MarkType } from '@/types';

type SaveBook = (book: BookType) => Promise<void>;
type Props = {
  book: BookType;
  saveBook: SaveBook;
};

export default function Book({ book, saveBook }: Props) {
  const [marks, setMarks] = useState<MarkType[]>([]);
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  const titleRef = useRef<HTMLInputElement>(null);

  const save = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    book.title = titleRef.current?.value || '';
    saveBook(book);
  };

  const saveMark = async (mark: MarkType) => {
    let method = 'PATCH';
    if (mark.id) {
      setMarks([
        ...marks.map((_mark) => {
          if (_mark.id === mark.id) return mark;
          return _mark;
        }),
      ]);
    } else {
      method = 'POST';
      setMarks([...marks, mark]);
    }

    const res = await fetch(
      `/api/books/${book.id}/marks/${mark.id ? mark.id : ''}`,
      {
        method,
      }
    );
  };

  const removeMark = (markId: number) => {
    setMarks([...marks.filter((_mark) => _mark.id !== markId)]);
  };

  useEffect(() => {
    if (isEditing && titleRef.current) {
      titleRef.current.value = '';
      titleRef.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    const getMarks = async (bookId: number) => {
      const res = await fetch(`/api/books/${bookId}/marks`);
      const data = await res.json();
      setMarks(data.marks);
    };

    if (book && book.id) getMarks(book.id);
  }, [book]);

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
          <div className='w-full truncate'>{book.title}</div>
        </Button>
      )}

      <div>
        {marks?.map((mark) => (
          <Mark
            key={mark.id}
            mark={mark}
            saveMark={saveMark}
            removeMark={removeMark}
          />
        ))}

        {!marks?.length && (
          <div className='text-center'>There is no marks.</div>
        )}
      </div>
    </div>
  );
}
