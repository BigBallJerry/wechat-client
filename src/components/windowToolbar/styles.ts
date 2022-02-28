import styled from 'styled-components';
import { Minimize } from '@styled-icons/material/Minimize';
import { Close } from '@styled-icons/material/Close';
import { Maximize } from '@styled-icons/fluentui-system-regular/Maximize';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15px;
  right: 5px;
  height: 10px;
`;

export const MinimizeIcon = styled(Minimize)`
  color: black;
  font-size: 10px;
  margin-right: 10px;
`;

export const MaximizeIcon = styled(Maximize)`
  color: black;
  font-size: 10px;
  margin-right: 10px;
`;

export const CloseIcon = styled(Close)`
  color: black;
  font-size: 10px;
  margin-right: 10px;
`;
