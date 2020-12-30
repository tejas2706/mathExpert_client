import React, { useState } from 'react';
import './styles.css';

function Question({ data, submitAns, options }) {
    const [selected, setselected] = useState(null);

    const submit = () => {
        submitAns(data[selected]);
    }
    return (
        <div className="question__container">
            <div className="question__header">

            </div>
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
            <div>
                <h3 className="options__title">Choose one from the below <span>↓</span> </h3>
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
    )
}

export default Question
