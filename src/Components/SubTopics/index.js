import React, { useState, useEffect } from 'react';
import './styles.css';

function renderSubtopics(subTopics, onSubTopicClick, subTopicName) {
  let subTopicComp = subTopics.map((eachSubTopic) => {
    return (
      <div className={`subTopics__subTopic ${subTopicName === eachSubTopic.name ? "subTopics__subTopicHighlighted" : ""}`} onClick={() => onSubTopicClick(eachSubTopic)}>
        <h2 className={`subTopics__subTopicTitle`}>{eachSubTopic.name}</h2>
      </div>
    );
  });

  return subTopicComp;
}

function SubTopics({ subTopics, onSubTopicClick, subTopicName }) {
  return (
    <div className="subTopics__container">
      {renderSubtopics(subTopics, onSubTopicClick, subTopicName)}
    </div>
  );
}

export default SubTopics;
