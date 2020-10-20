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
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=UA-167508633-1`} />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-167508633-1', {
              page_path: window.location.pathname,
            });
            `}
        </script> */}
        <link rel="shortcut icon" href="favicon-32x32.png" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Helmet>

      <Component {...pageProps} />
      <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */
          body {
            background-color: #eedb00;
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
