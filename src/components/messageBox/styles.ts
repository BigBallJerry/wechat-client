import styled from 'styled-components';
import { keyframes } from 'styled-components';
import AvatarById from '../avatarById/AvatarById';

const motion = (props) => keyframes`
  0% {
    opacity: 0; 
    transform: translateY(0rem);
  }

  100% {
    opacity: 1; 
    transform: translateY(10px);
  }
`;

const MessageContainer = styled.div`
  padding: 1rem 0 0 0;
  transition: all 0.15s ease-in-out;
  animation: motion 0.5s;
  animation-fill-mode: forwards;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  image-rendering: -webkit-optimize-contrast;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const MessageItemLeft = styled(MessageContainer)`
  ${AvatarById} {
    float: left;
  }
`;

export const MessageItemRight = styled(MessageContainer)`
  ${AvatarById} {
    float: right;
  }
`;

export const MessageContent = styled.div`
  position: relative;
  max-width: 50%;
  min-height: 40px;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 18px;
  font-weight: 500;
  box-shadow: 0px 10px 10px -8px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
`;

export const MessageContentLeft = styled(MessageContent)`
  float: left;
  text-align: left;
  margin: 0 0 0 1rem;
  color: #000;
  background-color: #fff;

  ::before {
    content: '';
    position: absolute;
    top: 14px;
    left: -8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 10px 6px 0;
    border-color: transparent #fff transparent transparent;
  }

  a {
    color: #91ffb1;

    :hover :focus {
      color: #75ff9e;
    }
  }
`;

export const MessageContentRight = styled(MessageContent)`
  float: right;
  text-align: right;
  margin: 0 1rem 0 0;
  background-color: #9eea6a;

  ::after {
    content: '';
    position: absolute;
    top: 14px;
    right: -8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 10px;
    border-color: transparent transparent transparent #9eea6a;
  }

  a {
    color: #09f;

    :hover :focus {
      color: #007dd1;
    }
  }
`;
