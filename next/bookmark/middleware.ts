import { NextRequest, NextResponse } from 'next/server';
import { auth } from './lib/auth';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log('🚀  pathname:', pathname);
  const session = await auth();
  if (!session)
    return NextResponse.redirect('http://localhost:3000/api/auth/signin');
  return NextResponse.next();
}

export const config = {
  matcher: ['/my', '/photos/:path*'],
};
