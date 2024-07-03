import Image from 'next/image';
import Link from 'next/link';
import { getPhotos } from '@/lib/placeholder';

export default async function Photos() {
  const photos = await getPhotos(1);
  return (
    <>
      <h1 className='text-3xl'>Photos</h1>
      Image List: {photos.length}
      <div className='grid lg:grid-cols-7 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 place-items-center w-full'>
        {photos.map((photo) => (
          <Link key={photo.id} href={`/photos/${photo.id}`}>
            <Image
              src={photo.thumbnailUrl}
              width={150}
              height={150}
              alt={photo.title}
              className='hover:opacity-50'
            />
          </Link>
        ))}
      </div>
    </>
  );
}
