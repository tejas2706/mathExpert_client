import React from 'react';
import './styles.css';

function DescriptionLeft({ content }) {
    console.log(
        '🚀 ~ file: index.js ~ line 5 ~ DescriptionLeft ~ content',
        content,
    );
    return (
        <div id={content.id} className="descriptionLeft__container">
            <div className="descriptionLeft__mediaData">
                <p>{content.imageUrl}</p>
            </div>
            <div className="descriptionLeft__textData">
                <p>
                    <span>{content.highlight}</span>
                    {content.text}
                </p>
            </div>
        </div>
    );
}

export default DescriptionLeft;
