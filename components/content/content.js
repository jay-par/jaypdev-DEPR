import React from 'react';

import QA from 'components/qa';
import Skill from 'components/skill';
import Socials from 'components/social';
import { StyledWrapper, StyledColumnLeft, StyledColumnRight, StyledQuestion, Divider } from './style';

const lorem = 'faweeesgrareh alknhej';

const Content = ({ questions, skills }) => {
  return (
    <StyledWrapper>
      <StyledColumnLeft>
        {questions.map((item, i) => {
          const { question, answer } = item.fields;
          return (
            <>
              <QA question={question} answer={answer} />
              <Divider />
            </>
          );
        })}
      </StyledColumnLeft>
      <StyledColumnRight>
        <StyledQuestion>What I know:</StyledQuestion>
        {skills.map((item, i) => {
          console.log('MAPP', item.fields);
          return (
            <>
              <Skill {...item.fields} />
            </>
          );
        })}
        {/* <Skill icon={<JsSquare size={30} title="Typescript and Javascript development" />} skill="JS/TS" />
        <Skill icon={<Node size={30} title="Nodejs development, apis, backend services" />} skill="Node" />
        <Skill icon={<ReactLogo size="30" title="React" />} skill="React" />
        <Skill icon={<Code size={30} />} skill="Web development" />
        <Skill
          icon={<LineGraph size={30} title="Finding new ways of doing and growing business" />}
          skill="Business development"
        />
        <Skill
          icon={<Bubbles size={30} title="People development, learning, listening, sparring" />}
          skill="Mentoring"
        />
        <Skill icon={<Java size={30} title="Java developent" />} skill="Java" />
        <Skill icon={<Cloud size={30} title="AWS & Azure environments" />} skill="Cloud environments" />
        <Skill icon={<Lock size="30" title="Identity & Access Management" />} skill="IAM" /> */}
        <Socials />
      </StyledColumnRight>
    </StyledWrapper>
  );
};

export default Content;
