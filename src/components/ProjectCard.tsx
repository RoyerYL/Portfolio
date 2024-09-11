import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
  };
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
