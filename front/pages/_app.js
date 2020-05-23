import React from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/Layout';
import reducer from '../reducers';
import rootSaga from '../sagas';

const Root = ({ Component, store }) => (
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
    <AppLayout>
      <Component />
    </AppLayout>
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
          background-size: 125% 110%;
          background-position: 50% 28%;
        }
        @media (min-width: 1024px) {
          body {
            background-size: 100% 110%;
            background-position: 50% 28%;
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
        }
        a {
          color: #eee;
        }
      `}
    </style>
  </Provider>
);

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
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(Root);
