import { NextPage } from 'next';
import Head from 'next/head';
import { useState, useRef, useContext, useEffect } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { RoomPanel } from '../../components/roomPanel/RoomPanel';
import { ChatPanel } from '../../components/chatPanel/ChatPanel';
import { WindowToolbar } from '../../components/windowToolbar/WindowToolbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebaseConfig';
import { useAppContext } from '../../context/appContext';
import Login from '../login';
import getRecipientEmail from '../../utils/getRecipientEmail';
import { useFirestoreQuery } from '../../hooks/useFirestoreQuery';
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

const Chat = () => {
  const usernameRef = useRef(null);
  const [username, setUsername] = useState('user');
  const [user] = useAuthState(auth);

  const { currentUserId, updateCurrentUserId, currentChatId, updateCurrentChatId } = useAppContext();

  useEffect(() => {
    const value = usernameRef?.current?.value;

    if (!value) {
      return;
    }

    setUsername(value);
    localStorage.setItem('username', value);
  }, [usernameRef]);

  // const setCurrentUserIdContext = (email) => {
  //   updateCurrentUserId(email);
  // };

  // useEffect(() => {
  //   setCurrentUserIdContext(user.email);
  // }, [user.email]);

  // const chatsQuery = db.collection('chats').where('users', 'array-contains', user?.email);
  // const chats = useFirestoreQuery(chatsQuery);
  // console.log(chatsQuery, chats);

  const themeContext = useContext(ThemeContext);

  return (
    <>
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
            {/* <RoomPanel /> */}
            <h1 className='text-center'>Select a conversation to start chatting</h1>
          </Cell>
        </Grid>
      </LeftContainer>
      <RightContainer>
        <ChatPanel bgColor={themeContext.colors.chatPanelColor} />
      </RightContainer>
    </>
  );
};

export default Chat;

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
