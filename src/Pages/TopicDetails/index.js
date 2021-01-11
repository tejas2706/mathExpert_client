import React, { useState, useEffect } from 'react';
import SubTopics from '../../Components/SubTopics';
import DifficultyLevels from '../../Components/DifficultyLevels';
import './styles.css'
import Hexagon from '../../Components/Hexagon';

function renderHexagons(difficultyLevel, questionsArray) {
  let allQuestions = questionsArray.map((eachQues, i) => {
    console.log("🚀 ~ file: index.js ~ line 10 ~ allQuestions ~ questionsArray", questionsArray)
    return (
      <div className="hexagon">
        <Hexagon classForColor={difficultyLevel} />
      </div>
    )
  })

  console.log("🚀 ~ file: index.js ~ line 18 ~ renderHexagons ~ allQuestions", allQuestions)
  return allQuestions;
}


function TopicDetails() {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  const [subTopic, selectSubtopic] = useState(array[0])
  const [questions, selectQuestions] = useState([])
  const [difficultyLevel, setDifficultyLevel] = useState("easy")
  const onSubTopicClick = (subTopic) => {
    selectSubtopic(subTopic);
  }


  const handleDifficultyLevelChange = (difficultyLevel, questions) => {
    setDifficultyLevel(difficultyLevel);
    return selectQuestions(questions)
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
          <DifficultyLevels selectedSubTopic={subTopic} handleDifficultyLevelChange={handleDifficultyLevelChange} />
          <div className="topicDetails__line" />
          <div className="topicDetails__subTopicTitle">
            <h2>{"SubTopic " + subTopic}</h2>
            <div className="topicDetails__subTopicTitle__dropdown" onClick={ }>
              <i className="arrow down"></i>
            </div>
          </div>
          <div className="topicDetails__questions">
            {
              renderHexagons(difficultyLevel, questions)
            }
          </div>
          <div className="topicDetails__topicTest">
            <button className="topicDetails__testBtn">Take Test</button>
          </div>
        </div>
        <div className="full-screen hidden flex-container-center">
          <SubTopics subTopics={array} onSubTopicClick={onSubTopicClick} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );

}


export default TopicDetails