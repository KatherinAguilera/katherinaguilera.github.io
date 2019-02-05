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
          <p>Levantamiento de requerimientos, metodologías agiles SCRUM, UML, Casos de uso, diagramación de flujo de datos, Documentación de procesos y proyectos,Experiencia en el manejo de personas para asesorías y enseñanza en áreas de sistemas y diseño.</p>
        </div>
        <div className="Skill-r">
          <img src={ frontend } width="50" height="50"/>
          <h3>Desarrollo Frontend</h3>
          <p>HTML5, CSS3, JavaScript, jquery, Responsive design, PhoneGap, jQuery mobile, stylus, Gulp, Bootstrap. Manejo de Google tag manager,ReactJs</p>
        </div>
        <div className="Skill">
          <img src={ backend } width="50" height="50"/>
          <h3>Desarrollo Backend</h3>
          <p>Java, PHP, C++, MySql, SqlServer, Laravel, BigQuery</p>
        </div>
        <div className="Skill-r">
          <img src={ soporte } width="50" height="50"/>
          <h3>Soporte y Pruebas</h3>
          <p>Soporte a usuarios, mantenimiento y soporte de software, hardware y aplicaciones, Pruebas con la metodología TDD, habilidades en instalación y mantenimiento de sistemas operativos Windows</p>
        </div>
      </div>
    </div>
  )
}
export default About