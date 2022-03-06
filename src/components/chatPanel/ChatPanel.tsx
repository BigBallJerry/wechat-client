import { ChatPanelContainer, MessageContainer, Header, ChatTitle, ChatContainer } from './styles';
import MessageEditor from '../messageEditor/MessageEditor';
import MessageBox from '../messageBox/MessageBox';
import { fakeMessageList, defaultBgImages } from '../../data';

let users = {};
users[0] = { name: 'Shun', avatar: 'https://i.pravatar.cc/150?img=32' };
users[1] = { name: 'Gabe', avatar: 'https://i.pravatar.cc/150?img=56' };
users[2] = { name: 'Kate', avatar: 'https://i.pravatar.cc/150?img=47' };
users[3] = { name: 'Patrick', avatar: 'https://i.pravatar.cc/150?img=14' };

export const ChatPanel = () => {
  const handleSendMsg = () => {
    console.log('handleSendMsg');
  };

  let currentUser = users[0];

  return (
    <ChatPanelContainer>
      <Header>
        <ChatTitle>{currentUser.name}</ChatTitle>
      </Header>
      <MessageContainer bgImageUrl={defaultBgImages[Math.floor(Math.random() * defaultBgImages.length)]}>
        {fakeMessageList.map((msg) => (
          <MessageBox
            key={msg.id}
            owner={currentUser.name}
            sender={msg.sender}
            senderAvatar={msg.senderAvatar}
            message={msg.message}
          />
        ))}
      </MessageContainer>
      {/* <MessageEditor handleMsg={handleSendMsg} /> */}
      <MessageEditor />
    </ChatPanelContainer>
  );
};
