import { createMark, getMarks } from '@/lib/serveraction';
import { NextRequest, NextResponse } from 'next/server';

type Params = {
  params: { bookId: string };
};

export async function POST(req: NextRequest) {
  // Todo og-srap!!
  // const {} = await req.json();
  // const rsh = await createMark();
}

export async function GET(req: NextRequest, { params: { bookId } }: Params) {
  // console.log('🚀 marks - route - bookId:', bookId);
  const marks = await getMarks(+bookId);

  return NextResponse.json({ marks });
}
