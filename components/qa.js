import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledQuestion = styled.h2`
  padding: 0 0 0 10px;
  font-family: 'Old Standard TT', serif;
`;

const StyledAnswer = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.5;
`;

const QA = ({ question, answer }) => {
  return (
    <>
      <StyledWrapper>
        <StyledQuestion>{question}</StyledQuestion>
      </StyledWrapper>
      <StyledAnswer>{answer}</StyledAnswer>
    </>
  );
};

export default QA;
