import { execute, query } from '@/lib/db';
import { Book } from '@/types';
import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  params: { bookId: string };
};

export async function GET(req: NextRequest, { params: { bookId } }: Params) {
  try {
    const [book] = await query<Book & RowDataPacket>(
      'select * from Book where id = ?',
      [bookId]
    );
    // console.log('🚀  book:', book.title);
    return NextResponse.json({ book });
  } catch (error) {
    return handleError(error);
  }
}

// api/books/[bookId]
// api/books/555
export async function PATCH(req: NextRequest, { params: { bookId } }: Params) {
  return await update(req, bookId);
}
export async function PUT(req: NextRequest, { params: { bookId } }: Params) {
  return await update(req, bookId);
}

export async function DELETE(req: NextRequest, { params: { bookId } }: Params) {
  try {
    const rows = await execute('delete from Book where id = ?', [bookId]);

    const message = rows.affectedRows > 0 ? 'OK' : 'Fail to delete';
    const status = rows.affectedRows > 0 ? 200 : 404;

    return NextResponse.json({ message }, { status });
  } catch (error) {
    console.log('************', error);
    return handleError(error);
  }
}

async function update(req: NextRequest, bookId: string) {
  const { title, clickdel } = await req.json();

  try {
    await execute('update Book set title = ?, clickdel = ? where id = ?', [
      title,
      clickdel,
      bookId,
    ]);

    const [book] = await query('select * from Book where id = ?', [bookId]);

    // console.log('rrrrrrr>>>', rows);
    return NextResponse.json({ book });
  } catch (error) {
    return handleError(error);
  }
}

function handleError(error: unknown) {
  const message = error instanceof Error ? error.message : 'error!';
  console.log('🚀  messageXXXXXX:', message);
  return NextResponse.json({ message }, { status: 500 });
}
