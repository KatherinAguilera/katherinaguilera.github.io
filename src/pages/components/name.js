import React from 'react';
import './name.css';
function Name (props) {
  return (
  <div className= "Name">
      <h1>Hola, Soy Katherine Aguilera</h1>
      <p className="Job">Frontend Developer</p>
      <p className="Description">Actualmente Ingeniera de sistemas, apasionada por el gram mundo de la tecnología</p>
      {props.children}
  </div>
  )
}
export default Name