import React, {useState} from 'react'
import Question from '../../Components/Question';
import QuestionDummy from './questionDummy';
import Options from '../../Components/Options';
import HintsAndSolutions from '../../Components/HintsAndSolutions';
import './styles.css';

function Questions() {

    const [question, setquestion] = useState(QuestionDummy);

    const submitAns = (sol) => {
        console.log("Submitted solution", sol)
    }

    return (
        <div className="questions__container">
            {/* Component for questions and image */}
            <Question data={question}/>
            <div className="questions__seperatingLine"></div>
            {/* Component for the options to select from */}
            <Options data={question.options} submitAns={submitAns}/>
            <div className="questions__seperatingLine"></div>
            <HintsAndSolutions />
            {/* Hints and solutions upload and submit buttons*/}
            {/* Solutions buttons pdf as well as video solutions*/}
        </div>
    )
}

export default Questions
