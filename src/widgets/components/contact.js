import React from 'react';
import  './contact.css';
import  contact from '../../../images/botones/contact.svg'
import  linkendin from '../../../images/botones/linkendin.png'
import  github from '../../../images/botones/github.png'
import  twitter from '../../../images/botones/twitter.png'

function Contact (props) {
  return (
    <div className="Contact">
      <a className="Buttons"><span>E-mail</span>
        <img src={contact} 
          width="50"
          height="50"
        />
      </a>
      <a className="Buttons"><span>Linkendin</span>
        <img src={linkendin} 
          width="50"
          height="50"
        />
      </a>
      <a className="Buttons"><span>GitHub</span>
        <img src={github} 
          width="50"
          height="50"
        />
      </a>
      <a className="Buttons"><span>Twitter</span>
        <img src={twitter} 
          width="50"
          height="50"
        />
      </a>
    </div>
  )
}
export default Contact