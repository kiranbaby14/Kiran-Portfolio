import React, { useState } from "react";
import { images } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Portfolio.css";

const Portfolio = () => {
  const [tabActive, setTabActive] = useState(0);

  const portfolioDetails = [
    {
      title: "MiniLondon3D",
      desc: "Real-time 3D London Underground tracker",
      githubURL: "",
      liveLink: "https://minilondon3d.xyz/",
      blogURL:
        "https://dev.to/kiranbaby14/i-built-a-real-time-3d-map-of-london-underground-trains-4fl2",
      img: images.minilondon3d,
      _id: [0],
      id: 14,
      "tech-stacks": [
        "Python",
        "Three.js",
        "MapLibre",
        "Redis",
        "WebSockets",
        "TfL API",
      ],
    },
    {
      title: "SearchLightAI",
      desc: "Video moment search engine",
      githubURL: "https://github.com/kiranbaby14/SearchLightAI",
      liveLink: "",
      blogURL:
        "https://dev.to/kiranbaby14/i-built-a-video-search-engine-that-understands-what-youre-looking-for-51m7",
      img: images.searchlight,
      _id: [0, 1],
      id: 15,
      "tech-stacks": [
        "SigLIP2",
        "Qdrant",
        "PostgreSQL",
        "PySceneDetect",
        "faster-whisper",
        "Docker",
      ],
    },
    {
      title: "TalkMateAI",
      desc: "Real-time AI avatar with lip-sync",
      githubURL: "https://github.com/kiranbaby14/TalkMateAI",
      liveLink: "",
      blogURL:
        "https://dev.to/kiranbaby14/i-built-a-3d-ai-avatar-that-actually-sees-and-talks-back-4j1a",
      img: images.talkmate,
      _id: [0, 1],
      id: 16,
      "tech-stacks": ["Whisper", "SmolVLM2", "Kokoro TTS", "WebSockets"],
    },
    {
      title:
        "Classification and Analysis of GAP programming practices on GitHub",
      desc: "",
      githubURL:
        "https://github.com/kiranbaby14/Analysis-of-GAP-programming-practices-on-GitHub",
      liveLink: "",
      img: images.defaultImg,
      _id: [0, 1],
      id: 1,
      "tech-stacks": [
        "PyTorch",
        "scikit-learn",
        "GitHub-Actions",
        "Docker",
        "React",
        "Django",
        "Redux",
        "Google-Cloud",
      ],
    },
    {
      title: "B-Drive",
      desc: "Decentralized file storage on Ethereum",
      githubURL: "https://github.com/kiranbaby14/B-Drive",
      liveLink: "",
      img: images.bdrive,
      _id: [0, 3],
      id: 5,
      "tech-stacks": [
        "React",
        "Ethereum Blockchain",
        "Hardhat",
        "Ether.js",
        "Pinata",
      ],
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with 3D & animations",
      githubURL: "https://github.com/kiranbaby14/Kiran-Portfolio",
      liveLink: "",
      img: images.portfolio,
      _id: [0],
      id: 13,
      "tech-stacks": [
        "React",
        "Material UI",
        "Framer-motion",
        "Email.js",
        "Three.js",
        "Swiper.js",
      ],
    },
    {
      title: "Hyperface-Implemented-Multiplayer-TPS-Game",
      githubURL:
        "https://github.com/kiranbaby14/Hyperface-Implemented-Multiplayer-TPS-Game",
      liveLink: "",
      img: images.hyperface,
      _id: [1, 2],
      id: 10,
      "tech-stacks": ["OpenCV", "Scikit-learn", "Photon server", "Unity", "C#"],
    },
    {
      title: "Ninjesk-The-endless-runner-ninja ",
      githubURL:
        "https://github.com/kiranbaby14/Ninjesk-The-endless-runner-ninja",
      liveLink:
        "https://drive.google.com/file/d/1Tda2icc4q8GaztYYozKkiT0jwJUr_HqE/view?usp=sharing",
      img: images.ninjesk,
      _id: [2],
      id: 9,
      "tech-stacks": ["Unity", "C#", "Google-Admob"],
    },
    {
      title: "Spheron-The-Ball-Game ",
      githubURL: "https://github.com/kiranbaby14/Instagram-Clone",
      liveLink: "https://play.google.com/store/apps/details?id=com.Jbk.Spheron",
      img: images.spheron,
      _id: [2],
      id: 11,
      "tech-stacks": ["Unity", "C#"],
    },
    {
      title: "Instagram-Clone ",
      githubURL: "https://github.com/kiranbaby14/Spheron-The-Ball-Game",
      liveLink: "",
      img: images.instagram,
      _id: [4],
      id: 12,
      "tech-stacks": ["AndroidStudio", "Kotlin"],
    },
  ];

  const [filteredPortfolio, setFilteredPortfolio] = useState(
    portfolioDetails.filter((data) => data._id.includes(0)),
  );

  const areas = ["Web Dev", "ML/AI", "Game Dev", "BlockChain", "AndroidStudio"];

  const handleClickFilter = (id) => {
    setTabActive(id);
    const newFilteredPortfolio = portfolioDetails.filter((data) =>
      data._id.includes(id),
    );
    setFilteredPortfolio(newFilteredPortfolio);
  };

  return (
    <>
      <section className="portfolio section smooth_transition" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">my personal projects</span>
        <div className="container">
          <div className="button_wrapper">
            {areas.map((area, id) => (
              <button
                key={id}
                className={tabActive === id ? "active" : null}
                onClick={() => handleClickFilter(id)}
              >
                {area}
              </button>
            ))}
          </div>

          <div className="image_container">
            <AnimatePresence>
              {filteredPortfolio.map((details) => (
                <motion.div
                  className="image_card"
                  key={details.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card sx={{ height: 350 }}>
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        sx={{ height: 200 }}
                        image={details.img}
                        title={details.title}
                      />

                      {/* Tech stacks overlay - shows on hover */}
                      <div className="tech-stacks">
                        <ul>
                          {details["tech-stacks"].map((stack, index) => (
                            <li key={index}>{stack}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <CardContent>
                      <Typography gutterBottom variant="h7" component="div">
                        {details.title}
                      </Typography>
                      {details.desc && (
                        <Typography variant="body2">{details.desc}</Typography>
                      )}
                    </CardContent>

                    <CardActions>
                      <a
                        href={details.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                      >
                        <i className="uil uil-github-alt"></i>
                      </a>

                      {details.liveLink && (
                        <button className="live-btn">
                          <a
                            href={details.liveLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo
                          </a>
                        </button>
                      )}
                      {details.blogURL && (
                        <button className="live-btn">
                          <a
                            href={details.blogURL}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Blog
                          </a>
                        </button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
