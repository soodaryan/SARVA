import React from 'react';
import './LoginPage.css'; // Include the CSS file for styling

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-form-container">
                <h2 className="login-title">LOGIN</h2>
                <form className="login-form">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="submit-btn">SUBMIT</button>
                </form>
            </div>

            <footer className="footer">
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#help">Help Center</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                <div className="social-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
                <p>&copy; Greelogix @ 202X. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LoginPage;
