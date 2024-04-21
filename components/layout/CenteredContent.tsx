import React, { PropsWithChildren } from 'react';

import { Box } from '@mantine/core';

type Props = {} & PropsWithChildren;
function CenteredContent({ children }: Props) {
  return (
    <Box
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}

export default CenteredContent;
