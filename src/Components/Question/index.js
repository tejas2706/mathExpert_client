import React, { useState } from 'react';
import './styles.css';
import service from '../../service/apiService';

function Question({ questionData, submitAns, options }) {
  console.log('/////////////////// ~ file: index.js ~ line 5 ~ Question ~ data', questionData);
  const { questionDetails, subTopicName, topicName } = questionData
  const [selected, setselected] = useState(null);
  const [answer, setanswer] = useState('');
  const [submittedAnswer, setsubmittedAnswer] = useState(null);

  const apiCall = (questionId) => {
    return service
      .post(`http://localhost:8000/api/v1/mathexp/question/getAns/${questionId}`)
      .then(({ data }) => {
        console.log("🚀 ~ file: index.js ~ line 16 ~ .then ~ data", data)
        return data
      });
  };

  const submit = async (questionId) => {
    //submitAns(data[selected]);
    //API call
    let apiResponse = await apiCall(questionId);
    console.log("🚀 ~ file: index.js ~ line 25 ~ submit ~ apiResponse", apiResponse)
    setanswer(apiResponse.correctAns);
    setsubmittedAnswer(selected);
  };
  return (
    <div>
      <div className="question__header">
        <div className="question__header_inner">
          <h4>Topic : {topicName}</h4>
          <h4>Sub Topic : {subTopicName}</h4>
          <h4>Difficulty : {questionDetails.difficulty}</h4>
        </div>
      </div>
      {/* /Question number and the question itself. */}
      <div className="question__container">
        <div className="question__qNumAndQues">
          <h1 className="question__QNo">Q: {1} &nbsp;</h1>
          <div className="question__Q">
            <h2>{questionDetails.question}</h2>
          </div>
        </div>
        {questionDetails.questionImageUrl ? (
          <img alt="asd" src={questionDetails.questionImageUrl}></img>
        ) : null}
        <div className="options__container">
          <div className="question__speratingLine"></div>
          <h4 className="options__title">
            Choose one from the below <span>↓</span>{' '}
          </h4>

          <div className="options__allOptions">
            {submittedAnswer ? (
              parseInt(answer) === parseInt(submittedAnswer) ? (
                <div className="options__allOptions">
                  <div className="options__correctAnswer">
                    {options[selected]}
                  </div>
                </div>
              ) : (
                  <div>
                    <div className="options__incorrectAnswer">
                      {options[selected]}
                    </div>
                    <div className="options__correctAnswer">{options[answer]}</div>
                  </div>
                )
            ) : (
                <>
                  {options &&
                    options.map((each, index) => {
                      let classOfOption =
                        index === selected
                          ? 'options__selectedOption'
                          : 'options__eachOption';
                      return (
                        <div
                          className={classOfOption}
                          onClick={() => setselected(index)}>
                          {each}
                        </div>
                      );
                    })}
                  <div className="options__btnGrp">
                    <button className="options__submitBtn" type="submit">
                      Upload Solution
                  </button>
                    <button
                      className="options__submitBtn"
                      type="submit"
                      onClick={() => submit(questionDetails._id)}>
                      Submit
                  </button>
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
