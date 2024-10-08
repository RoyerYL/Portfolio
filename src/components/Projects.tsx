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
      "./src/assets/cj1.png",
      "./src/assets/cj2.png",
      "./src/assets/cj3.png",
      "./src/assets/cj4.png",
      "./src/assets/cj5.png",
      "./src/assets/cj6.png",
      "./src/assets/cj7.png",
      "./src/assets/cj8.png",
      "./src/assets/cj9.png",
    ],
  },
  {
    id: 2,
    title: "Proyecto Final e-commerce - soy henry",
    description: "Este es un proyecto para soy henry sobre un e-commerce de sumnplementes el cual fue echo en grupo",
    images: [
      "./assets/pag2.webp",
      "./assets/pag3.webp",
      "./assets/pagina.png",
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
