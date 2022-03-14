import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  RoomPanelContainer,
  SearchBar,
  CreateNewRoom,
  Header,
  ChatRoomContainer,
  CreateIcon,
  SearchIcon,
} from './styles';
import ChatRoomItem from '../chatRoomItem/ChatRoomItem';
import dynamic from 'next/dynamic';
import * as EmailValidator from 'email-validator';
import { db } from '../../firebaseConfig';
import { User } from 'firebase/auth';
import { collection, where, query, addDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAppContext } from '../../context/appContext';
import { useStore } from '../../store';
import CircleSpinner from '../circleSpinner/CircleSpinner';
import getRecipientEmail from '../../utils/getRecipientEmail';
import * as _ from 'lodash';

const ReactTooltip = dynamic(() => import('react-tooltip'), {
  ssr: false,
});

export const RoomPanel = () => {
  const [term, setTerm] = useState('');
  const chatSearchObj = {};
  const [listToHide, setListToHide] = useState([]);
  const [match, setMatch] = useState('');

  const currentUser: User = useStore((state) => state.currentUser);
  const userChatRoomRef = query(
    collection(db, 'chats'),
    where('users', 'array-contains', currentUser?.email ? currentUser?.email : 'currentUser.email')
  );
  const [data, loading, error] = useCollection(userChatRoomRef);
  console.log('RoomPanel::currentUser = ', currentUser?.email);
  console.log('RoomPanel::chatRoomSnapshot = ', data?.docs);

  data?.docs?.map((doc) => {
    console.log(doc.data());
  });

  const chatAlreadyExists = (recipientEmail) =>
    !!data?.docs.find((chat) => chat.data().users.find((user) => user === recipientEmail)?.length > 0);

  data?.docs.map((chat) => {
    chatSearchObj[getRecipientEmail(chat.data().users, currentUser)] = true;
  });

  const setCurrentChatId = useStore((state) => state.setCurrentChatId);
  const handleCreateNewRoom = async () => {
    const input = prompt('Please enter an email address for whom you want to chat with');

    if (!input) return null;

    if (EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== currentUser?.email) {
      //if (EmailValidator.validate(input) && input !== user?.email) {
      currentUser &&
        (await addDoc(collection(db, 'chats'), {
          users: [currentUser?.email, input],
          theme: '#f5f5f5',
        }).then((docRef) => {
          setCurrentChatId(docRef.id);
        }));
    }
  };

  const [listSelected, setListSelected] = useState('');

  const handleEnterChatRoom = (chatId: string) => {
    console.log(`handleEnterChatRoom: ${chatId}`);
    setCurrentChatId(chatId);
    setListSelected(chatId);
  };

  const searchChats = (e) => {
    const keyword = e.target.value.toLowerCase();

    for (const key in chatSearchObj) {
      if (key.indexOf(keyword) > -1) {
        chatSearchObj[key] = true;
        setMatch(chatSearchObj);
      } else {
        chatSearchObj[key] = false;
        listToHide.push(key);
        setMatch(chatSearchObj);
        console.log('ChatRoomContainer listToHide =', listToHide);
      }
    }

    console.log('ChatRoomContainer searchChats match =', match);
    console.log('ChatRoomContainer searchChats include =', listToHide.includes('info@1688sweden.com'));
    setTerm(keyword);
  };

  const hide = {
    display: 'none',
  };
  const show = {
    display: 'flex',
  };

  return (
    <>
      <RoomPanelContainer>
        <Header>
          <SearchBar>
            <input type='search' value={term} placeholder='Search...' onChange={searchChats} />
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
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <CircleSpinner color='#02de6d' size={40} />}
            {data?.docs.map((chat) => {
              const recipientEmail = getRecipientEmail(chat.data().users, currentUser);
              console.log('ChatRoomContainer map recipientEmail = ', recipientEmail);
              console.log('ChatRoomContainer map include =', listToHide);
              console.log(listToHide);
              return (
                <li key={chat.id} onClick={() => handleEnterChatRoom(chat.id)}>
                  <ChatRoomItem
                    chatId={chat.id}
                    currentUser={currentUser}
                    users={chat.data().users}
                    listToHide={listToHide}
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
