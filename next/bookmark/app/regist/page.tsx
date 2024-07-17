'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState } from 'react';

export default function RegistPage() {
  const router = useRouter();
  const [msg, setMsg] = useState('');
  const nicknameRef = useRef<HTMLInputElement>(null);

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nickname = formData.get('nickname');
    const email = formData.get('email');
    const passwd = formData.get('passwd');
    const passwd2 = formData.get('passwd2');

    if (!nickname) {
      nicknameRef.current?.focus();
      return setMsg('Input the nickname, plz..');
    }

    if (!email) {
      return setMsg('Input the email, plz..');
    }

    if (!passwd || passwd !== passwd2) {
      return setMsg('Input the password correctly!');
    }

    setMsg('');
    const res = await fetch('/api/regist', {
      method: 'POST',
      body: JSON.stringify({ nickname, email, passwd }),
    });
    console.log('🚀  res:', res);

    if (res.ok) return router.push('/');

    setMsg(res.statusText);
  };

  return (
    <div className='flex flex-col mx-auto max-w-md text-center mt-10'>
      <h1 className='text-3xl'>Sign Up</h1>
      <form onSubmit={register} className=''>
        <div className='text-left m-2'>
          <Label htmlFor='nickname'>Nickname</Label>
          <Input
            ref={nicknameRef}
            id='nickname'
            name='nickname'
            placeholder='nickname...'
          />
        </div>
        <div className='text-left m-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email' type='email' placeholder='email...' />
        </div>
        <div className='text-left m-2'>
          <Label htmlFor='passwd'>Password</Label>
          <Input
            id='passwd'
            name='passwd'
            type='password'
            placeholder='password...'
          />
        </div>
        <div className='text-left m-2'>
          <Label htmlFor='passwd2'>Password Confirm</Label>
          <Input
            id='passwd2'
            name='passwd2'
            type='password'
            placeholder='password confirm...'
          />
        </div>

        {!!msg && (
          <Alert className='text-red-500 my-3'>
            <AlertCircle className='h-4 w-4 text-red-300' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{msg}</AlertDescription>
          </Alert>
        )}

        <Button
          variant='secondary'
          type='submit'
          className='w-1/2 hover:bg-green-500 hover:text-white'
        >
          Register
        </Button>
      </form>
    </div>
  );
}
