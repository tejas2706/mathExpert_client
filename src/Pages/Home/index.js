import React from 'react'
import Banner from '../../Components/Banner';
import Intro from '../../Components/Intro';
import PageBreak from '../../Components/PageBreak';
import './styles.css';

function Home() {
    return (
        <div className="Home">
            <Banner />
            <PageBreak />
            <Intro />
        </div>
    )
}

export default Home
