import Header from 'components/header';
import Content from 'components/content';
import styled from 'styled-components';
import { getMainPage } from 'apis/contentful';

const PageWrapper = styled.div`
  background-image: url(${({ selfie }) => selfie});
  background-repeat: no-repeat;
  background-size: 450px;
  background-position: right top;
  @media only screen and (max-device-width: 1024px) {
    margin: auto;
    background-image: none;
  }
`;

const Index = ({ pageContent }) => {
  return (
    <>
      <PageWrapper selfie={pageContent.selfie.fields.file.url}>
        <Header />
        <Content questions={pageContent.questions} skills={pageContent.skills} />
      </PageWrapper>
    </>
  );
};

export const getStaticProps = async () => {
  const pageContent = await getMainPage();

  return {
    props: { pageContent },
  };
};

export default Index;
