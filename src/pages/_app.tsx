import React from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import appReducer from '../redux/appSlice';
import authReducer from '../redux/authSlice';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { WeChatLayout } from '../components/layout/WeChatLayout';

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });
const store = createStore(rootReducer);

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
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <WeChatLayout>
            <Component {...pageProps} />
          </WeChatLayout>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
