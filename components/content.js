import React from 'react';
import styled from 'styled-components';
import QA from './qa';
import Skill from './skill';
import { FaBeer } from 'react-icons/fa';

const lorem =
  'Pellentesque in leo molestie nulla pulvinar varius. Pellentesque nec nisi sed velit pulvinar maximus varius eu urna. Phasellus luctus libero ultricies congue consectetur. Sed ut lectus imperdiet, posuere enim vitae, efficitur lorem. Nulla maximus aliquet enim, in lobortis nisl porttitor id. Suspendisse vitae cursus arcu. Integer sit amet egestas ante, et egestas diam. Donec non fringilla neque. ';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin-top: -300px;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const StyledColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  padding: 10px;
  margin: 20px;
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

const Content = () => {
  return (
    <StyledWrapper>
      <StyledColumnLeft>
        <QA question="Who am I?" answer={lorem} />
        <QA question="What do I do?" answer={lorem} />
        <QA question="What do I want to do?" answer={lorem} />
        <QA question="What am I looking for?" answer={lorem} />
      </StyledColumnLeft>
      <StyledColumnRight>
        <h2>What I know:</h2>
        <Skill icon={<FaBeer />} skill="js" />
        <Skill icon={<FaBeer />} skill="React" />
        <Skill icon={<FaBeer />} skill="Web dev" />
        <Skill icon={<FaBeer />} skill="Business dev" />
        <Skill icon={<FaBeer />} skill="Mentoring" />
        <Skill icon={<FaBeer />} skill="Node" />
        <Skill icon={<FaBeer />} skill="AWS + Azure" />
      </StyledColumnRight>
    </StyledWrapper>
  );
};

export default Content;
