import React from 'react';
import "./About.css";
import AboutImg from "../../assets/images/about.jpg";
import UserCv from "../../assets/pdf/Kiran_CV.pdf";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import required modules
import { EffectCube, Pagination } from "swiper";

import { images } from '../../constants';

const About = () => {
    return (
        <>
            {/* <!--==================== ABOUT ====================--> */}
            <section className="about section smooth_transition" id="about">
                <h2 className="section_title">About Me</h2>
                <span className="section_subtitle">my Intro</span>

                <div className="about_container container grid">
                    <div className="about_img" alt="user_image"></div>
                    <div className='about_right'>
                        <div className="about_data">
                            <Swiper
                                effect={"cube"}
                                grabCursor={true}
                                cubeEffect={{
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}
                                loop={true}

                                pagination={{ clickable: true }}
                                modules={[EffectCube, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={images.webdeveloper} style={{ width: "100%", height: "300px", objectFit: 'cover' }} alt='img1' />
                                    <div className="overlay"></div>
                                    <span className='swiper_slide_text'>
                                        <h1>Software Developer</h1>
                                        <p>Working as a software developer in a fast-paced startup, I've built AI-powered applications such as a product recommendation chatbot using LangChain and OpenAI, along with web applications utilizing Vue.js, NestJS, PostgreSQL, and Docker.</p>
                                    </span>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={images.machinelearning} style={{ width: "100%", height: "300px", objectFit: 'cover' }} alt='img1' />
                                    <div className="overlay"></div>
                                    <span className='swiper_slide_text'>
                                        <h1>AI Student</h1>
                                        <p>Pursuing MSc in AI at University of St Andrews.<br /> <br />Have knowldege in machine learning, deep learning and expertise with related frameworks like pytorch and tensorflow</p>
                                    </span>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={images.gamedeveloper} style={{ width: "100%", height: "300px", objectFit: 'cover' }} alt='img1' />
                                    <div className="overlay"></div>
                                    <span className='swiper_slide_text'>
                                        <h1>Game Dev</h1>
                                        <p>Have built games using Unity engine and even won prizes in hackathons for developing games.</p>
                                    </span>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={images.blockchain} style={{ width: "100%", height: "300px", objectFit: 'cover' }} alt='img1' />
                                    <div className="overlay"></div>
                                    <span className='swiper_slide_text'>
                                        <h1>Web3 enthusiast</h1>
                                        <p>I would love to explore the web3 space. I have some knowledge in building DApps using the Ethereum blockchain, Solidity, Hardhat, chai, mocha and Ether.js.</p>
                                    </span>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="about_buttons">
                            <a target='_blank' href={UserCv} className="button button-flex">
                                Download CV<i className="uil uil-download-alt button_icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default About;