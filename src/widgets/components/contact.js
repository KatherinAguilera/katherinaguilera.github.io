import React from 'react';
import  './contact.css';
import  contact from '../../../images/contact.svg'
function Contact (props) {
  return (
    <div className="Contact">
      <a>E-mail
        <img src={contact} 
          width="50"
          height="50"
        />
      </a>
      <a>Linkendin
        <img src={contact} 
          width="50"
          height="50"
        />
      </a>
      <a>GitHub
        <img src={contact} 
          width="50"
          height="50"
        />
      </a>
      <a>Twitter
        <img src={contact} 
          width="50"
          height="50"
        />
      </a>
    </div>
  )
}
export default Contact