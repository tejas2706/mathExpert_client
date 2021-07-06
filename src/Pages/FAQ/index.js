import React from 'react';
import './styles.css';
import FaqImage from '../../assets/FAQ.png';
import HintAccordion from '../../Components/HintAccordion';
export default function FAQ() {
    const questions = [
        {
            id: 'question1',
            title: 'What grade students should undertake this course/classes?',
            expandedText: 'Students from any class between 1-10 are eligible',
        },
        {
            id: 'question2',
            title: 'What grade students should undertake this course/classes?',
            expandedText: 'Students from any class between 1-10 are eligible',
        },
        {
            id: 'question3',
            title: 'What grade students should undertake this course/classes?',
            expandedText: 'Students from any class between 1-10 are eligible',
        },
    ];

    return (
        <div className="faq__container">
            <div className="faq__image__container"></div>
            <div className="faq__content__container">
                <div className="faq__content__header">
                    <h1>FAQ</h1>
                </div>
                <div className="faq__content__questions">
                    <HintAccordion hints={questions} />
                </div>
            </div>
        </div>
    );
}
