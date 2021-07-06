import React from 'react';
import './styles.css';

export default function QuizQuestion({
  questionDetails,
  questionNumber,
  setquestionsAnswered,
  questionsAnswered,
}) {
  const handleOptionClick = (optionIndex) => {
    setquestionsAnswered({
      ...questionsAnswered,
      [questionDetails.questionId]: optionIndex,
    });
  };

  return (
    <div className="quizQuestion__container">
      <div className="quizQuestion__question">
        <div className="quizQuestion__questionText">
          <h3>{`Q. ${questionNumber + 1} :  ${questionDetails.question}`}</h3>
        </div>
      </div>
      <div className="quizQuestion__options">
        {questionDetails.options.map((eachOption, index) => {
          return (
            <div
              className={`quizQuestion__eachOption ${
                questionsAnswered.hasOwnProperty([
                  questionDetails.questionId,
                ]) && questionsAnswered[questionDetails.questionId] === index
                  ? 'quizQuestion_optionSelected'
                  : ''
              } `}
              onClick={() => handleOptionClick(index)}>
              <h3>{eachOption}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
