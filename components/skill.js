import React from 'react';

const Skill = ({ icon, skill }) => {
  return (
    <div className="skill">
      <span className="skillIcon">{icon}</span>
      <span className="skillTitle">{skill}</span>
      <style jsx>{`
        .skill {
          padding-bottom: 10px;
        }
        .skillIcon {
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Skill;
