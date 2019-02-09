import React from 'react';
import './name.css';
function Name (props) {
  return (
  <div className= "Name">
      <h1>Hola, Soy Katherine Aguilera</h1>
      <p className="Job">
      <span className="Front">Frontend </span> 
      <span className="Dev">Developer</span></p>
      <p className="Description">Actualmente Ingeniera de sistemas, apasionada por el gran mundo de la tecnología, y las increibles cosas que se pueden hacer a través de la programación.</p>
      {props.children}
  </div>
  )
}
export default Name