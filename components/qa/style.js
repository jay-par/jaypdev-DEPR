import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Question = styled.h2`
  font-family: 'Baloo 2', serif;
  font-weight: 300;

  margin-bottom: 5px;
`;

export const Answer = styled.div`
  font-family: 'Roboto';
  font-size: 1em;
  font-weight: 300;
  line-height: 1;
  p {
    margin-top:: 8px;
    margin-bottom:: 8px;
    line-height: 1.5;
  }
`;
