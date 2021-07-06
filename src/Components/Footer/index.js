import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__links">
                <a className="footer_link" href="#">
                    Contact Us{' '}
                </a>
                <a className="footer_link" href="#">
                    <Link className="hi" to="/aboutUs" href="#">
                        About Us{' '}
                    </Link>
                </a>
                <a className="footer_link" href="#">
                    FAQ
                </a>
                <a className="footer_link" href="#">
                    Privacy Policy
                </a>
            </div>
            <div className="footer__copyrights">
                <p>Copyright © 2020-2040 OlympExpert, All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
