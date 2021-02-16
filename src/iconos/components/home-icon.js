import React from 'react';
import home from '../../../images/iconos/home.png';
import './home-icon.css';


function IconHome(props) {
  return (
    <div className="IconHome">
    <a href="#Home">
      <img 
        src={home}
        width="70"
        height="70"
        alt="Home"
      />
      </a>
    </div>
  )
}

export default IconHome