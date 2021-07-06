import React from 'react';
import Banner from '../../Components/Banner';
import ExamsList from '../../Components/ExamsList';
import Intro from '../../Components/Intro';
import PageBreak from '../../Components/PageBreak';
import './styles.css';

function Home() {
    return (
        <div className="Home">
            <Banner />
            <PageBreak />
            <Intro />
            <ExamsList />
        </div>
    );
}

export default Home;
