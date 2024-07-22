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
    const res = await fetch(
      `/api/books/${book.id}/marks/${mark.id ? mark.id : ''}`,
      {
        method: mark.id ? 'PATCH' : 'POST',
        body: JSON.stringify({ ...mark }),
      }
    );
    const data = await res.json();
    console.log('🚀  data:', data);

    setMarks([
      ...marks.map((_mark) => {
        if (_mark.id === mark.id) return data.mark;
        return _mark;
      }),
    ]);
  };

  const removeMark = async (markId: number) => {
    // if (confirm('삭'))
    const res = await fetch(`/api/books/${book.id}/marks/${markId}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    console.log('🚀  data:', data);
    if (res.ok) setMarks([...marks.filter((_mark) => _mark.id !== markId)]);
  };

  const addMark = () => {
    const newer = { id: 0, book: book.id, url: '', title: '' };
    setMarks([newer, ...marks]);
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

        <Button onClick={addMark} className='float-end'>
          + Add Mark
        </Button>
      </div>
    </div>
  );
}
