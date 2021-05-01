import React, { useState } from 'react';
import './styles.css';

function Question({ data, submitAns, options }) {
    const [selected, setselected] = useState(null);
    const [answer, setanswer] = useState("")
    const [submittedAnswer, setsubmittedAnswer] = useState(null)

    const apiCall = () => {
        return 625;
    }


    const submit = async () => {
        //submitAns(data[selected]);
        //API call
        let apiResponse = apiCall();
        setanswer(apiResponse)
        setsubmittedAnswer(options[selected])
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
                    <h1 className="question__QNo">Q: {data.qNumber} &nbsp;</h1>
                    <div className="question__Q">
                        <h2>{data.question}</h2>
                    </div>
                </div>
                {
                    data.imageUrl ?
                        <img alt="asd" src={data.imageUrl}></img>
                        :
                        null
                }
                <div className="options__container">
                    <div className="question__speratingLine"></div>
                    <h4 className="options__title">Choose one from the below <span>↓</span> </h4>

                    <div className="options__allOptions">
                        {submittedAnswer ?

                            answer === submittedAnswer ?
                                <div className="options__allOptions">
                                    <div className="options__correctAnswer">
                                        {options[selected]}
                                    </div>
                                </div>
                                :

                                <div>
                                    <div className="options__incorrectAnswer">
                                        {options[selected]}
                                    </div>
                                    <div className="options__correctAnswer">
                                        {answer}
                                    </div>
                                </div>
                            :
                            <>

                                {
                                    options.map((each, index) => {
                                        let classOfOption = index === selected ? "options__selectedOption" : "options__eachOption"
                                        return (
                                            <div className={classOfOption} onClick={() => setselected(index)}>
                                                {each}
                                            </div>
                                        )
                                    })
                                }
                                <div className="options__btnGrp">
                                    <button className="options__submitBtn" type="submit">
                                        Upload Solution
                                </button>
                                    <button className="options__submitBtn" type="submit" onClick={() => submit()}>
                                        Submit
                                </button>
                                </div>
                            </>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
