import {
  SidebarContainer,
  UserPanel,
  ControlPanel,
  Avatar,
  ToolItem,
  MessagesIcon,
  Badge,
  UsersIcon,
  ThemeIcon,
} from './styles';
import dynamic from 'next/dynamic';
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

type SidebarProps = {
  username: string;
  avatar: string | null;
  badge?: number | null;
};

export const Sidebar = ({ avatar, badge }: SidebarProps) => {
  const handleMessageClick = () => {
    console.log('handleMessageClick');
  };

  const handleUserClick = () => {
    console.log('handleMessageClick');
  };

  const handleThemeClick = () => {
    console.log('handleMessageClick');
  };

  return (
    <SidebarContainer>
      <UserPanel>
        <Avatar src={avatar} onClick={(e) => signOut(auth)}></Avatar>
        <ToolItem onClick={() => handleMessageClick()}>
          <MessagesIcon size='25' data-tip data-for='messageTip' />
          {badge && <Badge>{badge}</Badge>}
          <ReactTooltip id='messageTip' place='right' effect='solid' type='info'>
            Chats
          </ReactTooltip>
        </ToolItem>
        <ToolItem onClick={() => handleUserClick()}>
          <UsersIcon size='25' data-tip data-for='userTip' />
          <ReactTooltip id='userTip' place='right' effect='solid' type='info'>
            Users
          </ReactTooltip>
        </ToolItem>
        <ToolItem onClick={() => handleThemeClick()}>
          <ThemeIcon size='25' data-tip data-for='themeTip' />
          <ReactTooltip id='themeTip' place='right' effect='solid' type='info'>
            Themes
          </ReactTooltip>
        </ToolItem>
      </UserPanel>
      <ControlPanel></ControlPanel>
    </SidebarContainer>
  );
};
