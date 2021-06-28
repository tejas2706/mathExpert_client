import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


function QuestionsBlock({ questionsArray, topicName, subTopicName, standard }) {

    return (
        <div className="questionsBlock__container">
            <h3>Questions . . . </h3>
            <div className="questionsBlock__questions">
                {
                    questionsArray.map((each, i) => {
                        return (
                            <Link to={{
                                pathname: `/${standard}/${topicName}/${subTopicName}/${each + "murtuza"}`,
                                questionsArray
                            }}>
                                <div className="questionsBlock__eachQues">
                                    {i}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuestionsBlock
