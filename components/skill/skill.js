import React from 'react';
import { SkillWrapper, Img, Skill } from './style';

const ProfessionalSkill = (skillContent) => {
  const { alternativeText, skill } = skillContent;
  return (
    <SkillWrapper>
      <Img src={skillContent.icon.fields.file.url} alt={alternativeText} />

      <Skill>{skill}</Skill>
    </SkillWrapper>
  );
};

export default ProfessionalSkill;
