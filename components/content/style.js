import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  z-index: +2;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const StyledColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
  padding: 32px;
  margin: 20px 20px 20px 0;
  background-color: #ffffee;
  border-radius: 4px;
  box-shadow: 8px 16px 32px rgba(0, 0, 0, 0.15);
`;

export const StyledColumnRight = styled.div`
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

export const Divider = styled.hr`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  border-top: 1px solid black;
`;

export const StyledQuestion = styled.h2``;
