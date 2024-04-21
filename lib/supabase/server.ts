import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { supabaseCredentials } from './credentials';

export function createSbServerClient(cookieStore: ReturnType<typeof cookies>) {
  const cookieConfig = {
    get(name: string) {
      return cookieStore.get(name)?.value;
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
