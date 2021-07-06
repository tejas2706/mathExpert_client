import React, { useState, useEffect } from 'react';
import SubTopics from '../../Components/SubTopics';
import DifficultyLevels from '../../Components/DifficultyLevels';
import './styles.css';
import Hexagon from '../../Components/Hexagon';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CreateIcon from '@material-ui/icons/Create';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';
import QuestionsCard from '../../Components/QuestionsCard';
import service from '../../service/apiService';
import _ from 'lodash';
import { connect } from 'react-redux';

const onQuestionClick = () => {};

function renderHexagons(
  difficultyLevel,
  questionsArray,
  additionalDataForDisplay,
) {
  let allQuestions = questionsArray.map((eachQues, i) => {
    return (
      <QuestionsCard
        question={{ i, eachQues }}
        classForColor={difficultyLevel}
        onQuestionClick={onQuestionClick}
        additionalDataForDisplay={additionalDataForDisplay}
        questionsArray={questionsArray}
      />
    );
  });
  return allQuestions;
}


function TopicDetails({match, standard, topicId, topicName, subTopicName, questionsArr, setSubTopicName, setQuestionsArr}) {
  const [subTopics, setSubtopics] = useState({});
  // const [selectedSubTopic, setselectedSubTopic] = useState({});
  // const [questions, setQuestions] = useState([]);
  const [difficultyLevel, setDifficultyLevel] = useState("easy");
  // const [topicName, settopicName] = useState(null)
  const [open, setOpen] = useState(false);

  const onSubTopicClick = (subTopic) => {
    setSubTopicName(subTopic.name)
    setQuestionsArr(subTopic.questions)
    handleClose();
  };

  useEffect(() => {
    service.get(`http://localhost:8000/api/v1/mathexp/topicDetails/${topicId}`).then(({data}) => {
      setSubtopics(data.subTopics)
      setSubTopicName(data.subTopics[0].name)
      setQuestionsArr(data.subTopics[0].questions)
    })
  }, [topicId])

  const handleDifficultyLevelChange = (difficultyLevel, questions) => {
    setDifficultyLevel(difficultyLevel);
    return setQuestionsArr(questions);
  }

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modal = (type) => {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            <div className="showSubmissions__container">
              <div className="sketchFieldComponent__modal_title">
                <h3>Subtopics</h3>
                <HighlightOffIcon onClick={() => handleClose()} />
              </div>
              <div className="subTopics__modal">
                <SubTopics
                  subTopics={subTopics}
                  onSubTopicClick={onSubTopicClick}
                />
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  };

  return (
    <>
      {!_.isEmpty(subTopics) ? (
        <div className="topicDetails__container">
          <div className="topicDetails__subTopics">
            <div className="topicDetails__topicName">
              <h1>
                {topicName}
                {standard}
              </h1>
            </div>
            <div className="topicDetails__listSubTopics">
              <SubTopics
                subTopics={subTopics}
                onSubTopicClick={onSubTopicClick}
              />
            </div>
          </div>
          <div className="topicDetails__questionContainer">
            <DifficultyLevels
              handleDifficultyLevelChange={handleDifficultyLevelChange}
            />
            <div className="topicDetails__subTopicTitle">
              <h2>{selectedSubTopic.name || subTopics[0].name}</h2>
              <div
                className="topicDetails__subTopicTitle__dropdown"
                onClick={handleOpen}>
                <i className="arrow down"></i>
              </div>
            </div>
            <div className="topicDetails__questions">
              {  renderHexagons(difficultyLevel, questionsArr, { subTopicName }) }
            </div>
            <br />
            <div className="topicDetails__topicTest">
              <button className="topicDetails__testBtn">Take Test</button>
            </div>
          </div>
          <div>{modal()}</div>
        </div>
       ) : (
        <div>loading...</div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    standard: state.selectedFieldsReducer.standard,
    topicName: state.selectedFieldsReducer.topicDetails.topicName,
    topicId: state.selectedFieldsReducer.topicDetails.topicId,
    subTopicName: state.selectedFieldsReducer.subTopicName,
    questionsArr: state.selectedFieldsReducer.questionsArr,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSubTopicName: (subTopicName) => dispatch({ type: "SET_SUBTOPIC", payload: {subTopicName: subTopicName }}),
    setQuestionsArr: (questionsArr) => dispatch({ type: "SET_QUESTIONS", payload: {questions: questionsArr }})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetails);
