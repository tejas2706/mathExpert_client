import React, { useState, useEffect } from 'react';
import './styles.css';

function SectionCard() {

    let arr = ["Decimal place value",
        "Add decimals",
        "Subtract decimals",
        "Add and subtract fractions",
        "Multi-digit multiplication and division",
        "Multiply fractions",
        "Divide fractions",
        "Multiply decimals",
        "Divide decimals",
        "Powers of ten",
        "Volume",
        "Coordinate"]



    return (
        <div className="sectionCard__container">
            <div className="sectionCard__class">
                <div className="sectionCard__grade">
                    <div className="sectionCard__olympiadTitle">
                        <h1>Olympiad</h1>
                    </div>
                    <div className="sectionCard__classTitle">
                        <h5>Class</h5>
                        <h1>5</h1>
                    </div>
                </div>
            </div>
            <div className="sectionCard__topics">
                {
                    arr.map(eachTopic => {
                        return (
                            <div className="sectionCard__topic">
                                <a href="#" className="sectionCard__topicLink"> <h4 >
                                    {eachTopic}
                                </h4></a>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default SectionCard
