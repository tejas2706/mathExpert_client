import React, { useState, useEffect } from 'react';
import SubTopics from '../../Components/SubTopics';
import DifficultyLevels from '../../Components/DifficultyLevels';
import './styles.css'



function renderQuestions(questionsArray){

  let allQuestions = questionsArray.map((eachQues) => {
    return (
      
        <p className="topicDetails__question">{eachQues}</p>
      
    )
  })

  return allQuestions;
}


function TopicDetails() {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  const [subTopic, selectSubtopic] = useState(array[0])
  const [questions, selectQuestions] = useState([])
  const onSubTopicClick = (subTopic) => {
    selectSubtopic(subTopic);
  }

  return (
    
    <div className="topicDetails__container">
        <div className="topicDetails__subTopicContainer">
          <div className="topicDetails__subTopics">
            <div className="topicDetails__topicName">
              <h1>Topic Name</h1>
            </div>
            <div className="topicDetails__line" />
            <SubTopics subTopics={array} onSubTopicClick={onSubTopicClick} />
          </div>
          <div className="topicDetails__questionContainer">
            <DifficultyLevels selectedSubTopic={subTopic} selectQuestions={selectQuestions} />
            <div className="topicDetails__line" />
            <div className="topicDetails__questions">
            {
              renderQuestions(questions)
            }
            </div>
            <div className="topicDetails__topicTest">
              <button className="topicDetails__testBtn">Take Test</button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );

}


export default TopicDetails