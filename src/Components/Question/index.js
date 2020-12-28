import React from 'react';
import './styles.css';

function Question({data}) {
    return (
        <div className="question__container">
            <div className="question__qNumAndQues">
                <h1 className="question__Q">Q: {data.qNumber} &nbsp;</h1>
                <h1>{data.question}</h1>
                </div>
                {
                    data.imageUrl ? 
                    <img src={data.imageUrl}></img>
                    :
                    null
                }
        </div>
    )
}

export default Question
