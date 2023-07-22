import React, { useState } from 'react'
import { images } from "../../constants";
import { motion, AnimatePresence } from 'framer-motion';
import "./Portfolio.css";

const Portfolio = () => {


    const [tabActive, setTabActive] = useState(0);

    const portfolioDetails = [
        {
            "title": "Classification and Analysis of GAP programming practices on GitHub",
            "githubURL": "https://github.com/kiranbaby14/Analysis-of-GAP-programming-practices-on-GitHub",
            "liveLink": "", "img": images.about04, _id: [0, 1],
            id: 1,
            "tech-stacks": ["PyTorch", "scikit-learn", "GitHub-Actions", "Docker", "React", "Django", "Redux", "Google-Cloud"]
        },
        { "title": "ML Implemented Mailing Service ", "githubURL": "https://github.com/kiranbaby14/ML-Implemented-Mailing-Service", "liveLink": "", "img": images.about04, _id: [0, 1], id: 2, "tech-stacks": ["scikit-learn", "Docker", "React", "Django", "Redux", "Google-Cloud", "Celery"] },
        { "title": "Travel-Advisor ", "githubURL": "https://github.com/kiranbaby14/Travel-Advisor", "liveLink": "", "img": images.travelAdvisor, _id: [0], id: 8, "tech-stacks": ["React", "RapidAPI", "Google Maps API", "Material UI"] },
        { "title": "BookUrTrip Clone", "githubURL": "https://github.com/kiranbaby14/BookUrTrip", "liveLink": "", "img": images.about04, _id: [0], id: 4, "tech-stacks": ["React", "Node.js", "MongoDB", "Express", "Context API"] },
        { "title": "UltraRun Marathon", "githubURL": "https://github.com/kiranbaby14/Marathon", "liveLink": "https://www.universityultrarun.com/", "img": images.ultrarun, _id: [0], id: 3, "tech-stacks": ["React", "Leaflet.js", "Google Maps API", "Context API"] },
        { "title": "B-Drive", "githubURL": "https://github.com/kiranbaby14/B-Drive", "liveLink": "", "img": images.about04, _id: [0, 3], id: 5, "tech-stacks": ["React", "Ethereum Blockchain", "Hardhat", "Ether.js"] },
        { "title": "Online Store", "githubURL": "https://github.com/kiranbaby14/Online-Store-Frontend", "liveLink": "", "img": images.about04, _id: [0], id: 7, "tech-stacks": ["React", "mongoDB", "Node.js", "Express", "Redux"] },
        { "title": "Online Store-Admin-Panel", "githubURL": "https://github.com/kiranbaby14/Online-Store-Admin-Panel", "liveLink": "", "img": images.about04, _id: [0], id: 6, "tech-stacks": ["React", "mongoDB", "Node.js", "Express", "Redux"] },
        { "title": "Portfolio Website", "githubURL": "https://github.com/kiranbaby14/Kiran-Portfolio", "liveLink": "", "img": images.portfolio, _id: [0], id: 13, "tech-stacks": ["React", "Material UI", "Framer-motion", "Email.js", "Three.js", "Swiper.js"] },
        { "title": "Hyperface-Implemented-Multiplayer-TPS-Game", "githubURL": "https://github.com/kiranbaby14/Hyperface-Implemented-Multiplayer-TPS-Game", "liveLink": "", "img": images.hyperface, _id: [1, 2], id: 10, "tech-stacks": ["OpenCV", "Scikit-learn", "Photon server", "Unity", "C#"] },
        { "title": "Ninjesk-The-endless-runner-ninja ", "githubURL": "https://github.com/kiranbaby14/Ninjesk-The-endless-runner-ninja", "liveLink": "https://drive.google.com/file/d/1Tda2icc4q8GaztYYozKkiT0jwJUr_HqE/view?usp=sharing", "img": images.ninjesk, _id: [2], id: 9, "tech-stacks": ["Unity", "C#", "Google-Admob"] },
        { "title": "Spheron-The-Ball-Game ", "githubURL": "https://github.com/kiranbaby14/Instagram-Clone", "liveLink": "https://play.google.com/store/apps/details?id=com.Jbk.Spheron", "img": images.spheron, _id: [2], id: 11, "tech-stacks": ["Unity", "C#"] },
        { "title": "Instagram-Clone ", "githubURL": "https://github.com/kiranbaby14/Spheron-The-Ball-Game", "liveLink": "", "img": images.instagram, _id: [4], id: 12, "tech-stacks": ["AndroidStudio", "Kotlin"] },
    ]

    const [moreBtnClick, setMoreBtnClick] = useState(Array(portfolioDetails.length).fill(false));

    const [filteredPortfolio, setFilteredPortfolio] = useState(portfolioDetails.filter((data) => data._id.includes(0)))


    const areas = ["Web Dev", "ML/AI", "Game Dev", "BlockChain", "AndroidStudio"]

    const handleClickFilter = (id) => {
        setTabActive(id);
        const newFilteredPortfolio = portfolioDetails.filter((data) => data._id.includes(id))
        setFilteredPortfolio(newFilteredPortfolio);

    }

    const handleClickForMoreBtn = (index) => {
        setMoreBtnClick((prev) => {
            const updatedArray = [...prev]; // Create a copy of the previous state array
            updatedArray[index] = !prev[index]; // Toggle the value at the specified index
            return updatedArray; // Return the updated array as the new state
        });

    };

    return (
        <>
            {/* <!--==================== PORTFOLIO ====================--> */}
            <section className="portfolio section smooth_transition" id="portfolio">
                <h2 className="section_title">Portfolio</h2>
                <span className="section_subtitle">my personal projects</span>
                <div className="container">
                    <div className='button_wrapper'>
                        {areas.map((area, id) => (
                            <button
                                key={id}
                                className={tabActive === id ? "active" : null}
                                onClick={() => handleClickFilter(id)}>
                                {area}
                            </button>
                        ))}
                    </div>

                    <div className='image_container'>
                        <AnimatePresence>
                            {filteredPortfolio.map((details) => (
                                <motion.div className='image_card' key={details.id}
                                    layout
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="overlay"></div>
                                    <img src={details.img} alt="portfolio-image" />
                                    {!moreBtnClick[details.id] ?
                                        <span className='title'>{details.title}</span>
                                        :
                                        <span className='tech-stacks'>
                                            <ol>
                                                {
                                                    details['tech-stacks'].map((stack, index) =>
                                                        (<li key={index}>{stack}</li>))

                                                }
                                            </ol>
                                        </span>}
                                    <span className='clickables'>
                                        <a href={details.githubURL} target="_blank" rel="noopener noreferrer" className="github-icon">
                                            <i className="uil uil-github-alt"></i>
                                        </a>
                                        {details.liveLink != "" ?
                                            <button className='live-btn'>
                                                <a href={details.liveLink} target="_blank">
                                                    live
                                                </a>
                                            </button>
                                            :
                                            null
                                        }
                                        <button className='more-btn' onClick={() => handleClickForMoreBtn(details.id)}>
                                            {!moreBtnClick[details.id] ? <>more..</> : <>close</>}
                                        </button>
                                    </span>

                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>


            </section>
        </>
    );
}


export default Portfolio;