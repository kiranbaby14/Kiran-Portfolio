import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            {/* <!--==================== FOOTER ====================--> */}
            <footer className="footer smooth_transition" >
                <div className="footer_bg">
                    <div className="footer_container container grid">
                        <div>
                            <h1 className="footer_title">Kiran Baby</h1>
                            {/* <span className="footer_subtitle">MERN stack developer</span> */}
                        </div>

                        <ul className="footer_links">
                            <li>
                                <a href="#portfolio" className="footer_link">Portfolio</a>
                            </li>
                            <li>
                                <a href="#skills" className="footer_link">Skills</a>
                            </li>
                            <li>
                                <a href="#about" className="footer_link">About</a>
                            </li>
                        </ul>

                        <div className="footer_socials">
                            <a href="https://www.linkedin.com/in/kiranbaby14/" target="_blank" rel="noopener noreferrer" className="footer_social">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>

                            <a href="https://github.com/kiranbaby14" target="_blank" rel="noopener noreferrer" className="footer_social">
                                <i className="uil uil-github-alt"></i>
                            </a>
                        </div>
                    </div>

                    <p className="footer_copy">&#0169; Kiran Baby</p>
                </div>

            </footer>
        </>
    );
}

export default Footer;