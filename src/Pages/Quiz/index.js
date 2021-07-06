import React, { useState } from 'react';
import './styles.css';
import QuizQuestion from '../../Components/QuizQuestion';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Timer from 'react-compound-timer';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import QuestionsList from './dummyQuestions';

export default function Quiz() {
  let maxScore = 80;
  const [questionsAnswered, setquestionsAnswered] = useState({});
  return (
    <div className="quiz__container">
      <div className="quiz__header">
        <h3>
          <span>Topic: </span>Quadrilaters / squares
        </h3>
        <div className="quiz__duration">
          <AssignmentTurnedInIcon />
          <h3>&nbsp;{`Max Score: ${maxScore}`}</h3>&nbsp;&nbsp;
          <AccessTimeIcon />
          <h3>&nbsp;Time Left:</h3>&nbsp;
          <div>
            <h3>
              <Timer
                initialTime={100000}
                direction="backward"
                checkpoints={[
                  {
                    time: 0,
                    callback: () => alert('Times Up'),
                  },
                ]}>
                {() => (
                  <div>
                    <Timer.Hours /> :&nbsp;
                    <Timer.Minutes /> :&nbsp;
                    <Timer.Seconds />
                  </div>
                )}
              </Timer>
            </h3>
          </div>
        </div>
      </div>
      <div className="quiz__contentContainer">
        <div className="quiz__content">
          {QuestionsList.map((eachQuestion, index) => {
            return (
              <div className="quiz__eachQuestion">
                <QuizQuestion
                  questionDetails={eachQuestion}
                  questionNumber={index}
                  setquestionsAnswered={setquestionsAnswered}
                  questionsAnswered={questionsAnswered}
                />
              </div>
            );
          })}
        </div>
        <div className="quiz__questionBlock">
          <div className="quiz__questionsBlock__container">
            <h3>Questions . . . </h3>
            <div className="quiz__questionsBlock__questions">
              {QuestionsList.map((each, index) => {
                return (
                  <div
                    className={`quiz__questionsBlock__eachQues ${
                      questionsAnswered.hasOwnProperty(each.questionId) &&
                      'quiz__questionsBlock_eachQues_answered'
                    }`}>
                    {index + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="quiz__submit">
        <button className="quiz__submitBtn">Submit</button>
      </div>
    </div>
  );
}
