import React, { createContext, useEffect, useState } from 'react';
import {
  Header, Home, About, Skills,
  Qualification, Portfolio, Contact, Footer
} from "./container/index"
import JavaScript from "./javaScript/script";
import "./App.css";

export const ThemeContext = createContext(null);

const App = () => {

  useEffect(() => {
    JavaScript();
  }, [])

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light-theme");
  const [themeIcon, setThemeIcon] = useState(localStorage.getItem("icon") ? localStorage.getItem("icon"): "uil uil-sun change-theme");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("icon", themeIcon);
  }, [theme, themeIcon])



  const toggleTheme = () => {
    setTheme((curr) => (curr === "light-theme" ? "dark-theme" : "light-theme"));

    setThemeIcon((curr) => (curr === "uil uil-sun change-theme" ?
      "uil uil-moon change-theme" : "uil uil-sun change-theme"))
  }

  return (
    <ThemeContext.Provider value={{ theme, themeIcon, toggleTheme }}>
      <div className={theme}>
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
        <Footer />
        {/*  SCROLL TOP  */}
        <a href="#home" className="scrollup" id="scroll-up">
          <i className="uil uil-arrow-up scrollup_icon"></i>
        </a>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
