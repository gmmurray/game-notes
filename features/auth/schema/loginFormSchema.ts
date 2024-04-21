import {
  maxLengthMessage,
  minLengthMessage,
  requiredMessage,
  validMessage,
} from '../../../utils/validationMessages';

import { z } from 'zod';

const fieldConstraints = {
  password: {
    min: 8,
    max: 128,
  },
};

export const loginFormSchema = z.object({
  email: z
    .string()
    .email(validMessage('email address'))
    .refine(email => email.trim() !== '', {
      message: requiredMessage('email address'),
    }),
  password: z
    .string()
    .min(
      fieldConstraints.password.min,
      minLengthMessage('password', fieldConstraints.password.min),
    )
    .max(
      fieldConstraints.password.max,
      maxLengthMessage('password', fieldConstraints.password.max),
    ),
});
