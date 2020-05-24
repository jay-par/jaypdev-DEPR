import React from 'react';

import QA from 'components/qa';
import ProfessionalSkill from 'components/skill';
import Socials from 'components/social';
import { ContentWrapper, ColumnLeft, ColumnRight, Question, Divider } from './style';

const lorem = 'faweeesgrareh alknhej';

const Content = ({ questions, skills }) => {
  return (
    <ContentWrapper>
      <ColumnLeft>
        {questions.map((item, i) => {
          const { question, answer } = item.fields;
          return (
            <>
              <QA question={question} answer={answer} />
              <Divider />
            </>
          );
        })}
      </ColumnLeft>
      <ColumnRight>
        <Question>What I know:</Question>
        {skills.map((item, i) => {
          return <ProfessionalSkill {...item.fields} />;
        })}
        <Socials />
      </ColumnRight>
    </ContentWrapper>
  );
};

export default Content;
