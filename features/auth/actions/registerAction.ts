'use server';

import { ActionResponse, failedAction } from '@/types/actionResponse';

import { RegisterData } from '../types/register';
import { cookies } from 'next/headers';
import { createSbActionClient } from '../../../lib/supabase/actions';
import { redirect } from 'next/navigation';
import { registerFormSchema } from '../schema/registerFormSchema';
import { revalidatePath } from 'next/cache';

export async function register(
  data: RegisterData,
): Promise<ActionResponse | undefined> {
  const supabase = createSbActionClient(cookies());

  const validated = registerFormSchema.safeParse(data);

  if (!validated.success) {
    return failedAction('error validating your input');
  }

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return failedAction(error.message.toLocaleLowerCase());
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
