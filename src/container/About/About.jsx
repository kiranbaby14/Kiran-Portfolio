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
            <section className="about section" id="about">
                <h2 className="section_title">About Me</h2>
                <span className="section_subtitle">my Intro</span>

                <div className="about_container container grid">
                    <img src={AboutImg} alt="about img" className="about_img" />
                    <div>
                        <div className="about_data">
                            <p className="about_description">
                                {/* Effective Student committed to learning, developing skills
                                in web, android development, game development,
                                Artificial Intelligence, and Machine Learning. */}
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

                                    pagination={true}
                                    modules={[EffectCube, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src={images.webdeveloper} style={{ width: "100%", height: "300px", objectFit: 'cover' }} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={images.webdeveloper} style={{ width: "100%", height: "300px", objectFit: 'cover' }} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={images.webdeveloper} style={{ width: "100%", height: "300px", objectFit: 'cover' }} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                    </SwiperSlide>
                                </Swiper>
                            </p>
                        </div>
                        {/* <div className="about_info">
                            <div>
                                <span className="about_info-title">08+</span>
                                <span className="about_info-name">Companies <br /> worked</span>
                            </div>
                            <div>
                                <span className="about_info-title">08+</span>
                                <span className="about_info-name">Companies <br /> worked</span>
                            </div>
                        </div> */}
                        <div className="about_buttons">
                            <a download="" href={UserCv} className="button button-flex">
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