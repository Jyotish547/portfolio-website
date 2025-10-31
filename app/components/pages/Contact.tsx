import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <section className="content-section contact-section">
            <div className="section-container">
                <div className="title-container">
                    <h2 className="section-title">
                        <MdOutlineEmail className='title-icon' />
                        <span>Contact</span>
                    </h2>
                    <p className="section-caption dark">
                        Let's connect and discuss your next project.
                    </p>
                </div>
                <div className="contact-container">
                    <div className="contact-links">
                        <a href="mailto:jyothish@example.com" className="contact-link">
                            <MdOutlineEmail className="contact-icon" />
                            <span>jyothish@example.com</span>
                        </a>
                        <a href="https://linkedin.com/in/jyothishvardhan" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <FaLinkedin className="contact-icon" />
                            <span>linkedin.com/in/jyothishvardhan</span>
                        </a>
                    </div>
                    <div className="contact-form-container">
                        <form className="contact-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        className="form-input" 
                                        placeholder="Your Name"
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        className="form-input" 
                                        placeholder="Your Email"
                                        required 
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="subject" 
                                        className="form-input" 
                                        placeholder="Subject"
                                        required 
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        className="form-textarea" 
                                        placeholder="Your Message"
                                        rows={5}
                                        required 
                                    ></textarea>
                                </div>
                                <div className="form-group full-width">
                                    <button type="submit" className="submit-button">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
