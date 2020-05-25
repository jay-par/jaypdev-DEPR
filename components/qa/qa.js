import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Wrapper, Question, Answer } from './style';

const QA = ({ question, answer }) => {
  return (
    <>
      <Wrapper>
        <Question>{question}</Question>
      </Wrapper>
      <Answer>
        <ReactMarkdown source={answer} />
      </Answer>
    </>
  );
};

export default QA;
