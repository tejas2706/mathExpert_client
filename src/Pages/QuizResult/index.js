import React from 'react';
import './styles.css';
import goldenStar from '../../assets/goldenStar.png';
import bwstar from '../../assets/star_vector.png';

function QuizResult() {
    let questionsList = [
        {
            questionId: '1',
            questionUrl: '',
            submittedAns: 'C',
            correctAns: 'C',
            isCorrect: true,
        },
        {
            questionId: '2',
            questionUrl: '',
            submittedAns: 'B',
            correctAns: 'C',
            isCorrect: false,
        },
    ];

    return (
        <div className="quizResult__container">
            <div className="quizResult__innerContainer">
                <div className="quizResult__header">
                    <h1>Test Completed !!</h1>
                </div>
                <div className="quizResult__stars">
                    <div className="quizResult__badgeGroup">
                        <div>
                            <img
                                className="star"
                                alt="star"
                                src={goldenStar}></img>
                        </div>
                        <div>
                            <img
                                className="star"
                                alt="star"
                                src={goldenStar}></img>
                        </div>
                        <div>
                            <img className="star" alt="star" src={bwstar}></img>
                        </div>
                    </div>
                    <span className="quizResult__quizLine">
                        Great! you have completed the test, Please find below
                        the detailed solutions.
                    </span>
                </div>
                <div className="quizResult__result">
                    <div className="quizResult__resultDetails quizResult__attempted">
                        <h2>Questions Attempted</h2>
                        <h1>20</h1>
                    </div>
                    <div className="quizResult__resultDetails quizResult__correct">
                        <h2>Correctly solved</h2>
                        <h1>18</h1>
                    </div>
                    <div className="quizResult__resultDetails quizResult__wrong">
                        <h2>Wrong answers</h2>
                        <h1>2</h1>
                    </div>
                </div>
                <div className="quizResult__solutions">
                    <button className="quizResult__solution">
                        Text Solution
                    </button>
                    <button className="quizResult__solution">
                        Video Solution
                    </button>
                </div>
                <div>
                    <div>
                        <span className="quizResult__analysisTitle">
                            Analysis ↓
                        </span>
                    </div>
                    <div className="quizResult__questions">
                        {questionsList.map((each) => {
                            return (
                                <div className="quizResult__eachQuestion">
                                    <img
                                        className="quizResult__questionImg"
                                        src={each.questionUrl}
                                        alt="question"></img>
                                    <div className="quizResult__answers">
                                        <div>
                                            <h3>
                                                YOUR RESPONSE: &nbsp;
                                                {each.submittedAns}
                                            </h3>
                                            <h3>
                                                CORRECT RESPONSE: &nbsp;
                                                {each.correctAns}
                                            </h3>
                                        </div>
                                        <h2
                                            className={
                                                each.isCorrect
                                                    ? 'quizResult__correctAns'
                                                    : 'quizResult__wrongAns'
                                            }>
                                            {each.isCorrect
                                                ? 'CORRECT 🤩'
                                                : 'INCORRRECT 😕'}
                                        </h2>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizResult;
