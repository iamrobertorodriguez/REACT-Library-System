import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Pages</h4>
                        <ul>
                            <li><p>About me</p></li>
                            <li><p>Home</p></li>
                            <li><p>Categories</p></li>
                            <li><p>Sign-up</p></li>
                            <li><p>Login</p></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><p>FAQ</p></li>
                            <li><p>shipping</p></li>
                            <li><p>returns</p></li>
                            <li><p>order status</p></li>
                            <li><p>payment options</p></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Other Projects</h4>
                        <ul>
                            <li><p>i shop</p></li>
                            <li><p>pokedex</p></li>
                            <li><p>weather page</p></li>
                            <li><p>note me ++</p></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow me</h4>
                        <div className="social-links">
                            <a href="https://iamrobertorodriguez.com/"><i className="fa-solid fa-code"></i></a>
                            <a href="https://github.com/iamrobertorodriguez"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/__gitbash__/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/iamrobertorodriguez/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
    );
};

export default Footer;