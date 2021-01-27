import React, { useState } from 'react';
import './styles.css';

function Question({ data, submitAns, options }) {
    const [selected, setselected] = useState(null);

    const submit = () => {
        submitAns(data[selected]);
    }
    return (
        <div>
            <div className="question__header">
                <div className="question__header_inner">
                    <h4>Topic : {data.topic}</h4>
                    <h4>Sub Topic : {data.subTopic}</h4>
                    <h4>Difficulty : {data.difficulty}</h4>
                </div>
            </div>
            {/* /Question number and the question itself. */}
            <div className="question__container">
                <div className="question__qNumAndQues">
                    <h1 className="question__Q">Q: {data.qNumber} &nbsp;</h1>
                    <h2>{data.question}</h2>
                </div>
                {
                    data.imageUrl ?
                        <img src={data.imageUrl}></img>
                        :
                        null
                }
                <div className="options__container">
                    <div className="question__speratingLine"></div>
                    <h4 className="options__title">Choose one from the below <span>↓</span> </h4>
                    <div className="options__allOptions">
                        {
                            options.map((each, index) => {
                                let classOfOption = index == selected ? "options__selectedOption" : "options__eachOption"
                                return (
                                    <div className={classOfOption} onClick={() => setselected(index)}>
                                        {each}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="options__btnGrp">
                        <button className="options__submitBtn" type="submit">
                            Upload Solution
                        </button>
                        <button className="options__submitBtn" type="submit" onClick={() => submit()}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
