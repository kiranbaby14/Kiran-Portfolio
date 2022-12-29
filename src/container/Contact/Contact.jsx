import React from 'react'
import "./Contact.css";

const Contact = () => {
    return (
        <>
            {/* <!--==================== CONTACT ME ====================--> */}
            <section className="contact section" id="contact">
                <h2 className="section_title">Contact Me</h2>
                <span className="section_subtitle">Get in touch</span>

                <div className="contact_container container grid">
                    <div>
                        <div className="contact_information">
                            <i className="uil uil-phone contact_icon"></i>

                            <div>
                                <h3 className="contact_title">Call Me</h3>
                                <span className="contact_subtitle">+91 7567897694</span>
                            </div>
                        </div>


                        <div className="contact_information">
                            <i className="uil uil-envelope contact_icon"></i>

                            <div>
                                <h3 className="contact_title">Email Me</h3>
                                <span className="contact_subtitle">kiranbaby256@gmail.com</span>
                            </div>
                        </div>

                        <div className="contact_information">
                            <i className="uil uil-location-point contact_icon"></i>

                            <div>
                                <h3 className="contacct_title">Location</h3>
                                <span className="contact_subtitle">India, Kerala</span>
                            </div>
                        </div>
                    </div>


                    <form action="" className="contact_form grid">
                        <div className="contact_inputs grid">
                            <div className="contact_content">
                                <label htmlFor="" className="contact_label">Name</label>
                                <input type="text" className="contact_input" />
                            </div>

                            <div className="contact_content">
                                <label htmlFor="" className="contact_label">Email</label>
                                <input type="email" className="contact_input" />
                            </div>
                        </div>


                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Subject</label>
                            <input type="text" className="contact_input" />
                        </div>

                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Message</label>
                            <textarea name="" id="" cols="0" rows="5" className="contact_input"></textarea>
                        </div>

                        <div>
                            <a href="#home" className="button button-flex">
                                Send Message
                                <i className="uil uil-message button_icon"></i>
                            </a>
                        </div>
                    </form>

                </div>
            </section>
        </>
    );
}


export default Contact;