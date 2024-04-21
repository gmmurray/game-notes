/* eslint-disable @next/next/no-img-element */
'use client';

import { Anchor, Box, Button, Stack, Text, TextInput } from '@mantine/core';
import { Fragment, useCallback, useState } from 'react';

import { ActionResponse } from '../../../types/actionResponse';
import Link from 'next/link';
import { LoginData } from '../types/login';
import { loginFormSchema } from '../schema/loginFormSchema';
import { pageRouteMap } from '@/routes/routeMap';
import { sendErrorNotification } from '../../../lib/mantine/notifications';
import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';

type Props = {
  onLogin: (data: LoginData) => Promise<ActionResponse | undefined>;
};

function LoginForm({ onLogin }: Props) {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(loginFormSchema),
  });
  const [formLoading, setFormLoading] = useState(false);

  const handleFormSubmit = useCallback(
    async (values: (typeof form)['values']) => {
      setFormLoading(true);
      const res = await onLogin(values);
      if (res && !res.success) {
        sendErrorNotification(res.error ?? 'error logging in');
      }
      setFormLoading(false);
    },
    [onLogin],
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
          <Button type="submit" size="md" loading={formLoading} fullWidth>
            submit
          </Button>
        </Stack>
      </Box>
      <Box>
        <Text>
          Don&apos;t have an account yet?{' '}
          <Anchor component={Link} href={pageRouteMap.register.href}>
            Register instead
          </Anchor>
        </Text>
      </Box>
    </Fragment>
  );
}

export default LoginForm;
