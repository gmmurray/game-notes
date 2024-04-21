import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { supabaseCredentials } from './lib/supabase/credentials';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const cookieConfig = {
    get(name: string) {
      return request.cookies.get(name)?.value;
    },
    set(name: string, value: string, options: CookieOptions) {
      request.cookies.set({
        name,
        value,
        ...options,
      });
      response = NextResponse.next({
        request: {
          headers: request.headers,
        },
      });
      response.cookies.set({
        name,
        value,
        ...options,
      });
    },
    remove(name: string, options: CookieOptions) {
      request.cookies.set({
        name,
        value: '',
        ...options,
      });
      response = NextResponse.next({
        request: {
          headers: request.headers,
        },
      });
      response.cookies.set({
        name,
        value: '',
        ...options,
      });
    },
  };

  const supabase = createServerClient(
    supabaseCredentials.url,
    supabaseCredentials.anonKey,
    {
      cookies: cookieConfig,
    },
  );

  const user = await supabase.auth.getUser();

  if (!user.data.user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!login|register|error|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
