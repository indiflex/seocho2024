import clsx from 'clsx';
import Image from 'next/image';
import { Photo } from '@/lib/placeholder';

export default function ImageViewer({
  photo,
  isModal = false,
}: {
  photo: Photo;
  isModal?: boolean;
}) {
  return (
    <div className={clsx({ 'm-5 p-5 border-2': !isModal })}>
      <Image src={photo.url} width={600} height={600} alt={photo.title} />

      <h3 className='text-xl text-center mt-3'>{photo.title}</h3>
    </div>
  );
}
