import { query } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  params: { bookId: string };
};

export async function GET(req: NextRequest, { params: { bookId } }: Params) {
  try {
    const [book] = await query('select * from Book where id = ?', [bookId]);
    console.log('🚀  book:', book);
    return NextResponse.json({ book });
  } catch (error) {
    return handleError(error);
  }
}

// api/books/[bookId]
// api/books/555
export async function PATCH(req: NextRequest, { params: { bookId } }: Params) {
  return await execute(req, bookId);
}
export async function PUT(req: NextRequest, { params: { bookId } }: Params) {
  return await execute(req, bookId);
}

export async function DELETE(req: NextRequest, { params: { bookId } }: Params) {
  try {
    await query('delete from Book where id = ?', [bookId]);

    return NextResponse.json({ message: 'OK' }, { status: 200 });
  } catch (error) {
    console.log('************', error);
    return handleError(error);
  }
}

async function execute(req: NextRequest, bookId: string) {
  const { title, clickdel } = await req.json();

  try {
    await query('update Book set title = ?, clickdel = ? where id = ?', [
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
