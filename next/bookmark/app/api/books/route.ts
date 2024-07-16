import { execute, query } from '@/lib/db';
import { Book } from '@/types';
import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { title, owner, clickdel } = await req.json();
  const rows = await execute(
    'insert into Book(title, owner, clickdel) values(?,?,?)',
    [title, owner, clickdel]
  );

  const [book] = await query<Book & RowDataPacket>(
    'select * from Book where id = ?',
    [rows.insertId]
  );

  return NextResponse.json({ book });
}

// book list for login user
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const userId = searchParams.get('userId');
  // console.log('🚀  userId:', userId);
  // const conn = await mysql.createConnection(config);
  // const conn = await pool.getConnection();
  try {
    const books = await query('select * from Book where owner = ?', [userId]);

    return NextResponse.json({ books });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'error!';
    return NextResponse.json({ userId, message }, { status: 500 });
  }
  // conn.end(); // close
  // conn.release(); // release to pool
}
