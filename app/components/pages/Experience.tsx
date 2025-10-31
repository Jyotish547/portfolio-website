import React from 'react';
import { FaBuildingUser } from "react-icons/fa6";

const Experience: React.FC = () => {
    return (
        <section className="content-section experience-section">
            <div className="section-container">
                <div className="title-container">
                    <h2 className="section-title">
                        <FaBuildingUser className='title-icon' />
                        <span>Experience</span>
                    </h2>
                    <p className="section-caption light">
                        This is a list of all the companies I have worked for.
                    </p>
                </div>
                <div className="experience-container">
                    <div className="experience-grid">
                        <div className="experience-card">
                            <span className="exp-card-title">React Engineer</span>
                            <div className="exp-card-info">
                                
                                <div className="exp-card-info-item">
                                    <span>Helios Core AI</span>
                                    <span>Full-Time</span>
                                </div>
                                <span>05/2025 - Present</span>
                            </div>
                        </div>
                        <div className="experience-card">
                            <span className="exp-card-title">React Engineer</span>
                            <div className="exp-card-info">
                                <div className="exp-card-info-item">
                                    <span>Helios Core AI</span>
                                    <span>Full-Time</span>
                                </div>
                                <span>05/2025 - Present</span>
                            </div>
                        </div>
                        <div className="experience-card">
                            <span className="exp-card-title">React Engineer</span>
                            <div className="exp-card-info">
                                <div className="exp-card-info-item">
                                    <span>Helios Core AI</span>
                                    <span>Full-Time</span>
                                </div>
                                <span>05/2025 - Present</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-information">
                        <div className="exp-title-container">
                            <div className="experience-title">
                                React Engineer <span className="experience-title-company">@ Helios Core AI</span>
                            </div>
                            <div className="exp-title-date">
                                05/2025 - Present
                            </div>
                        </div>
                        <p className="experience-description">
                            I have worked for a variety of companies in the past, from startups to large corporations. I have worked in a variety of roles, from software engineer to product manager. I have also worked in a variety of industries, from healthcare to finance.
                        </p>
                        <ul className="experience-bullets list-disc list-inside">
                            <li>
                                Developed and maintained the company's website using React, Next.js, and Tailwind CSS.
                            </li>
                            <li>
                                Implemented responsive design and accessibility features to ensure the website is optimized for all devices.
                            </li>
                            <li>
                                Collaborated with the design team to implement new features and improve the user experience.
                            </li>
                            <li>
                                Implemented responsive design and accessibility features to ensure the website is optimized for all devices.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;