import React from 'react'
import "./Qualification.css";

const Qualification = () => {
    return (
        <>
            {/* <!--==================== QUALIFICATION ====================--> */}
            <section className="qualification section smooth_transition" id='qualification'>
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
                                    <h3 className="qualification_title">MSc in AI</h3>
                                    <span className="qualification_subtitle">University of St Andrews</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2022-2023
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
                                    <h3 className="qualification_title">B-Tech in CSE</h3>
                                    <span className="qualification_subtitle">FISAT</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2017-2021
                                    </div>
                                </div>
                            </div>


                            {/* <!--==================== QUALIFICATION 3====================--> */}
                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">Computer Science</h3>
                                    <span className="qualification_subtitle">Chavara Darsan</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        2014-2016
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    {/* <!-- <span className="qualification_line"></span> --> */}
                                </div>
                            </div>
                        </div>



                        {/* <!--==================== QUALIFICATION CONTENT 2====================--> */}
                        <div className="qualification_content" data-content id="awards" >
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
                                        Jan, 2021
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
                                        March, 2021
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
                                    <span className="qualification_line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification_title">1st prize in Game Dev</h3>
                                    <span className="qualification_subtitle">NIT</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        Feb, 2021
                                    </div>
                                </div>

                            </div>

                            {/* <!--==================== QUALIFICATION 3====================--> */}
                            <div className="qualification_data">


                                <div>
                                    <h3 className="qualification_title">2nd best project in UG</h3>
                                    <span className="qualification_subtitle">FISAT</span>
                                    <div className="qualification_calender">
                                        <i className="uil uil-calendar-alt"></i>
                                        September, 2021
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    {/* <span className="qualification_line"></span> */}
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