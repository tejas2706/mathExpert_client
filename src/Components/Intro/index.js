import React from 'react';
import IntroCard from '../IntroCard';
import './styles.css';
import cardsContent from '../IntroCard/introCardContent';
import DescriptionLeft from '../DescriptionLeft';
import DescriptionRight from '../DescriptionRight';
import IntroContent from './IntroContent';

function Intro() {    
    

    const goToDescription = () => {

    }

    return (
        <div className="intro__container">
            <div className="intro__title">
                <h1>What is OlympExpert ?</h1>
            </div>
            <div className="intro__cardsContainer">
                {
                    cardsContent.map((each)=>{
                        return(<IntroCard key={each.id} cardData={each} onClick={()=>goToDescription()}/>)
                    })
                }
            </div>
            <div className="intro__descriptions">
                {
                    IntroContent.map((each, i)=>{
                        if(i%2){
                            return (
                                <DescriptionLeft content={each}/>
                            )
                        }else{
                            return(
                                <DescriptionRight content={each}/>   
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Intro
