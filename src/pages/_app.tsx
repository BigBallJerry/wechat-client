import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { WeChatLayout } from '../components/layout/WeChatLayout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebaseConfig';
import Login from './login';
import Loading from './loading';
import firebase from 'firebase/compat/app';

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: 640px;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#e22929;
  min-height:100vh;
  padding: 1rem;
  margin-top:0;
  font-family:Verdana;
}
`;

const theme = {
  colors: {
    primary: '#fafafa',
  },
  defaultAvatar: '',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoUrl: user.photoURL,
          name: user.displayName,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <>
      <ThemeProvider theme={theme}>
        <WeChatLayout>
          <Component {...pageProps} />
        </WeChatLayout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
