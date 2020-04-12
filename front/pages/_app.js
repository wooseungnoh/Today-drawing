import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/Layout';

const Root = ({ Component }) => {
  return (
    <div>
      <Head>
        <title>하루그림</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap'
          rel='stylesheet'
        ></link>
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
            margin:0;
            padding:0;
            display: flex;
            justify-content: center;
            align-items: center;
            
            background: #eeeeee;
          }
          a{
            text-decoration:none;
          }
        `}
      </style>
    </div>
  );
};

export default Root;
