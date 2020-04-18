import Head from 'next/head';
import { addBasePath } from 'next/dist/next-server/lib/router/router';

const Index = () => {
  return (
    <div className="hero">
      <div className="intro">
        <h1>Janne Parviainen</h1>
        <p>And I'm a web developer</p>
      </div>

      <style jsx>{`
        .hero {
          background-image: url('/imgs/hero_office.jpg');
          /* Set a specific height */
          height: 50%;

          /* Position and center the image to scale nicely on all screens */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          overflow: hidden;
        }

        .intro {
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Index;
