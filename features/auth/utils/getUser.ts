import { cookies } from 'next/headers';
import { createSbServerClient } from '../../../lib/supabase/server';

export async function getServerSessionUser() {
  const cookieStore = cookies();
  const supabase = createSbServerClient(cookieStore);

  const { data } = await supabase.auth.getSession();
  return data.session?.user;
}

export async function getServerUser() {
  const cookieStore = cookies();
  const supabase = createSbServerClient(cookieStore);

  const { data } = await supabase.auth.getUser();
  return data.user;
}
