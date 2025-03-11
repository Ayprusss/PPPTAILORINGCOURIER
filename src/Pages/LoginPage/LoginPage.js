import React from 'react';
import {Link} from 'react-router-dom';
import './LoginPage.css';
import Header from '../../components/Header/Header.js';
import Button from '../../components/Button/Button.js';


function LoginPage() {
    return(
        <div className="login-page">
            <Header />
            <div className="login-form">
                <h1 className="login-header">LOGIN</h1>
                <form className="login-form-info">
                    <label for="username" className="login-form-label">USERNAME:</label>
                    <input type="text" id="username" name="username" required placeholder="PPP..."></input>
                    <label for="password" className="login-form-label">PASSWORD:</label>
                    <input type="password" id="password" name="password" required placeholder="***..."></input>
                </form>
            
                <div className="login-button">
                    <Button text="LOGIN" size="medium" type="secondary" path="/profile">LOGIN</Button>
                    </div>
                <div className="login-options">
                    <label for="no-account">DON'T HAVE AN ACCOUNT? <Link to="/signup" className="signup-link">SIGN UP HERE.</Link></label>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;