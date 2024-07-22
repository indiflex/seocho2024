/* eslint-disable @next/next/no-img-element */
import { Mark as MarkType } from '@/types';
import {
  CloudCog,
  LoaderCircle,
  RotateCcw,
  SaveAll,
  Settings,
  Trash2,
  TrashIcon,
} from 'lucide-react';
import { Button } from './ui/button';
import { twMerge } from 'tailwind-merge';
import {
  FormEvent,
  MouseEvent,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import { Label } from './ui/label';
import { Input } from './ui/input';

type Props = {
  mark: MarkType;
  saveMark: (m: MarkType) => void;
  removeMark: (markId: number) => void;
};
export default function Mark({ mark, saveMark, removeMark }: Props) {
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, !mark.id);
  const [isScraping, setScraping] = useState(false);

  const urlRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const save = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = urlRef.current?.value;
    const title = titleRef.current?.value;
    const descript = descriptRef.current?.value;
    const image = imageRef.current?.value;
    if (!url) {
      return alert('Input the URL!!');
    }
    if (!title) {
      return alert('Input the Title!!');
    }
    saveMark({ ...mark, url, title, descript, image });
    toggleEditing();
  };

  const ogscrap = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!urlRef.current) return;

    setScraping(true);
    try {
      let url = urlRef.current.value;
      // console.log('🚀  url:', url);
      if (!url.startsWith('http')) url = 'https://' + url;
      const res = await fetch(`/api/ogscrap?url=${url}`);
      const { ogTitle, ogDescription, ogImage } = await res.json();
      console.table({ ogTitle, ogDescription, ogImage });
      if (!titleRef.current || !descriptRef.current || !imageRef.current)
        return;

      titleRef.current.value = ogTitle;
      descriptRef.current.value = ogDescription;
      if (ogImage?.length) imageRef.current.value = ogImage[0]?.url;
    } catch (error) {
      console.table(error);
      if (error instanceof Error) alert(error.message);
    } finally {
      setScraping(false);
    }
  };

  useEffect(() => {
    if (!mark || !urlRef.current || !titleRef.current || !descriptRef.current)
      return;

    if (isEditing) {
      urlRef.current.value = mark.url || 'https://';
      titleRef.current.value = mark.title;
      descriptRef.current.value = mark.descript || '';
      urlRef.current.focus();
    }
  }, [isEditing, mark]);

  return (
    <div className='border-2 border-white p-1 mb-2'>
      {!isEditing ? (
        <a href={mark.url} target='_blank' className='flex p-1 mb-2 w-60'>
          <div className='text-center p-1 mr-2'>
            <img
              src={mark.image || '/next.svg'}
              alt={mark.title || ''}
              width={60}
              // height={60}
              title={mark.title}
              className='hover:opacity-80 rounded max-h-60'
            />
          </div>
          <div>
            <div className='flex justify-between w-44'>
              <h3 className='w-32 font-semibold text-gray-700 truncate '>
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

            <p className='text-slate-500 text-sm w-36 truncate'>
              {mark.descript}
            </p>
          </div>
        </a>
      ) : (
        <form onSubmit={save}>
          <Label htmlFor='url'>URL</Label>
          <div className='flex gap-2'>
            <Input
              ref={urlRef}
              id='url'
              type='url'
              placeholder='sample.com...'
            />
            <Button
              onClick={ogscrap}
              variant={'outline'}
              disabled={isScraping}
              className='text-green-500'
            >
              {isScraping ? (
                <LoaderCircle className='animate-spin' />
              ) : (
                <CloudCog />
              )}
            </Button>
          </div>

          <Label htmlFor='title'>Title</Label>
          <Input ref={titleRef} id='title' type='text' />

          <Label htmlFor='descript'>Description</Label>
          <Input ref={descriptRef} id='descript' type='text' />

          <Label htmlFor='image'>Image URL</Label>
          <Input ref={imageRef} id='image' type='text' />

          <div className='text-right mt-2'>
            <Button
              onClick={(e) => {
                e.preventDefault();
                removeMark(mark.id);
              }}
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
