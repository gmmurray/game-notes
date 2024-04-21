import '@mantine/core/styles.css';
import './globals.scss';
import '@mantine/notifications/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import { AppLayout } from '../components/layout/AppLayout';
import { Fragment } from 'react';
import type { Metadata } from 'next';
import { Notifications } from '@mantine/notifications';
import { getServerSessionUser } from '../features/auth/utils/getUser';
import mantineTheme from '../config/mantineTheme';

export const metadata: Metadata = {
  title: 'game-notes',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getServerSessionUser();
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body>
        <MantineProvider forceColorScheme="dark" theme={mantineTheme}>
          {user !== undefined ? (
            <AppLayout user={user}>{children}</AppLayout>
          ) : (
            <Fragment>{children}</Fragment>
          )}
          <Notifications />
        </MantineProvider>
      </body>
    </html>
  );
}
