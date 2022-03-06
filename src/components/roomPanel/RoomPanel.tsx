import { useState, useRef } from 'react';
import { RoomPanelContainer, SearchBar, CreateNewRoom, Header, ChatRoomContainer, CreateIcon } from './styles';
import { fakeRoomItemList } from '../../data';
import ChatRoomItem from '../chatRoomItem/ChatRoomItem';
import dynamic from 'next/dynamic';
import * as EmailValidator from 'email-validator';
import { db, auth } from '../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

export const RoomPanel = (props) => {
  const newRoomRef = useRef(null);

  const [user] = useAuthState(auth);
  const userChatRoomRef = db.collection('chats').where('users', 'array-contains', user.email);
  const [chatRoomSnapshot] = useCollection(userChatRoomRef);

  const chatAlreadyExists = (recipientEmail) =>
    !!chatRoomSnapshot?.docs.find((chat) => chat.data().users.find((user) => user === recipientEmail)?.length > 0);

  const handleCreateNewRoom = () => {
    const input = prompt('Please enter an email address for whom you want to chat with');

    if (!input) return null;

    if (EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email) {
      db.collection('chats').add({
        users: [user.email, input],
      });
    }

    //get room name
    const roomName = newRoomRef.current.value;
    //emit room create event
    // set room name input to empty string
  };

  const [ChatRoomList, setChatRoomList] = useState<Array<Room>>([]);

  return (
    <>
      <RoomPanelContainer>
        <Header>
          <SearchBar>
            <input type='search' placeholder='Search...' />
          </SearchBar>
          <CreateNewRoom
            href='#new-room-modal'
            ref={newRoomRef}
            data-tip
            data-for='newRoomTip'
            onClick={handleCreateNewRoom}
          >
            <CreateIcon size='36' />
            <ReactTooltip id='newRoomTip' place='right' effect='solid' type='info'>
              <span>Create new chat</span>
            </ReactTooltip>
          </CreateNewRoom>
        </Header>
        <ChatRoomContainer>
          {chatRoomSnapshot?.docs.map((chat: any) => (
            <ChatRoomItem
              key={chat.id}
              badge={1}
              currentUserEmail={user.email}
              users={chat.data().users}
              latestMessage='how are you doing?'
            />
          ))}
        </ChatRoomContainer>{' '}
      </RoomPanelContainer>
    </>
  );
};
