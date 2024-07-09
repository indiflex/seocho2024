import ImageViewer from '@/components/ImageViewer';
import Modal from '@/components/Modal';
import { notFound } from 'next/navigation';
import { getPhotos } from '@/lib/placeholder';

export default async function PhotoIntercept({
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

  return (
    <Modal className='p-0'>
      <ImageViewer photo={photo} isModal={true} />
    </Modal>
  );
}
