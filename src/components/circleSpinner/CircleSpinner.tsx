import React from 'react';
import { Container } from './styles';

type Props = { color: string };

const CircleSpinner = (props: Props) => {
  return (
    <Container color={props.color}>
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
