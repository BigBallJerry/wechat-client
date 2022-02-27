import * as React from 'react';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { AuthView } from './authView';
import { AppView } from './appView';

interface RootState {
  auth: {
    isLoggedIn: boolean;
    id: string | null;
    username: string | null;
    image: string | null;
    token: string | null;
  };
}

const IndexPage: NextPage = () => {
  const isAuthorized = useSelector((state: RootState) => state.auth.isLoggedIn);
  return isAuthorized ? <AppView /> : <AuthView />;
};

export default IndexPage;
