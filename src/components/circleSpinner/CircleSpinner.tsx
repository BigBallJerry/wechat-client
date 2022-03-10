import React from 'react';
import { Container } from './styles';

type Props = { color: string; size?: number; sizeUnit?: string };

const CircleSpinner = ({ color = 'blue', size = 48, sizeUnit = 'px' }: Props) => {
  return (
    <Container color={color} size={size} sizeUnit={sizeUnit}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default CircleSpinner;
