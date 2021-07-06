import React, { useState, useEffect } from 'react';
import examsList from './examsList';
import './styles.css';
import curvedArrw from '../../assets/curved_arrow.png';

function ExamsList() {
    const [selectedExam, setSelectedExam] = useState(null);

    return (
        <div className="examsList__container">
            <div className="examsList__fullList">
                {examsList.map((each, index) => {
                    let widthBasedClass = `examsList__eachExamContainer examList__examNo-${index}`;
                    console.log(
                        '🚀 ~ file: index.js ~ line 11 ~ examsList.map ~ widthBasedClass',
                        widthBasedClass,
                    );
                    return (
                        <div
                            className={widthBasedClass}
                            onClick={() => setSelectedExam(index)}>
                            {each.fullForm}
                        </div>
                    );
                })}
                <div className="examList__explore">
                    Explore more.. <span className="examList__arrow">⏩</span>
                </div>
            </div>
            <div className="examsList__description">
                {selectedExam !== null ? (
                    <div className="examList__details">
                        <div className="examList__abbr__container">
                            <h1 className="examList__abbr">
                                {examsList[selectedExam].abbr}
                            </h1>
                        </div>
                        <p className="examList__subjects">
                            <span>
                                <b>Subjects for the exam: </b>
                            </span>{' '}
                            {examsList[selectedExam].subjects}
                        </p>
                        <br />
                        <p className="examList__subjects">
                            <span>
                                <b>Languages: </b>
                            </span>{' '}
                            {examsList[selectedExam].languages}
                        </p>
                        <br />
                        <p className="examList__subjects">
                            <span>
                                <b>Conducted By: </b>
                            </span>{' '}
                            {examsList[selectedExam].conductedBy}
                        </p>
                        <br />
                        <div className="examList__abbr__container">
                            <button className="examList__prepareBtn">
                                Maths Preparation
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="examList__details_initial">
                        <div className="examList__selelctExam">
                            Select from the listed exams to know more about the
                            subjects and prepare for mathematics.
                        </div>
                        <img
                            className="curved_arrow"
                            alt="curved-arrow"
                            src={curvedArrw}></img>
                        {/* <img className="curved_arrow_down" alt="curved-arrow" src={curvedArrw}></img> */}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ExamsList;
