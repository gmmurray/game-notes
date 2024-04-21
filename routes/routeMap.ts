const concatenatePaths = (...paths: string[]) => paths.join('/');

export const pageRouteMap = {
  root: {
    href: '/',
  },
  login: {
    href: '/login',
  },
  register: {
    href: '/register',
  },
  games: {
    href: '/games',
    add: () => concatenatePaths(pageRouteMap.games.href, 'add'),
    id: {
      href: (gameId: string) =>
        concatenatePaths(pageRouteMap.games.href, gameId),
    },
  },
  // groups: {
  //   href: '/groups',
  //   add: () => concatenatePaths(pageRouteMap.groups.href, 'add'),
  //   id: {
  //     href: (groupId: string) =>
  //       concatenatePaths(pageRouteMap.groups.href, groupId),
  //     query: {
  //       tab: (groupId: string, tab: string) =>
  //         concatenatePaths(pageRouteMap.groups.id.href(groupId), `?tab=${tab}`),
  //     },
  //   },
  //   keys: {
  //     add: (groupId: string) =>
  //       concatenatePaths(pageRouteMap.groups.id.href(groupId), 'keys', 'add'),
  //   },
  //},
} as const;
