import React, { useState } from 'react'
import { SketchField, Tools } from 'react-sketch';

function SketchFieldComponent() {

    const [scratchPad, setScratchPad] = useState(false)

    return (
        <div>
            <button onClick={()=>setScratchPad(true)}>ScratchPad</button>
            {
                scratchPad ? 
                <div>
                <SketchField width='1024px'
                    height='768px'
                    tool={Tools.Pencil}
                    lineColor='black'
                    lineWidth={3} />
                </div>:
                null
            }
        </div>
    )
}

export default SketchFieldComponent
