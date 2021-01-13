import React, { useEffect, useState } from 'react';
import './styles.css';

function Navbar() {

    const [navBgShow, setnavBgShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>150){
                setnavBgShow(true);
            }else{
                setnavBgShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`navbar__container ${navBgShow && "navbar__container_withBg"}`}>
            <h2 className="navbar__title">MathExpert</h2>
            <div className="navbar__items">
                <h4 className="navbar__item">What is MathsExpert ?</h4>
                <h4 className="navbar__item">Content</h4>
                <h4 className="navbar__item">About Us</h4>
                <h4 className="navbar__item">FAQ's</h4>
            </div>
            <button className="navbar__loginBtn">Login</button>
        </div>
    )
}

export default Navbar
