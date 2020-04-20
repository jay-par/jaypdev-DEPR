import { addBasePath } from 'next/dist/next-server/lib/router/router';
import QA from '../components/qa';
import Skill from '../components/skill';
import { FaBeer } from 'react-icons/fa';

const lorem =
  'Pellentesque in leo molestie nulla pulvinar varius. Pellentesque nec nisi sed velit pulvinar maximus varius eu urna. Phasellus luctus libero ultricies congue consectetur. Sed ut lectus imperdiet, posuere enim vitae, efficitur lorem. Nulla maximus aliquet enim, in lobortis nisl porttitor id. Suspendisse vitae cursus arcu. Integer sit amet egestas ante, et egestas diam. Donec non fringilla neque. ';

const Index = () => {
  return (
    <div className="content">
      <div className="hero">
        <div className="punchline">
          <span>Janne Parviainen</span>
          <span>
            {'{'} And I'm a web developer {'}'}
          </span>
        </div>
      </div>
      <div className="intro-skills">
        <div className="intro">
          <QA question="Who am I?" answer={lorem} />
          <QA question="What do I do?" answer={lorem} />
          <QA question="What do I want to do?" answer={lorem} />
          <QA question="What am I looking for?" answer={lorem} />
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
      </div>
      <style jsx>{`
        .content {
          height: 100%;
        }

        .hero {
          background-image: url('/imgs/hero_brick.jpg');
          height: 50%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: auto;
          position: relative;
        }

        .punchline {
          color: white;
          background: rgba(100, 170, 250, 0.6);
          padding: 10px;
          border-radius: 25px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          font-size: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .punchline > span {
          margin-bottom: 10px;
          font-weight: 600px;
        }

        .intro-skills {
          display: flex;
          flex-direction: row;
          justify-content: center;
          max-width: 1000px;
          margin: auto;
        }

        .intro,
        .skills {
          margin: 20px;
          padding: 10px;
        }

        .intro {
          display: flex;
          flex-direction: column;
          flex-grow: 3;
          flex-basis: 0;
        }

        .skills {
          border-radius: 5px;
          flex-basis: 0;
          display: flex;
          flex-direction: column;
          align-content: end;
          flex-grow: 1;
          background: rgba(250, 255, 88, 0.6);
        }
      `}</style>
    </div>
  );
};

export default Index;
