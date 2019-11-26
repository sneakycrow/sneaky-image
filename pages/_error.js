import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <div>
      <Head>
        <title>404 - sneaky-image</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/static/remedy.css" />
      </Head>
      <main>
        <h1>404 - sneaky-image</h1>
        <a href="/">Save me!</a>
      </main>
      <style jsx>
        {`
          main {
            max-width: 1024px;
            margin: auto;
            padding: 16px;
          }
          h1 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
          }
          a {
            color: #000000;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default Page;
