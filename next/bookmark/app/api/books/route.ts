import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { config } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const userId = searchParams.get('userId');
  console.log('🚀  userId:', userId);
  const conn = await mysql.createConnection(config);
  const [books, fields] = await conn.query(
    'select * from Book where owner=' + userId
  );
  conn.end();
  console.log('🚀  rows:', books);
  console.log('🚀  fields:', fields);
  return NextResponse.json({ userId, message: 'OK', books });
}
