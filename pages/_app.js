import App from 'next/app';
import React from 'react';

import Index from './index';

class JaypDev extends App {
  render() {
    return (
      <div className="app">
        <Index />
        <style jsx global>{`
          /* Other global styles such as 'html, body' etc... */
          body,
          html,
          .app,
          #__next {
            max-width: 1000px;
            height: 100%;
            background-color: #ebeb6d;
            margin: auto;
          }
        `}</style>
      </div>
    );
  }
}

export default JaypDev;
