import React from 'react'
import Question from '../../Components/Question';
import QuestionsDummy from './questionsDummy';

function Questions() {

    const [question, setquestion] = useState(QuestionsDummy);

    return (
        <div>
            <Question />
            {/* Component for questions and image */}
            {/* Component for the options to select from */}
            {/* Hints and solutions upload and submit buttons*/}
            {/* Solutions buttons pdf as well as video solutions*/}
        </div>
    )
}

export default Questions
