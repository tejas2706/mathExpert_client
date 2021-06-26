import React from 'react';
import './styles.css';

function QuestionsBlock({ questionsArr }) {

    return (
        <div className="questionsBlock__container">
            <h3>Questions . . . </h3>
            <div className="questionsBlock__questions">
                {
                    questionsArr.map((each)=>{
                        return (
                            <div className="questionsBlock__eachQues">
                                {each}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuestionsBlock
