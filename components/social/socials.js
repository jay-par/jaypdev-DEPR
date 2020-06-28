import React from 'react';
import Link from 'next/link';
import { StyledSocials } from './style';

const Socials = () => {
  return (
    <StyledSocials>
      <Link href="//www.linkedin.com/in/janneparviainen/">
        <a target="_blank" rel="noreferrer">
          <img src="imgs/LI-In-Bug.png" alt="linkedin icon" />
        </a>
      </Link>
      <Link href="//twitter.com/SensibleJayp">
        <a target="_blank" rel="noreferrer">
          <img src="imgs/Twitter_Social_Icon_Circle_Color.png" alt="twitter icon" />
        </a>
      </Link>
      <Link href="//github.com/jay-par">
        <a target="_blank" rel="noreferrer">
          <img src="imgs/GitHub-Mark-64px.png" alt="github icon" />
        </a>
      </Link>
    </StyledSocials>
  );
};

export default Socials;
