import React, { useState, useEffect } from 'react';
import './styles.css'



function renderSubtopics(subTopics, onSubTopicClick) {
    let subTopicComp = subTopics.map((a) => {
        return (<div className="subTopics__subTopic" onClick={() => onSubTopicClick(a)}>
            <h2 className="subTopics__subTopicTitle">{a.name}</h2>
        </div>)
    })

    return subTopicComp;

}

function SubTopics({ subTopics , onSubTopicClick}) {

    return (
        <div className="subTopics__container">
            {renderSubtopics(subTopics, onSubTopicClick)}
        </div>
    );
}


export default SubTopics