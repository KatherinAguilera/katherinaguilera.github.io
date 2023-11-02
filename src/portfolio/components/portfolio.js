import React from 'react';
import './portfolio.css';
import Projects from './projects';
import IconHome from './../../iconos/components/home-icon';

const Portfolio = (props) => {
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
      <div className="Moon">
        <h4>Katherine Aguilera 2023 - Design & Development
          <p>Made with ReactJs </p>
        </h4>
        <div className="Moon-fase"> </div>
      </div>
      <div className="HomeFooter">
      <IconHome />
      </div>
      </div>
    </div>
  )
};

export default Portfolio;
