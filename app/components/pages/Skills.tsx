import React from 'react';
import { LuShapes, LuLightbulb } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

import { SiMiro } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

// Import our custom SVG component
import SvgIcon from '../SvgIcon';

const Skills: React.FC = () => {
    return (
        <section className="content-section skills-section">
            <div className="section-container">
                <div className="title-container">
                    <h2 className="section-title">
                        <LuShapes className='title-icon' />
                        <span>Skills</span>
                    </h2>
                    <p className="section-caption dark">
                        These are the technologies I use depending on the current phase of the product.
                    </p>
                </div>
                
                <div className="skills-progress-container">
                    <div className="skills-progress">
                        <div className="progress-arrow ideation">
                            <LuLightbulb className="progress-icon" />
                            <span>Ideation</span>
                        </div>
                        <div className="progress-arrow design">
                            <MdOutlineDesignServices className="progress-icon" />
                            <span>Design</span>
                        </div>
                        <div className="progress-arrow development">
                            <FaLaptopCode className="progress-icon" />
                            <span>Development</span>
                        </div>
                    </div>
                    
                    <p className="skills-description">
                        I research competitors and consumer needs in the target industry. This helps in differentiating our product with other competitors, maintain conventional standards and address user pain points.
                    </p>
                </div>

                <div className="skills-description-container">
                    <div className="skills-categories">
                        <span className="skills-category">
                            User Research & Interviews
                        </span>
                        <span className="skills-category">
                            Competitive Analysis
                        </span>
                        <span className="skills-category">
                            Product Strategy
                        </span>
                        <span className="skills-category">
                            Persona Creation
                        </span>
                        <span className="skills-category">
                            Journey Mapping
                        </span>
                        <span className="skills-category">
                            Information Architecture
                        </span>
                    </div>
                    <div className="skills-tools">
                        <span className="skills-tool">
                            <SvgIcon name="miro" className="skills-tool-icon" />
                            <span>Miro</span>
                        </span>
                        <span className="skills-tool">
                            <SvgIcon name="userinterviews" className="skills-tool-icon logo-bg" />
                            <span>User Interviews</span>
                        </span>
                        <span className="skills-tool">
                            {/* Using our custom SVG component for FigJam */}
                            <SvgIcon name="hotjar" className="skills-tool-icon" />
                            <span>HotJar</span>
                        </span>
                        <span className="skills-tool">
                            <SvgIcon name="figma" className="skills-tool-icon" />
                            <span>FigJam</span>
                        </span>
                        <span className="skills-tool">
                            <SvgIcon name="surveymonkey" className="skills-tool-icon" />
                            <span>Survey Monkey</span>
                        </span>
                        <span className="skills-tool">
                            <SvgIcon name="mixpanel" className="skills-tool-icon" />
                            <span>Mixpanel</span>
                        </span>
                        <span className="skills-tool">
                            <SvgIcon name="usertesting" className="skills-tool-icon" />
                            <span>User Testing</span>
                        </span>
                        <span className="skills-tool">
                            <SvgIcon name="qualtrics" className="skills-tool-icon logo-wide" />
                            <span>Qualtrics</span>
                        </span>
                        <span className="skills-tool">
                            <SvgIcon name="uxmetrics" className="skills-tool-icon logo-wide" />
                            <span>UX Metrics</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;