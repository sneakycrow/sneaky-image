import React from 'react';
import Head from 'next/head';

const Home = () => {
  const copyToClipboard = event => {
    const { target } = event;
    target.select();
    document.execCommand('copy');
    target.focus();
  }

  return (
    <div>
      <Head>
        <title>sneaky-image</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/static/remedy.css" />
      </Head>
      <main>
        <h1>Placeholder Generator</h1>
        <p>sneaky-image is a simple placeholder image generator.</p>
        <p>Modify the path of the URL to provide a height/width</p>
        <p>
          For example, <input type="text" disabled className="inline-code" value="https://www.sneaky-image.now.sh/200/200" onClick={copyToClipboard} />{' '}
          would generate a 200 x 200 black rectangle
        </p>
      </main>
      <style jsx>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            font-family: 'Montserrat', sans-serif;
          }
          h1 {
            font-weight: 600;
          }
          main {
            max-width: 1024px;
            margin: auto;
            padding: 16px;
          }
          .inline-code {
            background-color: #202020;
            color: #efefef;
            border-radius: 2px;
            padding: 4px 8px;
            border: none;
            font-size: 1em;
            width: 300px;
            overflow: scroll-x;
            display: inline-block;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
