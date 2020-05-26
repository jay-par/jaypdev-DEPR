import React from 'react';
import Head from 'next/head';
import { GA_TRACKING_ID } from 'analytics/gtag';

const JaypDev = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <meta name="description" content="Janne Parviainen web developer site"></meta>
        <link rel="shortcut icon" href="favicon-32x32.png" />
        <title>Janne Parviainen - web developer</title>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
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
