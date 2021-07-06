import React, { useState } from 'react';
import './styles.css';

function Hexagon({ classForColor, problemNumber }) {
  const [isCompleted, setCompleted] = useState(false);
  // ${classForColor}
  {
    /* <div className={`hexagon   id="hexagon" onClick={() => setCompleted(!isCompleted)}> */
  }

  return (
    <div className="container" onClick={() => setCompleted(!isCompleted)}>
      <div
        className={`mainDiv ${
          isCompleted ? `${classForColor}-active ` : `${classForColor}`
        }`}></div>
      <div
        className={`mainDiv rotate60 ${
          isCompleted ? `${classForColor}-active ` : `${classForColor}`
        }`}></div>
      <div
        className={`mainDiv rotate-60 ${
          isCompleted ? `${classForColor}-active ` : `${classForColor}`
        }`}></div>
    </div>
  );
}

export default Hexagon;
