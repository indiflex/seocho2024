import { getUserByEmail } from '@/lib/serveraction';
import { compare } from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, passwd } = await req.json();
  console.table({ email, passwd });
  try {
    const user = await getUserByEmail(email);
    if ((await compare(passwd, user?.passwd + '')) && user) {
      return NextResponse.json({
        user: { id: user.id, name: user.nickname, email },
      });
    }

    return NextResponse.json({});
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(
        { error },
        { status: 500, statusText: error.message }
      );

    return NextResponse.json({ error }, { status: 500 });
  }
}
