import React, { useState, useEffect } from 'react';
import './styles.css';
import _ from 'lodash';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function DifficultyLevels({ handleDifficultyLevelChange , questionsArr}) {

  return (
    <div className="difficultyLevels__container">
      <button
        className="difficultyLevels__btn"
        onClick={() => handleDifficultyLevelChange('easy', questionsArr)}>
        Easy
      </button>
      <div className="line" />
      <button
        className="difficultyLevels__btn"
        onClick={() => handleDifficultyLevelChange('medium', questionsArr)}>
        Medium
      </button>
      <div className="line" />
      <button
        className="difficultyLevels__btn"
        onClick={() => handleDifficultyLevelChange('hard', questionsArr)}>
        Hard
      </button>
    </div>
  );
}

export default DifficultyLevels;
