/* eslint-disable @next/next/no-img-element */
'use client';

import {
  AppShell,
  Burger,
  Button,
  Group,
  NavLink,
  Text,
  UnstyledButton,
} from '@mantine/core';
import {
  IconDeviceGamepad,
  IconHome,
  IconList,
  IconPlus,
  IconSquareKey,
  IconWorld,
} from '@tabler/icons-react';

import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { User } from '@supabase/supabase-js';
import { logout } from '../../features/auth/actions/logoutAction';
import { pageRouteMap } from '../../routes/routeMap';
import { useDisclosure } from '@mantine/hooks';

type Props = {
  user?: User;
} & PropsWithChildren;
export function AppLayout({ user, children }: Props) {
  const [isMobileNavOpen, { toggle: toggleMobileNavOpen }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !isMobileNavOpen },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={isMobileNavOpen}
            onClick={toggleMobileNavOpen}
            hiddenFrom="sm"
            size="sm"
          />
          <Group justify="space-between" style={{ flex: 1 }}>
            <UnstyledButton
              component={Link}
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={isMobileNavOpen ? toggleMobileNavOpen : undefined}
            >
              <img src="/images/icon_transparent.png" height={30} alt="" />
              <Text size="xl" fw={700} ml="xs">
                game-notes
              </Text>
            </UnstyledButton>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        {navItems.map(({ label, icon, href, children = [] }, key) => {
          if (children.length === 0) {
            return (
              <NavLink
                key={key}
                label={label}
                href={href}
                leftSection={icon}
                component={Link}
                onClick={isMobileNavOpen ? toggleMobileNavOpen : undefined}
              />
            );
          }

          // return (
          //   <NavLink key={key} label={label} href={href} leftSection={icon}>
          //     {children.map((child, childKey) => {
          //       return (
          //         <NavLink
          //           key={`${key}-${childKey}`}
          //           label={child.label}
          //           href={child.href}
          //           component={Link}
          //           leftSection={child.icon}
          //           onClick={isMobileNavOpen ? toggleMobileNavOpen : undefined}
          //         />
          //       );
          //     })}
          //   </NavLink>
          // );
        })}
        {user && (
          <Button variant="default" onClick={() => logout()} mt="auto">
            logout
          </Button>
        )}
      </AppShell.Navbar>
      <AppShell.Main style={{ display: 'flex', flexDirection: 'column' }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

const navItems = [
  {
    label: 'home',
    icon: <IconHome />,
    href: pageRouteMap.root.href,
    children: undefined,
  },
  {
    label: 'games',
    icon: <IconDeviceGamepad />,
    href: pageRouteMap.games.href,
    children: undefined,
  },
  // {
  //   label: 'websites',
  //   icon: <IconWorld />,
  //   href: '/#',
  //   children: [
  //     {
  //       label: 'list',
  //       icon: <IconList />,
  //       href: pageRouteMap.websites.href,
  //     },
  //     {
  //       label: 'add',
  //       icon: <IconPlus />,
  //       href: pageRouteMap.websites.add(),
  //     },
  //   ],
  // },
];
