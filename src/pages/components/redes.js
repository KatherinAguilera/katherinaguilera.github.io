import React from 'react';
import './redes.css';
function Redes(props) {
  return (
  <div className= "Redes">
      <h1>Hola, </h1>
      {props.children}
  </div>
  )
}
export default Redes