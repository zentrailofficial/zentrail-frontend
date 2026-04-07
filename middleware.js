import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;
  const path = url.pathname;

  const redirects = {
    '/blogs/places-to-visit-in-Rajasthan-september-2025':
      '/blogs/places-to-visit-in-rajasthan-september-2025',
  };

  if (redirects[path]) {
    return NextResponse.redirect(new URL(redirects[path], req.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/blogs/:path*'],
};
