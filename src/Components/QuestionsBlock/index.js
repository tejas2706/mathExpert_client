import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function QuestionsBlock({ questionsArray, onSelectNewQuestion }) {
  return (
    <div className="questionsBlock__container">
      <h3>Questions . . . </h3>
      <div className="questionsBlock__questions">
        {questionsArray.map((each, i) => {
          return (
            <div className="questionsBlock__eachQues" onClick={() => onSelectNewQuestion(each)}>
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionsBlock;
