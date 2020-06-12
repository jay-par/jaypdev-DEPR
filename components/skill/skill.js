import React from 'react';
import { SkillColumn, Img, Skill } from './style';

const ProfessionalSkill = (skillContent) => {
  const { alternativeText, skill } = skillContent;
  return (
    <SkillColumn>
      <Img src={`https:${skillContent.icon.fields.file.url}`} alt={alternativeText} loading="lazy" />
      <Skill>{skill}</Skill>
    </SkillColumn>
  );
};

export default ProfessionalSkill;
