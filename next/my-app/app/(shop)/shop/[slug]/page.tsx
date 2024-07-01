type Params = {
  params: {
    slug: string;
  };
};

type Post = {
  useId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateStaticParams() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=1'
  );
  const posts = await res.json();
  return posts.map((post: Post) => ({
    slug: `${post.id}`,
  }));
}

export default function Shop({ params }: Params) {
  const { slug } = params;
  return (
    <>
      slug <strong>{slug}</strong>
    </>
  );
}
