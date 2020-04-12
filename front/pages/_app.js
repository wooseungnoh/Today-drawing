import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/Layout';

const Root = ({ Component }) => (
  <div>
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
        crossorigin="anonymous"
      />
    </Head>
    <AppLayout>
      <Component />
    </AppLayout>
    <style jsx global>
      {`
        * {
          font-family: 'Nanum Myeongjo', serif;
          color: #707070;
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
          background: #eeeeee;
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
      `}
    </style>
  </div>
);

export default Root;
