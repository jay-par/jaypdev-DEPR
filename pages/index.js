import { addBasePath } from 'next/dist/next-server/lib/router/router';
import Header from '../components/header';
import Content from '../components/content';
import styled from 'styled-components';

const lorem =
  'Pellentesque in leo molestie nulla pulvinar varius. Pellentesque nec nisi sed velit pulvinar maximus varius eu urna. Phasellus luctus libero ultricies congue consectetur. Sed ut lectus imperdiet, posuere enim vitae, efficitur lorem. Nulla maximus aliquet enim, in lobortis nisl porttitor id. Suspendisse vitae cursus arcu. Integer sit amet egestas ante, et egestas diam. Donec non fringilla neque. ';

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
{
  /* <div className="intro-skills">
<div className="intro">
  <QA question="Who am I?" answer={lorem} />
  <QA question="What do I do?" answer={lorem} />
  <QA question="What do I want to do?" answer={lorem} />
  <QA question="What am I looking for?" answer={lorem} />
</div>
<div className="skills">
  <h2>What I know:</h2>
  <Skill icon={<FaBeer />} skill="js" />
  <Skill icon={<FaBeer />} skill="React" />
  <Skill icon={<FaBeer />} skill="Web dev" />
  <Skill icon={<FaBeer />} skill="Business dev" />
  <Skill icon={<FaBeer />} skill="Mentoring" />
  <Skill icon={<FaBeer />} skill="Node" />
  <Skill icon={<FaBeer />} skill="AWS + Azure" />
</div>
</div> */
}
