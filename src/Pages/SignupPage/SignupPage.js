import React from 'react';
import './SignupPage.css';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Button from '../../components/Button/Button.js';

function SignupPage() {
    return(
        <div className="signup-page">
            <Header />
            <div className="signup-form">
                <h1 className="signup-header">SIGN UP</h1>
                <form className="signup-form-info">
                    <label for="first-name" className="signup-form-label">FIRST NAME:</label>
                    <input type="text" id="first-name" name="first-name" required placeholder="Jason..."></input>
                    <label for="last-name" className="signup-form-label">LAST NAME:</label>
                    <input type="text" id="last-name" name="last-name" required placeholder="Cho..."></input>
                    <label for="username" className="signup-form-label">USERNAME:</label>
                    <input type="text" id="username" name="username" required placeholder="JcChurro..."></input>
                    <label for="email" className="signup-form-label">EMAIL:</label>
                    <input type="email" id="email" name="email" required placeholder="ppp123@ppptailoringcourier.com..."></input>
                    <label for="password" className="signup-form-label">PASSWORD:</label>
                    <input type="password" id="password" name="password" required placeholder="***..."></input>
                </form>
            </div>
            <div className="signup-button">
                <Button type="secondary" size="medium" text="SIGN UP">SIGN UP</Button>
            </div>
            <div className="signup-options">
                <label>ALREADY HAVE AN ACCOUNT? <Link to="/login" className="login-link">LOGIN HERE.</Link></label>
            </div>
        </div>
    );
}

export default SignupPage;