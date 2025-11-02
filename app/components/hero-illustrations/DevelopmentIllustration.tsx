import { motion } from 'framer-motion';
import React from 'react';
import { svgVariants, pathVariantsThird, pathVariantsSecond, pathVariantsFirst } from './ResearchIllustration';

export const pathAppearsFirst = {
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
};

// Function to create staggered path variants with custom delay
export const createPathSlidesInFirst = (index = 0) => ({
    inactive: {
        opacity: 0,
        scaleX: 0,
        originX: 0 // Start scaling from the left side
    },
    active: {
        opacity: 1,
        scaleX: 1,
        originX: 0,
        transition: {
            duration: 0.5,
            delay: 1.5 + (index * 0.5) // Base delay + staggered delay
        }
    }
});

export const pathAppearsSecond = {
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
};

export const createPathSlidesInSecond = (index = 0) => ({
    inactive: {
        opacity: 0,
        scaleX: 0,
        originX: 0 // Start scaling from the left side
    },
    active: {
        opacity: 1,
        scaleX: 1,
        originX: 0,
        transition: {
            duration: 0.5,
            delay: 2 + (index * 0.2) // Base delay + staggered delay
        }
    }
});

export const pathAppearsThird = {
    inactive: {
        opacity: 0
    },
    active: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 2.75
        }
    }
};

export const createPathAppearsThird = (index = 0) => ({
    inactive: {
        opacity: 0,
        scaleX: 0,
        originX: 0 // Start scaling from the left side
    },
    active: {
        opacity: 1,
        scaleX: 1,
        originX: 0,
        transition: {
            duration: 0.5,
            delay: 3 + (index * 0.2) // Base delay + staggered delay
        }
    }
});



// Keep the original for backward compatibility
export const pathSlidesInSecond = createPathSlidesInFirst(0);

export const DevelopmentIllustration: React.FC<{ isActive?: boolean }> = ({ isActive = true }) => {
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
            <motion.path d="M493.257 291.139H6.743A6.75 6.75 0 0 1 0 284.396V6.744A6.75 6.75 0 0 1 6.743 0h486.514A6.753 6.753 0 0 1 500 6.743v277.653a6.75 6.75 0 0 1-6.743 6.743" fill="#575757" fillOpacity=".1" variants={pathVariantsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M482.419 10.618H16.329a5 5 0 0 0-5 5v258.636a5 5 0 0 0 5 5h466.09a5 5 0 0 0 5-5V15.618a5 5 0 0 0-5-5" fill="#575757" fillOpacity=".1"/>
            <motion.path d="M316.63 178.341h150.182a5.005 5.005 0 0 1 5.006 5.006v70.085a5.005 5.005 0 0 1-5.006 5.006H316.63a5.005 5.005 0 0 1-5.006-5.006v-70.085a5.005 5.005 0 0 1 5.006-5.006" fill="#575757" fillOpacity="0.2" variants={pathAppearsSecond} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M324.139 183.347a2.5 2.5 0 0 1 2.312 1.545 2.51 2.51 0 0 1-.542 2.728 2.5 2.5 0 0 1-2.728.543 2.506 2.506 0 0 1-.812-4.083 2.5 2.5 0 0 1 1.77-.733" fill="#8B5CF6" variants={pathAppearsSecond} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M330.397 183.347a2.5 2.5 0 0 1 2.312 1.545 2.51 2.51 0 0 1-.543 2.728 2.5 2.5 0 0 1-2.727.543 2.505 2.505 0 0 1 .958-4.816m6.257 0a2.506 2.506 0 0 1 2.455 2.992 2.5 2.5 0 0 1-1.966 1.966 2.502 2.502 0 0 1-2.259-4.225 2.5 2.5 0 0 1 1.77-.733" fill="#575757" fillOpacity=".3" variants={pathAppearsSecond} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M335.403 203.371h52.564a3.754 3.754 0 0 1 0 7.509h-52.564a3.754 3.754 0 1 1 0-7.509" fill="#8B5CF6" variants={createPathSlidesInSecond(1)} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M324.139 203.371h2.503a3.755 3.755 0 0 1 0 7.509h-2.503a3.754 3.754 0 0 1 0-7.509" fill="#575757" fillOpacity=".3" variants={createPathSlidesInSecond(0)} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M324.139 215.887h42.552a3.754 3.754 0 1 1 0 7.509h-42.552a3.754 3.754 0 0 1 0-7.509" fill="#8B5CF6" variants={createPathSlidesInSecond(2)} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M375.452 215.887h67.582a3.754 3.754 0 0 1 0 7.509h-67.582a3.755 3.755 0 0 1 0-7.509m-51.313 12.515h2.503a3.754 3.754 0 1 1 0 7.509h-2.503a3.754 3.754 0 0 1 0-7.509m11.264 0h70.085a3.754 3.754 0 1 1 0 7.509h-70.085a3.755 3.755 0 0 1 0-7.509" fill="#575757" fillOpacity=".3" variants={createPathSlidesInSecond(3)} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M31.915 33.165h252.806a5.006 5.006 0 0 1 5.007 5.006v215.261a5.006 5.006 0 0 1-5.007 5.006H31.915a5.005 5.005 0 0 1-5.006-5.006V38.172a5.006 5.006 0 0 1 5.006-5.007" fill="#8B5CF6" fillOpacity=".1" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M39.422 38.171a2.503 2.503 0 1 1 0 5.007 2.503 2.503 0 0 1 0-5.007" fill="#8B5CF6" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M45.68 38.171a2.503 2.503 0 1 1 0 5.007 2.503 2.503 0 0 1 0-5.007m6.258 0a2.503 2.503 0 1 1 0 5.006 2.503 2.503 0 0 1 0-5.006" fill="#575757" fillOpacity=".3" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M39.422 61.324h7.51a2.503 2.503 0 0 1 2.502 2.503v7.51a2.503 2.503 0 0 1-2.503 2.502h-7.509a2.503 2.503 0 0 1-2.503-2.503v-7.509a2.503 2.503 0 0 1 2.503-2.503" fill="#8B5CF6" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M39.422 76.343h7.51a2.503 2.503 0 0 1 2.502 2.502v7.51a2.503 2.503 0 0 1-2.503 2.503h-7.509a2.503 2.503 0 0 1-2.503-2.503v-7.51a2.503 2.503 0 0 1 2.503-2.502m0 15.017h7.51a2.503 2.503 0 0 1 2.502 2.504v7.509a2.504 2.504 0 0 1-2.503 2.503h-7.509a2.505 2.505 0 0 1-2.503-2.503v-7.51a2.503 2.503 0 0 1 2.503-2.502m0 15.018h7.51a2.505 2.505 0 0 1 2.502 2.503v7.509a2.504 2.504 0 0 1-2.503 2.503h-7.509a2.505 2.505 0 0 1-2.503-2.503v-7.509a2.5 2.5 0 0 1 2.503-2.503m0 15.018h7.51a2.505 2.505 0 0 1 2.502 2.503v7.509a2.5 2.5 0 0 1-2.503 2.503h-7.509a2.505 2.505 0 0 1-2.503-2.503V123.9a2.504 2.504 0 0 1 2.503-2.503m0 99.496h7.51a2.5 2.5 0 0 1 2.502 2.503v7.509a2.506 2.506 0 0 1-2.503 2.503h-7.509a2.505 2.505 0 0 1-2.503-2.503v-7.509a2.5 2.5 0 0 1 2.503-2.503m0 15.018h7.51a2.5 2.5 0 0 1 2.502 2.503v7.509a2.504 2.504 0 0 1-2.503 2.503h-7.509a2.505 2.505 0 0 1-2.503-2.503v-7.509a2.5 2.5 0 0 1 2.503-2.503" fill="#8B5CF6" fillOpacity=".2" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M61.95 61.324h35.042a2.503 2.503 0 0 1 0 5.006H61.949a2.503 2.503 0 0 1 0-5.006m.001 10.204h35.042a2.503 2.503 0 0 1 0 5.006H61.949a2.503 2.503 0 0 1 0-5.006" fill="#575757" fillOpacity=".3" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M61.95 81.732h35.042a2.503 2.503 0 0 1 0 5.006H61.949a2.503 2.503 0 0 1 0-5.006" fill="#8B5CF6" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M61.95 91.936h35.042a2.503 2.503 0 1 1 0 5.006H61.949a2.503 2.503 0 0 1 0-5.006m.001 10.203h35.042a2.505 2.505 0 0 1 1.77 4.273 2.5 2.5 0 0 1-1.77.733H61.949a2.5 2.5 0 0 1-2.503-2.503 2.506 2.506 0 0 1 2.503-2.503" fill="#575757" fillOpacity=".3" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M123.273 61.324h52.564a3.754 3.754 0 1 1 0 7.51h-52.564a3.754 3.754 0 1 1 0-7.51" fill="#8B5CF6" variants={createPathSlidesInFirst(0)} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M128.906 86.355h92.612a3.754 3.754 0 1 1 0 7.509h-92.612a3.754 3.754 0 1 1 0-7.51" fill="#575757" fillOpacity=".3" variants={createPathSlidesInFirst(1)} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M129.563 73.84h65.705c2.592 0 4.693 1.68 4.693 3.754s-2.101 3.755-4.693 3.755h-65.705c-2.592 0-4.693-1.681-4.693-3.755s2.101-3.755 4.693-3.755m.282 25.031h65.704c2.592 0 4.693 1.681 4.693 3.754s-2.101 3.755-4.693 3.755h-65.704c-2.592 0-4.694-1.681-4.694-3.755s2.102-3.754 4.694-3.754m-5.633 12.515h65.704c2.592 0 4.694 1.681 4.694 3.754s-2.102 3.755-4.694 3.755h-65.704c-2.592 0-4.693-1.681-4.693-3.755s2.101-3.754 4.693-3.754" fill="#8B5CF6" variants={createPathSlidesInFirst(2)} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M124.212 111.385h65.704c2.592 0 4.694 1.681 4.694 3.754s-2.102 3.755-4.694 3.755h-65.704c-2.592 0-4.693-1.681-4.693-3.755s2.101-3.754 4.693-3.754" fill="#8B5CF6" variants={createPathSlidesInFirst(3)} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M125.466 238.414h126.908c2.592 0 4.693 1.681 4.693 3.754s-2.101 3.755-4.693 3.755H125.466c-2.592 0-4.694-1.681-4.694-3.755s2.102-3.754 4.694-3.754" fill="#8B5CF6" fillOpacity=".2" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M264.6 238.414h-.018a3.754 3.754 0 0 1 3.758 3.75 3.754 3.754 0 0 1-3.758 3.75h.018a3.754 3.754 0 0 1-3.758-3.75 3.754 3.754 0 0 1 3.758-3.75" fill="#8B5CF6" variants={pathAppearsFirst} initial="inactive" animate={isActive ? "active" : "inactive"}/>
            <motion.path d="M319.133 33.165h145.176a7.51 7.51 0 0 1 7.509 7.51v85.102a7.51 7.51 0 0 1-7.509 7.509H319.133a7.51 7.51 0 0 1-7.509-7.509V40.674a7.51 7.51 0 0 1 7.509-7.509" fill="#575757" fillOpacity=".3" variants={pathAppearsThird} initial="inactive" animate={isActive ? 'active' : 'inactive'}/>
            <motion.path d="M363.61 61.324h-24.939a1.67 1.67 0 0 1-1.668-1.667V45.96a1.666 1.666 0 0 1 1.668-1.668h3.056c.415 0 .815.154 1.122.434l3.316 2.367c.217.198.499.307.792.307h16.807a1.66 1.66 0 0 1 1.547 1.045c.083.205.124.424.121.645l-.155 10.587a1.67 1.67 0 0 1-1.667 1.646m81.009.001H419.68a1.667 1.667 0 0 1-1.667-1.667V45.96a1.666 1.666 0 0 1 1.667-1.668h3.057c.415 0 .815.154 1.122.434l3.316 2.367c.216.198.499.307.792.307h16.807a1.666 1.666 0 0 1 1.668 1.69l-.155 10.587a1.676 1.676 0 0 1-1.668 1.646m-41.308.001h-24.939a1.67 1.67 0 0 1-1.668-1.667V45.96a1.67 1.67 0 0 1 1.668-1.668h3.056c.415 0 .815.154 1.122.434l3.316 2.367c.217.198.499.307.792.307h16.807a1.67 1.67 0 0 1 1.547 1.045c.083.205.124.424.121.645l-.155 10.587a1.67 1.67 0 0 1-1.667 1.646M363.61 91.499h-24.939a1.67 1.67 0 0 1-1.668-1.668V76.135a1.666 1.666 0 0 1 1.668-1.667h3.056c.415 0 .815.154 1.122.433l3.316 2.368c.217.198.499.307.792.307h16.807a1.66 1.66 0 0 1 1.547 1.044c.083.205.124.424.121.645l-.155 10.588a1.67 1.67 0 0 1-1.667 1.646m81.009 0H419.68a1.667 1.667 0 0 1-1.667-1.668V76.135a1.666 1.666 0 0 1 1.667-1.667h3.057c.415 0 .815.154 1.122.433l3.316 2.368c.216.198.499.307.792.307h16.807a1.666 1.666 0 0 1 1.668 1.69l-.155 10.587a1.676 1.676 0 0 1-1.668 1.646m-41.308 0h-24.939a1.67 1.67 0 0 1-1.668-1.668V76.135a1.67 1.67 0 0 1 1.668-1.667h3.056c.415 0 .815.154 1.122.433l3.316 2.368c.217.198.499.307.792.307h16.807a1.67 1.67 0 0 1 1.547 1.044c.083.205.124.424.121.645l-.155 10.588a1.67 1.67 0 0 1-1.667 1.646m-39.701 28.402h-24.939a1.67 1.67 0 0 1-1.668-1.668v-13.696a1.666 1.666 0 0 1 1.668-1.667h3.056c.415-.001.815.154 1.122.433l3.316 2.368c.217.198.499.307.792.307h16.807a1.666 1.666 0 0 1 1.668 1.689l-.155 10.588a1.674 1.674 0 0 1-1.667 1.646m81.009 0H419.68a1.67 1.67 0 0 1-1.667-1.668v-13.696c0-.442.176-.866.489-1.178a1.66 1.66 0 0 1 1.178-.489h3.057c.415-.001.815.154 1.122.433l3.316 2.368c.216.198.499.307.792.307h16.807a1.67 1.67 0 0 1 1.668 1.689l-.155 10.588a1.674 1.674 0 0 1-1.668 1.646m-41.308 0h-24.939a1.67 1.67 0 0 1-1.668-1.668v-13.696a1.67 1.67 0 0 1 1.668-1.667h3.056c.415-.001.815.154 1.122.433l3.316 2.368c.217.198.499.307.792.307h16.807a1.68 1.68 0 0 1 1.187.496 1.67 1.67 0 0 1 .481 1.193l-.155 10.588a1.67 1.67 0 0 1-1.667 1.646" fill="#8B5CF6" variants={createPathAppearsThird(0)} initial="inactive" animate={isActive ? 'active' : 'inactive'}/>
        </motion.svg>
    );
};