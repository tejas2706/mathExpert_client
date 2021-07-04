import React, { useState } from 'react';
import HintAccordion from '../HintAccordion';
import './styles.css';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import SketchFieldComponent from '../../Components/SketchFieldComponent';
import HintsModal from '../../Components/HintsModal';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './styles.css';

function Hints() {
    const [displayhints, setDisplayhints] = useState(false);

    const allHints = [
        {
            "id": "hint1",
            "hint": "Try to multiple 25 by 25."
        },
        {
            "id": "hint2",
            "hint": "Try to multiple 5 by itself 4 times."
        },
        {
            "id": "hint3",
            "hint": "Try to multiple 5 by itself 4 times."
        }
    ];

    return (
        <div className="hints__container">
            <div className="hints__hints">
                <div className="hints__hintsTitile">
                    <div className="hints__hintsBtn" onClick={()=>setDisplayhints(true)}>Hints <EmojiObjectsOutlinedIcon style={{ margin: "0 10px" }} /></div>
                    <SketchFieldComponent />
                    {/* <span className="hints__titileDescription">Try enough before diving into the hints and solutions.</span> */}
                    {
                        displayhints ?
                        <div>{
                            <HintsModal hints={allHints} handleCloseHintsModal={()=>setDisplayhints(false)}></HintsModal>
                            }
                        </div>
                            :
                            null
                    }
                </div>
                {/* <div className="hints__displayHints">
                    <HintAccordion hints={allHints}/>
                </div> */}
            </div>
        </div>
    )
}

export default Hints;
