import rootSaga from '../sagas';
import withRedux from 'next-redux-wrapper';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { LOAD_USER_REQUEST } from '../reducers/user';
import Head from 'next/head';
import { applyMiddleware, compose, createStore } from 'redux';
import withReduxSaga from 'next-redux-saga';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import reducer from '../reducers';

import AppLayout from '../components/styled/layout';

const Root = ({ Component, store, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>하루 그림</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/308bd8919c.js"
          crossOrigin="anonymous"
        />
      </Head>
      <style jsx global>
        {`
          * {
            font-family: 'Nanum Myeongjo', serif;
            box-sizing: border-box;
          }
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: url('static/background_img.jpg') no-repeat;
          }
          @media (max-width: 700px) {
            body {
              background: url('static/background_img.jpg') no-repeat;
              background-position: -950px 0;
            }
          }
          a,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          span,
          p {
            text-decoration: none;
            display: inline-block;
            color: #eee;
          }
          a {
            color: #eee;
            font-size: inherit;
          }
          label {
            color: #eee;
          }
          #__next {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

Root.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
  console.log(cookie);
  if (cookie && ctx.isServer) {
    axios.defaults.headers.Cookie = cookie;
  }
  if (!state.user.me) {
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST,
    });
  }
  if (Component.getInitialProps) {
    pageProps = (await Component.getInitialProps(ctx)) || {};
  }
  return { pageProps };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !options.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f,
        );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(withReduxSaga(Root));
