import { createMark, getMark, getMarks } from '@/lib/serveraction';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  params: { bookId: string };
};

export async function POST(req: NextRequest) {
  const insertId = await createMark(await req.json());
  const mark = await getMark(insertId);
  return NextResponse.json({ mark });
}

export async function GET(req: NextRequest, { params: { bookId } }: Params) {
  // console.log('🚀 marks - route - bookId:', bookId);
  const marks = await getMarks(+bookId);

  return NextResponse.json({ marks });
}
