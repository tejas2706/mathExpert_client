import React from 'react';
import './styles.css';

function IntroCard({cardData}) {    
    return (
        <div className="card__container">
            <div className="card__container_upper">
                <div>
                    <img alt={cardData.highlight} className="card__image" src={cardData.imageUrl}></img>
                </div>
                <h5 className="card__title">{cardData.title}</h5>
            </div>
            <div className="card__container_lower">
                <p>
                    {cardData.description}
                </p>
            </div>
        </div>
    )
}

export default IntroCard
