import styled from 'styled-components';

export const ChatPanelContainer = styled.div`
  width: 100%;
  background: #f5f5f5;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: black;
`;

export const Header = styled.div`
  height: 60px;
  max-height: 60px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  text-align: left;
  color: black;
  display: flex;
  justify-content: left;
  align-items: left;
`;

export const Title = styled.h1``;

export const ChatTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
`;
