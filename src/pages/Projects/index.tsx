import React from 'react';
import ProjectCard from './ProjectCard'; // Assuming ProjectCard is in the same directory
// import s from '/src/asset/bitebot.png';

type ProjectType = {
  imageUrl: string;
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
};

const projectsData: ProjectType[] = [
  {
    imageUrl: '/src/assets/bitebot.png',
    title: 'BiteBot',
    description: 'Description for project 1.',
    techStack: ['React', 'TypeScript'],
    projectLink: 'https://project1.example.com',
  },
  {
    imageUrl: '/src/assets/docbrew.png',
    title: 'DocBrew',
    description: 'Description for project 2.',
    techStack: ['Node.js', 'MongoDB'],
    projectLink: 'https://project2.example.com',
  },
  {
    imageUrl: '/src/assets/helphopper.png',
    title: 'HelpHopper',
    description: 'Description for project 3.',
    techStack: ['Node.js', 'MongoDB'],
    projectLink: 'https://project2.example.com',
  },
  // ... Add more projects as needed
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
