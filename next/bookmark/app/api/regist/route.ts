import { auth } from '@/lib/auth';
import { execute, query } from '@/lib/db';
import { getUserByEmail } from '@/lib/serveraction';
import { UserRowData } from '@/types';
import { hash } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const session = await auth();
  console.log('🚀  session:', session);
  const { searchParams } = req.nextUrl;
  const email = searchParams.get('email');
  const user = await getUserByEmail(email);
  if (!user) {
    return NextResponse.json(
      {},
      { status: 404, statusText: `${email} user's not found` }
    );
  }
  const { id, nickname } = user;
  return NextResponse.json({ id, nickname });
}

export async function POST(req: NextRequest) {
  const { nickname, email, passwd } = await req.json();
  console.table({ nickname, email, passwd });

  const hashedPasswd = passwd ? await hash(passwd, 10) : null;
  console.log('🚀  hashedPasswd:', hashedPasswd);

  try {
    const rsh = await execute(
      'insert into User(nickname, email, passwd) values(?,?,?)',
      [nickname, email, hashedPasswd]
    );

    const [user] = await query<UserRowData>('select * from User where id = ?', [
      rsh.insertId,
    ]);

    return NextResponse.json({ user });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(
        { error },
        { status: 500, statusText: error.message }
      );

    return NextResponse.json({ error }, { status: 500 });
  }
}
