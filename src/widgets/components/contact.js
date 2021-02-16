import React from 'react';
import  './contact.css';
import {Link} from 'react-router-dom'
import  contact from '../../../images/botones/contact.svg'
import  linkendin from '../../../images/botones/linkendin.png'
import  github from '../../../images/botones/github.png'
import  twitter from '../../../images/botones/twitter.png'

function Contact (props) {
  return (
    <div className="Contact">
      <a href={"malito:katherinam35@gmail.com"} className="Buttons" target={"_blank"} rel="noopener noreferrer nofollow" ><span>E-mail</span>
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
      <a href={"https://twitter.com/ktyagui"} className="Buttons" target={"_blank"}  rel="noopener noreferrer nofollow" ><span>Twitter</span>
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