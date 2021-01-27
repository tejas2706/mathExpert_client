import React from 'react';
import './styles.css';

function QuestionsBlock() {

    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    return (
        <div className="questionsBlock__container">
            <h3>Questions . . . </h3>
            <div className="questionsBlock__questions">
                {
                    arr.map((each)=>{
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
