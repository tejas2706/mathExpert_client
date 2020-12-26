import React from 'react';
import './styles.css';

function IntroCard({cardData}) {    
    return (
        <a className="card__container" href={"#"+cardData.id}>
            <div>
                <img className="card__image" src={cardData.imageUrl}></img>
            </div>
            <h5 className="card__title">{cardData.title}</h5>
            <p className="card__description">
                {cardData.description}
            </p>
        </a>
    )
}

export default IntroCard
