import React from 'react';
import Head from 'next/head';

const JaypDev = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
        <title>Janne Parviainen - web developer</title>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,100;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */
          body {
            background-color: #ebeb6d;
            max-width: 1000px;
            height: 100%;
            margin: 15px auto;
          }
          ,
          html,
          .app,
          #__next
        `}</style>
    </>
  );
};

export default JaypDev;
