import React, { useState, useEffect } from 'react';
import examsList from './examsList';
import './styles.css';


function ExamsList() {

    const [selectedExam, setSelectedExam] = useState(null);

    return (
        <div className="examsList__container">
            <div className="examsList__fullList">
                {
                    examsList.map((each, index)=>{
                        let widthBasedClass = `examsList__eachExamContainer examList__examNo-${index}`
                        console.log("🚀 ~ file: index.js ~ line 11 ~ examsList.map ~ widthBasedClass", widthBasedClass)
                        return (
                            <div className={widthBasedClass} onClick={()=>setSelectedExam(index)}>
                                {each.fullForm}    
                            </div>
                        )
                    })
                }
            </div>
            <div className="examsList__description">
                    {
                        selectedExam!==null ? 
                        <div className="examList__details">
                            <h1 className="examList__abbr">{examsList[selectedExam].abbr}</h1>
                            <p className="examList__subjects"><span><b>Subjects for the exam: </b></span> {examsList[selectedExam].subjects}</p>
                            <p className="examList__subjects"><span><b>Languages: </b></span> {examsList[selectedExam].languages}</p>
                            <p className="examList__subjects"><span><b>Conducted By: </b></span> {examsList[selectedExam].conductedBy}</p>
                            <button className="examList__prepareBtn">Maths Preparation</button>
                        </div>
                        :
                        <div className="examList__details">
                            
                        </div>
                    }
            </div>
        </div>
    )
}

export default ExamsList
