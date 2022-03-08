import { useEffect, useState, useRef } from 'react';
import { ChatPanelContainer, MessageContainer, Header, ChatTitle } from './styles';
import MessageEditor from '../messageEditor/MessageEditor';
import MessageBox from '../messageBox/MessageBox';
import { defaultBgImages } from '../../data';
import { db } from '../../firebaseConfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, doc, limitToLast, orderBy, query, updateDoc } from 'firebase/firestore';
import { useAppContext } from '../../context/appContext';
import { MessageType } from '../../types';
import { useDocumentQuery } from '../../hooks/useDocumentQuery';
import { useCollectionQuery } from '../../hooks/useCollectionQuery';

let users = {};
users[0] = { name: 'Shun', avatar: 'https://i.pravatar.cc/150?img=32' };
users[1] = { name: 'Gabe', avatar: 'https://i.pravatar.cc/150?img=56' };
users[2] = { name: 'Kate', avatar: 'https://i.pravatar.cc/150?img=47' };
users[3] = { name: 'Patrick', avatar: 'https://i.pravatar.cc/150?img=14' };

type ChatPanelProps = {
  bgColor?: string;
  messages?: MessageType[];
};

export const ChatPanel = ({ bgColor, messages }: ChatPanelProps) => {
  const handleSendMsg = () => {
    console.log('handleSendMsg');
  };

  let currentUser = users[0];

  const { currentUserId, currentChatId } = useAppContext();

  // useEffect(() => {
  //   console.log(`ChatPanel: currentChatId = ${currentChatId}`);

  //   if (currentChatId && currentChatId != '') {
  //     const messagesRef = db.collection('chats').doc(`${currentChatId}`);
  //     const query = messagesRef.orderBy('createdAt').limitToLast(25);
  //     const [messages] = useCollectionData(query, { idField: 'id' });
  //   }
  // }, [currentChatId]);

  // const chatsQuery = db.collection('chats').where('users', 'array-contains', user?.email);
  // const chats = useFirestoreQuery(chatsQuery);

  // const messagesRef = db.collection('chats').doc(${currentChatId} as String);
  // const query = messagesRef.orderBy('createdAt').limitToLast(25);
  // const [messages] = useCollectionData(query, { idField: 'id' });

  const [limitCount, setLimitCount] = useState(10);
  const { data, loading, error } = useCollectionQuery(
    `conversation-data-${currentChatId}-${limitCount}`,
    query(
      collection(db, 'chats', `currentChatId.toString()`, 'messages'),
      orderBy('createdAt'),
      limitToLast(limitCount)
    )
  );

  const dataRef = useRef(data);
  const currentChatIdRef = useRef(currentChatId);

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  useEffect(() => {
    currentChatIdRef.current = currentChatId;
  }, [currentChatId]);

  return (
    <ChatPanelContainer>
      <Header>
        <ChatTitle>{currentUser.name}</ChatTitle>
      </Header>
      <MessageContainer
        bgImageUrl={defaultBgImages[Math.floor(Math.random() * defaultBgImages.length)]}
        bgColor={bgColor}
      >
        {data?.docs.map((msg) => (
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
