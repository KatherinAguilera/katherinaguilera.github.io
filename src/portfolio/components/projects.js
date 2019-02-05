import React from 'react';

function Projects(props) {
  return (
    <div>
    <div className="Projects">
      <div className="Project">
        <img src={props.cover}/>
        <p>{props.description}</p>
        <a href={props.src}>Ver Link</a>
      </div>
    </div>
    </div>
  )
}

export default Projects