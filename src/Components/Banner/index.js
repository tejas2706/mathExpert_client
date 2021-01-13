import React, {useState, useEffect} from 'react';
import './styles.css';
import  mathQuotes from "../../mathQuotes.js";
import RotatingCube from '../RotatingCube';


function Banner() {
    const [quoteDetails, setquoteDetails] = useState(mathQuotes[Math.ceil(Math.random()*5)])
    
    useEffect(() => {
        function changeQuote(){
            setTimeout(() => {
                let randomQuoteNumber = Math.ceil(Math.random()*5);
                setquoteDetails(mathQuotes[randomQuoteNumber === quoteDetails.quoteId ? 
                    quoteDetails.quoteId - 1 ? quoteDetails.quoteId - 1 : quoteDetails.quoteId + 1 : 
                    randomQuoteNumber])
            }, 10000);
            return;
        }
        changeQuote()
    }, [quoteDetails])

    return (
        <div className="banner__container">
            <div className="banner__image">
                <h2>Hit ↯ to explore the question of the day !!</h2>
                <RotatingCube />
            </div>
            <div className="banner_tagLine">
                <h1>Prepare for the olympiads with Competitive Prep.</h1>
                <div className="banner_contentBoxes">
                    <div className="banner_eachBox">Learn</div>
                    <div className="banner_eachBox">Practice</div>
                    <div className="banner_eachBox">Assess</div>
                </div>
                <button className="banner__getStartedBtn">
                    <span>Get Started</span>
                </button>
            </div>
            {/* <div className="banner__quotes">
                <p></p>
                <h3 className="banner__quote">{quoteDetails.quote}</h3>
                <h4 className="banner__author">-- {quoteDetails.author}</h4>
            </div> */}
        </div>
    )
}

export default Banner
