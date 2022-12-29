import React from 'react'
import "./Qualification.css";

const Qualification = () => {
    return (
        <>
            {/* <!--==================== QUALIFICATION ====================--> */}
            <section className="qualification section" id='qualification'>
                <h2 className="section_title">Qualification</h2>
                <span className="section_subtitle">my personal journey</span>

                <div className="qualification_container container">
                    <div className="qualification_tabs">
                        <div className="qualification_button button-flex qualification_active" data-target="#education">
                            <i className="uil uil-graduation-cap qualification_icon"></i>
                            Education
                        </div>

                        <div className="qualification_button button-flex" data-target="#awards">
                            <i className="uil uil-medal qualification_icon"></i>
                            Awards
                        </div>

                    </div>

                    <div className="qualification_sections">
                        {/* <!--==================== QUALIFICATION CONTENT 1====================--> */}
                        <div className="qualification_content qualification_active" data-content id="education">
                            {/* <!--==================== QUALIFICATION 1====================--> */}
                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">B-Tech in CSE</h3>
                                    <span className="qualification_subtitle">FISAT</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2017-2021
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>


                            {/* <!--==================== QUALIFICATION 2====================--> */}
                            <div className="qualification_data">

                                <div></div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification_title">className XII - Computer Science</h3>
                                    <span className="qualification_subtitle">Chavara Darsan</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2014-2016
                                    </div>
                                </div>
                            </div>


                            {/* <!--==================== QUALIFICATION 3====================--> */}
                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">className X</h3>
                                    <span className="qualification_subtitle">Infant Jesus</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2013-2014
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    {/* <!-- <span className="qualification_line"></span> --> */}
                                </div>
                            </div>
                        </div>



                        {/* <!--==================== QUALIFICATION CONTENT 2====================--> */}
                        <div className="qualification_content" data-content id="awards">
                            {/* <!--==================== QUALIFICATION 1====================--> */}
                            <div className="qualification_data">

                                <div></div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification_title">3rd prize in Game Begetter</h3>
                                    <span className="qualification_subtitle">IIT Bombay, Techfest</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2017-2021
                                    </div>
                                </div>

                            </div>


                            {/* <!--==================== QUALIFICATION 2====================--> */}
                            <div className="qualification_data">


                                <div>
                                    <h3 className="qualification_title">Finalist</h3>
                                    <span className="qualification_subtitle">CSI-InApp Awards</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2014-2016
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>


                            {/* <!--==================== QUALIFICATION 3====================--> */}
                            <div className="qualification_data">

                                <div></div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    {/* <!-- <span className="qualification_line"></span> --> */}
                                </div>

                                <div>
                                    <h3 className="qualification_title">className X</h3>
                                    <span className="qualification_subtitle">Infant Jesus</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2013-2014
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}


export default Qualification;