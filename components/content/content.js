import React from 'react';

import QA from 'components/qa';
import ProfessionalSkill from 'components/skill';
import Socials from 'components/social';
import { ContentWrapper, ColumnLeft, ColumnRight, Question, Divider, Skills } from './style';

const Content = ({ questions, skills }) => {
  return (
    <ContentWrapper>
      <ColumnLeft>
        {questions.map((item, i) => {
          const { question, answer } = item.fields;

          if (questions.length - 1 === i) {
            return <QA question={question} answer={answer} />;
          }

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
        <Skills>
          {skills.map((item, i) => {
            return <ProfessionalSkill {...item.fields} />;
          })}
        </Skills>
        <Socials />
      </ColumnRight>
    </ContentWrapper>
  );
};

export default Content;
