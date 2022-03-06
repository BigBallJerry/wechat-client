import React from 'react';
import { Container, MinimizeIcon, MaximizeIcon, CloseIcon, ToolItem } from './styles';
import dynamic from 'next/dynamic';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

type Props = {};

export const WindowToolbar = (props: Props) => {
  const handleMinimizeClick = () => {
    console.log('handleMinimizeClick');
  };
  const handleMaximizeClick = () => {
    console.log('handleMaximizeClick');
  };
  const handleCloseClick = () => {
    console.log('handleCloseClick');
  };

  return (
    <Container>
      <ToolItem onClick={() => handleMinimizeClick()}>
        <MinimizeIcon size='20' data-tip data-for='minimize' />
      </ToolItem>
      <ReactTooltip id='minimize' place='top' effect='solid' type='info'>
        <span>Minimize</span>
      </ReactTooltip>
      <ToolItem onClick={() => handleMaximizeClick()}>
        <MaximizeIcon size='20' data-tip data-for='maximize' />
      </ToolItem>
      <ReactTooltip id='maximize' place='top' effect='solid' type='info'>
        <span>Maximize</span>
      </ReactTooltip>
      <ToolItem onClick={() => handleCloseClick()}>
        <CloseIcon size='20' data-tip data-for='close' />
      </ToolItem>
      <ReactTooltip id='close' place='top' effect='solid' type='info'>
        <span>Close</span>
      </ReactTooltip>
    </Container>
  );
};
