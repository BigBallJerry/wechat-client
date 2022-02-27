import { WeChatLayout } from '../components/layout/WeChatLayout';
import { Sidebar } from '../components/sidebar/Sidebar';
import { UserPanel } from '../components/userPanel/UserPanel';
import { ChatPanel } from '../components/chatPanel/ChatPanel';

export const AppView = () => {
  return (
    <WeChatLayout title='WeChat'>
      <Sidebar />
      <UserPanel />
      <ChatPanel />
    </WeChatLayout>
  );
};
