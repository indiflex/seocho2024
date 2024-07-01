type Params = {
  params: {
    slugs: string[];
  };
};

export default function Shop2({ params }: Params) {
  const { slugs } = params;
  console.log('🚀 slugs:', slugs);
  return (
    <>
      Shop2:slugs <strong>{slugs.join('~')}</strong>
    </>
  );
}
