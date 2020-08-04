import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: +2;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 20px;
    margin: auto;
  }
`;

export const ColumnLeft = styled.div`
  background-color: #ffffee;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex: 4;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  padding-top: 10x;
`;

export const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-top: 260px;
  margin-left: 20px;

  @media only screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid black;
`;

export const Question = styled.h2`
  font-family: 'Baloo 2', serif;
  font-weight: 500;
`;

export const Skills = styled.div`
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
