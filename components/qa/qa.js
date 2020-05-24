import React from 'react';
import { Wrapper, Question, Answer } from './style';

const QA = ({ question, answer }) => {
  return (
    <>
      <Wrapper>
        <Question>{question}</Question>
      </Wrapper>
      <Answer>{answer}</Answer>
    </>
  );
};

export default QA;
