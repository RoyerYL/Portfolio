import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ImageGallery from './ImageGallery';

// Importa las imágenes directamente
import cj1 from '/cj1.png';
import cj2 from '/cj2.png';
import cj3 from '/cj3.png';
import cj4 from '/cj4.png';
import cj5 from '/cj5.png';
import cj6 from '/cj6.png';
import cj7 from '/cj7.png';
import cj8 from '/cj8.png';
import cj9 from '/cj9.png';

import pag2 from '/pag2.webp';
import pag3 from '/pag3.webp';
import pagina from '/pagina.png';

import acs1 from '/acs(1).png';
import acs2 from '/acs(2).png';
import acs3 from '/acs(3).png';
import acs4 from '/acs(4).png';


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
    images: [acs1, acs2, acs3, acs4],
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
