import React, {useState} from 'react'
import './styles.css'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';


function QuestionsCard({classForColor}) {

  const [isSolved, setisSolved] = useState(true);
  const [isBookmarked, setBookmark] = useState(false);


  const handleBookmark = (isBookmark) => {
    setBookmark(isBookmark)
  } 

  return (
      <div className="card">
        <div className={`filledbar ${classForColor}`}></div>
        <div className="questionsCard__title">
          <h3 className="title">Question 1</h3>
          <div className="questionsCard__icons">
            {isBookmarked ? <StarIcon style={{color: "#FFD700", fontSize:"larger" , borderWidth: "1px", borderColor:"white"}} onClick={() => handleBookmark(false)} /> : <StarBorderIcon style={{color: "#FFD700", fontSize:"larger"}} onClick={() => handleBookmark(true)}/> }
            { isSolved && <DoneOutlineIcon style={{color: "#228B22"}} /> }
          </div>
        </div>
      </div>      
  )
}

export default QuestionsCard
