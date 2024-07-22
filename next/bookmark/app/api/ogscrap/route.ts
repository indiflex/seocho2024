import { NextRequest, NextResponse } from 'next/server';
import ogs from 'open-graph-scraper';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const url = searchParams.get('url') as string;
  console.log('🚀  url:', url);

  const {
    result: { ogTitle, ogDescription, ogImage },
  } = await ogs({ url });
  // console.log('🚀  result:', result);

  return NextResponse.json({ ogTitle, ogDescription, ogImage });
}
