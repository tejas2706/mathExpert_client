import React, { useState, useEffect } from 'react';
import Question from '../../Components/Question';
import QuestionDummy from './questionDummy';
import Hints from '../../Components/Hints';
import Solutions from '../../Components/Solutions';
import HeaderPanel from '../../Components/HeaderPanel';
import './styles.css';
import SketchFieldComponent from '../../Components/SketchFieldComponent';
import QuestionsBlock from '../../Components/QuestionsBlock';
import service from '../../service/apiService';
import { connect } from 'react-redux';

function Questions({ questionsArr, topicName, subTopicName, selectedQuestion, setSelectedQuestion }) {
  const [questionDetails, setquestionDetails] = useState({});

  const submitAns = (sol) => {
    console.log('Submitted solution', sol);
  };

  const selectNewQuestion = (questionId) => {
    setSelectedQuestion(questionId);
  };

  useEffect(() => {
    console.log("🚀 ~============================================ selectedQuestion", selectedQuestion)
    service
    .get(`http://localhost:8000/api/v1/mathexp/question/${selectedQuestion}`)
    .then(({ data }) => {
        setquestionDetails({ ...data });
        setSelectedQuestion(data._id);
      });
  }, [selectedQuestion]);

  return (
    <div className="questions__container">
      <HeaderPanel className="questions__headerPanel" />
      <div className="questions__innerContainer">
        <div className="questions__quesAndOptions">
          <Question
            questionData={{questionDetails, topicName, subTopicName }}
            options={questionDetails.options}
            submitAns={submitAns}
          />
        </div>
        <div className="questions__hintsAndSolutions">
          <QuestionsBlock
            questionsArray={questionsArr}
            onSelectNewQuestion={selectNewQuestion}
          />
          <Hints hints={questionDetails.hints}/>
          <Solutions />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    topicName: state.selectedFieldsReducer.topicDetails.topicName,
    topicId: state.selectedFieldsReducer.topicDetails.topicId,
    subTopicName: state.selectedFieldsReducer.subTopicName,
    questionsArr: state.selectedFieldsReducer.questionsArr,
    selectedQuestion: state.selectedFieldsReducer.selectedQuestion
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedQuestion: (questionId) => dispatch({ type: "SET_SELECTED_QUESTION_ID", payload: { questionId } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
