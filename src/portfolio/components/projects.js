import React from 'react';
import './portfolio.css';
function Projects(props) {
  return (
    <div className="Section">
      <div className="Project">
      <figure>
        <img src={props.cover}
          width="350"
          height="350"
          alt="Imagen del proyecto"
        />
        </figure>
        <p>{props.description}
        <a href={props.src} target="_blank">Ver Link</a>
        </p>
      </div>
    </div>
  )
}

export default Projects