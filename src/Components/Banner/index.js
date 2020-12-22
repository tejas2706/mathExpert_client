import React, {useState, useEffect} from 'react';
import './styles.css';
import  mathQuotes from "../../mathQuotes.js";
import image from "../../assets/maths-svg.png"


function Banner() {
    const [quoteDetails, setquoteDetails] = useState(mathQuotes[Math.ceil(Math.random()*5)])
    
    
    
    useEffect(() => {
        function changeQuote(){
            setTimeout(() => {
                let randomQuoteNumber = Math.ceil(Math.random()*5);
                setquoteDetails(mathQuotes[randomQuoteNumber === quoteDetails.quoteId ? 
                    quoteDetails.quoteId - 1 ? quoteDetails.quoteId - 1 : quoteDetails.quoteId + 1 : 
                    randomQuoteNumber])
            }, 5000);
            return;
        }
        changeQuote()
    }, [quoteDetails])

    return (
        <div className="banner__container">
            <div className="banner__quotes">
                <h3 className="banner__quote">{quoteDetails.quote}</h3>
                <h4 className="banner__author">-- {quoteDetails.author}</h4>
                <button 
                    className="banner__getStartedBtn"
                    >
                    <span>Get Started</span>
                </button>
            </div>
            <div className="banner__image">
               <img src={image} height={400} width={500} />
            </div>
        </div>
    )
}

export default Banner
