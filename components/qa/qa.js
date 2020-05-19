import React from 'react';
import { StyledWrapper, StyledQuestion, StyledAnswer } from './style';

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
