import React from 'react';
import './styles.css';

function Question({data}) {
    return (
        <div className="Question__container">
            <h1>Q: {data.qNumber}</h1>
            <h3>{data.question}</h3>
            <div>
            {
                data.imageUrl ? 
                <img src={data.imageUrl}></img>
                :
                <p>no image</p>
            }
            </div>
        </div>
    )
}

export default Question
