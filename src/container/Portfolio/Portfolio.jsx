import React, { useState } from 'react'
import { images } from "../../constants";
import { motion, AnimatePresence } from 'framer-motion';
import "./Portfolio.css";

const Portfolio = () => {

    const [tabActive, setTabActive] = useState(0);
    const portfolioImages = [
        { "img": images.about02, _id: [1, 2], id: 1 }, { "img": images.about03, _id: [0, 1, 2], id: 2 },

        { "img": images.about01, _id: [0], id: 3 }, { "img": images.about04, _id: [0, 1, 2], id: 4 },
        { "img": images.about03, _id: [0, 1], id: 5 }, { "img": images.about01, _id: [0, 1], id: 6 },
        { "img": images.about01, _id: [0, 1], id: 7 }, { "img": images.about02, _id: [0, 1], id: 8 },

        { "img": images.about03, _id: [0, 1], id: 9 }, { "img": images.about01, _id: [0, 1], id: 10 },
        { "img": images.about01, _id: [0, 1], id: 11 }, { "img": images.about01, _id: [0, 1], id: 12 },
        { "img": images.about01, _id: [0, 1], id: 13 }]

    const [filteredPortfolio, setFilteredPortfolio] = useState(portfolioImages.filter((data) => data._id.includes(0)))


    const areas = ["Web Dev", "Game Dev", "ML/AI"]

    const handleClickFilter = (id) => {
        setTabActive(id);
        const newFilteredPortfolio = portfolioImages.filter((data) => data._id.includes(id))
        setFilteredPortfolio(newFilteredPortfolio);

    }

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
                            {filteredPortfolio.map((img) => (
                                <motion.div className='image_card' key={img.id}
                                    layout
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img src={img.img} alt="prtfolio-image" />
                                    <span>
                                        <a href="" target="_blank" rel="noopener noreferrer" className="home_social-icon">
                                            <i className="uil uil-github-alt"></i>
                                        </a>
                                        <p>ajdbv</p>
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