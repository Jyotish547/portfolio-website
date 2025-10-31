import React from 'react';

import { GrProjects } from "react-icons/gr";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, imageUrl }) => {
  return (
    <div className="project-card">
      {imageUrl && (
        <div className="project-image h-48 bg-bg-secondary">
          {/* Image will be added here */}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-heading mb-2">{title}</h3>
        <p className="font-dark-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-sm bg-bg-secondary rounded-full font-dark-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management and checkout.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      tags: ["Vue.js", "Firebase", "Tailwind"],
    },
    {
      title: "Health Tracker",
      description: "Mobile app for tracking health metrics and daily activities.",
      tags: ["React Native", "GraphQL", "TypeScript"],
    },
  ];

  return (
    <section className="content-section projects-section">
      <div className="section-container">
        <div className="title-container">
          <h2 className="section-title">
            <GrProjects className='title-icon' /> 
            <span>Projects</span>
          </h2>
          <p className="section-caption light">
          This is a list of all the projects I have been a part of.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
