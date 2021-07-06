import React, { useState } from 'react';
import './styles.css';
import vidMan from '../../assets/vidMan.png';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

function Solutions() {
  return (
    <div className="solutions__container">
      <div className="solutions__title">
        <h2>Solutions</h2>
      </div>
      <div className="solutions__btns">
        <button className="solutions__fullSol">
          <AssignmentOutlinedIcon style={{ fontSize: '50', color: 'black' }} />
        </button>
        <button className="solutions__fullVidSol">
          <img alt="vidman" className="card__image" src={vidMan}></img>
        </button>
      </div>
    </div>
  );
}

export default Solutions;
