/* eslint-disable @next/next/no-img-element */
'use client';

import { Anchor, Box, Button, Stack, Text, TextInput } from '@mantine/core';
import { Fragment, useCallback, useState } from 'react';

import { ActionResponse } from '../../../types/actionResponse';
import Link from 'next/link';
import { RegisterData } from '../types/register';
import { pageRouteMap } from '@/routes/routeMap';
import { registerFormSchema } from '../schema/registerFormSchema';
import { sendErrorNotification } from '../../../lib/mantine/notifications';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';

type Props = {
  onRegister: (data: RegisterData) => Promise<ActionResponse | undefined>;
};

function RegisterForm({ onRegister }: Props) {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(registerFormSchema),
  });
  const [formLoading, setFormLoading] = useState(false);

  const handleFormSubmit = useCallback(
    async (values: (typeof form)['values']) => {
      setFormLoading(true);
      const res = await onRegister(values);
      if (res && !res.success) {
        sendErrorNotification(res.error ?? 'error registering user');
      }
      setFormLoading(false);
    },
    [onRegister],
  );
  return (
    <Fragment>
      <Box
        component="form"
        onSubmit={form.onSubmit(handleFormSubmit)}
        w={{
          base: '100%',
          md: '75%',
          lg: '50%',
        }}
        p="md"
      >
        <Stack gap="xl" align="center">
          <img
            src="/images/logo.png"
            width={200}
            height={200}
            alt="Vital Web Company"
          />
          <TextInput
            size="md"
            label="email"
            placeholder="enter your email address"
            withAsterisk
            style={{ width: '100%' }}
            {...form.getInputProps('email')}
          />
          <TextInput
            type="password"
            size="md"
            label="password"
            placeholder="enter your password"
            withAsterisk
            style={{ width: '100%' }}
            {...form.getInputProps('password')}
          />
          <TextInput
            type="password"
            size="md"
            label="confirm password"
            placeholder="confirm your password"
            withAsterisk
            style={{ width: '100%' }}
            {...form.getInputProps('confirmPassword')}
          />
          <Button type="submit" size="md" loading={formLoading} fullWidth>
            submit
          </Button>
        </Stack>
      </Box>
      <Box>
        <Text>
          Already have an account?{' '}
          <Anchor component={Link} href={pageRouteMap.login.href}>
            Login instead
          </Anchor>
        </Text>
      </Box>
    </Fragment>
  );
}

export default RegisterForm;
