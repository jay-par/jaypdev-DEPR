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
          body {
            font-family: 'Fira Sans', sans-serif;
            background-color: #ebeb6d;
            max-width: 1000px;
            height: 100%;
            margin: 48px auto;
          }
          ,
          html,
          .app,
          #__next 
        `}</style>
      </div>
    );
  }
}

export default JaypDev;
