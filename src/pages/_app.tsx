import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import Loading from './loading';
import Login from './login';
import AppContextProvider from '../context/appContext';
import { theme } from '../theme';
import { useStore } from '../store';
import { WeChatLayout } from '../components/layout/WeChatLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [user, loading, error] = useAuthState(auth);

  const currentUser = useStore((state) => state.currentUser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber || user.providerData?.[0]?.phoneNumber,
          lastSeen: serverTimestamp(),
        });
      } else setCurrentUser(null);
    });
  }, []);

  // if (typeof currentUser === 'undefined')
  //   return (
  //     <div>
  //       <h1>Loading~</h1>
  //     </div>
  //   );

  if (error)
    return (
      <div>
        <h1>Error reading auth data</h1>
      </div>
    );

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
