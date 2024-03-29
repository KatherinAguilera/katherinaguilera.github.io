import React from 'react';
import  './contact.css';
import  contact from '../../../images/botones/contact.svg'
import  linkendin from '../../../images/botones/linkendin.png'
import  github from '../../../images/botones/github.png'
import  twitter from '../../../images/botones/iconX.webp'

function Contact (props) {
  return (
    <div className="Contact">
      <a href="#email" className="Buttons" rel="noopener noreferrer nofollow" ><span>E-mail</span>
        <img src={contact} 
          width="50"
          height="50"
          alt="Correo"
        />
      </a>
      <a href={"https://www.linkedin.com/in/katherineaguileram/"} className="Buttons" target={"_blank"}  rel="noopener noreferrer nofollow" ><span>LinkendIn</span>
        <img src={linkendin} 
          width="50"
          height="50"
          alt="Linkendin"
        />
      </a>
      <a href={"https://github.com/KatherinAguilera"} className="Buttons" target={"_blank"}  rel="noopener noreferrer nofollow" ><span>GitHub</span>
        <img src={github} 
          width="50"
          height="50"
          alt="GitHub"
        />
      </a>
      <a href={"https://twitter.com/jenkath_"} className="Buttons" target={"_blank"}  rel="noopener noreferrer nofollow" ><span>Twitter</span>
        <img src={twitter} 
          width="50"
          height="50"
          alt="Twitter"
        />
      </a>
    </div>
  )
}
export default Contact