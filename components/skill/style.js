import styled from 'styled-components';

export const SkillColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 3px;
  padding-top: 5px;
  padding-bottom: 5px;
  @media only screen and (max-width: 1024px) {
    padding-right: 30px;
  }
`;

export const Img = styled.img`
  padding-right: 10px;
  max-width: 30px;
`;

export const Skill = styled.span`
  font-family: 'Roboto';
  font-size: 1em;
`;
