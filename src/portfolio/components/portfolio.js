import React from 'react';
import './portfolio.css';
import Projects from './projects';
import IconHome from './../../iconos/components/home-icon';

function Portfolio (props) {
  return (
    <div id="portfolio" className="Portfolio">
      <div className="Home-title">
        <h2 className="h2-portfolio">Porta<span>folio</span></h2>
        <IconHome />
      </div>
      <div className="Projects">
      {
          props.projects.map((item) =>{
            return <Projects key={item.id} {...item} />
          })
        }
      </div>
    </div>
  )
}
export default Portfolio