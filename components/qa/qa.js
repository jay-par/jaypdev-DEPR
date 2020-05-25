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
        <ReactMarkdown
          source={
            "My name is Janne. I'm a software developer, a tech enthusiast, and a gamer among other things. I enjoy coding as much as the next developer, however I particularly enjoy the business side of software development. What brings the value, what are the KPIs, what are the business problems we are trying to solve. And the answer is not always technical."
          }
        />
      </Answer>
    </>
  );
};

export default QA;
