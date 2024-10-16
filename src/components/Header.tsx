import React from 'react';
import style from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1>Mi Portafolio</h1>
      <nav>
        <a href="#about">Sobre Mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
