import React from 'react'
import { images } from "../../constants";
import "./Skills.css";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Box, Paper } from '@mui/material';

const Skills = () => {

    // var mySwiper = new Swiper('.swiper-container', {
    //     loop: true,
    //     speed: 1000,
    //     autoplay: {
    //         delay: 3000,
    //     },
    //     effect: 'coverflow',
    //     grabCursor: true,
    //     centeredSlides: true,
    //     slidesPerView: 'auto',
    //     coverflowEffect: {
    //         rotate: 0,
    //         stretch: 80,
    //         depth: 200,
    //         modifier: 1,
    //         slideShadows: false,
    //     },

    //     // Navigation arrows
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },

    // })

    const skills = [{ name: "HTML", icon: images.html }, { name: "CSS", icon: images.css },
    { name: "JavaScript", icon: images.javascript }, { name: "React", icon: images.react },
    { name: "Node", icon: images.node }, { name: "MongoDB", icon: images.node }, { name: "Express", icon: images.node }, { name: "Django", icon: images.node },
    { name: "Python", icon: images.python }, { name: "Unity", icon: images.node }, { name: "C#", icon: images.node }, { name: "Git", icon: images.git },
    { name: "Docker", icon: images.node }, { name: "FramerMotion", icon: images.node }, { name: "AndroidStudio", icon: images.node }, { name: "Java", icon: images.node },
    { name: "Tensorflow", icon: images.node }, { name: "Numpy", icon: images.node }, { name: "Pandas", icon: images.node }, { name: "Solidity", icon: images.node }];

    return (
        <>
            {/* <!--==================== SKILLS ====================--> */}
            <section className="skills section" id="skills">
                <h2 className="section_title">Skills</h2>
                <span className="section_subtitle">my Technical Knowledge</span>

                <div className="app_skills-container container">
                    {/* <motion.div className="app_skills-list">
                        {skills.map((skill) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                                transition={{ duration: 0.20 }}
                                viewport={{ once: true }}
                                className="app_skills-item app_flex"
                                key={skill.name}
                            >
                                <div className="app_flex">
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                                <p className='p-text'>{skill.name}</p>

                            </motion.div>
                        ))}
                    </motion.div> */}



                    {/* <!-- Slider main container --> */}

                    {/* <!-- Additional required wrapper --> */}
                    <Swiper
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 3000,
                        }}
                        effect="coverflow"
                        grabCursor={true}
                        slideToClickedSlide={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 80,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        }}

                        // Navigation arrows
                        // navigation={{
                        //     nextEl: '.swiper-button-next',
                        //     prevEl: '.swiper-button-prev',
                        // }}
                        pagination={true}
                        // modules={[EffectCoverflow, Pagination, Navigation]}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                    >
                        {/* <!-- Slides --> */}

                        {skills.map((skill, id) => (
                            <SwiperSlide key={id}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                            m: 1,
                                            width: 700,
                                            height: 360,
                                        },
                                        // backgroundColor: 'var(--input-color)'

                                    }}
                                >
                                    <Paper elevation={3} style={{ backgroundColor: 'var(--input-color)', width: "100%" }}>
                                        <div className="app_skills-item app_flex">
                                            <div className="">
                                                <img src={skill.icon} alt={skill.name} />
                                            </div>
                                            <div className="">
                                                <img src={skill.icon} alt={skill.name} />
                                            </div>
                                            <div className="">
                                                <img src={skill.icon} alt={skill.name} />
                                            </div>
                                            <div className="">
                                                <img src={skill.icon} alt={skill.name} />
                                            </div>
                                            <div className="">
                                                <img src={skill.icon} alt={skill.name} />
                                            </div>
                                            <div className="">
                                                <img src={skill.icon} alt={skill.name} />
                                            </div>
                                        </div>
                                    </Paper>
                                </Box>
                            </SwiperSlide>))}

                    </Swiper>
                    {/* <!-- If we need navigation buttons --> */}
                    {/* <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div> */}
                </div>


            </section>
        </>
    );
}


export default Skills;