import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 3px;
`;

const StyledIcon = styled.span`
  padding-right: 10px;
`;

const StyledSkill = styled.span`
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.9em;
`;

const Skill = ({ icon, skill }) => {
  return (
    <StyledWrapper>
      <StyledIcon>{icon}</StyledIcon>
      <StyledSkill>{skill}</StyledSkill>
    </StyledWrapper>
  );
};

export default Skill;
