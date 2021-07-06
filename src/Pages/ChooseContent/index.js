import React from 'react';
import './styles.css';
import learn from './images/learn1.png';
import practice from './images/practice.png';
import test from './images/test.png';

function ChooseContent() {
    return (
        <div className="ChooseContent__container">
            <div className="ChooseContent__backbtn">
                <h3>⤾Choose other topic</h3>
            </div>
            <div className="ChooseContent__title">What you wish to do?</div>
            <div className="ChooseContent__types">
                <div className="ChooseContent__type">
                    <h2>Learn</h2>
                    <img
                        src={learn}
                        className="ChooseContent__type_image"
                        alt="learn"></img>
                </div>
                <div className="ChooseContent__type">
                    <h2>Practice</h2>
                    <img
                        src={practice}
                        className="ChooseContent__type_image"
                        alt="learn"></img>
                </div>
                <div className="ChooseContent__type">
                    <h2>Test</h2>
                    <img
                        src={test}
                        className="ChooseContent__type_image"
                        alt="learn"></img>
                </div>
            </div>
        </div>
    );
}

export default ChooseContent;
