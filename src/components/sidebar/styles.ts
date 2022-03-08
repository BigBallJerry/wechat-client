import styled from 'styled-components';
import { ChatDotsFill } from '@styled-icons/bootstrap/ChatDotsFill';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { PaintBucket } from '@styled-icons/bootstrap/PaintBucket';

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  background: #2e2e2e;
  color: #ffffff;
  min-height: 100%;
`;

export const UserPanel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ControlPanel = styled.div``;

export const Avatar = styled.img`
  display: block;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 1rem 0;
`;

export const ToolItem = styled.span`
  width: 100%;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  display: inline-block;
  background: transparent;
`;

export const MessagesIcon = styled(ChatDotsFill)`
  transition: all 0.2s ease-in-out;
  border: none;
  outline: none;

  :focus {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const Badge = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 1.1rem;
  height: 1.1rem;
  font-size: 0.7rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  top: -0.5rem;
  left: 2rem;
  background: red;
  color: white;
`;

export const UsersIcon = styled(PersonFill)`
  transition: all 0.2s ease-in-out;
  outline: none;
  :focus {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    transform: scale(1.2);
  }
`;

export const ThemeIcon = styled(PaintBucket)`
  transition: all 0.2s ease-in-out;
  outline: none;

  :focus {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    transform: scale(1.2);
  }
`;
