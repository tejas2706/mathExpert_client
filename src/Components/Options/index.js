import React, { useState } from 'react';

import './styles.css';

function Options({ data, submitAns }) {
    const [selected, setselected] = useState(null);

    const submit = () => {
        submitAns(data[selected]);
    }

    return (
        <div className="options__container">
            <h3 className="options__title">Choose one from the below <span>↓</span> </h3>
            <div className="options__allOptions">
                {
                    data.map((each, index)=>{
                        let classOfOption = index==selected ? "options__selectedOption" : "options__eachOption"
                        return(
                            <div className={classOfOption} onClick={()=>setselected(index)}>
                                {each}
                            </div>
                        )
                    })
                }
            </div>
            <div className="options__btnGrp">
                <button className="options__submitBtn" type="submit">
                    Upload Solution
                </button>
                <button className="options__submitBtn" type="submit" onClick={()=>submit()}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Options
