import React from 'react';

type ProjectProps = {
  imageUrl: string;
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
};

const ProjectCard: React.FC<ProjectProps> = ({
  imageUrl,
  title,
  description,
  techStack,
  projectLink,
}) => {
  return (
    <div className="border rounded-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="relative pb-56">
        <img
          src={imageUrl}
          alt={title}
          className="absolute h-full w-full object-cover rounded-md"
        />
      </div>
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <ul className="mt-4 flex space-x-2">
        {techStack.map((tech, index) => (
          <li key={index} className="text-sm text-gray-500">
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-500 hover:text-blue-600"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
