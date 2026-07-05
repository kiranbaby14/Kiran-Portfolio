import React, { useState } from "react";
import { images } from "../../constants";
import "./Skills.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Box, Paper } from "@mui/material";

const Skills = () => {
  const [skillName, setSkillName] = useState("");

  const skills = {
    "Backend & Real-time": [
      { name: "FastAPI", icon: images.fastapi },
      { name: "WebSockets", icon: images.websockets },
      { name: "Redis", icon: images.redis },
      { name: "Node", icon: images.node },
      { name: "Django", icon: images.django },
    ],
    Databases: [
      { name: "PostgreSQL", icon: images.postgres },
      { name: "PostGIS", icon: images.postgis },
      { name: "MongoDB", icon: images.mongodb },
      { name: "Redis", icon: images.redis },
    ],
    Frontend: [
      { name: "Next.js", icon: images.nextjs },
      { name: "React", icon: images.react },
      { name: "TypeScript", icon: images.typeScript },
      { name: "Mapbox", icon: images.mapbox },
      { name: "Redux", icon: images.redux },
    ],
    "ML/DL": [
      { name: "PyTorch", icon: images.pytorch },
      { name: "HuggingFace", icon: images.huggingface },
      { name: "OpenCV", icon: images.opencv },
      { name: "Scikit-learn", icon: images.scikit_learn },
      { name: "Numpy", icon: images.numpy },
      { name: "Pandas", icon: images.pandas },
    ],
    "DevOps/Cloud": [
      { name: "Docker", icon: images.docker },
      { name: "GCP", icon: images.gcp },
      { name: "GitHubActions", icon: images.githubactions },
      { name: "Kubernetes", icon: images.kubernetes },
    ],
    Languages: [
      { name: "Python", icon: images.python },
      { name: "TypeScript", icon: images.typeScript },
      { name: "Java", icon: images.java },
      { name: "C#", icon: images.csharp },
    ],
    BlockChain: [
      { name: "HardHat", icon: images.hardhat },
      { name: "Ether.js", icon: images.ether },
      { name: "Solidity", icon: images.solidity },
      { name: "Mocha", icon: images.mocha },
      { name: "Chai", icon: images.chai },
    ],
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

            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
            onSlideChange={handleSlideChange}
          >
            {/* <!-- Slides --> */}

            {Object.entries(skills).map(([name, skills], id) => (
              <SwiperSlide key={id}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 700,
                      height: 360,
                    },
                  }}
                >
                  <Paper
                    elevation={3}
                    style={{
                      backgroundColor: "var(--input-color)",
                      width: "100%",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <div className="app_skills-item app_flex">
                      {skills.map((skill, index) => (
                        <div className="app_skills-item" key={index}>
                          <img src={skill.icon} alt={skill.name} />
                          <p className="skill_name">{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  </Paper>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Skills;
