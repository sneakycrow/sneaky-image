import React from 'react';
import Head from 'next/head';

const Page = ({ errorCode }) => {
  return (
    <div>
      <Head>
        <title>{errorCode} - sneaky-image</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/static/remedy.css" />
      </Head>
      <h1>{errorCode} - sneaky-image</h1>
      <a href="/">Save me!</a>
    </div>
  );
};

Page.getInitialProps = async () => {
  return { errorCode: res.statusCode };
};

export default Page;
