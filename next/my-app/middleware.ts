import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log('🚀  pathname:', pathname);
  const session = null;
  if (!session) return NextResponse.redirect('http://localhost:3000/csr');
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/ttt', '/photos/:path*'],
};
