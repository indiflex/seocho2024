'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { User, getUsers } from '@/lib/placeholder';

export default function CSR() {
  console.log('CSR!!!!!!!!!!!');
  const [dtStr, setDtStr] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setDtStr(new Date().toString());

    (async () => {
      const userData = await getUsers();
      console.log('users=', userData);
      setUsers(userData);
    })();
  }, []);
  return (
    <>
      <h1>This is About Page!! {dtStr}</h1>
      <Link href='/'>GoHome</Link>
      {users}
    </>
  );
}
