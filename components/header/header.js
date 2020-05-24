import React from 'react';
import { HeaderWrapper, Buzz, Name } from './style';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="intro">
        <div className="name-profiles">
          <Name>Janne Parviainen</Name>
        </div>
        <Buzz>Business-minded fullstack developer, avid gamer, tech enthusiast, people person</Buzz>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
