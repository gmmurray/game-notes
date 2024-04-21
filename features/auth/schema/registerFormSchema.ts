import { loginFormSchema } from './loginFormSchema';
import { mustMatchMessage } from '@/utils/validationMessages';
import { z } from 'zod';

export const registerFormSchema = loginFormSchema
  .extend({
    confirmPassword: z.string(),
  })
  .refine(values => values.password === values.confirmPassword, {
    message: mustMatchMessage('passwords'),
    path: ['confirmPassword'],
  });
