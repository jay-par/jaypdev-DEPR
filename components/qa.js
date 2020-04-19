import React from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';

const QA = ({ question, answer }) => {
  return (
    <div>
      <div className="questionRow">
        <FaRegQuestionCircle size={30} />
        <span className="question">{question}</span>
      </div>
      <p>{answer}</p>
      <style jsx>{`
        .questionRow {
          display: flex;
          align-items: center;
        }
        .skillIcon {
          padding: 10px;
        }
        .question {
          margin-left: 20px;
          font-weight: 600;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default QA;
