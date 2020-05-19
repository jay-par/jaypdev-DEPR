import React from 'react';
import { StyledWrapper, StyledIcon, StyledSkill } from './style';

const Skill = ({ icon, skill }) => {
  return (
    <StyledWrapper>
      <StyledIcon>{icon}</StyledIcon>
      <StyledSkill>{skill}</StyledSkill>
    </StyledWrapper>
  );
};

export default Skill;
