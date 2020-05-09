import React from 'react';
import styled from 'styled-components';
import Link from 'next/Link';
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
  }

  .name-profiles {
    display: flex;
    flex-direction: row;
  }

  .socials {
    margin: 10px 0 0 20px;
  }

  .socials img {
    width: 44px;
    margin: 5px;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 8px;
    padding: 10px;
  }
`;

const StyledSelfie = styled.img`
  width: 400px;
  height: auto;
  margin-left: -100px;

  @media only screen and (max-width: 1024px) {
    visibility: hidden;
    width: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="intro">
        <div className="name-profiles">
          <h1 className="name">Janne Parviainen</h1>
          <div className="socials">
            <Link href="//www.linkedin.com/in/janneparviainen/">
              <a>
                <img src="imgs/LI-In-Bug.png" />
              </a>
            </Link>
            <Link href="//twitter.com/mr_jay_pea">
              <a>
                <img src="imgs/Twitter_Social_Icon_Circle_Color.png" />
              </a>
            </Link>
            <Link href="//github.com/mr-jayp">
              <a>
                <img src="imgs/GitHub-Mark-Light-64px.png" />
              </a>
            </Link>
          </div>
        </div>
        <em className="buzz">Business minded web developer, avid gamer, tech enthusiast, people person</em>
      </div>
      <StyledSelfie src="imgs/selfie.png" />
    </StyledHeader>
  );
};

export default Header;
