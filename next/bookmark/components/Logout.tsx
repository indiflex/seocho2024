'use client';
import { signOut } from '@/lib/auth';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();
  const logout = () => {
    router.push('/api/auth/signin');
    try {
      signOut();
    } catch (err) {}
    // redirect('/api/auth/signin');
  };
  return (
    <Button onClick={logout} variant='ghost'>
      SignOut
    </Button>
  );
}
