import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import "./Contact.css";


const Contact = () => {

    const [btnClicked, setBtnClicked] = useState(false);

    const handleSubmit = (e) => {
        console.log("adfh")
        e.preventDefault();
        setBtnClicked(true)
        // Send email using EmailJS
        emailjs.sendForm(`${process.env.REACT_APP_EMAIL_SERVICE_ID}`,
            `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,
            e.target,
            `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`)
            .then((response)  => {
                // Display success notification
                e.target.reset()
                setBtnClicked(false)
                toast.success('Email sent!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }, (error) => {
                setBtnClicked(false)
                toast.error('Email not sent!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
    
    };

    return (
        <>
            {/* <!--==================== CONTACT ME ====================--> */}
            <section className="contact section smooth_transition" id="contact">
                <h2 className="section_title">Contact Me</h2>
                <span className="section_subtitle">Get in touch</span>

                <div className="contact_container container grid">
                    <div className='contact_information_container'>
                        <div>
                            {/* <div className="contact_information">
                                <i className="uil uil-phone contact_icon"></i>

                                <div>
                                    <h3 className="contact_title">Call Me</h3>
                                    <span className="contact_subtitle">+91 7567897694</span>
                                </div>
                            </div> */}


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
                                    <span className="contact_subtitle">United Kingdom</span>
                                </div>
                            </div>
                        </div>

                    </div>


                    <form onSubmit={handleSubmit} className="contact_form grid">
                        <div className="contact_inputs grid">
                            <div className="contact_content">
                                <label htmlFor="" className="contact_label">Name</label>
                                <input type="text" className="contact_input" name='name' required />
                            </div>

                            <div className="contact_content">
                                <label htmlFor="" className="contact_label">Email</label>
                                <input type="email" className="contact_input" name='email' required />
                            </div>
                        </div>


                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Subject</label>
                            <input type="text" className="contact_input" name="subject" required />
                        </div>

                        <div className="contact_content">
                            <label htmlFor="" className="contact_label">Message</label>
                            <textarea name="" id="" cols="0" rows="5" className="contact_input" name="message" required></textarea>
                        </div>

                        <div>
                            <button className="button button-flex" disabled={btnClicked}>
                                Send Message
                                { !btnClicked ?
                                <i className="uil uil-message button_icon"></i>
                                :
                                <CircularProgress style={{ color: "white", width: "20px", height: "20px",  marginLeft: "0.5rem"}}/>
                                }
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        </>
    );
}


export default Contact;