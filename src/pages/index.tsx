import { NextPage } from 'next';
import { useState, useRef } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
import { Sidebar } from '../components/sidebar/Sidebar';
import { RoomPanel } from '../components/roomPanel/RoomPanel';
import { ChatPanel } from '../components/chatPanel/ChatPanel';
import { WindowToolbar } from '../components/windowToolbar/WindowToolbar';
import log from '../utils/logger';

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

  const handleSetUsername = () => {
    const value = usernameRef.current.value;

    if (!value) {
      return;
    }

    setUsername(value);
    localStorage.setItem('username', value);
  };

  let date: Date = new Date();

  const [userInfo, setUserInfo] = useState({
    username: 'BigBallJerry',
    socketId: 'zRQ3PKd2pNG9YBd-AABV',
    avatar:
      'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Sunglasses&hairColor=Black&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
    password: '123456',
    confirmationToken: null,
    createdAt: date,
  });

  return (
    <>
      {username && (
        <>
          <WindowToolbar />
          <LeftContainer>
            <Grid columns={5} gap='0px' height='100%'>
              <Cell width={1}>
                <Sidebar username={userInfo.username} avatar={userInfo.avatar} badge={20} />
              </Cell>
              <Cell width={4}>
                <RoomPanel />
              </Cell>
            </Grid>
          </LeftContainer>
          <RightContainer>
            <ChatPanel />
          </RightContainer>
        </>
      )}
    </>
  );
};

export default Home;
