import React, { useState, useEffect } from 'react'
import Question from '../../Components/Question';
import QuestionDummy from './questionDummy';
import Hints from '../../Components/Hints';
import Solutions from '../../Components/Solutions';
import HeaderPanel from '../../Components/HeaderPanel';
import './styles.css';
import SketchFieldComponent from '../../Components/SketchFieldComponent';
import QuestionsBlock from '../../Components/QuestionsBlock';
import service from '../../service/apiService';

function Questions({match, location }) {

    const [question, setquestion] = useState({});

    const { topicName, subTopicName, standard, questionId } =  match.params
    const { questionsArray } = location
    const submitAns = (sol) => {
        console.log("Submitted solution", sol)
    }

    useEffect(() => {
        service.get(`http://localhost:8000/api/v1/mathexp/question/${questionId}`).then(({data})=>{
            setquestion({...data, topicName, subTopicName, standard})
        })
    }, [match.params.questionId])

    return (
        <div className="questions__container">
            <HeaderPanel className="questions__headerPanel" />
            <div className="questions__innerContainer">
                <div className="questions__quesAndOptions">
                    <Question data={question} options={question.options} submitAns={submitAns} />
                </div>
                <div className="questions__hintsAndSolutions">
                    <QuestionsBlock questionsArray={questionsArray} topicName={topicName} subTopicName={subTopicName} standard={standard} />
                    <Hints />
                    <Solutions />
                </div>
            </div>
        </div>
    )
}

export default Questions
