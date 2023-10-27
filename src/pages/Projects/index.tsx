import React from 'react';
import ProjectCard from './ProjectCard';
import bitebot from '../../assets/bitebot.png';
import docbrew from '../../assets/docbrew.png';
import helphopper from '../../assets/helphopper.png';

type ProjectType = {
  imageUrl: string;
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
};

const projectsData: ProjectType[] = [
  {
    imageUrl: bitebot,
    title: 'BiteBot',
    description: 'Description for project 1.',
    techStack: ['React', 'TypeScript'],
    projectLink: 'https://project1.example.com',
  },
  {
    imageUrl: docbrew,
    title: 'DocBrew',
    description: 'Description for project 2.',
    techStack: ['Node.js', 'MongoDB'],
    projectLink: 'https://project2.example.com',
  },
  {
    imageUrl: helphopper,
    title: 'HelpHopper',
    description: 'Description for project 3.',
    techStack: ['Node.js', 'MongoDB'],
    projectLink: 'https://project2.example.com',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="p-4 space-y-4 flex">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          projectLink={project.projectLink}
        />
      ))}
    </div>
  );
};

export default Projects;
