import React from 'react';
import styled from 'styled-components';
import { FaRegQuestionCircle } from 'react-icons/fa';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledQuestion = styled.h2`
  padding: 0 0 0 10px;
  font-family: 'Old Standard TT', serif;
`;

const StyledAnswer = styled.div``;

const QA = ({ question, answer }) => {
  return (
    <>
      <StyledWrapper>
        <FaRegQuestionCircle size={30} />
        <StyledQuestion>{question}</StyledQuestion>
      </StyledWrapper>
      <p>{answer}</p>
    </>
  );
};

export default QA;
