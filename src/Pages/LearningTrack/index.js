import React, { useState } from 'react';
import './styles.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

function LearningTrack({ subTopic = 'Circles' }) {


    let subtopics = {
        "_id": "aabbccddeeffgghhiijjkkllmmnnoopp",
        "name": "Circles",
        "learningTrack": [
            {
                "type": "video",
                "videoUrl": "https://www.youtube.com/watch?v=2KlFHHXDuG8",
                "duration": "5:23",
                "tutorImageUrl": "https://spng.subpng.com/20180514/qbq/kisspng-jerry-mouse-tom-cat-nibbles-tom-and-jerry-cartoon-5af9bd5bc0d618.0028949915263163797899.jpg",
                "tutorName": "Jerry",
                "description": "Basic properties of circles"
            },
            {
                "type": "text",
                "pdfLink": "",
                "duration": "10 mins",
                "tutorImageUrl": "https://www.vhv.rs/dpng/d/492-4926944_tom-and-jerry-png-download-tom-y-jerry.png",
                "tutorName": "Tom",
                "description": "Basic properties of circles and details"
            },
            {
                "type": "video",
                "videoUrl": "https://www.youtube.com/watch?v=2KlFHHXDuG8",
                "duration": "5:23",
                "tutorImageUrl": "https://spng.subpng.com/20180514/qbq/kisspng-jerry-mouse-tom-cat-nibbles-tom-and-jerry-cartoon-5af9bd5bc0d618.0028949915263163797899.jpg",
                "tutorName": "Jerry",
                "description": "Basic properties of circles"
            },
            {
                "type": "text",
                "pdfLink": "",
                "duration": "10 mins",
                "tutorImageUrl": "https://www.vhv.rs/dpng/d/492-4926944_tom-and-jerry-png-download-tom-y-jerry.png",
                "tutorName": "Tom",
                "description": "Basic properties of circles and details"
            }
        ]
    };

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(true);
      };
    
      const onLeave = () => {
        setHover(false);
      };
    return (
        <div className="LearningTrack__container">
            <div className="LearningTrack__title">
                Learning Track for {subTopic}
            </div>
            <span className="LearningTrack__subtitle"><b>Go thorugh the following content to learn {subTopic}</b></span>
            <div className="LearningTrack__tracks">
                {
                    subtopics.learningTrack.map((each) => {
                        return (
                            <div className="LearningTrack__eachItem">
                                <div className="LearningTrack__eachItem_details">
                                    <div>
                                        {
                                            each.type === "video" ? <PlayCircleOutlineIcon /> : <PictureAsPdfIcon />
                                        }
                                    </div>
                                    &nbsp;&nbsp;
                                    <h3>{each.description}</h3>
                                </div>
                                <div className="LearningTrack__eachItem_details">
                                    <h3 className="LearningTrack__eachItem_duration">{each.duration}</h3>
                                    <div
                                    onMouseEnter={onHover}
                                    onMouseLeave={onLeave}
                                    >
                                    <img
                                        
                                        src={each.tutorImageUrl}
                                        alt="tutImage"
                                        className="LearningTrack__eachItem_tutorImg"
                                    >
                                    </img>
                                        {hover? <span>{each.tutorName}</span> :null}
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LearningTrack
