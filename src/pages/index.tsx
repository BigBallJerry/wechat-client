import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { AuthView } from './authView';
import { AppView } from './appView';
import styled from 'styled-components';

interface RootState {
  auth: {
    isLoggedIn: boolean;
    id: string | null;
    username: string | null;
    image: string | null;
    token: string | null;
  };
}

const Home: NextPage = () => {
  const isAuthorized = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <>
      <Head>
        <title>NextJS Blog with Butter CMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* {isAuthorized ? <AppView /> : <AuthView />} */}
      <AppView />
    </>
  );
};

export default Home;
