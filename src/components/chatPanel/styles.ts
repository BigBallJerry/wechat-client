import styled from 'styled-components';

export const ChatPanelContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: black;
`;

export const Header = styled.div`
  height: 60px;
  max-height: 60px;
  width: 100%;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e7e7e7;
  border-left: 1px solid #d6d6d6;
  text-align: left;
  color: black;
  display: flex;
  justify-content: left;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const MessageContainer = styled('div')<{ bgImageUrl: string }>`
  height: 60%;
  display: flex;
  height: 400px;
  padding: 1rem;
  background-color: #f5f5f5;
  flex-direction: column-reverse;
  overflow-y: auto;
  background-image: url(${(props) => props.bgImageUrl});
  background-repeat: no-repeat, no-repeat;
  background-position: right, left;
  background-size: cover;
`;

export const ChatTitle = styled.p`
  margin-left: 1.5rem;
  font-size: 1.5rem;
`;

export const ChatAvatar = styled.img`
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
`;
