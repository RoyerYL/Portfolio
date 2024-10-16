import React from 'react';
import style from "./About.module.css";

const About: React.FC = () => {
  return (
    <section id="about" className={style.about}>
      <h2>Sobre Mí</h2>
      <h3>Royer Rolando Yampasi Laura</h3>
      <p>Soy Fullstack developer con 2 años de experiencia en JavaScript y Node.js.</p>
      <p>También tengo conocimientos en Java, C++ y Git.</p>
      <br />
      <h3>Contacto:</h3>
      <p>Email: <a href="mailto:royeryl03@gmail.com">royeryl03@gmail.com</a></p>
      <p>Teléfono: <a href="tel:+5491122629291">+54 9 11 2262 9291</a></p>
      <p>GitHub: <a href="https://github.com/RoyerYL" target="_blank" rel="noopener noreferrer">github.com/RoyerYL</a></p>
    </section>
  );
};

export default About;
