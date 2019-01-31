import React from 'react';
import './header.css';
function Header (props) {
  return (
    <div className="Header">
    <ul>
      <li><a href="#">Sobre Mí</a><hr/></li>
      <li><a href="#">Portafolio</a><hr/></li>
    </ul>
    </div>
  )
}
export default Header