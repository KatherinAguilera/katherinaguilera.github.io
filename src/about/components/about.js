import React from 'react';
import './about.css';
import IconHome from './../../iconos/components/home-icon';
import analisis from '../../../images/iconos/analisis.png';
import backend from '../../../images/iconos/backend.png';
import soporte from '../../../images/iconos/soporte.png';
import frontend from '../../../images/iconos/frontend.png';

function About (props) {
  return (
    <div id="about" className="About">
      {props.children}

      <div className="Home-title">
        <h2>Habili<span>dades</span></h2>
        <IconHome />
      </div>
      <div className="Skills">
        <div className="Skill">
          <img src={ analisis } width="50" height="50" alt="Analisis" />
          <h3>Análisis</h3>
          <p>Levantamiento de requerimientos, metodologías ágiles SCRUM, UML, Casos de uso, diagramación de flujo de datos, Documentación de procesos y proyectos, experiencia en el manejo de personas para asesorías y enseñanza en áreas de sistemas.</p>
        </div>
        <div className="Skill-r">
          <img src={ frontend } width="50" height="50" alt="Frontend" />
          <h3>Desarrollo Frontend</h3>
          <p>HTML5, CSS3, JavaScript, Ionic, jQuery, Responsive design, ReactJs, React Native, Angular, PhoneGap, Stylus, Sass, Gulp, Bootstrap, Webpack, Gsap, Desarrollo de mailings, Manejo de Google tag manager, Vuejs, Manejo de sistemas de diseño.</p>
        </div>
        <div className="Skill">
          <img src={ backend } width="50" height="50" alt="Backend" />
          <h3>Desarrollo Backend</h3>
          <p>Conocimientos en Java, C++, MySQL, SQL Server, BigQuery</p>
        </div>
        <div className="Skill-r">
          <img src={ soporte } width="50" height="50" alt="Soporte" />
          <h3>Soporte y Pruebas</h3>
          <p>Soporte a usuarios, mantenimiento y soporte de software, hardware y aplicaciones, Pruebas con la metodología TDD.</p>
        </div>
      </div>
    </div>
  )
}
export default About