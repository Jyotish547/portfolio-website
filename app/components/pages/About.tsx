import React from 'react';
import { FaUser } from "react-icons/fa";

const About: React.FC = () => {
    return (
        <section className="content-section about-section">
            <div className="section-container">
                <div className="about-container">
                    <div className="about-image-container opacity-0">
                        {/* This empty div will contain the parallax image */}
                    </div>
                    <div className="about-information">
                        <p className="about-description">
                            I am a passionate product designer and full stack developer with experience in creating user-centered digital experiences. My approach combines analytical thinking with creative problem-solving to build products that are both functional and delightful to use.
                        </p>
                        <p className="about-description">
                            With a background in computer science and design, I bring a unique perspective to product development. I believe in the power of user research and iterative design to create solutions that truly meet user needs.
                        </p>
                        <div className="about-details">
                            <div className="about-detail-item">
                                <span className="about-detail-label">Location:</span>
                                <span className="about-detail-value">San Francisco, CA</span>
                            </div>
                            <div className="about-detail-item">
                                <span className="about-detail-label">Email:</span>
                                <span className="about-detail-value">jyothish@example.com</span>
                            </div>
                            <div className="about-detail-item">
                                <span className="about-detail-label">Interests:</span>
                                <span className="about-detail-value">UI/UX Design, Web Development, Product Strategy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
