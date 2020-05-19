import React from 'react';
import Link from 'next/link';
import { StyledSocials } from './style';

const Socials = () => {
  return (
    <StyledSocials>
      <Link href="//www.linkedin.com/in/janneparviainen/">
        <a target="_blank">
          <img src="imgs/LI-In-Bug.png" />
        </a>
      </Link>
      <Link href="//twitter.com/mr_jay_pea">
        <a target="_blank">
          <img src="imgs/Twitter_Social_Icon_Circle_Color.png" />
        </a>
      </Link>
      <Link href="//github.com/mr-jayp">
        <a target="_blank">
          <img src="imgs/GitHub-Mark-64px.png" />
        </a>
      </Link>
    </StyledSocials>
  );
};

export default Socials;
