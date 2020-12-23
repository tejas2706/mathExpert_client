import React from 'react';
import './styles.css';

function IntroCard({cardData}) {    
    console.log("🚀 ~ file: index.js ~ line 5 ~ IntroCard ~ cardData", cardData)
    return (
        <div className="card__container">
            <div className="card__image">
                <p>{cardData.imageUrl}</p>
            </div>
            <h5>{cardData.title}</h5>
            <p>
                {cardData.description}
            </p>
        </div>      
    )
}

export default IntroCard
