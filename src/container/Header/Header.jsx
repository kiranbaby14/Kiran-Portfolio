import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import './Header.css'

const Header = () => {
    const { theme, themeIcon, toggleTheme } = useContext(ThemeContext)

    const [menuState, setMenuState] = useState("nav_menu");
    const [activeNav, setActiveNav] = useState("#home");

    const navMenuBtnToggleHandler = () => {
        setMenuState((curr) => (curr === "nav_menu" ? "nav_menu show_menu" : "nav_menu"));
    }

    return (
        <>
            {/*  HEADER  */}
            <header className="header" id="header">
                <nav className="nav container">
                    <a href="#home" className="nav_logo">kb14</a>

                    <div className={menuState} id="nav-menu">
                        <ul className="nav_list grid">
                            <li className="nav_item">
                                <a href="#home" onClick={() => setActiveNav("#home")}
                                    className={activeNav === "#home" ? "nav_link active-link" : "nav_link"} >
                                    <i className="uil uil-estate nav_icon"></i> Home
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#about" onClick={() => setActiveNav("#about")}
                                    className={activeNav === "#about" ? "nav_link active-link" : "nav_link"} >
                                    <i className="uil uil-user nav_icon"></i> About
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#skills" onClick={() => setActiveNav("#skills")}
                                    className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}>
                                    <i className="uil uil-file-alt nav_icon"></i> Skills
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                                    className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link"} >
                                    <i className="uil uil-scenery nav_icon"></i> Portfolio
                                </a>
                            </li>
                            <li className="nav_item">
                                <a href="#contact" onClick={() => setActiveNav("#contact")}
                                    className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"} >
                                    <i className="uil uil-message nav_icon"></i> Contact
                                </a>
                            </li>
                        </ul>

                        <i className="uil uil-times nav_close" id="nav-close" onClick={navMenuBtnToggleHandler}></i>
                    </div>

                    <div className="nav_btns">
                        {/*  Theme change button  */}
                        <i className={themeIcon}
                            id="theme-button" onClick={toggleTheme}
                            checked={theme === "dark-theme"}>
                        </i>
                        <div className="nav_toggle" id="nav-toggle" onClick={navMenuBtnToggleHandler}>
                            <i className="uil uil-apps" ></i>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;