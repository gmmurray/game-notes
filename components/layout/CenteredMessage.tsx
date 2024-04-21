import CenteredContent from './CenteredContent';
import React from 'react';

type Props = {
  message: string;
};
function CenteredMessage({ message }: Props) {
  return <CenteredContent>{message}</CenteredContent>;
}

export default CenteredMessage;
