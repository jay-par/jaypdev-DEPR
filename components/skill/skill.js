import React from 'react';
import { StyledWrapper, StyledIcon, StyledSkill } from './style';

const Skill = (skillContent) => {
  const { alternativeText, skill } = skillContent;
  return (
    <StyledWrapper>
      <StyledIcon>
        <img src={skillContent.icon.fields.file.url} alt={alternativeText} />
      </StyledIcon>
      <StyledSkill>{skill}</StyledSkill>
    </StyledWrapper>
  );
};

export default Skill;
