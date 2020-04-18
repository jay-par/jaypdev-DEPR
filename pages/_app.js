import App from 'next/app';
import React from 'react';

import Index from './index';

class JaypDev extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="app">
        <Index {...pageProps} />
        <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */
          body,
          html,
          .app,
          #__next {
            height: 100%;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
          }
        `}</style>
      </div>
    );
  }
}

export default JaypDev;
