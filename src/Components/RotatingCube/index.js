import React from 'react'
import './styles.css';
import pi from '../../assets/pi2.png';
import infinity from '../../assets/infinity.png';
import alpha from '../../assets/alpha.png';
import omega from '../../assets/omega.png';

function RotatingCube() {
    return (
        <div className="scene">
            <div className="cube">
                <div className="cube__face cube__face--front"><img className="cube__image" src={pi}></img></div>
                <div className="cube__face cube__face--back"><img className="cube__image"  src={infinity}></img></div>
                <div className="cube__face cube__face--right"><img className="cube__image"  src={alpha}></img></div>
                <div className="cube__face cube__face--left"><img className="cube__image"  src={omega}></img></div>
                <div className="cube__face cube__face--bottom"></div>
            </div>
        </div>
    )
}

export default RotatingCube
