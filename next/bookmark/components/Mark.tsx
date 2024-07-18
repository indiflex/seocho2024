/* eslint-disable @next/next/no-img-element */
import { Mark as MarkType } from '@/types';
import { RotateCcw, SaveAll, Settings, Trash2, TrashIcon } from 'lucide-react';
import { Button } from './ui/button';
import { twMerge } from 'tailwind-merge';
import { FormEvent, useEffect, useReducer, useRef } from 'react';
import Link from 'next/link';
import { Label } from './ui/label';
import { Input } from './ui/input';

type Props = {
  mark: MarkType;
  saveMark: (m: MarkType) => void;
  removeMark: (markId: number) => void;
};
export default function Mark({ mark, saveMark, removeMark }: Props) {
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  const urlRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!mark || !urlRef.current || !titleRef.current || !descriptRef.current)
      return;

    if (isEditing) {
      urlRef.current.value = mark.url;
      titleRef.current.value = mark.title;
      descriptRef.current.value = mark.descript || '';
    }
  }, [isEditing, mark]);

  const save = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = urlRef.current?.value;
    const title = titleRef.current?.value;
    const descript = descriptRef.current?.value;
    if (!url) {
      return alert('Input the URL!!');
    }
    if (!title) {
      return alert('Input the Title!!');
    }
    saveMark({ ...mark, url, title, descript });
    toggleEditing();
  };

  return (
    <div className='border-2 border-white p-1 mb-2'>
      {!isEditing ? (
        <a href={mark.url} target='_blank' className='flex p-1 mb-2'>
          <div className='w-20x text-center p-1 mr-2'>
            <img
              src={mark.image || ''}
              alt={mark.title || ''}
              // width={40}
              // height={20}
              title={mark.title}
              className='hover:opacity-80 rounded w-20x max-h-12'
            />
          </div>
          <div>
            <div className='flex justify-between w-44'>
              <h3 className='w-32 text-xl font-semibold text-gray-700 truncate '>
                {mark.title}
              </h3>
              <Settings
                onClick={(e) => {
                  e.preventDefault(); // stop bubbling
                  // e.stopPropagation(); // capturing
                  toggleEditing();
                }}
                className={twMerge('cursor-pointer text-xs hover:opacity-50')}
              />
            </div>

            <p className='text-slate-500 w-36 truncate'>{mark.descript}</p>
          </div>
        </a>
      ) : (
        <form onSubmit={save}>
          <Label htmlFor='url'>URL</Label>
          <Input ref={urlRef} id='url' type='url' />
          <hr />
          <Label htmlFor='title'>Title</Label>
          <Input ref={titleRef} id='title' type='text' />
          <hr />
          <Label htmlFor='descript'>Description</Label>
          <Input ref={descriptRef} id='descript' type='text' />

          <div className='text-right mt-2'>
            <Button
              onClick={() => removeMark(mark.id)}
              variant='outline'
              className='text-red-500'
            >
              <Trash2 />
            </Button>
            <Button
              onClick={() => toggleEditing()}
              variant='outline'
              className='mx-2'
            >
              <RotateCcw />
            </Button>
            <Button type='submit' variant='outline' className='text-blue-500'>
              <SaveAll />
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
