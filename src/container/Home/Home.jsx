import React, { Suspense } from "react";

import TypeWriterEffect from 'react-typewriter-effect';
import './Home.css'
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import Luffy from './Luffy'

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

    return (
        <>
            <section className="home section smooth_transition" id="home">

                <div className="home_container container grid" id="home-container">
                    <div className="home_content grid">

                        <div className="home_social">
                            <Spin>
                                <a href="https://www.linkedin.com/in/kiranbaby14/" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                                    <i className="uil uil-linkedin-alt"></i>
                                </a>
                            </Spin>
                            <Spin>
                                <a href="https://github.com/kiranbaby14" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                                    <i className="uil uil-github-alt"></i>
                                </a>
                            </Spin>
                        </div>

                        <div className="home_avatar_container">
                            <div className="home_avatar">
                                <Suspense fallback={null} >
                                    <Canvas shadows>
                                        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} />
                                        <directionalLight intensity={0.5} />
                                        <ambientLight intensity={0.5} />
                                        <Luffy position={[0, -2, 0]} scale={3} />
                                    </Canvas>
                                </Suspense>
                            </div>
                        </div>



                        <Fade bottom>
                            <div className="home_data">
                                <h1 className="home_title">{text1.split("").map((letter, id) => (
                                    <motion.span
                                        key={id}
                                        variants={spanVariants}
                                        whileHover="hover"
                                    >
                                        <span className="home_title_letters">{letter}</span>
                                    </motion.span>
                                ))}</h1>

                                <h1 className="home_title">{text2.split("").map((letter, id) => (
                                    <motion.span
                                        key={id}
                                        variants={spanVariants}
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
                                        fontWeight: 'var(--font-medium)',
                                        fontSize: 'var(--h3-font-size)',
                                        marginBottom: 'var(--mb-0-75)',
                                        textShadow: "0px 0px 10px var(--first-color), 0px 0px 20px var(--first-color), 0px 0px 40px var(--first-color), 0px 0px 80px var(--first-color)"
                                    }}
                                    // startDelay={1000}
                                    cursorColor="#3F3D56"
                                    multiText={[
                                        'Software developer',
                                        'Unity game Developer',
                                        'Web3 enthusiast',
                                        'AI student'
                                    ]}
                                    multiTextDelay={1000}
                                    typeSpeed={30}
                                    multiTextLoop
                                />
                                <p className="home_description">Software developer dedicated to exploring and mastering the realms of web development, 
                                game development, Artificial Intelligence, and Machine Learning, fueled by an unwavering passion for learning and growth.
                                </p>

                                <a href="#contact" className="button button-flex">
                                    Contact me<i className="uil uil-message button_icon"></i>
                                </a>

                            </div>
                        </Fade>

                    </div>

                    <Fade left>
                        <div className="home_scroll">
                            <a href="#about" className="home_scroll-button button-flex">
                                <i className="uil uil-mouse-alt home_scroll-mouse"></i>
                                <span className="home_scroll-name">Scroll down</span>
                                <i className="uil uil-arrow-down home_scroll-arrow"></i>
                            </a>
                        </div>
                    </Fade>


                </div>

            </section>

        </>
    );
}

export default Home;