import React from 'react';
import './styles.css';
import LoginImg from '../../assets/loginLogo.png';

export default function Login() {
    return (
        <div className="login__container">
            <div className="login__image__section">
                <h1>Math Expert</h1>
                <img src={LoginImg} height={300} width={300} />
            </div>
            <div className="login__action__section">
                <div className="login__action__container">
                    <div className="login__action__header">
                        <h1>Login</h1>
                    </div>
                    <div className="login__action__emailInput">
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="login__action__emailInput"
                        />
                    </div>
                    <div className="login__action__passwordInput">
                        <input
                            type="password"
                            placeholder="Password"
                            className="login__action__passwordInput"
                        />
                    </div>
                    <div className="login__btn">Login</div>
                    <h3> OR </h3>
                    <div className="login__third__party">
                        <div className=" login__btn login__via__google">
                            Login with Google
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
