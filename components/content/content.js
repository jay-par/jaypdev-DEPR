import React from 'react';
import styled from 'styled-components';
import QA from '../qa';
import Skill from '../skill';
import Socials from './social';
import { Lock, DeveloperMode } from '@styled-icons/material';
import { ReactLogo } from '@styled-icons/boxicons-logos';
import { Node, JsSquare, Java } from '@styled-icons/fa-brands';
import { Bubbles } from '@styled-icons/icomoon';
import { Code, Blackboard, LineGraph } from '@styled-icons/entypo';
import { Cloud } from '@styled-icons/boxicons-regular';

const lorem =
  'Pellentesque in leo molestie nulla pulvinar varius. Pellentesque nec nisi sed velit pulvinar maximus varius eu urna. Phasellus luctus libero ultricies congue consectetur. Sed ut lectus imperdiet, posuere enim vitae, efficitur lorem. Nulla maximus aliquet enim, in lobortis nisl porttitor id. Suspendisse vitae cursus arcu. Integer sit amet egestas ante, et egestas diam. Donec non fringilla neque. ';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  z-index: +2;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const StyledColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  padding: 32px;
  margin: 20px 20px 20px 0;
  background-color: #ffffee;
  border-radius: 4px;
  box-shadow: 8px 16px 32px rgba(0, 0, 0, 0.15);
`;

const StyledColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin: 250px 20px 20px 20px;
  padding: 10px;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const Divider = styled.hr`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  border-top: 1px solid black;
`;

const StyledQuestion = styled.h2`
  font-family: 'Old Standard TT', serif;
`;

const Content = () => {
  return (
    <StyledWrapper>
      <StyledColumnLeft>
        <QA question="Who am I?" answer={lorem} />
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
