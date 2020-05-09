import React from 'react';
import styled from 'styled-components';
import Socials from './socials';

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
    width: 100%;
  }

  .intro {
    display: flex;
    flex-direction: column;
  }

  .name-profiles {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 8px;
    padding: 10px;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="intro">
          <div className="name-profiles">
            <h1 className="name">Janne Parviainen</h1>
          </div>
          <em className="buzz">Business-minded web developer, avid gamer, tech enthusiast, people person</em>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
