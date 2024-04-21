import { type CookieOptions, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { supabaseCredentials } from './credentials';

export function createSbActionClient(cookieStore: ReturnType<typeof cookies>) {
  const cookieConfig = {
    get(name: string) {
      return cookieStore.get(name)?.value;
    },
    set(name: string, value: string, options: CookieOptions) {
      cookieStore.set({ name, value, ...options });
    },
    remove(name: string, options: CookieOptions) {
      cookieStore.set({ name, value: '', ...options });
    },
  };

  return createServerClient(
    supabaseCredentials.url,
    supabaseCredentials.anonKey,
    {
      cookies: cookieConfig,
    },
  );
}
