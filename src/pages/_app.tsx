import React from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import appReducer from '../redux/appSlice';
import authReducer from '../redux/authSlice';

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });
const store = createStore(rootReducer);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
