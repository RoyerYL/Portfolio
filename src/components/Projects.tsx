import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ImageGallery from './ImageGallery';

// Importa las imágenes directamente
import cj1 from '/public/cj1.png';
import cj2 from '/public/cj2.png';
import cj3 from '/public/cj3.png';
import cj4 from '/public/cj4.png';
import cj5 from '/public/cj5.png';
import cj6 from '/public/cj6.png';
import cj7 from '/public/cj7.png';
import cj8 from '/public/cj8.png';
import cj9 from '/public/cj9.png';

import pag2 from '/public/pag2.webp';
import pag3 from '/public/pag3.webp';
import pagina from '/public/pagina.png';

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
    description: "Este es un proyecto personal creado para comercios con el fin de tener un control de ventas y de stock, con una interfaz amigable",
    images: [cj1, cj2, cj3, cj4, cj5, cj6, cj7, cj8, cj9],
  },
  {
    id: 2,
    title: "Proyecto Final e-commerce - soy henry",
    description: "Este es un proyecto para soy henry sobre un e-commerce de suplementos el cual fue hecho en grupo",
    images: [pag2, pag3, pagina],
  },
  {
    id: 3,
    title: "Admin Control Store",
    description: "Proyecto freelancer para administrar artículos de un proveedor mayorista",
    images: [],
  },
  // Agrega más proyectos aquí si es necesario
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        {projectData.map((project) => (
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
