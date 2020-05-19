import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  font-family: 'Baloo 2', serif;
  margin-bottom: 36px;
  display: flex;
  flex-direction: row;

  .name {
    margin-bottom: 8px;
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

export const Buzz = styled.div`
  font-family: 'Roboto';
  font-size: 1.2em;
  font-style: italic;
  width: 100%;
  font-weight: 300;
`;
