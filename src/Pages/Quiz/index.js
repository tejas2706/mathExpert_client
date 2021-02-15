import React from 'react'
import "./styles.css"
import QuizQuestion from "../../Components/QuizQuestion";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default function Quiz() {
    let quizQuestion = [1,2,3,4,5,6,7,8]
    return (
        <div className="quiz__container">
            <div className="quiz__header">
                <h3><span>Topic: </span>Quadrilaters / squares</h3>
                <div className="quiz__duration">
                    <AccessTimeIcon />
                    <h3>&nbsp;Duration: 30 mins</h3>
                </div>
            </div>
            <div className="quiz__content">
                {quizQuestion.map((eachQuestion) => {
                    return (<div className="quiz__eachQuestion">
                        <QuizQuestion />
                    </div>);
                    })
                }
            </div>
            <div className="quiz__submit">
                <button className="quiz__submitBtn">Submit</button>
            </div>
        </div>
    )
}