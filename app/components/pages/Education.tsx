import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";

const Education: React.FC = () => {
    return (
        <section className="content-section education-section">
            <div className="section-container">
                <div className="title-container">
                    <h2 className="section-title">
                        <FaGraduationCap className='title-icon' />
                        <span>Education</span>
                    </h2>
                    <p className="section-caption dark">
                        This is a list of all the schools I have attended.
                    </p>
                </div>
                <div className="education-container">
                    <div className="education-grid">
                        <div className="education-card">
                            <span className="edu-card-title">Bachelor of Science in Computer Science</span>
                            <div className="edu-card-info">
                                <div className="edu-card-info-item">
                                    <span>University of California, Berkeley</span>
                                    <span>Computer Science</span>
                                </div>
                                <span>2020 - 2024</span>
                            </div>
                        </div>
                        <div className="education-card">
                            <span className="edu-card-title">Master of Science in Data Science</span>
                            <div className="edu-card-info">
                                <div className="edu-card-info-item">
                                    <span>Stanford University</span>
                                    <span>Data Science</span>
                                </div>
                                <span>2024 - 2026</span>
                            </div>
                        </div>
                        <div className="education-card">
                            <span className="edu-card-title">UI/UX Design Certification</span>
                            <div className="edu-card-info">
                                <div className="edu-card-info-item">
                                    <span>Google</span>
                                    <span>Professional Certificate</span>
                                </div>
                                <span>2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="education-information">
                        <div className="edu-title-container">
                            <div className="education-title">
                                Bachelor of Science in Computer Science <span className="education-title-institution">@ UC Berkeley</span>
                            </div>
                            <div className="edu-title-date">
                                2020 - 2024
                            </div>
                        </div>
                        <p className="education-description">
                            I have attended a variety of schools in the past, from small private schools to large public universities. I have also attended a variety of programs, from full-time to part-time. I have also attended a variety of courses, from computer science to business.
                        </p>
                        <ul className="education-bullets list-disc list-inside">
                            <li>
                                Developed and maintained the company's website using React, Next.js, and Tailwind CSS.
                            </li>
                            <li>
                                Implemented responsive design and accessibility features to ensure the website is optimized for all devices.
                            </li>
                            <li>
                                Collaborated with the design team to implement new features and improve the user experience.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;