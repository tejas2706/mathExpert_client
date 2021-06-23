import React, { useState, useEffect } from 'react'
import Question from '../../Components/Question';
import QuestionDummy from './questionDummy';
import Hints from '../../Components/Hints';
import Solutions from '../../Components/Solutions';
import HeaderPanel from '../../Components/HeaderPanel';
import './styles.css';
import SketchFieldComponent from '../../Components/SketchFieldComponent';
import QuestionsBlock from '../../Components/QuestionsBlock';

function Questions() {

    const [question, setquestion] = useState({});

    const submitAns = (sol) => {
        console.log("Submitted solution", sol)
    }

    return (
        <div className="questions__container">
            <HeaderPanel className="questions__headerPanel" />
            <div className="questions__innerContainer">
                <div className="questions__quesAndOptions">
                    <Question data={question} options={question.options} submitAns={submitAns} />
                </div>
                <div className="questions__hintsAndSolutions">
                    <QuestionsBlock />
                    <Hints />
                    <Solutions />
                </div>
            </div>
        </div>
    )
}

export default Questions
