import React, { useState, createRef } from 'react';
import './styles.css';
import { useScreenshot } from 'use-react-screenshot';

function CreateQuestion() {
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [quesImage, setQuesImage] = useState('');
    const ref = createRef(null);
    const [image, takeScreenshot] = useScreenshot();
    const getImage = () => takeScreenshot(ref.current);

    const uploadedFile = (event) => {
        event.preventDefault();
        console.log(__dirname, event.target.files[0]);
        setQuesImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="createQuestion__container">
            <div className="createQuestion__innercontainer">
                <div className="createQuestion__questionBlock">
                    <label>Enter the question: &nbsp;</label>
                    <textarea
                        placeholder="Write the question here"
                        className="createQuestion__question"
                        onChange={(e) => setQuestion(e.target.value)}
                        value={question}
                    />
                </div>
                <div className="createQuestions__options">
                    Mention the options here:
                    <input
                        placeholder="option 1"
                        className="createQuestion__option"
                        value={option1}
                        onChange={(e) => setOption1(e.target.value)}></input>
                    <input
                        placeholder="option 2"
                        className="createQuestion__option"
                        value={option2}
                        onChange={(e) => setOption2(e.target.value)}></input>
                    <input
                        placeholder="option 3"
                        className="createQuestion__option"
                        value={option3}
                        onChange={(e) => setOption3(e.target.value)}></input>
                    <input
                        placeholder="option 4"
                        className="createQuestion__option"
                        value={option4}
                        onChange={(e) => setOption4(e.target.value)}></input>
                </div>
                <div className="createQuestions__options">
                    Does the question contain an image ?:
                    <input
                        type="file"
                        className="createQuestions__fileUpload"
                        onChange={(e) => uploadedFile(e)}></input>
                </div>
                <div className="createQuestion__correctoption">
                    <button className="createQuestion__correctOptionBtn"></button>
                    <button className="createQuestion__correctOptionBtn"></button>
                    <button className="createQuestion__correctOptionBtn"></button>
                    <button className="createQuestion__correctOptionBtn"></button>
                </div>
                <div ref={ref} className="createQuestion__displaybox">
                    <div className="createQuestion__questionDisp">
                        <b>Question :</b> {question}
                    </div>
                    {quesImage ? (
                        <div className="createQuestion__quesImageDisp">
                            <img src={quesImage} alt="quesImage"></img>
                        </div>
                    ) : null}
                    <div className="createQuestion__optionsDisp">
                        <div className="createQuestion__eachOptDisp">
                            <b>A - </b> {option1}
                        </div>
                        <div className="createQuestion__eachOptDisp">
                            <b>B - </b> {option2}
                        </div>
                        <div className="createQuestion__eachOptDisp">
                            <b>C - </b> {option3}
                        </div>
                        <div className="createQuestion__eachOptDisp">
                            <b>D - </b> {option4}
                        </div>
                    </div>
                    <div></div>
                </div>
                <div>
                    <button className="saveImageBtn" onClick={getImage}>
                        Save Question Image
                    </button>
                </div>
                <img src={image} alt={'Screenshot'} />
            </div>
        </div>
    );
}

export default CreateQuestion;
