import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hello Page',
  description: 'Hello Next.js',
};

export default function HelloLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
