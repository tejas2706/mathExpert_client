import React from 'react';
import './styles.css';

function DescriptionRight({ content }) {
  console.log(
    '🚀 ~ file: index.js ~ line 5 ~ DescriptionRight ~ content',
    content,
  );
  return (
    <div id={content.id} className="descriptionRight__container">
      <div className="descriptionRight__textData">
        <p>
          <span>{content.highlight}</span>
          {content.text}
        </p>
      </div>
      <div className="descriptionRight__mediaData">
        <p>{content.imageUrl}</p>
      </div>
    </div>
  );
}

export default DescriptionRight;
