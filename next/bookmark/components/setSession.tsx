'use client';

import { useSession } from '@/lib/session';
import { User } from '@/types';
import { useEffect } from 'react';

export default function SetSession({ user }: { user: User }) {
  const {
    session: { loginUser },
    login,
  } = useSession();

  useEffect(() => {
    if (user && !loginUser) login(user);
  }, [user, login, loginUser]);
  return <></>;
}
