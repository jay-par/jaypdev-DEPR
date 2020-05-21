import React from 'react';

import QA from 'components/qa';
import Skill from 'components/skill';
import Socials from 'components/social';
import { Lock } from '@styled-icons/material';
import { ReactLogo } from '@styled-icons/boxicons-logos';
import { Node, JsSquare, Java } from '@styled-icons/fa-brands';
import { Bubbles } from '@styled-icons/icomoon';
import { Code, LineGraph } from '@styled-icons/entypo';
import { Cloud } from '@styled-icons/boxicons-regular';
import { StyledWrapper, StyledColumnLeft, StyledColumnRight, StyledQuestion, Divider } from './style';

const lorem = 'faweeesgrareh alknhej';

const Content = () => {
  return (
    <StyledWrapper>
      <StyledColumnLeft>
        <QA
          question="Who am I?"
          answer="My name is Janne. I'm a software developer, an architect, and a gamer among other things. I enjoy coding programming as much as the next developer, but I particularly enjoy the business side if development project. What brings the value, what are the KPIs, what is the problem we are trying to solve. And not always the answer is a technical."
        />
        <Divider />
        <QA question="What do I do?" answer={lorem} />
        <Divider />
        <QA question="What do I want to do?" answer={lorem} />
        <Divider />
        <QA question="What am I looking for?" answer={lorem} />
      </StyledColumnLeft>
      <StyledColumnRight>
        <StyledQuestion>What I know:</StyledQuestion>
        <Skill icon={<JsSquare size={30} title="Typescript and Javascript development" />} skill="JS/TS" />
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
        <Skill icon={<Lock size="30" title="Identity & Access Management" />} skill="IAM" />
        <Socials />
      </StyledColumnRight>
    </StyledWrapper>
  );
};

export default Content;
