import { useState } from 'react';
import { useRouter } from 'next/router';
import { RoomPanelContainer, SearchBar, CreateNewRoom, Header, ChatRoomContainer, CreateIcon } from './styles';
import ChatRoomItem from '../chatRoomItem/ChatRoomItem';
import dynamic from 'next/dynamic';
import * as EmailValidator from 'email-validator';
import { db, auth } from '../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAppContext } from '../../context/appContext';
import { ChatRoomType, MessageType } from '../../types';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

type RoomProps = {
  chats?: ChatRoomType[];
};

export const RoomPanel = ({ chats }: RoomProps) => {
  const [user] = useAuthState(auth);
  const userChatRoomRef = db.collection('chats').where('users', 'array-contains', user?.email);
  const [chatRoomSnapshot] = useCollection(userChatRoomRef);

  const chatAlreadyExists = (recipientEmail) =>
    !!chatRoomSnapshot?.docs.find((chat) => chat.data().users.find((user) => user === recipientEmail)?.length > 0);

  const handleCreateNewRoom = () => {
    const input = prompt('Please enter an email address for whom you want to chat with');

    if (!input) return null;

    // sentAt: Date;
    // sentBy: string;
    // messageText: string;
    // image: string;
    // emoji: string;

    if (EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email) {
      db.collection('chats')
        .add({
          users: [user.email, input],
          messages: [{}],
          theme: '#f5f5f5',
        })
        .then((docRef) => {
          updateCurrentChatId(docRef.id);
        });
    }
  };

  const [listSelected, setListSelected] = useState('');

  const { updateCurrentChatId } = useAppContext();

  const handleEnterChatRoom = (chatId: string) => {
    console.log(`handleEnterChatRoom: ${chatId}`);
    updateCurrentChatId(chatId);
    setListSelected(chatId);
  };

  return (
    <>
      <RoomPanelContainer>
        <Header>
          <SearchBar>
            <input type='search' placeholder='Search...' />
          </SearchBar>
          <CreateNewRoom data-tip data-for='newRoomTip' onClick={handleCreateNewRoom}>
            <CreateIcon size='36' />
            <ReactTooltip id='newRoomTip' place='right' effect='solid' type='info'>
              <span>Create new chat</span>
            </ReactTooltip>
          </CreateNewRoom>
        </Header>
        <ChatRoomContainer>
          <ul>
            {chats?.map((chat: ChatRoomType) => {
              return (
                <li key={chat.id} onClick={() => handleEnterChatRoom(chat.id)}>
                  <ChatRoomItem
                    chatId={chat.id}
                    badge={1}
                    currentUserEmail={user.email}
                    users={chat.users}
                    theme={chat.theme}
                    latestMessage={chat.latestMessage}
                    selected={listSelected === chat.id ? true : false}
                  />
                </li>
              );
            })}
          </ul>
        </ChatRoomContainer>{' '}
      </RoomPanelContainer>
    </>
  );
};
