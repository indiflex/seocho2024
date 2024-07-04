'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { User, getUsers } from '@/lib/placeholder';

// export default function CSR() {
const CSR = () => {
  // console.log('CSR!!!!!!!!!!!', new Date());
  const [dtStr, setDtStr] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [searchedUsers, setSearchedUsers] = useState<User[]>([]);
  const [searchStr, setSearchStr] = useState('');

  useEffect(() => {
    setDtStr(new Date().toString());

    (async () => {
      const userData = await getUsers();
      console.log('users=', userData);
      setUsers(userData);
    })();
  }, []);

  const timerRef = useRef<NodeJS.Timeout | null>();

  // // throttle version
  // useEffect(() => {
  //   if (!users?.length) return;
  //   // console.log('🚀  timerRef:', timerRef?.current);
  //   if (timerRef?.current) return;

  //   timerRef.current = setTimeout(() => {
  //     const usrs = users.filter(
  //       (user) => !searchStr || user.username.match(new RegExp(searchStr, 'i'))
  //     );
  //     console.log('debounce>>>', usrs.length);
  //     setSearchedUsers(usrs);
  //     timerRef.current = null;
  //   }, 500);
  // }, [users, searchStr]);

  // debounce version
  useEffect(() => {
    if (!users?.length) return;

    if (timerRef?.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const usrs = users.filter(
        (user) => !searchStr || user.username.match(new RegExp(searchStr, 'i'))
      );
      console.log('debounce>>>', usrs.length);
      setSearchedUsers(usrs);
      timerRef.current = null;
    }, 500);
  }, [users, searchStr]);

  function searchName() {
    setUsers(users.filter((user) => user.username.includes(searchStr)));
  }

  return (
    <>
      <h1>This is About Page!! {dtStr}</h1>

      <div className='flex justify-between my-3 border-2 p-2'>
        {/* <Link href='/'>GoHome</Link> */}

        <Button variant='outline'>Home</Button>
        <Button variant='link'>
          <Link href='/'>GoHome</Link>
        </Button>

        <div className='flex'>
          <input
            type='text'
            name='userId'
            onChange={(e) => setSearchStr(e.currentTarget.value)}
            className='border rounded-lg p-1 px-2'
            placeholder='search name...'
          />

          <Button
            onClick={() => searchName()}
            variant='ghost'
            className='text-blue-300 hover:text-blue-700'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* <hr className='w-24 mt-3' /> */}
      <div className='flex justify-between'>
        <ul>
          {users
            .filter(
              (user) =>
                !searchStr || user.username.match(new RegExp(searchStr, 'i'))
              // !searchStr || user.username.toLowerCase().includes(searchStr.toLowerCase())
            )
            .map((user) => (
              <li key={user.id}>
                <Link href={`/ssg/${user.id}`}>{user.username}</Link>
              </li>
            ))}
        </ul>

        <ul className='text-right'>
          {searchedUsers.map((user) => (
            <li key={user.id}>
              <Link href={`/ssg/${user.id}`}>{user.username}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CSR;
