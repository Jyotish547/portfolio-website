import { motion } from 'framer-motion';
import React from 'react';

import { svgVariants, pathVariantsThird, pathVariantsSecond, pathVariantsFirst } from './ResearchIllustration';

export const DesignIllustration: React.FC<{ isActive?: boolean }> = ({ isActive = true }) => {
    return (
        <motion.svg
            width="410" 
            height="250" 
            viewBox="0 0 495 300" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="svg-illustration"
            style={{ 
                shapeRendering: 'crispEdges',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
            }}
            preserveAspectRatio="xMidYMid meet"
            variants={svgVariants}
            initial="initial"
            animate={isActive ? "active" : "initial"}
            exit="exit"
        >
            <motion.g opacity={1} style={{ transform: 'translateZ(0)' }}>
                <motion.path d="M488.647 11.252H12.555v268.637h476.092z" variants={pathVariantsFirst} initial="inactive" animate={isActive ? "active" : "inactive"} fillOpacity="0.1"/>
                <motion.path d="M493.259 291.141H6.743A6.75 6.75 0 0 1 0 284.397V6.743A6.75 6.75 0 0 1 6.743 0H493.26A6.75 6.75 0 0 1 500 6.743v277.654a6.75 6.75 0 0 1-6.743 6.744z" fill="#575757" fillOpacity=".1"/>
                <motion.path
                    d="M95.625 26.25h-62.5a2.5 2.5 0 0 0-2.5 2.5v220a2.5 2.5 0 0 0 2.5 2.5h62.5a2.5 2.5 0 0 0 2.5-2.5v-220a2.5 2.5 0 0 0-2.5-2.5"
                    style={{ transform: 'translateZ(0)' }}
                    fill="#8B5CF6"
                    variants={{
                        inactive: {
                            opacity: 0
                        },
                        active: {
                            opacity: 0.5,
                            transition: {
                                duration: 0.5,
                                delay: 1.25
                            }
                        }
                    }}
                    initial="inactive"
                    animate={isActive ? "active" : "inactive"}
                />
                <motion.path 
                    d="M58.125 35.625h12.5a3.75 3.75 0 0 1 3.75 3.75v2.5a3.75 3.75 0 0 1-3.75 3.75h-12.5a3.75 3.75 0 0 1-3.75-3.75v-2.5a3.75 3.75 0 0 1 3.75-3.75M41.875 231.25h45a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-45a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5"
                    fill="#fff"
                    style={{ transform: 'translateZ(0)' }}
                    variants={{
                        inactive: {
                            opacity: 0
                        },
                        active: {
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: 1.25
                            }
                        }
                    }}
                    initial="inactive"
                    animate={isActive ? "active" : "inactive"}
                />
                <motion.path
                    d="M121.25 26.25h45a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-45a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5"
                    fill="#575757"
                    style={{ transform: 'translateZ(0)' }}
                    variants={{
                        inactive: {
                            opacity: 0
                        },
                        active: {
                            opacity: 0.5,
                            transition: {
                                duration: 0.5,
                                delay: 2
                            }
                        }
                    }}
                    initial="inactive"
                    animate={isActive ? "active" : "inactive"}
                />
                <motion.path 
                    d="M84.375 55.625h-40a5 5 0 0 0 0 10h40a5 5 0 0 0 0-10"
                    fill="#fff"
                    style={{ transform: 'translateZ(0)' }}
                    variants={{
                        inactive: {
                            opacity: 0
                        },
                        active: {
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: 1.25
                            }
                        }
                    }}
                    initial="inactive"
                    animate={isActive ? "active" : "inactive"}
                />
                <motion.path
                    d="M401.25 26.25h45a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-45a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5"
                    fill="#575757"
                    style={{ transform: 'translateZ(0)' }}
                    variants={{
                        inactive: {
                            opacity: 0
                        },
                        active: {
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: 2
                            }
                        }
                    }}
                    initial="inactive"
                    animate={isActive ? "active" : "inactive"}
                />
                <motion.path 
                    d="M84.375 70.625h-40a5 5 0 0 0 0 10h40a5 5 0 0 0 0-10m0 15h-40a5 5 0 0 0 0 10h40a5 5 0 0 0 0-10m0 15h-40a5 5 0 0 0 0 10h40a5 5 0 0 0 0-10m0 15h-40a5 5 0 0 0 0 10h40a5 5 0 0 0 0-10"
                    fill="#fff"
                    style={{ transform: 'translateZ(0)' }}
                    variants={{
                        inactive: {
                            opacity: 0
                        },
                        active: {
                            opacity: 0.5,
                            transition: {
                                duration: 0.5,
                                delay: 1.25
                            }
                        }
                    }}
                    initial="inactive"
                    animate={isActive ? "active" : "inactive"}
                />
                <motion.path d="M220.083 50h-96c-2.945 0-5.333 2.239-5.333 5v45c0 2.761 2.388 5 5.333 5h96c2.946 0 5.334-2.239 5.334-5V55c0-2.761-2.388-5-5.334-5m111.667 0h-96c-2.946 0-5.333 2.239-5.333 5v45c0 2.761 2.387 5 5.333 5h96c2.945 0 5.333-2.239 5.333-5V55c0-2.761-2.388-5-5.333-5m111.667 0h-96c-2.946 0-5.334 2.239-5.334 5v45c0 2.761 2.388 5 5.334 5h96c2.945 0 5.333-2.239 5.333-5V55c0-2.761-2.388-5-5.333-5" variants={pathVariantsSecond} initial="inactive" animate={isActive ? "active" : "inactive"}/>
                <motion.path 
                    d="M438.75 112.5h-310c-5.523 0-10 4.694-10 10.485v22.28c0 5.791 4.477 10.485 10 10.485h310c5.523 0 10-4.694 10-10.485v-22.28c0-5.791-4.477-10.485-10-10.485m0 48.25h-310c-5.523 0-10 4.694-10 10.485v22.28c0 5.791 4.477 10.485 10 10.485h310c5.523 0 10-4.694 10-10.485v-22.28c0-5.791-4.477-10.485-10-10.485m0 48.25h-310c-5.523 0-10 4.694-10 10.485v22.28c0 5.791 4.477 10.485 10 10.485h310c5.523 0 10-4.694 10-10.485v-22.28c0-5.791-4.477-10.485-10-10.485"
                    fill="#575757"
                    style={{ transform: 'translateZ(0)' }}
                    variants={{
                        inactive: {
                            opacity: 0
                        },
                        active: {
                            opacity: 0.5,
                            transition: {
                                duration: 0.5,
                                delay: 2.75
                            }
                        }
                    }}
                    initial="inactive"
                    animate={isActive ? "active" : "inactive"}
                />
            </motion.g>
        </motion.svg>
    );
};