import React from "react";
import "./Qualification.css";

import { images } from "../../constants";

const Qualification = () => {
  return (
    <>
      {/* <!--==================== QUALIFICATION ====================--> */}
      <section
        className="qualification section smooth_transition"
        id="qualification"
      >
        <h2 className="section_title">JOURNEY</h2>
        <span className="section_subtitle">my personal journey</span>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div
              className="qualification_button button-flex qualification_active"
              data-target="#experience"
            >
              <i className="uil uil-suitcase qualification_icon"></i>
              Experience
            </div>
            <div
              className="qualification_button button-flex"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qualification_icon"></i>
              Education
            </div>

            <div
              className="qualification_button button-flex"
              data-target="#awards"
            >
              <i className="uil uil-medal qualification_icon"></i>
              Awards
            </div>
          </div>

          <div className="qualification_sections">
            {/* <!--==================== EXPERIENCE ====================--> */}
            <div
              className="qualification_content qualification_active"
              data-content
              id="experience"
            >
              {/* EXPERIENCE 1 */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Founding Engineer</h3>
                  <span className="qualification_subtitle">
                    Moonbility, London
                  </span>
                  <p className="qualification_desc">
                    Architected and shipped a production real-time platform
                    monitoring 1,600+ live vehicles across a UK metro bus
                    network. ITS UK 2025 Award winner.
                  </p>
                  <img
                    src={images.itsuk_award}
                    alt="Accepting the ITS UK 2025 award on behalf of Moonbility"
                    className="qualification_photo"
                  />
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> Aug 2024 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>

              {/* EXPERIENCE 2 */}
              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                </div>
                <div>
                  <h3 className="qualification_title">Software Developer</h3>
                  <span className="qualification_subtitle">
                    Westland Technologies
                  </span>
                  <p className="qualification_desc">
                    Built a RAG-based product recommendation chatbot (LangChain,
                    OpenAI, FAISS) for a client with 10k+ monthly users, lifting
                    engagement 25%.
                  </p>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> Oct 2023 - May 2024
                  </div>
                </div>
              </div>
            </div>

            {/* <!--==================== EDUCATION ====================--> */}
            <div className="qualification_content" data-content id="education">
              {/* <!--==================== EDUCATION 1====================--> */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">MSc in AI</h3>
                  <span className="qualification_subtitle">
                    University of St Andrews
                  </span>
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

              {/* <!--==================== EDUCATION 2====================--> */}
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

              {/* <!--==================== EDUCATION 3====================--> */}
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

            {/* <!--==================== AWARDS ====================--> */}
            <div className="qualification_content" data-content id="awards">
              {/* <!--==================== AWARD — ITS UK (flagship, with photo) ====================--> */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Winner, Better Accessibility through Technology
                  </h3>
                  <span className="qualification_subtitle">
                    ITS UK 2025 (for Moonbility onboard monitoring)
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i> 2025
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
              {/* <!--==================== AWARD 1====================--> */}
              <div className="qualification_data">
                <div></div>

                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>

                <div>
                  <h3 className="qualification_title">
                    3rd prize in Game Begetter
                  </h3>
                  <span className="qualification_subtitle">
                    IIT Bombay, Techfest
                  </span>
                  <div className="qualification_calender">
                    <i className="uil uil-calendar-alt"></i>
                    Jan, 2021
                  </div>
                </div>
              </div>

              {/* <!--==================== AWARD 2====================--> */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">Finalist</h3>
                  <span className="qualification_subtitle">
                    CSI-InApp Awards
                  </span>
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

              {/* <!--==================== AWARD 3====================--> */}
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

              {/* <!--==================== AWARD 4====================--> */}
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    2nd best project in UG
                  </h3>
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
};

export default Qualification;
