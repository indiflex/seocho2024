/* eslint-disable @next/next/no-img-element */
import LabelInput from '@/components/LabelInput';
import { Button } from '@/components/ui/button';
import { auth, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function MyPage() {
  const session = await auth();
  console.log('🚀 mypage - session:', session);
  if (!session || !session.user) return redirect('/api/auth/signin');

  const {
    user: { name, email, image },
  } = session;

  const logout = async () => {
    'use server';
    await signOut();
  };

  return (
    <div className='flex flex-col mx-auto max-w-md'>
      <h1 className='text-3xl text-green-500 my-10'>My Profile</h1>
      <div className='flex gap-5'>
        <img
          src={image || ''}
          alt={name || ''}
          width={100}
          height={100}
          className='hover:opacity-50'
        />
        <form action={logout} className='flex flex-col'>
          <LabelInput label='Nickname' value={name || ''} />
          <LabelInput label='Email' value={email || ''} />
          <Button variant='ghost'>SignOut</Button>
        </form>
      </div>
      {/* <hr className='mt-10' />
      <pre className='text-sm text-slate-400'>
        {JSON.stringify(session, null, '  ')}
      </pre> */}
    </div>
  );
}
