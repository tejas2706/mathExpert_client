import React, { useState, useEffect } from 'react';
import './styles.css';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const temp_questions = {
    easy: [
        'EASY ipsum dolor sit amet',
        'EASY consectetur adipiscing elit',
        'EASY Quisque nisl eros,pulvinar',
        'EASY aucto consequat urna. Morbi a bibendum metus',
        'enim eu venenatis',
        'EASY ipsum dolor sit amet',
        'EASY consectetur adipiscing elit',
        'EASY Quisque nisl eros,pulvinar',
        'EASY aucto consequat urna. Morbi a bibendum metus',
        'enim eu venenatis',
        'EASY ipsum dolor sit amet',
        'EASY consectetur adipiscing elit',
        'EASY Quisque nisl eros,pulvinar',
        'EASY aucto consequat urna. Morbi a bibendum metus',
        'enim eu venenatis',
        'EASY ipsum dolor sit amet',
        'EASY consectetur adipiscing elit',
        'EASY Quisque nisl eros,pulvinar',
        'EASY aucto consequat urna. Morbi a bibendum metus',
        'enim eu venenatis',
        'EASY ipsum dolor sit amet',
        'EASY consectetur adipiscing elit',
        'EASY Quisque nisl eros,pulvinar',
        'EASY aucto consequat urna. Morbi a bibendum metus',
        'enim eu venenatis',
    ],

    medium: ['MEDIUM ipsum dolor sit amet'],

    hard: [
        'HARD ipsum dolor sit amet',
        'HARD consectetur adipiscing elit',
        'Quisque nisl eros,pulvinar',
        'aucto consequat urna. Morbi a bibendum metus',
        'enim eu venenatis',
    ],
};

async function handleDifficultyLevelClick(
    difficultyLevel,
    callbackFunctionToSetQuestions,
) {
    let questions = temp_questions[difficultyLevel];
    await callbackFunctionToSetQuestions(difficultyLevel, questions);
}

function Question({ handleDifficultyLevelChange }) {
    const [difficultyLevel, setDifficulty] = useState('easy');
    handleDifficultyLevelClick(difficultyLevel, handleDifficultyLevelChange);

    return (
        <div className="difficultyLevels__container">
            <button
                className="difficultyLevels__btn"
                onClick={async () => await setDifficulty('easy')}>
                Easy
            </button>
            <div className="line" />
            <button
                className="difficultyLevels__btn"
                onClick={async () => await setDifficulty('medium')}>
                Medium
            </button>
            <div className="line" />
            <button
                className="difficultyLevels__btn"
                onClick={async () => await setDifficulty('hard')}>
                Hard
            </button>
            {/* <div className="line" /> */}
        </div>
    );
}

export default Question;
