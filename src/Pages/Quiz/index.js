import React, { useState, useEffect } from 'react';
import service from '../../service/apiService';
import './styles.css';
import QuizQuestion from '../../Components/QuizQuestion';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Timer from 'react-compound-timer';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import QuestionsList from './dummyQuestions';

const QuizHeader = ({ maxScore }) => {
  return (
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
  )
}

const QuizContent = ({ questionsList, setquestionsAnswered, questionsAnswered }) => {
  return (
    <div className="quiz__content">
      {questionsList.map((eachQuestion, index) => {
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
  )
}

const QuestionsBlock = ({ questionsList, questionsAnswered }) => {
  return (
    <div className="quiz__questionBlock">
      <div className="quiz__questionsBlock__container">
        <h3>Questions . . . </h3>
        <div className="quiz__questionsBlock__questions">
          {questionsList.map((each, index) => {
            return (
              <div
                className={`quiz__questionsBlock__eachQues ${questionsAnswered.hasOwnProperty(each.questionId) &&
                  'quiz__questionsBlock_eachQues_answered'
                  }`}>
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

const NotLoggedIn = () => {
  return (
    <>
      <div className="quiz__container_notLoggedIn">
        Develop a deep understanding of concepts, by going through multiple tests<br></br><br></br>
              Get detailed solutions in video as well as written formats to all the questions of the test and improve your score by attempting the test multiple times
              ---<br></br><br></br>
      </div>
      <div className="quiz__signUp">
        <p className="quiz__noLogInText">You aren't logged in !! </p>
        <p className="quiz__lock">🔏</p>
        <p className="quiz__askToLogin">Sign up or login to get the complete access now</p>
        <div className="quiz__signUpBtns">
          <button className="quiz__login">Login</button>
          <button className="quiz__signup">Sign Up</button>
        </div>
      </div>
    </>
  )
}


export default function Quiz() {
  let maxScore = 80;
  const [questionsAnswered, setquestionsAnswered] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    service.get('')
      .then((data) => {
        console.log("Quiz data...", data);
      })
  }, [])

  return (
    <div className="quiz__container">
      <div className="quiz__title">
        <h1>Quiz on Circles</h1>
      </div>
      {
        isLoggedIn

          ?
          <>
            <QuizHeader maxScore={maxScore} />
            <div className="quiz__contentContainer">
              <QuizContent
                questionsList={QuestionsList}
                setquestionsAnswered={setquestionsAnswered}
                questionsAnswered={questionsAnswered}
              />
              <QuestionsBlock
                questionsList={QuestionsList}
                questionsAnswered={questionsAnswered}
              />
            </div>
            <div className="quiz__submit">
              <button className="quiz__submitBtn">Submit</button>
            </div>
          </>

          :
          <>
            <NotLoggedIn />
          </>
      }
    </div>
  );
}
