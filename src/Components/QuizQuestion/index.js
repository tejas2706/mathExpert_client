import React from 'react'
import "./styles.css"

export default function QuizQuestion() {
    let questionNumber = 1;
    let question = "Enter your name and size to sign up for a T-Shirt."
    let options = [1,2,3,4]
    return (
        <div className="quizQuestion__container">
            <div className="quizQuestion__question">
                <div className="quizQuestion__questionText">
                    <h3>{`Q. ${questionNumber} :  ${question}`}</h3>
                </div>
            </div>
            <div className="quizQuestion__options">
                {options.map((eachOption)=> {
                    return (<div className="quizQuestion__eachOption">
                            <h3>{eachOption}</h3>
                    </div>);
                })}
            </div>
        </div>
    )
}