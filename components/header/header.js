import React from 'react';
import { HeaderWrapper, Buzz, Name } from './style';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Name>Janne Parviainen</Name>
        <Buzz>Business-minded fullstack developer, avid gamer, tech enthusiast, people person</Buzz>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
