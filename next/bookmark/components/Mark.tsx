/* eslint-disable @next/next/no-img-element */
import { Mark as MarkType } from '@/types';

type Props = {
  mark: MarkType;
};
export default function Mark({ mark }: Props) {
  return (
    <div className='flex border-2 border-white p-1 mb-2'>
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
        <h3 className='w-32 text-xl font-semibold text-gray-700 truncate '>
          {mark.title}
        </h3>
        <p className='text-slate-500 w-36 truncate'>{mark.descript}</p>
      </div>
    </div>
  );
}
