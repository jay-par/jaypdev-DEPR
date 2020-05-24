import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  font-family: 'Baloo 2', serif;
  margin-bottom: 36px;
  display: flex;
  flex-direction: row;

  // .intro {
  //   display: flex;
  //   flex-direction: column;
  // }

  // .name-profiles {
  //   display: flex;
  //   flex-direction: row;
  // }

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    width: 90%;
    margin-bottom: 8px;
    padding-bottom: 30px;
    margin: auto;
  }
`;

export const Buzz = styled.div`
  font-family: 'Roboto';
  font-size: 1.2em;
  font-style: italic;
  width: 100%;
  font-weight: 350;
`;

export const Name = styled.h1`
  margin-bottom: 8px;
  letter-spacing: 0.2em;
  font-weight: 500;
`;
