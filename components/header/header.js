import React from 'react';
import { StyledHeader } from './style';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="intro">
          <div className="name-profiles">
            <h1 className="name">Janne Parviainen</h1>
          </div>
          <em className="buzz">Business-minded fullstack developer, avid gamer, tech enthusiast, people person</em>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
