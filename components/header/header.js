import React from 'react';
import { HeaderWrapper, Buzz } from './style';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div className="intro">
          <div className="name-profiles">
            <h1 className="name">Janne Parviainen</h1>
          </div>
          <Buzz>Business-minded fullstack developer, avid gamer, tech enthusiast, people person</Buzz>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
