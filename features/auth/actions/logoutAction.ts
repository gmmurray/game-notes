'use server';

import { cookies } from 'next/headers';
import { createSbActionClient } from '../../../lib/supabase/actions';
import { pageRouteMap } from '@/routes/routeMap';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = cookies();
  const supabase = createSbActionClient(cookieStore);
  await supabase.auth.signOut();
  return redirect(pageRouteMap.login.href);
}
