import { WeChatLayout } from '../components/layout/WeChatLayout';
import { Sidebar } from '../components/sidebar/Sidebar';
import { UserPanel } from '../components/userPanel/UserPanel';
import { ChatPanel } from '../components/chatPanel/ChatPanel';
import { WindowToolbar } from '../components/windowToolbar/WindowToolbar';
import styled from 'styled-components';

const LeftContainer = styled.div`
  position: relative;
  width: 30rem;
  margin-right: -30rem;
  float: right;
`;
const RightContainer = styled.div`
  float: right;
  width: 100%;
  margin-left: 30rem;
  clear: both;
  overflow: auto;
  min-height: 600px;
`;

export const AppView = () => {
  return (
    <WeChatLayout title='WeChat Test'>
      <WindowToolbar />
      <LeftContainer>
        <Sidebar />
        <UserPanel />
      </LeftContainer>
      <RightContainer>
        <ChatPanel />
      </RightContainer>
    </WeChatLayout>
  );
};
