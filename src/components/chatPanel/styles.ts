import styled from 'styled-components';

export const ChatPanelContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: black;
`;

export const Header = styled.div`
  height: 4rem;
  width: inherit(ChatPanelContainer);
  position: sticky;
  z-index: 100;
  top: 0;

  background-color: ${(props) => props.theme.colors.chatHeader.backgroundColor};
  border-bottom: 1px solid ${(props) => props.theme.colors.chatHeader.borderBottomColor};
  border-left: 1px solid ${(props) => props.theme.colors.chatHeader.borderLeftColor};
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

export const MessageContainer = styled('div')<{ bgImageUrl: string; bgColor?: string | null }>`
  height: 60%;
  padding: 1rem;
  display: flex;
  height: 400px;

  flex-direction: column;

  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.chatPanelColor)};

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const EndOfMessage = styled.div``;

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
