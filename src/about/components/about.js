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
        <h2>Sobre <span>Mí</span></h2>
        <IconHome />
      </div>
      <div className="Skills">
        <div className="Skill">
          <img src={ analisis } width="50" height="50"/>
          <h3>Análisis</h3>
          <p>Levantamiento de requerimientos, metodologías ágiles SCRUM, UML, Casos de uso, diagramación de flujo de datos, Documentación de procesos y proyectos, experiencia en el manejo de personas para asesorías y enseñanza en áreas de sistemas.</p>
        </div>
        <div className="Skill-r">
          <img src={ frontend } width="50" height="50"/>
          <h3>Desarrollo Frontend</h3>
          <p>HTML5, CSS3, JavaScript, jquery, Responsive design, RactJs, React Native, Angular, PhoneGap, jQuery mobile, stylus, Sass, Gulp, Bootstrap, Webpack. Manejo de Google tag manager, Vuejs, UX/UI.</p>
        </div>
        <div className="Skill">
          <img src={ backend } width="50" height="50"/>
          <h3>Desarrollo Backend</h3>
          <p>Java, PHP, C++, MySQL, SQL Server, Laravel, BigQuery</p>
        </div>
        <div className="Skill-r">
          <img src={ soporte } width="50" height="50"/>
          <h3>Soporte y Pruebas</h3>
          <p>Soporte a usuarios, mantenimiento y soporte de software, hardware y aplicaciones, Pruebas con la metodología TDD.</p>
        </div>
      </div>
    </div>
  )
}
export default About