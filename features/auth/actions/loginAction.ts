'use server';

import { ActionResponse, failedAction } from '../../../types/actionResponse';

import { LoginData } from '../types/login';
import { cookies } from 'next/headers';
import { createSbActionClient } from '../../../lib/supabase/actions';
import { loginFormSchema } from '../schema/loginFormSchema';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function login(
  data: LoginData,
): Promise<ActionResponse | undefined> {
  const cookieStore = cookies();
  const supabase = createSbActionClient(cookieStore);

  const validated = loginFormSchema.safeParse(data);

  if (!validated.success) {
    return failedAction('error validating your input');
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return failedAction(error.message.toLocaleLowerCase());
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
