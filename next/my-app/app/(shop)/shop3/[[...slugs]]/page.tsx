type Params = {
  params: {
    slugs: string | string[];
  };
};

export default function Shop3({ params }: Params) {
  const { slugs } = params;
  console.log('🚀 slugs:', slugs);
  return (
    <>
      Shop3:slugs
      <strong>{Array.isArray(slugs) ? slugs.join('~') : slugs}</strong>
    </>
  );
}
