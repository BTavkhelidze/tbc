import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default createMiddleware(routing);

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url));
//   }
// }

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ge|en)/:path*'],
};

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)'],
// };
