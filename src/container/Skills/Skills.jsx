import React, { useState } from 'react'
import { images } from "../../constants";
import "./Skills.css";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Box, Paper } from '@mui/material';

const Skills = () => {

    const [skillName, setSkillName] = useState('');

    const skills = {
        "ML/DL": [{ name: "PyTorch", icon: images.pytorch }, { name: "Tensorflow", icon: images.tensorflow }, { name: "Numpy", icon: images.numpy }, { name: "Pandas", icon: images.pandas }],
        "Frontend": [{ name: "HTML", icon: images.html }, { name: "CSS", icon: images.css }, { name: "JavaScript", icon: images.javascript }, { name: "React", icon: images.react }, { name: "Redux", icon: images.redux }],
        "Backend": [{ name: "Django", icon: images.django }, { name: "Node", icon: images.node }, { name: "MongoDB", icon: images.mongodb }, { name: "Express", icon: images.express }],
        "Programming Languages": [{ name: "Python", icon: images.python }, { name: "Java", icon: images.java }, { name: "JavaScript", icon: images.javascript }, { name: "Solidity", icon: images.solidity }, { name: "C#", icon: images.csharp }],
        "Tools": [{ name: "Git", icon: images.git }, { name: "GitHub", icon: images.github }, { name: "Docker", icon: images.docker },  { name: "Postman", icon: images.postman }],
        "Softwares": [{ name: "Unity", icon: images.unity }, { name: "AndroidStudio", icon: images.androidstudio }, { name: "MongoDBAtlas", icon: images.mongodbatlas }]

    };

    const handleSlideChange = (swiper) => {
        const { activeIndex } = swiper;
        const skillNames = Object.keys(skills);
        const adjustedIndex = activeIndex % skillNames.length;
        const activeSkill = skillNames[adjustedIndex];
        setSkillName(activeSkill);
      };

    return (
        <>
            {/* <!--==================== SKILLS ====================--> */}
            <section className="skills section smooth_transition" id="skills">
                <h2 className="section_title">Skills</h2>
                <span className="section_subtitle">{skillName}</span>

                <div className="app_skills-container container">

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

                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                        onSlideChange={handleSlideChange}
                    >
                        {/* <!-- Slides --> */}

                        {Object.entries(skills).map(([name, skills], id) => (

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

                                    }}>

                                    <Paper elevation={3} style={{ backgroundColor: 'var(--input-color)', width: "100%", transition: 'all 0.3s ease-in-out' }}>
                                        <div className="app_skills-item app_flex">
                                            {skills.map((skill, index) => (
                                                <div className="app_skills-item" key={index}>
                                                    <img src={skill.icon} alt={skill.name} />
                                                    <p>{skill.name}</p>
                                                </div>
                                            ))}
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