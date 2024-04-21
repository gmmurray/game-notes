import { Box, Loader } from '@mantine/core';

import CenteredContent from './CenteredContent';
import React from 'react';

function CenteredLoader() {
  return (
    <CenteredContent>
      <Loader size={50} />
    </CenteredContent>
  );
}

export default CenteredLoader;
