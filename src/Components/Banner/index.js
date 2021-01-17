import React, {useState, useEffect} from 'react';
import './styles.css';
import  mathQuotes from "../../mathQuotes.js";
import RotatingCube from '../RotatingCube';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

function Banner() {
    const [quoteDetails, setquoteDetails] = useState(mathQuotes[Math.ceil(Math.random()*5)])
    
    // useEffect(() => {
    //     function changeQuote(){
    //         setTimeout(() => {
    //             let randomQuoteNumber = Math.ceil(Math.random()*5);
    //             setquoteDetails(mathQuotes[randomQuoteNumber === quoteDetails.quoteId ? 
    //                 quoteDetails.quoteId - 1 ? quoteDetails.quoteId - 1 : quoteDetails.quoteId + 1 : 
    //                 randomQuoteNumber])
    //         }, 10000);
    //         return;
    //     }
    //     changeQuote()
    // }, [quoteDetails])

    return (
        <div className="banner__container">
            <div className="banner__image">
                <div className="banner__imageTitle">
                    <h2>Hit ↯ to explore the question of the day !!</h2>
                </div>
                <RotatingCube />
            </div>
            <div className="banner_tagLine">
                <h1>Prepare for the olympiads with Competitive Prep.</h1>
                <div className="banner_contentBoxes_vertical">
                    <div className="banner_eachBox red_box">Learn</div>
                    <DoubleArrowIcon style={{transform:"rotate(90deg)"}}/>
                    <div className="banner_eachBox yellow_box">Practice</div>
                    <DoubleArrowIcon style={{transform:"rotate(90deg)"}}/>
                    <div className="banner_eachBox green_box">Assess</div>
                </div>
                <div className="banner_contentBoxes_horizontal">
                    <div className="banner_eachBox red_box">Learn</div>
                    <DoubleArrowIcon style={{animation:""}}/>
                    <div className="banner_eachBox yellow_box">Practice</div>
                    <DoubleArrowIcon />
                    <div className="banner_eachBox green_box">Assess</div>
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
