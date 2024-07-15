import { query } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { title, owner, clickdel } = await req.json();
  const rows = await query(
    'insert into Book(title, owner, clickdel) values(?,?,?)',
    [title, owner, clickdel]
  );

  return NextResponse.json({ rows });
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const userId = searchParams.get('userId');
  console.log('🚀  userId:', userId);
  // const conn = await mysql.createConnection(config);
  // const conn = await pool.getConnection();
  try {
    const [books] = await query('select * from Book where owner = ?', [userId]);

    return NextResponse.json({ userId, message: 'OK', books });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'error!';
    return NextResponse.json({ userId, message }, { status: 500 });
  }
  // conn.end(); // close
  // conn.release(); // release to pool
}
