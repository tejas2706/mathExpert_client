import React, {useState} from 'react';
import './styles.css';

function Hints() {

    const [hints, sethints] = useState([]);
    
    const getHint = async () => {
        const allHints=[ "Try to multiple 25 by 25.", "Try to multiple 5 by itself 4 times." ];
        //Make api call to get the hints.
        let index = hints.length;
        sethints([...hints,allHints[index]]);
    }

    return (
        <div className="hints__container">
            <div className="hints__hints">
                <button className="hints__hintsBtn" onClick={()=>getHint()}>Get Hints ↯</button>
                <div className="hints__displayHints">
                    {
                        hints ? hints.map((each)=>{
                            return(
                                <div className="hints__hint">
                                    <p>{each}</p>
                                </div>
                            )
                        })
                        :null
                    }
                </div>
            </div>
        </div>
    )
}

export default Hints;
