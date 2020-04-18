import Head from 'next/head';
import { addBasePath } from 'next/dist/next-server/lib/router/router';
import QA from '../components/qa';

const Index = () => {
  return (
    <div className="content">
      <div className="hero">
        <div className="punchline">
          <h1>Janne Parviainen</h1>
          <h4>And I'm a web developer</h4>
        </div>
      </div>
      <div className="intro">
        <QA question="Who am I?" answer="asdasdad" />
        <QA question="What do I do?" answer="asdasdad" />
        <QA question="What do I want to do?" answer="asdasdad" />
        <QA question="What am I looking for?" answer="asdasdad" />
      </div>
      <style jsx>{`
        .content {
          height: 100%;
          margin: auto;
        }

        .hero {
          background-image: url('/imgs/hero_city.jpg');
          /* Set a specific height */
          height: 50%;

          /* Position and center the image to scale nicely on all screens */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }

        .punchline {
          color: white;
          background: rgba(150, 150, 150, 0.6);
          padding: 10px;
          border-radius: 25px;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .intro {
          text-align: center;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Index;
