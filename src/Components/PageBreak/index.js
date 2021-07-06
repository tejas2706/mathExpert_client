import React from 'react';
import './styles.css';

function PageBreak() {
    return (
        <div className="pageBreak__container">
            <div className="pageBreak__line"></div>
            <div className="pageBreak__symbols">
                <p>&nbsp;+ - x ÷&nbsp;</p>
            </div>
            <div className="pageBreak__line"></div>
        </div>
    );
}

export default PageBreak;
