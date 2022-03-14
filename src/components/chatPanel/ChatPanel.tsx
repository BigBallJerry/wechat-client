import { useEffect, useState, useRef } from 'react';
import { ChatPanelContainer, MessageContainer, Header, ChatTitle, EndOfMessage } from './styles';
import MessageEditor from '../messageEditor/MessageEditor';
import MessageBox from '../messageBox/MessageBox';
import { defaultBgImages } from '../../data';
import { db } from '../../firebaseConfig';
import { doc, collection, query, orderBy, where } from 'firebase/firestore';
import { useDocument, useCollection } from 'react-firebase-hooks/firestore';
import { MessageType } from '../../types';
import { useStore } from '../../store';
import CircleSpinner from '../circleSpinner/CircleSpinner';

type ChatPanelProps = {
  bgColor?: string;
};

export const ChatPanel = ({ bgColor }: ChatPanelProps) => {
  const handleSendMsg = () => {
    console.log('handleSendMsg');
  };

  const currentUser = useStore((state) => state.currentUser);
  const currentChatId = useStore((state) => state.currentChatId);

  console.log('ChatPanel currentChatId=', currentChatId);

  const [data, loading, error] = useCollection(
    query(
      collection(db, 'chats', currentChatId ? currentChatId : 'currentChatId', 'messages'),
      orderBy('sentAt', 'asc')
    )
  );

  // const [data, loading, error] = useDocument(doc(db, 'chats', currentChatId ? currentChatId : 'currentChatId'), {
  //   snapshotListenOptions: { includeMetadataChanges: true },
  // });

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView();

    setTimeout(() => {
      endOfMessagesRef.current?.scrollIntoView();
    }, 100);
  }, [data || '']);

  console.log('ChatPanel', data?.docs);

  return (
    <ChatPanelContainer>
      <Header>
        <ChatTitle>{'recipientEmail'}</ChatTitle>
      </Header>
      <MessageContainer
        bgImageUrl={defaultBgImages[Math.floor(Math.random() * defaultBgImages.length)]}
        bgColor={bgColor}
      >
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <CircleSpinner color='#02de6d' size={40} />}
        {data &&
          data?.docs.map((item: any, index: number) => (
            <MessageBox
              key={index}
              currentUser={currentUser.email}
              sentAt={item.data().sentAt}
              sentBy={item.data().sentBy}
              message={item.data().text}
              image={item.data().image}
              emoji={item.data().emoji}
              type={item.data().type}
            />
          ))}
        <EndOfMessage ref={endOfMessagesRef} />
      </MessageContainer>
      {/* <MessageEditor handleMsg={handleSendMsg} /> */}
      <MessageEditor />
    </ChatPanelContainer>
  );
};
