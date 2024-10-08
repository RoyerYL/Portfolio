import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ImageGallery from './ImageGallery';
// import ImageGallery from './ImageGallery';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Proyecto Personal - Caja Registradora",
    description: "Este es unproyecto personal creado para comercios con el fin de tener un control de ventas y de stock , con una interfaz amigable",
    images: [
      "./public/cj1.png",
      "./public/cj2.png",
      "./public/cj3.png",
      "./public/cj4.png",
      "./public/cj5.png",
      "./public/cj6.png",
      "./public/cj7.png",
      "./public/cj8.png",
      "./public/cj9.png",
    ],
  },
  {
    id: 2,
    title: "Proyecto Final e-commerce - soy henry",
    description: "Este es un proyecto para soy henry sobre un e-commerce de sumnplementes el cual fue echo en grupo",
    images: [
      "./public/pag2.webp",
      "./public/pag3.webp",
      "./public/pagina.png",
    ],
  },
  {
    id: 3,
    title: "Admin Control Store",
    description: "Proycto freelancer para administrar articulos de un provedor mayorista",
    images: [
    ],
  },
  // Agrega más proyectos aquí
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        {projectData.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ImageGallery
          images={selectedProject.images}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
