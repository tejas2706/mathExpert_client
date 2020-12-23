import React from 'react';
import IntroCard from '../IntroCard';
import './styles.css';
import cardsContent from '../IntroCard/introCardContent';

function Intro() {    
    
    console.log("🚀 ~ file: index.js ~ line 5 ~ cardsContent", cardsContent)

    return (
        <div className="intro__container">
            <div className="intro__title">
                <h1>What is OlympExpert ?</h1>
            </div>
            <div className="intro__cardsContainer">
                {
                    cardsContent.map((each)=>{
                        return(<IntroCard cardData={each}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Intro
