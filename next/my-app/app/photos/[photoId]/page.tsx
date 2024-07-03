export default function Photo({
  params: { photoId },
}: {
  params: { photoId: number };
}) {
  return <>Photo {photoId}</>;
}
