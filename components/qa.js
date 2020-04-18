import React from 'react';
const QA = ({ question, answer }) => {
  return (
    <div className="qa">
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default QA;
