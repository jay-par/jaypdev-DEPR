import React from 'react';
import { Helmet } from 'react-helmet';

const JaypDev = ({ Component, pageProps }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Janne Parviainen - web developer"
        meta={[
          {
            name: 'description',
            content: 'Janne Parviainen web developer site',
          },
        ]}
      >
        <link rel="shortcut icon" href="favicon-32x32.png" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Helmet>

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
