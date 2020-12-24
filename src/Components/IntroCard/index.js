import React from 'react';
import './styles.css';

function IntroCard({cardData}) {    
    console.log("🚀 ~ file: index.js ~ line 5 ~ IntroCard ~ cardData", cardData)
    return (
        <div className="card__container">
            <div>
                <img className="card__image" src={cardData.imageUrl}></img>
            </div>
            <h5 className="card__title">{cardData.title}</h5>
            <p className="card__description">
                {cardData.description}
            </p>
        </div>      
    )
}

export default IntroCard
