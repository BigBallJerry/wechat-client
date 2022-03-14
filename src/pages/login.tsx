import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { auth, provider } from '../firebaseConfig';
import { useAppContext } from '../context/appContext';
import { signInWithPopup } from 'firebase/auth';
import { useStore } from '../store';

const Login = () => {
  const currentUser = useStore((state) => state.currentUser);
  const [error, setError] = useState('');

  const handleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // The signed-in user info.
        console.log('signInWithPopup', result.user);
      })
      .catch((error) => {
        setError(`Error: ${err.code}`);
      });
  };

  //return if has signed in
  if (currentUser) return null;

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src='https://logodownload.org/wp-content/uploads/2019/08/wechat-logo-4.png' />
        <Button onClick={(e) => handleSingIn()}>SIGN IN WITH GOOGLE</Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
`;

const Button = styled.button``;
