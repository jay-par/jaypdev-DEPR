import styled from 'styled-components';

export const StyledHeader = styled.div`
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
    font-weight: 500;
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
