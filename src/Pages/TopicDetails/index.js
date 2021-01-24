import React, { useState, useEffect } from 'react';
import SubTopics from '../../Components/SubTopics';
import DifficultyLevels from '../../Components/DifficultyLevels';
import './styles.css'
import Hexagon from '../../Components/Hexagon';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CreateIcon from '@material-ui/icons/Create';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';
import QuestionsCard from '../../Components/QuestionsCard';


function renderHexagons(difficultyLevel, questionsArray) {
  let allQuestions = questionsArray.map((eachQues, i) => {
    console.log("🚀 ~ file: index.js ~ line 10 ~ allQuestions ~ questionsArray", questionsArray)
    return (
        <QuestionsCard classForColor={difficultyLevel} />
    )
  })

  console.log("🚀 ~ file: index.js ~ line 18 ~ renderHexagons ~ allQuestions", allQuestions)
  return allQuestions;
}


function TopicDetails() {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17,18]
  const [subTopic, selectSubtopic] = useState(array[0])
  const [questions, selectQuestions] = useState([])
  const [difficultyLevel, setDifficultyLevel] = useState("easy")
  const [open, setOpen] = useState(false);
  

  const onSubTopicClick = (subTopic) => {
    selectSubtopic(subTopic);
    handleClose();
  }


  const handleDifficultyLevelChange = (difficultyLevel, questions) => {
    setDifficultyLevel(difficultyLevel);
    return selectQuestions(questions)
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
          }}
        >
          <Fade in={open}>
            <div className="showSubmissions__container">
              <div className="sketchFieldComponent__modal_title">
                <h3>Subtopics</h3>
                <HighlightOffIcon onClick={() => handleClose()} />
              </div>
              <div className="subTopics__modal">
                <SubTopics subTopics={array} onSubTopicClick={onSubTopicClick} />
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    )
  }

  return (

    <div className="topicDetails__container">
      {/* <div className="topicDetails__subTopicContainer"> */}
        <div className="topicDetails__subTopics">
          <div className="topicDetails__topicName">
            <h1>Topic Name</h1>
          </div>
          <div className="topicDetails__listSubTopics">
            <SubTopics subTopics={array} onSubTopicClick={onSubTopicClick} />
          </div>
        </div>
        <div className="topicDetails__questionContainer">
          <DifficultyLevels selectedSubTopic={subTopic} handleDifficultyLevelChange={handleDifficultyLevelChange} />
          <div className="topicDetails__subTopicTitle">
            <h2>{"SubTopic " + subTopic}</h2>
            <div className="topicDetails__subTopicTitle__dropdown" onClick={handleOpen}>
              <i className="arrow down"></i>
            </div>
          </div>
          <div className="topicDetails__questions">
            {
              renderHexagons(difficultyLevel, questions)
            }
          </div>
          <br />
          <div className="topicDetails__topicTest">
            <button className="topicDetails__testBtn">Take Test</button>
          </div>
        </div>
        <div >
          {modal()}
        </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );

}


export default TopicDetails