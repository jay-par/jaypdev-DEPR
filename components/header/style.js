import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  font-family: 'Baloo 2', serif;
  margin-bottom: 36px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    width: 90%;
    margin-bottom: 8px;
    padding-bottom: 30px;
    margin: auto;
  }
`;

export const Buzz = styled.div`
  font-family: 'Roboto';
  font-size: 1.2em;
  font-style: italic;
  width: 100%;
  font-weight: 300;
  background-color: black;
  color: #ffffee;
  padding: 5px;
`;

export const Name = styled.h1`
  display: inline-block;
  margin-bottom: 8px;
  letter-spacing: 0.2em;
  font-weight: 500;
  background-color: black;
  color: #ffffee;
  padding: 5px;
  overflow: hidden;
  border-right: 0.15em solid;
  white-space: nowrap;
  animation: typing 3.5s steps(30, start), blink-caret 0.8s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
      max-width: 337px;
    }
  }
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
`;
