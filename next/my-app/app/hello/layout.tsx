import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hello Next.js',
  description: 'Hello Next.js',
};

export default function HelloLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link href='/'>Home</Link>
      <div>{children}</div>
    </>
  );
}
