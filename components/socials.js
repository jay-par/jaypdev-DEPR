import React from 'react';
import styled from 'styled-components';
import Link from 'next/Link';

const StyledSocials = styled.div`
  margin: 10px 0 0 10px;

  img {
    width: 44px;
    margin: 5px;
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
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
          <img src="imgs/Octocat.png" />
        </a>
      </Link>
    </StyledSocials>
  );
};

export default Socials;
