import React from 'react';
import { StyledWrapper, StyledImg, StyledSkill } from './style';

const Skill = (skillContent) => {
  const { alternativeText, skill } = skillContent;
  return (
    <StyledWrapper>
      <StyledImg src={skillContent.icon.fields.file.url} alt={alternativeText} />

      <StyledSkill>{skill}</StyledSkill>
    </StyledWrapper>
  );
};

export default Skill;
