import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useRef, useContext, useEffect } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import { WeChatLayout } from '../components/layout/WeChatLayout';
import styled from 'styled-components';
import { Sidebar } from '../components/sidebar/Sidebar';
import { RoomPanel } from '../components/roomPanel/RoomPanel';
import { ChatPanel } from '../components/chatPanel/ChatPanel';
import { WindowToolbar } from '../components/windowToolbar/WindowToolbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebaseConfig';

import { useAppContext } from '../context/appContext';
import Login from './login';
import getRecipientEmail from '../utils/getRecipientEmail';
import { useFirestoreQuery } from '../hooks/useFirestoreQuery';

import { ThemeContext } from 'styled-components';

const LeftContainer = styled.div`
  width: 35%;
  height: 100%;
  margin-right: -30rem;
  float: right;
`;
const RightContainer = styled.div`
  float: right;
  width: 65%;
  height: 100%;
  margin-left: 30rem;
  clear: both;
  overflow: auto;
  min-height: 600px;
`;

const LoginForm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home: NextPage = () => {
  const usernameRef = useRef(null);
  const [username, setUsername] = useState('user');
  const [user] = useAuthState(auth);

  const { currentUserId, updateCurrentUserId, currentChatId, updateCurrentChatId } = useAppContext();

  const handleSetUsername = () => {
    const value = usernameRef.current.value;

    if (!value) {
      return;
    }

    setUsername(value);
    localStorage.setItem('username', value);
  };

  if (!user) return <Login />;

  useEffect(() => {
    updateCurrentUserId(user.email);
    console.log(`(Home) currentUserId : ${currentUserId}`);
  }, [user]);

  const chatsQuery = db.collection('chats').where('users', 'array-contains', user?.email);
  const chats = useFirestoreQuery(chatsQuery);
  console.log(chatsQuery, chats);

  const themeContext = useContext(ThemeContext);

  return (
    <>
      <WeChatLayout>
        <Head>
          <title>WeChat Demo</title>
        </Head>
        <WindowToolbar />
        <LeftContainer>
          <Grid columns={5} gap='0px' height='100%'>
            <Cell width={1}>
              <Sidebar username={user.email} avatar={user.photoURL} badge={20} />
            </Cell>
            <Cell width={4}>
              <RoomPanel chats={chats} />
            </Cell>
          </Grid>
        </LeftContainer>
        <RightContainer>
          <ChatPanel bgColor={themeContext.colors.chatPanelColor} />
        </RightContainer>
      </WeChatLayout>
    </>
  );
};

export default Home;

// export async function getServerSideProps(context) {
//   const ref = db.collection('chats').doc('UaV8muHrPiXObQUDqd3i');
//   //const ref = db.collection('chats').doc(context.query.id);

//   const messagesRes = await ref.collection('messages').orderBy('timestamp', 'asc').get();

//   const messages = messagesRes.docs
//     .map((doc) => ({ id: doc.id, ...doc.data() }))
//     .map((messages) => ({ ...messages, timestamp: messages.timestamp.toDate().getTime() }));

//   const chatRes = await ref.get();
//   const chat = {
//     id: chatRes.id,
//     ...chatRes.data(),
//   };

//   console.log(chat);

//   return {
//     props: {
//       messages: JSON.stringify(messages),
//       chat: chat,
//     },
//   };
// }
