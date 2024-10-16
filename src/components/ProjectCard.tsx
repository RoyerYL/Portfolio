import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tecnology: string[]; // Añadimos las tecnologías
  };
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {/* Sección para mostrar las tecnologías */}
      <div className="technologies">
        <h4>Tecnologías utilizadas:</h4>
        <ul>
          {project.tecnology.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
