import Header from 'components/header';
import Content from 'components/content';
import styled from 'styled-components';

const PageWrapper = styled.div`
  background-image: url('imgs/selfie.png');
  background-repeat: no-repeat;
  background-size: 450px;
  background-position: right top;
`;

const Index = () => {
  return (
    <PageWrapper>
      <Header />
      <Content />
    </PageWrapper>
  );
};

export default Index;
