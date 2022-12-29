import React from 'react'
import "./Portfolio.css";

const Portfolio = () => {

    const areas = ["Web Dev", "Game Dev", "ML/AI", "Blockchain"]
    return (
        <>
            {/* <!--==================== PORTFOLIO ====================--> */}
            <section className="portfolio section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
                <span className="section_subtitle">my personal projects</span>
                <div className="container">
                    <div className='button_wrapper'>
                        {areas.map((area) => (
                            <button>{area}</button>
                        ))}
                    </div>

                    <div className='image_container'></div>
                </div>


            </section>
        </>
    );
}


export default Portfolio;