import React from 'react';
import { Container, MinimizeIcon, MaximizeIcon, CloseIcon } from './styles';

type Props = {};

export const WindowToolbar = (props: Props) => {
  return (
    <Container>
      <MinimizeIcon size='20' />
      <MaximizeIcon size='20' />
      <CloseIcon size='20' />
    </Container>
  );
};
