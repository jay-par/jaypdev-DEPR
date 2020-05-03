import React from 'react';
import styled from 'styled-components';
import { FaRegQuestionCircle } from 'react-icons/fa';

const StyledHeader = styled.div`
  font-family: 'Old Standard TT', serif;
  margin-bottom: 48px;
  display: flex;
  flex-direction: row;
  .name {
    margin-bottom: 8px;
  }
  .buzz {
    font-size: 1.4em;
  }
  .intro {
    display: flex;
    flex-direction: column;
    z-index: +1;
    padding-top: 20px;
  }
`;

const StyledSelfie = styled.img`
  width: 400px;
  height: auto;
  margin-left: -100px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="intro">
        <h1 className="name">Janne Parviainen</h1>
        <em className="buzz">Business minded web developer, avid gamer, tech enthusiast, traveller</em>
      </div>
      <StyledSelfie src="imgs/selfie.png" />
    </StyledHeader>
  );
};

export default Header;
