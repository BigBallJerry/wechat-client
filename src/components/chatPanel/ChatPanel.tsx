import { useEffect, useState, useRef } from 'react';
import { ChatPanelContainer, MessageContainer, Header, ChatTitle } from './styles';
import MessageEditor from '../messageEditor/MessageEditor';
import MessageBox from '../messageBox/MessageBox';
import { defaultBgImages } from '../../data';
import { db } from '../../firebaseConfig';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, doc, limitToLast, orderBy, query, getDocs, where } from 'firebase/firestore';
import { useAppContext } from '../../context/appContext';
import { MessageType } from '../../types';
import { useDocumentQuery } from '../../hooks/useDocumentQuery';
import { useCollectionQuery } from '../../hooks/useCollectionQuery';
import getRecipientEmail from '../../utils/getRecipientEmail';
import { useFirestoreQuery } from '../../hooks/useFirestoreQuery';

type ChatPanelProps = {
  bgColor?: string;
};

export const ChatPanel = ({ bgColor }: ChatPanelProps) => {
  const handleSendMsg = () => {
    console.log('handleSendMsg');
  };

  const { currentUserId, currentChatId } = useAppContext();

  useEffect(() => {
    //   if (currentChatId && currentChatId != '') {
    //     const messagesRef = db.collection('chats').doc(`${currentChatId}`);
    //     const query = messagesRef.orderBy('createdAt').limitToLast(25);
    //     const [messages] = useCollectionData(query, { idField: 'id' });
    //   }
  }, [currentUserId, currentChatId]);

  // const chatsQuery = db.collection('chats').where('users', 'array-contains', user?.email);
  // const chats = useFirestoreQuery(chatsQuery);

  // const messagesRef = db.collection('chats').doc(${currentChatId} as String);
  // const query = messagesRef.orderBy('createdAt').limitToLast(25);
  // const [messages] = useCollectionData(query, { idField: 'id' });

  const [limitCount, setLimitCount] = useState(10);
  // const { data, loading, error } = useCollectionQuery(
  //   `conversation-data-${currentChatId}-${limitCount}`,
  //   query(collection(db, 'chats'), where('users', '==', sorted))
  // );

  // const { data, error, loading } = useCollectionQuery('all-chats', collection(db, 'users'));

  // const chatsQuery = db.collection('chats').where('users', 'array-contains', currentUserId);
  // // .where('id', '==', currentChatId);
  // const data = useFirestoreQuery(chatsQuery);

  // const chatsQuery = db.collection('chats').where('users', 'array-contains', currentUserId);
  // const { data, loading, error } = useDocumentQuery(`conversation-${currentChatId}`, chatsQuery);

  const { data, loading, error } = useDocumentQuery(`chats-${currentChatId}`, doc(db, 'chats', currentChatId));
  const messages = data?.data();

  const { data1, loading1, error1 } = useCollectionQuery(
    `chats-${currentChatId}-${limitCount}`,
    query(collection(db, 'chats', currentChatId as string, 'messages'), orderBy('sentAt'), limitToLast(limitCount))
  );

  console.log('ChatPanel', data1?.docs);

  const dataRef = useRef(data);
  const currentChatIdRef = useRef(currentChatId);

  useEffect(() => {
    dataRef.current = data;
    console.log(`ChatPanel: currentChatId = ${currentChatId}`);
    console.log(data?.data()?.messages);
  }, [data]);

  useEffect(() => {
    currentChatIdRef.current = currentChatId;
  }, [currentChatId]);

  //const recipientEmail = getRecipientEmail(users, user);

  return (
    <ChatPanelContainer>
      <Header>
        <ChatTitle>{'recipientEmail'}</ChatTitle>
      </Header>
      <MessageContainer
        bgImageUrl={defaultBgImages[Math.floor(Math.random() * defaultBgImages.length)]}
        bgColor={bgColor}
      >
        {data &&
          data
            ?.data()
            ?.messages?.map((msg: MessageType, index: number) => (
              <MessageBox
                key={index}
                currentUser={currentUserId}
                sentAt={msg.sentAt}
                sentBy={msg.sentBy}
                message={msg.text}
                image={msg.image}
                emoji={msg.emoji}
              />
            ))}
      </MessageContainer>
      {/* <MessageEditor handleMsg={handleSendMsg} /> */}
      <MessageEditor />
    </ChatPanelContainer>
  );
};
