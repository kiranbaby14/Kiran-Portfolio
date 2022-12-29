import React, { useContext } from "react";

import TypeWriterEffect from 'react-typewriter-effect';
import { images } from "../../constants";
import './Home.css'
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";

const Home = () => {
    const text1 = "Hi,";
    const text2 = "I'm Kiran Baby";
    const spanVariants = {
        visible: { y: 0, scaleY: 1 },
        hover: {
            y: [-1, -2, -2.8, 0.9, 0],
            scaleY: [1, 1.3, 0.8, 1, 1.2],
            // color: "#17d1c5"
        },
    }
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <section className="home section" id="home">
                <div className="home_container container grid">
                    <div className="home_content grid">
                        <div className="home_social">
                            <a href="https://www.linkedin.com/in/kiranbaby14/" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                                <i className="uil uil-linkedin-alt"></i>
                            </a>

                            <a href="https://github.com/kiranbaby14" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                                <i className="uil uil-github-alt"></i>
                            </a>
                        </div>

                        {/* User image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className="home_img"
                            alt="user_image"
                        >
                        </motion.div>

                        <div className="home_data">
                            <h1 className="home_title">{text1.split("").map((letter, id) => (
                                <motion.span
                                    key={id}
                                    variants={spanVariants}
                                    animate={{ x: [-100, 0], opacity: [0, 1] }}
                                    // whileInView={{ opacity: [0, 1] }}
                                    // initial="visible"
                                    transition={{ ease: "easeOut", duration: 2 }}
                                    whileHover="hover"
                                >
                                    <span className="home_title_letters">{letter}</span>
                                </motion.span>
                            ))}</h1>
                            <h1 className="home_title">{text2.split("").map((letter, id) => (
                                <motion.span
                                    key={id}
                                    variants={spanVariants}
                                    // whileInView={{ opacity: [0, 1] }}
                                    // initial="visible"
                                    animate={{ x: [-100, 0], opacity: [0, 1] }}
                                    transition={{ ease: "easeOut", duration: 2 }}
                                    whileHover="hover"
                                >
                                    <span className="home_title_letters">
                                        {letter !== ' ' ? letter : <>&nbsp;</>}
                                    </span>
                                </motion.span>
                            ))}</h1>


                            <TypeWriterEffect
                                textStyle={{
                                    fontFamily: 'Poppins, sans-serif',
                                    color: "#54B435",
                                    fontWeight: 500,
                                    fontSize: '1.25rem',
                                    marginBottom: '.75rem',
                                    textShadow: "0px 0px 10px var(--first-color), 0px 0px 20px var(--first-color), 0px 0px 40px var(--first-color), 0px 0px 80px var(--first-color)"
                                }}
                                // startDelay={1000}
                                cursorColor="#3F3D56"
                                multiText={[
                                    'MERN stack developer',

                                ]}
                                multiTextDelay={1000}
                                typeSpeed={30}
                                multiTextLoop
                            />

                            <h3 className="home_subtitle">MERN stack developer</h3>
                            <p className="home_description">Enthusiastic Student committed to learning,
                                developing skills in web development, android development,
                                game development, Artificial Intelligence, and Machine Learning.
                            </p>

                            <a href="#contact" className="button button-flex">
                                Contact me<i className="uil uil-message button_icon"></i>
                            </a>

                        </div>
                    </div>

                    <div className="home_scroll">
                        <a href="#about" className="home_scroll-button button-flex">
                            <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                            <span className="home_scroll-name">Scroll down</span>
                            <i className="uil uil-arrow-down home_scroll-arrow"></i>
                        </a>
                    </div>


                </div>
            </section>

        </>
    );
}

export default Home;