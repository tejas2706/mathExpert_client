import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
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

    const openNav = () => {
        document.getElementById("sidenav").style.width = "50%";
    }

    const closeNav = () => {
        document.getElementById("sidenav").style.width = 0;
    }

    return (
        <div className={`navbar__container ${navBgShow && "navbar__container_withBg"}`}>
            <div id="sidenav" className="navbar__sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <h4 className="navbar__item">What is MathsExpert ?</h4>
                <h4 className="navbar__item"><Link to="/content">Content</Link></h4>
                <h4 className="navbar__item"><Link to="/aboutUs">About Us</Link></h4>
                <h4 className="navbar__item">FAQ's</h4>
            </div>                
            <div className="navbar__hamburger" onClick={openNav}>☰</div>
            <Link to="/"><h2 className="navbar__title">MathExpert</h2></Link>
            <div className="navbar__items">
                <h4 className="navbar__item">What is MathsExpert ?</h4>
                <h4 className="navbar__item"><Link to="/content">Content</Link></h4>
                <h4 className="navbar__item"><Link to="/aboutUs">About Us</Link></h4>
                <h4 className="navbar__item">FAQ's</h4>
            </div>
            <button className="navbar__loginBtn">Login</button>
        </div>
    )
}

export default Navbar
