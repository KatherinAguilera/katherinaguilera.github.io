import React from 'react';
import logo from '../../../images/logo.jpg'
import './logo.css';
function Logo (props) {
  return (
    <div className="Logo">
      <img 
        className="Image" 
        src={logo}
        alt="Mi foto"
        />
        
    {props.children}
    </div>
  )
}
export default Logo