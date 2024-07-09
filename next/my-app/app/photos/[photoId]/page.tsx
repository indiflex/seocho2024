import ImageViewer from '@/components/ImageViewer';
import { notFound } from 'next/navigation';
import { getPhotos } from '@/lib/placeholder';

export default async function Photo({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const photos = await getPhotos(1);
  const photo = photos.find((_photo) => {
    return _photo.id === +photoId;
  });

  if (!photo) {
    return notFound;
  }

  return <ImageViewer photo={photo} />;
}
