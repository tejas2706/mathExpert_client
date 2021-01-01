import React, {useState} from 'react';
import HintAccordion from '../HintAccordion';
import './styles.css';

function Hints() {

    const [hints, sethints] = useState([]);
    const allHints=[
        {
            "id": "hint1",
            "hint":"Try to multiple 25 by 25."
        },
        {
            "id":"hint2",
            "hint": "Try to multiple 5 by itself 4 times."
        }
     ];
    
    // const getHint = async () => {
    //     //Make api call to get the hints.
    //     let index = hints.length;
    //     sethints([...hints,allHints[index]]);
    // }

    return (
        <div className="hints__container">
            <div className="hints__hints">
                <div className="hints__hintsTitile">
                    <div className="hints__hintsBtn">Hints ↯</div>
                    <span className="hints__titileDescription">Try enough before diving into the hints and solutions.</span>
                </div>
                <div className="hints__displayHints">
                    <HintAccordion hints={allHints}/>
                </div>
            </div>
        </div>
    )
}

export default Hints;
