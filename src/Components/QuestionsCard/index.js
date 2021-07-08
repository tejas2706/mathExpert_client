import React, { useState } from 'react';
import './styles.css';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function QuestionsCard({ 
  question,
  classForColor,
  additionalDataForDisplay,
  setSelectedQuestion
}) {
  const [isSolved, setisSolved] = useState(true);
  const [isBookmarked, setBookmark] = useState(false);

  const handleBookmark = (isBookmark) => {
    setBookmark(isBookmark);
  };

  return (
    <Link
      to={{
        pathname: `/question`,
      }}
      className="card"
      onClick={() => setSelectedQuestion(question.eachQues)}>
      <div className={`filledbar ${classForColor}`}></div>
      <div className="questionsCard__title">
        <h3 className="title">Question {question.i}</h3>
        <div className="questionsCard__icons">
          {isBookmarked ? (
            <StarIcon
              style={{
                color: '#FFD700',
                fontSize: 'larger',
                borderWidth: '1px',
                borderColor: 'white',
              }}
              onClick={() => handleBookmark(false)}
            />
          ) : (
            <StarBorderIcon
              style={{ color: '#FFD700', fontSize: 'larger' }}
              onClick={() => handleBookmark(true)}
            />
          )}
          {isSolved && <DoneOutlineIcon style={{ color: '#228B22' }} />}
        </div>
      </div>
    </Link>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (data) => dispatch({ type: '' }),
    setSelectedQuestion: (questionId) => {
      console.log("🚀 ~ file: index.js ~ line 63 ~ mapDispatchToProps ~ questionId", questionId)
      dispatch({ type: "SET_SELECTED_QUESTION_ID", payload: { questionId } })
    }
  };
};
// mapDispatchToProps
export default connect(null, mapDispatchToProps)(QuestionsCard);
