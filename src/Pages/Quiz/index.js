import React from 'react'
import "./styles.css"
import QuizQuestion from "../../Components/QuizQuestion";

export default function Quiz() {
    let quizQuestion = [1,2,3,4,5,6,7,8]
    return (
        <div className="quiz__container">
            {quizQuestion.map((eachQuestion) => {
                return (<div className="quiz__eachQuestion">
                    <QuizQuestion />
                </div>);
            })
        }
        </div>
    )
}